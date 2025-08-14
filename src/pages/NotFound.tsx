import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SiteLayout from "@/components/layout/SiteLayout";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <SiteLayout>
      <Helmet>
        <title>404 — Page Not Found | Goomantu</title>
        <meta name="description" content="The page you’re looking for doesn’t exist." />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-4">Oops! Page not found</p>
          <a href="/" className="underline">Return to Home</a>
        </div>
      </div>
    </SiteLayout>
  );
};

export default NotFound;
