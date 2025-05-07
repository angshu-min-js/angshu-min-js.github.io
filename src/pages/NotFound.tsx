import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import MetaTags from "@/components/MetaTags";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <MetaTags
        title="Page Not Found | Angshuman Gupta"
        description="The page you are looking for could not be found on Angshuman Gupta's portfolio website."
        keywords="404, page not found, error, Angshuman Gupta"
        type="website"
      />
      
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
