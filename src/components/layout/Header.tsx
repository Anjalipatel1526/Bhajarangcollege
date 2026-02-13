import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Courses", path: "/courses" },
  { name: "Admission", path: "/admissions" },
  { name: "Placements", path: "/placements" },
  { name: "News & Events", path: "/news-events" },
  { name: "Gallery", path: "/gallery" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="absolute top-0 z-50 w-full bg-black/20 backdrop-blur-md border-b border-white/10 shadow-sm">
      {/* Main Navigation */}
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex bg-white rounded-full items-center justify-center h-10 w-10 lg:h-14 lg:w-14 overflow-hidden">
              <img src="/logo.png" alt="Bhajarang Engineering College" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white lg:text-xl tracking-tight">Bhajarang</span>
              <span className="text-xs text-primary-foreground/80 lg:text-sm">Engineering College</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 xl:flex">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-all duration-200 hover:text-accent relative",
                  location.pathname === item.path
                    ? "text-accent"
                    : "text-primary-foreground/90"
                )}
              >
                {item.name}
                {location.pathname === item.path && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-accent rounded-full mb-1" />
                )}
              </Link>
            ))}
          </nav>
          {/* Tablet/Smaller Desktop Navigation (Hidden on XL, Visible on LG - using Dropdown for overflow if needed) */}
          <nav className="hidden items-center gap-1 lg:flex xl:hidden">
            {navItems.slice(0, 5).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-2 py-2 text-sm font-medium transition-colors hover:text-accent",
                  location.pathname === item.path
                    ? "text-accent"
                    : "text-primary-foreground/90"
                )}
              >
                {item.name}
              </Link>
            ))}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-primary-foreground hover:bg-white/10 hover:text-accent focus:bg-white/10 focus:text-accent data-[active]:bg-white/10 data-[state=open]:bg-white/10">
                    More
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-48 gap-1 p-2 bg-white rounded-md shadow-xl">
                      {navItems.slice(5).map((item) => (
                        <li key={item.path}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.path}
                              className={cn(
                                "block rounded-md px-3 py-2 text-sm transition-colors hover:bg-secondary/10 hover:text-primary",
                                location.pathname === item.path
                                  ? "text-primary font-bold"
                                  : "text-muted-foreground"
                              )}
                            >
                              {item.name}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>


          {/* CTA Button (Hidden on small screens) */}
          <div className="hidden lg:flex ml-4">
            <Button asChild className="bg-accent text-primary hover:bg-accent/90 font-semibold shadow-md border-2 border-accent hover:border-white transition-all">
              <Link to="/admissions">Apply Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-primary-foreground/10 py-4 lg:hidden animate-in slide-in-from-top-2 bg-black/40 backdrop-blur-md rounded-b-lg shadow-lg">
            <nav className="flex flex-col gap-2 p-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "rounded-md px-4 py-3 text-sm font-medium transition-colors",
                    location.pathname === item.path
                      ? "bg-accent text-primary font-bold"
                      : "text-primary-foreground hover:bg-white/10 hover:text-accent"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="mt-4 w-full bg-accent text-primary hover:bg-accent/90 font-bold">
                <Link to="/admissions" onClick={() => setMobileMenuOpen(false)}>
                  Apply Now
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
