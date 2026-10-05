// Schematic of one DDP training step, with and without gradient sync, showing
// which part of the all-reduce actually costs wall-clock time.

// Time runs left to right in arbitrary units; the synced step is the longer one.
const STEP = 92;
const BACKWARD_END = 70;
const SYNC_END = 84; // last all-reduce finishes; the optimizer can only start here
const NO_SYNC_END = 78;
const BUCKETS = [
  [36, 48],
  [48, 60],
  [60, 72],
  [72, 84],
];

const pct = (t) => `${(t / STEP) * 100}%`;

const hatch = {
  backgroundImage:
    "repeating-linear-gradient(135deg, hsl(var(--primary) / 0.55) 0 3px, transparent 3px 7px)",
};

const Span = ({ from, to, className = "", style, children }) => (
  <div
    className={`absolute inset-y-0 flex items-center justify-center overflow-hidden rounded-[3px] text-[11px] font-medium text-foreground/80 sm:text-xs ${className}`}
    style={{ left: pct(from), width: pct(to - from), ...style }}
  >
    {children}
  </div>
);

const Compute = ({ optimizerAt }) => (
  <>
    <Span from={0} to={24} className="border-r border-card bg-foreground/10">
      Forward
    </Span>
    <Span from={24} to={BACKWARD_END} className="border-x border-card bg-foreground/[0.16]">
      Backward
    </Span>
    <Span from={optimizerAt} to={optimizerAt + 8} className="border-l border-card bg-foreground/25">
      opt
    </Span>
  </>
);

const RowLabel = ({ children }) => (
  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
    {children}
  </p>
);

const Swatch = ({ className = "", style }) => (
  <span
    className={`inline-block h-3 w-5 shrink-0 rounded-[3px] ${className}`}
    style={style}
  />
);

export const ExposedCommFigure = () => (
  <figure className="mt-8 rounded-lg border bg-card p-4 sm:p-6">
    <div className="space-y-6" aria-hidden="true">
      <div>
        <RowLabel>Normal DDP step</RowLabel>
        <div className="relative mt-7">
          {/* The exposed window spans both lanes. */}
          <div
            className="absolute -top-2 bottom-0 border-x-2 border-primary"
            style={{ left: pct(BACKWARD_END), width: pct(SYNC_END - BACKWARD_END) }}
          >
            <span className="absolute bottom-full left-1/2 mb-0.5 -translate-x-1/2 whitespace-nowrap text-[11px] font-semibold text-primary sm:text-xs">
              exposed
            </span>
          </div>
          <div className="relative h-8">
            <Compute optimizerAt={SYNC_END} />
            <Span from={BACKWARD_END} to={SYNC_END} style={hatch} />
          </div>
          <div className="relative mt-1 h-5">
            <span className="absolute inset-y-0 right-[61%] flex items-center pr-2 text-[11px] text-muted-foreground sm:text-xs">
              all-reduce
            </span>
            {BUCKETS.map(([from, to]) => (
              <Span
                key={from}
                from={from}
                to={to}
                className="border-x border-card bg-primary/80"
              />
            ))}
          </div>
        </div>
      </div>

      <div>
        <RowLabel>
          Same step inside <code className="font-mono normal-case">no_sync()</code>
        </RowLabel>
        <div className="relative mt-3">
          <div className="relative h-8">
            <Compute optimizerAt={BACKWARD_END} />
          </div>
          <div className="relative mt-1 h-5">
            <div
              className="absolute inset-y-0 left-0 flex items-center justify-center rounded-[3px] border border-dashed text-[11px] text-muted-foreground sm:text-xs"
              style={{ width: pct(NO_SYNC_END) }}
            >
              no all-reduce
            </div>
          </div>
        </div>
        {/* Difference between the two step times. */}
        <div className="relative mt-2 h-9">
          <div
            className="absolute top-0 h-2 border-x-2 border-b-2 border-primary"
            style={{ left: pct(NO_SYNC_END), width: pct(STEP - NO_SYNC_END) }}
          />
          <span className="absolute right-0 top-3.5 whitespace-nowrap text-[11px] font-semibold text-primary sm:text-xs">
            t<sub>sync</sub> − t<sub>no_sync</sub> = exposed
          </span>
        </div>
      </div>
    </div>

    <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
      <li className="flex items-center gap-2">
        <Swatch className="bg-foreground/[0.16]" /> Compute (forward, backward, optimizer)
      </li>
      <li className="flex items-center gap-2">
        <Swatch className="bg-primary/80" /> All-reduce, one per gradient bucket
      </li>
      <li className="flex items-center gap-2">
        <Swatch className="border border-primary" style={hatch} /> Exposed: compute waits on communication
      </li>
    </ul>

    <figcaption className="mt-4 border-t pt-4 text-sm leading-relaxed text-muted-foreground">
      Schematic, not to scale. DDP starts each bucket’s all-reduce as soon as that
      bucket’s gradients are ready, so most communication runs underneath the
      backward pass. Only the part still running when backward finishes adds to
      the step. The same step inside <code className="font-mono">no_sync()</code>{" "}
      skips the all-reduce, so subtracting the two step times leaves exactly that
      part.
    </figcaption>
  </figure>
);
