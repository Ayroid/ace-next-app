import Script from "next/script";
import React from "react";

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=TAG_ID"
        id="google-analytics"
      />
      <Script id="google-analytics">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag() {
                        dataLayer.push(arguments);
                        }
                        gtag('js', new Date());
                        gtag('config', 'TAG_ID');
                        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
