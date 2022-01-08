import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_social">
        <i class="fab fa-facebook"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-twitter"></i>
      </div>
      <p>© 2022 Airbnb</p>
      <p>Privacy - Terms - Sitemap</p>
    </div>
  );
}

export default Footer;
