import React, { useEffect, useState } from "react";
import "./WelcomeBanner.css";

const WelcomeBanner = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3000); // Hide after 3s
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="welcome-banner-slide">
      Hey, there it's Shreya M
    </div>
  );
};

export default WelcomeBanner;
