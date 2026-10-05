import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Copy, ExternalLink } from "lucide-react";
import {
  AUTHOR,
  SITE_TITLE,
  findResearch,
  pageTitle,
  research,
  researchPath,
} from "../data/research";
import { toast } from "../hooks/use-toast";
import { ExposedCommFigure } from "../components/research/ExposedCommFigure";
import { PlacementFigure } from "../components/research/PlacementFigure";
import { NotFound } from "./NotFound";

// Figures a section can ask for by name (see `figure` in src/data/research.js).
const figures = {
  "exposed-communication": ExposedCommFigure,
  placement: PlacementFigure,
};

const sectionId = (heading) =>
  heading
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

// Text can mark code with backticks: "DDP’s `no_sync()` context".
const withCode = (text) =>
  text.split(/(`[^`]+`)/g).map((part, i) =>
    part.length > 1 && part.startsWith("`") && part.endsWith("`") ? (
      <code
        key={i}
        className="rounded bg-secondary px-1.5 py-0.5 font-mono text-[0.9em]"
      >
        {part.slice(1, -1)}
      </code>
    ) : (
      part
    )
  );

const Pill = ({ children }) => (
  <span className="rounded-full border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
    {children}
  </span>
);

const AuthorList = ({ authors }) =>
  authors.map((name, i) => (
    <span key={name}>
      {name === AUTHOR ? (
        <strong className="font-semibold text-foreground">{name}</strong>
      ) : (
        name
      )}
      {i < authors.length - 1 ? ", " : ""}
    </span>
  ));

const Header = ({ entry }) => (
  <header className="mt-8">
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
      <Pill>{entry.status}</Pill>
      <span className="text-sm text-muted-foreground">{entry.affiliation}</span>
    </div>

    <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight md:text-4xl">
      {entry.citation?.title ?? entry.title}
    </h1>

    {entry.citation && (
      <p className="mt-4 text-muted-foreground">
        <AuthorList authors={entry.citation.authors} />
      </p>
    )}

    <p className="mt-5 text-lg leading-relaxed text-foreground/85">
      {entry.description}
    </p>

    <div className="mt-5 flex flex-wrap gap-2">
      {entry.tags.map((tag) => (
        <Pill key={tag}>{tag}</Pill>
      ))}
    </div>

    {(entry.paperUrl || entry.linkNote) && (
      <div className="mt-8 flex flex-wrap items-center gap-3">
        {entry.paperUrl ? (
          <>
            <a
              href={entry.paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cosmic-button inline-flex items-center gap-2"
            >
              Read on IEEE Xplore <ExternalLink size={16} />
            </a>
            {entry.citation?.bibtex && (
              <a
                href="#cite"
                className="rounded-full border border-primary px-6 py-2 text-primary transition-colors duration-300 hover:bg-primary/10"
              >
                Cite this paper
              </a>
            )}
          </>
        ) : (
          <p className="text-sm text-muted-foreground">{entry.linkNote}</p>
        )}
      </div>
    )}
  </header>
);

const LeadFigure = ({ figure }) => (
  <figure className="mt-10">
    {figure.fit === "contain" ? (
      // Diagrams link to the full-size image, which matters on phones.
      <a
        href={figure.src}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden rounded-lg border bg-white p-3 sm:p-6"
      >
        <img
          src={figure.src}
          alt={figure.alt}
          width={figure.width}
          height={figure.height}
          className="mx-auto h-auto max-h-[30rem] w-full object-contain"
        />
      </a>
    ) : (
      <img
        src={figure.src}
        alt={figure.alt}
        width={figure.width}
        height={figure.height}
        className="aspect-[16/9] h-auto w-full rounded-lg border object-cover"
      />
    )}
    {figure.caption && (
      <figcaption className="mt-3 text-sm text-muted-foreground">
        {figure.caption}
        {figure.fit === "contain" && (
          <>
            {" "}
            <a
              href={figure.src}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap text-primary hover:underline"
            >
              View full size
            </a>
          </>
        )}
      </figcaption>
    )}
  </figure>
);

const Stats = ({ stats }) => (
  <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
    {stats.map(({ value, label }) => (
      <div
        key={label}
        className="flex flex-col-reverse justify-end rounded-lg border bg-card p-4"
      >
        <dt className="mt-1 text-xs leading-snug text-muted-foreground">
          {label}
        </dt>
        <dd className="text-2xl font-bold tracking-tight text-primary md:text-3xl">
          {value}
        </dd>
      </div>
    ))}
  </dl>
);

const Facts = ({ facts }) => (
  <dl className="mt-6 grid gap-x-8 gap-y-5 rounded-lg border bg-card p-6 sm:grid-cols-2">
    {facts.map(({ label, value, to }) => (
      <div key={label}>
        <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {label}
        </dt>
        <dd className="mt-1 text-sm leading-relaxed">
          {to ? (
            <Link
              to={to}
              className="text-primary underline-offset-4 hover:underline"
            >
              {value}
            </Link>
          ) : (
            value
          )}
        </dd>
      </div>
    ))}
  </dl>
);

const Section = ({ heading, body, figure }) => {
  const Figure = figures[figure];
  return (
    <section id={sectionId(heading)} className="scroll-mt-28">
      <h2 className="text-2xl font-semibold tracking-tight">{heading}</h2>
      <div className="mt-4 space-y-4 leading-7 text-foreground/90">
        {body.map((paragraph, i) => (
          <p key={i}>{withCode(paragraph)}</p>
        ))}
      </div>
      {Figure && <Figure />}
    </section>
  );
};

const Citation = ({ entry }) => {
  const { citation } = entry;

  const copyBibtex = async () => {
    try {
      await navigator.clipboard.writeText(citation.bibtex);
      toast({ title: "BibTeX copied to clipboard" });
    } catch {
      toast({
        title: "Couldn't copy",
        description: "Select the BibTeX below and copy it manually.",
      });
    }
  };

  return (
    <section id="cite" className="mt-16 scroll-mt-28">
      <h2 className="text-2xl font-semibold tracking-tight">
        {citation.bibtex ? "Cite this paper" : "Citation"}
      </h2>
      <div className="mt-4 rounded-lg border border-primary/30 bg-primary/5 p-5">
        <p className="text-sm leading-relaxed">
          <AuthorList authors={citation.authors} />.{" "}
          <span className="italic">{citation.title}</span>.
        </p>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
          {citation.venue}
        </p>
        {citation.doi && (
          <p className="mt-2 text-xs text-muted-foreground">
            DOI:{" "}
            <a
              href={`https://doi.org/${citation.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="break-all text-primary hover:underline"
            >
              {citation.doi}
            </a>
          </p>
        )}
      </div>

      {citation.bibtex && (
        <div className="mt-4 overflow-hidden rounded-lg border bg-card">
          <div className="flex items-center justify-between border-b px-4 py-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              BibTeX
            </span>
            <button
              type="button"
              onClick={copyBibtex}
              className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors duration-300 hover:border-primary hover:text-primary"
            >
              <Copy size={14} /> Copy
            </button>
          </div>
          <pre className="overflow-x-auto p-4 text-xs leading-relaxed">
            <code>{citation.bibtex}</code>
          </pre>
        </div>
      )}
    </section>
  );
};

