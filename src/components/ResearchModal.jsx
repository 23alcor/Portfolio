import { useEffect, useRef } from "react";
import { ExternalLink, X } from "lucide-react";

/**
 * Detail note for a research entry, built on the native <dialog> element so
 * Esc-to-close, focus trapping and the inert backdrop come from the browser
 * rather than hand-rolled state.
 */
export const ResearchModal = ({ entry, onClose }) => {
  const dialogRef = useRef(null);

  // Open / close the dialog in step with the `entry` prop.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (entry && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else if (!entry && dialog.open) {
      dialog.close();
    }
  }, [entry]);

  // The browser can close the dialog on its own (Esc), so let the parent know.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => {
      document.body.style.overflow = "";
      onClose();
    };

    dialog.addEventListener("close", handleClose);
    return () => {
      dialog.removeEventListener("close", handleClose);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  // Clicks on the ::backdrop land on the <dialog> itself, never on the inner div.
  const handleBackdropClick = (event) => {
    if (event.target === dialogRef.current) dialogRef.current.close();
  };

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      aria-labelledby="research-modal-title"
      className="m-auto w-[min(42rem,calc(100vw-2rem))] rounded-lg border bg-card p-0 text-foreground shadow-xl backdrop:bg-black/60 backdrop:backdrop-blur-sm"
    >
      {entry && (
        <div className="max-h-[min(85vh,44rem)] overflow-y-auto">
          <div className="relative p-6 md:p-8">
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-full border p-1.5 opacity-60 transition-opacity hover:opacity-100"
            >
              <X size={16} />
            </button>

            <span className="inline-block rounded-full border bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">
              {entry.status}
            </span>

            <h3
              id="research-modal-title"
              className="mt-3 pr-10 text-2xl font-semibold"
            >
              {entry.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {entry.affiliation}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {entry.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            {entry.citation && (
              <div className="mt-6 rounded-md border border-primary/30 bg-primary/5 p-4">
                <p className="text-sm leading-relaxed">
                  {entry.citation.authors.map((author, index) => (
                    <span key={author}>
                      {author === entry.citation.self ? (
                        <strong className="font-semibold">{author}</strong>
                      ) : (
                        author
                      )}
                      {index < entry.citation.authors.length - 1 ? ", " : ". "}
                    </span>
                  ))}
                  <span className="italic">{entry.citation.title}</span>.
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  {entry.citation.venue}
                </p>
                {entry.paperUrl && (
                  <a
                    href={entry.paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cosmic-button mt-4 flex w-fit items-center gap-2"
                  >
                    Read on IEEE Xplore <ExternalLink size={16} />
                  </a>
                )}
              </div>
            )}

            <div className="mt-6 space-y-5 text-sm leading-relaxed">
              {entry.note.map((block) => (
                <div key={block.heading}>
                  <h4 className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {block.heading}
                  </h4>
                  <p>{block.body}</p>
                </div>
              ))}
            </div>

            {!entry.paperUrl && entry.linkNote ? (
              <p className="mt-8 text-xs text-muted-foreground">
                {entry.linkNote}
              </p>
            ) : null}
          </div>
        </div>
      )}
    </dialog>
  );
};
