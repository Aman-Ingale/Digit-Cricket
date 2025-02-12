import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const usePreventBackNavigation = () => {
  const location = useLocation();

  useEffect(() => {
    window.history.pushState(null, document.title, window.location.href);

    const handlePopState = () => {
      window.history.pushState(null, document.title, window.location.href);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [location]);
};

export default usePreventBackNavigation;
