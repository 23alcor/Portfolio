import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { cn } from "../lib/utils"
import { Menu, X } from "lucide-react"

const navItems = [
  {name: "Home", href: "#hero"},
  {name: "Projects", href: "#projects"},
  {name: "Research", href: "#research"},
  {name: "Experience", href: "#experience"},
  {name: "Contact", href: "#contact"},


]

// On the home page these stay plain #anchors (the browser smooth-scrolls).
// On any other page they go back to the home page, to that section.
const SectionLink = ({ href, ...props }) => {
  const { pathname } = useLocation()
  return pathname === "/" ? <a href={href} {...props} /> : <Link to={`/${href}`} {...props} />
}


export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return <nav className={cn("fixed w-full z-40 transition-all duration-300", isScrolled ? "py-3" : "py-5" )}>

    {/* The scrolled background sits on its own layer: a backdrop-filter on <nav>
        itself would shrink the fixed mobile menu below to the navbar's height. */}
    <div aria-hidden="true" className={cn("absolute inset-0 -z-10 transition-all duration-300", isScrolled && "bg-background/80 backdrop-blur-md shadow-xs")} />

    <div className='container flex items-center justify-between'>
      <SectionLink className="text-xl font-bold text-primary flex items-center" href="#hero">
        <span className="relative z-10">
          <span className="text-glow text-foreground"> Ralphael </span> Portfolio
        </span>
      </SectionLink>

      <div className="hidden md:flex space-x-8">
        {navItems.map((item, key) => (
          <SectionLink key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">{item.name}</SectionLink>
        ))}
      </div>

        <button
          onClick={() => setIsMenuOpen((prev) => !prev )}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}

        </button>

      <div
      className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
        "transition-all duration-300 md:hidden",
        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <div className="flex flex-col space-y-8">
          {navItems.map((item, key) => (
            <SectionLink
            key={key} href={item.href}
            className="text-foreground/80 hover:text-primary transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}

            >{item.name}</SectionLink>
          ))}
        </div>
      </div>

    </div>

  </nav>
}
