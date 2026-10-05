import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * GoatCounter's script counts the first page load by itself. Moving between
 * pages inside the app (e.g. home → a research page) doesn't reload the page,
 * so those views are counted here.
 */
export const PageViews = () => {
  const { pathname } = useLocation();
  const lastCounted = useRef(pathname);

  useEffect(() => {
    if (pathname === lastCounted.current) return;
    lastCounted.current = pathname;
    window.goatcounter?.count?.({ path: pathname });
  }, [pathname]);

  return null;
};
