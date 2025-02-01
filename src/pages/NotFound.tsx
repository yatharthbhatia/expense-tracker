import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ThemeToggle } from "@/components/themes/ThemeToggle";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
    <div className="min-h-screen bg-pattern flex items-center justify-center p-4">
      <div className="absolute top-4 right-4">
      <ThemeToggle />
      </div>
        <div className="text-center flex-col">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-2xl  mb-4">Oops! Page not found</p>
          <a href="/" className="text-green-500 hover:text-green-500 hover:underline">
            Return to Home
          </a>
        </div>
      </div> 
    </>
  );
};

export default NotFound;
