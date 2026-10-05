import { Outlet } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { StarBackground } from "./StarBackground";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

// Shared chrome for every page, so the star field and navbar stay put when
// moving between the home page and a research page.
export const SiteLayout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
