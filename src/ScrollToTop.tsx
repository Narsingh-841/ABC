import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Add this component in your App.tsx or create a wrapper
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}