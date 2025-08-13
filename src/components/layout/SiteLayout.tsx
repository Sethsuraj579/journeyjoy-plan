import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plane, Calculator, Map, Users } from "lucide-react";
import React from "react";

interface SiteLayoutProps {
  children: React.ReactNode;
}

const NavItem = ({ to, label }: { to: string; label: string }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        isActive ? "bg-accent text-accent-foreground" : "text-foreground/80 hover:text-foreground"
      }`
    }
  >
    {label}
  </NavLink>
);

const SiteLayout: React.FC<SiteLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-30 border-b bg-background/80 backdrop-blur">
        <nav className="container mx-auto flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="size-8 rounded-md bg-gradient-primary shadow-glow" aria-hidden />
            <span className="text-lg font-semibold">VoyageWise</span>
          </Link>
          <div className="hidden md:flex items-center gap-1">
            <NavItem to="/destinations" label="Destinations" />
            <NavItem to="/budget-trips" label="Budget Trips" />
            <NavItem to="/calculator" label="Budget Calculator" />
            <NavItem to="/planner" label="Trip Planner" />
            <NavItem to="/community" label="Community" />
          </div>
          <div className="flex items-center gap-2">
            <Link to="/planner">
              <Button variant="hero" className="hidden md:inline-flex">
                <Plane className="opacity-90" /> Plan a Trip
              </Button>
            </Link>
            <Link to="/calculator">
              <Button variant="outline" className="md:hidden">
                <Calculator />
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="border-t">
        <div className="container mx-auto py-8 grid gap-6 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="size-6 rounded bg-gradient-primary shadow-elegant" aria-hidden />
              <span className="font-semibold">VoyageWise</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Smart planner, budget tools, and community stories to make your travel effortless.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2">Explore</h3>
            <ul className="space-y-1 text-sm">
              <li><Link className="hover:underline" to="/destinations">Top Destinations</Link></li>
              <li><Link className="hover:underline" to="/budget-trips">Budget Trips</Link></li>
              <li><Link className="hover:underline" to="/community">Community & Tips</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2">Get Started</h3>
            <div className="flex gap-2">
              <Link to="/planner"><Button variant="hero"><Map /> Start Planning</Button></Link>
              <Link to="/community"><Button variant="outline"><Users /> Join</Button></Link>
            </div>
          </div>
        </div>
        <div className="border-t py-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} VoyageWise. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default SiteLayout;
