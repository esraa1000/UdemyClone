import { useState } from "react";
import "../Styles/banner.css";

function Banner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }
  return (
    <div className="top-banner">
      <p>
        <strong>Black Friday Sale!</strong> Sitewide deals from E£279.99. Ends Nov 28.
      </p>
      <button className="close-btn" onClick={() => setIsVisible(false)}>
         x
      </button>
    </div>
  );
}

export default Banner;
