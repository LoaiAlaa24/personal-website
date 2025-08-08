import { useEffect } from 'react';

declare global {
  interface Window {
    hj: any;
    _hjSettings: any;
  }
}

const Hotjar: React.FC = () => {
  useEffect(() => {
    const hotjarId = process.env.REACT_APP_HOTJAR_ID;
    
    if (!hotjarId || hotjarId === 'YOUR_HOTJAR_ID') {
      console.log('Hotjar ID not configured. Please add your Hotjar ID to .env file.');
      return;
    }

    // Initialize Hotjar
    (function(h: any, o: any, t: any, j: any, a: any, r: any) {
      h.hj = h.hj || function() {
        (h.hj.q = h.hj.q || []).push(arguments);
      };
      h._hjSettings = { hjid: parseInt(hotjarId), hjsv: 6 };
      a = o.getElementsByTagName('head')[0];
      r = o.createElement('script');
      r.async = 1;
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      a.appendChild(r);
    })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=', undefined, undefined);

    // Optional: Track page views
    const trackPageView = () => {
      if (window.hj) {
        window.hj('stateChange', window.location.pathname);
      }
    };

    // Track initial page view
    trackPageView();

    // Track page changes (for SPA)
    // eslint-disable-next-line no-restricted-globals
    const originalPushState = window.history.pushState;
    // eslint-disable-next-line no-restricted-globals
    const originalReplaceState = window.history.replaceState;

    // eslint-disable-next-line no-restricted-globals
    window.history.pushState = function(...args) {
      originalPushState.apply(window.history, args);
      setTimeout(trackPageView, 100);
    };

    // eslint-disable-next-line no-restricted-globals
    window.history.replaceState = function(...args) {
      originalReplaceState.apply(window.history, args);
      setTimeout(trackPageView, 100);
    };

    // Cleanup function
    return () => {
      // eslint-disable-next-line no-restricted-globals
      window.history.pushState = originalPushState;
      // eslint-disable-next-line no-restricted-globals
      window.history.replaceState = originalReplaceState;
    };
  }, []);

  return null; // This component doesn't render anything
};

export default Hotjar;
