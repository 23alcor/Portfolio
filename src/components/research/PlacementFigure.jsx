// Schematic of the placement control: the same eight ranks spread over one,
// two or four nodes.

const layouts = [
  { nodes: 1, perNode: 8, cols: "grid-cols-4", note: "Gradient traffic stays inside one node" },
  { nodes: 2, perNode: 4, cols: "grid-cols-2", note: "Traffic between nodes crosses InfiniBand" },
  { nodes: 4, perNode: 2, cols: "grid-cols-1", note: "Traffic between nodes crosses InfiniBand" },
];

// One node box. When there are several, a stub and a segment of the shared
// "network" line run underneath; the segments meet halfway across the gap-2.
const Node = ({ gpus, cols, index, count }) => {
  const linked = count > 1;
  const segment =
    index === 0 ? "left-1/2 -right-1" : index === count - 1 ? "-left-1 right-1/2" : "-left-1 -right-1";
  return (
    <div className="relative flex flex-col items-center">
      <div className="rounded-md border bg-secondary/70 p-1.5">
        <div className={`grid gap-1 ${cols}`}>
          {Array.from({ length: gpus }, (_, i) => (
            <span key={i} className="block h-3.5 w-3.5 rounded-[3px] bg-primary/80" />
          ))}
        </div>
      </div>
      <span className={`h-3 w-0.5 ${linked ? "bg-primary/50" : ""}`} />
      {linked && <span className={`absolute bottom-0 h-0.5 bg-primary/50 ${segment}`} />}
    </div>
  );
};

export const PlacementFigure = () => (
  <figure className="mt-8 rounded-lg border bg-card p-4 sm:p-6">
    <div className="grid gap-8 sm:grid-cols-3 sm:gap-4" aria-hidden="true">
      {layouts.map(({ nodes, perNode, cols, note }) => (
        <div key={nodes} className="flex flex-col items-center text-center">
          <p className="text-sm font-semibold">
            {nodes} node{nodes > 1 ? "s" : ""} × {perNode} GPUs
          </p>
          <div className="mt-3 flex items-end gap-2">
            {Array.from({ length: nodes }, (_, i) => (
              <Node key={i} gpus={perNode} cols={cols} index={i} count={nodes} />
            ))}
          </div>
          <p className="mt-2 text-xs text-muted-foreground">{note}</p>
        </div>
      ))}
    </div>
    <figcaption className="mt-6 border-t pt-4 text-sm leading-relaxed text-muted-foreground">
      Schematic of the placement control: the same eight ranks on one, two or
      four nodes. World size and gradient payload stay fixed, so a change in
      exposed communication comes from the interconnect, not the scale.
    </figcaption>
  </figure>
);
