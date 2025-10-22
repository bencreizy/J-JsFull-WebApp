import React from "react";

const CollisionServices: React.FC = () => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          justifyItems: "center",
          gap: "2rem",
          width: "100%",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            gridColumn: "1 / -1",
            justifySelf: "center",
            background: "rgba(0,0,0,0.6)",
            border: "1px solid #22d3ee",
            borderRadius: "10px",
            padding: "2rem",
            color: "#e5e5e5",
            boxShadow: "0 0 10px rgba(34, 211, 238, 0.4)",
          }}
        >
          <h2>Paint, Body & Collision Repair</h2>
          <p>Restoring your vehicle to pre-accident condition with flawless bodywork.</p>
        </div>
      </div>
    </section>
  );
};

export default CollisionServices;
