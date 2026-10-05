import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

// <html> has `scroll-behavior: smooth`, so every jump made here is explicitly
// instant — otherwise a new page would visibly scroll up from the old position.
const jumpTo = (top) => window.scrollTo({ top, left: 0, behavior: "instant" });

const jumpToHash = (hash) => {
  const id = decodeURIComponent(hash.slice(1));
  const target = id && document.getElementById(id);
  if (!target) return false;
  target.scrollIntoView({ behavior: "instant", block: "start" });
  return true;
};

/**
 * Scroll handling between pages:
 * - Opening a page from a link starts at the top, or at its #section.
 * - Back/forward returns to wherever that page was left.
 * - Same-page #anchor links are left to the browser (smooth scroll).
 */
export const ScrollManager = () => {
  const location = useLocation();
  const navigationType = useNavigationType();
  const positions = useRef(new Map());
  const shownPath = useRef(null);
  const historyMove = useRef(false);

  useEffect(() => {
    let frame = 0;
    const remember = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        // During back/forward the old page is still on screen and the browser
        // may clamp the scroll position; don't record that as where it was left.
        if (!historyMove.current && shownPath.current) {
          positions.current.set(shownPath.current, window.scrollY);
        }
      });
    };
    const onHistoryMove = () => {
      historyMove.current = true;
    };

    window.addEventListener("scroll", remember, { passive: true });
    // Capture phase so this runs before the router reacts to the same event.
    window.addEventListener("popstate", onHistoryMove, true);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", remember);
      window.removeEventListener("popstate", onHistoryMove, true);
    };
  }, []);

  useLayoutEffect(() => {
    const { pathname, hash } = location;
    const firstRender = shownPath.current === null;
    const changedPage = pathname !== shownPath.current;
    shownPath.current = pathname;
    historyMove.current = false;

    if (firstRender) {
      // Deep links such as /#research: the section only exists once React has
      // rendered, so the browser's own jump on load can miss it.
      if (hash) jumpToHash(hash);
      return;
    }
    if (!changedPage) return;

    const saved = positions.current.get(pathname);
    if (navigationType === "POP" && saved !== undefined) {
      jumpTo(saved);
    } else if (!(hash && jumpToHash(hash))) {
      jumpTo(0);
    }
  }, [location, navigationType]);

  return null;
};
