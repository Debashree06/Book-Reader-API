import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div
      style={{
        background: "black",
        color: "#D90C00",
        fontSize: "10px",
        display: "flex",
        justifyContent: "space-between", // Distribute items to opposite sides
        alignItems: "center", // Vertically center the content
        padding: "8px 20px",
      }}
    >
      <h3>Copyright | All Rights Reserved | {currentYear}</h3>
      <h2>Debashree 👩‍💻</h2>
    </div>
  );
}

export default Footer;