const MoreResearch = ({ items }) => (
  <nav aria-labelledby="more-research" className="mt-20 border-t pt-10">
    <h2 id="more-research" className="text-xl font-semibold">
      More research
    </h2>
    <div className="mt-6 grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <Link
          key={item.slug}
          to={researchPath(item)}
          className="group flex flex-col rounded-lg border bg-card p-5 card-hover"
        >
          <span className="text-xs text-muted-foreground">{item.status}</span>
          <h3 className="mt-1 font-semibold transition-colors group-hover:text-primary">
            {item.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {item.description}
          </p>
          <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-medium text-primary">
            Read more <ArrowRight size={14} />
          </span>
        </Link>
      ))}
    </div>
  </nav>
);

export const ResearchPage = () => {
  const { slug } = useParams();
  const entry = findResearch(slug);

  useEffect(() => {
    if (!entry) return undefined;
    document.title = pageTitle(entry);
    return () => {
      document.title = SITE_TITLE;
    };
  }, [entry]);

  if (!entry) return <NotFound />;
  // Old slugs forward to the current address.
  if (entry.slug !== slug) return <Navigate to={researchPath(entry)} replace />;

  return (
    <main className="relative px-6 pb-24 pt-28 md:pt-32">
      <article className="mx-auto w-full max-w-3xl text-left">
        <Link
          to="/#research"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft size={16} /> All research
        </Link>

        <Header entry={entry} />

        {entry.figure && <LeadFigure figure={entry.figure} />}
        {entry.stats && <Stats stats={entry.stats} />}
        {entry.facts && <Facts facts={entry.facts} />}

        <div className="mt-14 space-y-14">
          {entry.sections.map((section) => (
            <Section key={section.heading} {...section} />
          ))}
        </div>

        {entry.citation && <Citation entry={entry} />}

        <MoreResearch items={research.filter((item) => item !== entry)} />
      </article>
    </main>
  );
};
