import { useEffect } from 'react';

const LiveChatWidget = () => {
  useEffect(() => {
    window.__lc = window.__lc || {};
    window.__lc.license = 19182163;
    window.__lc.integration_name = "manual_onboarding";
    window.__lc.product_name = "livechat";

    const script = document.createElement("script");
    script.src = "https://cdn.livechatinc.com/tracking.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup: optional, useful if the component gets unmounted
      document.head.removeChild(script);
    };
  }, []);

  return null; // It doesn’t render anything visible
};

export default LiveChatWidget;