import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import VideoIntro from "./components/VideoIntro";
import LogoFadeIn from "./components/LogoFadeIn";
import RepairServices from "./components/RepairServices";
import CollisionServices from "./components/CollisionServices";
import Footer from "./components/Footer";
import useScrollAnimation from "./useScrollAnimation";

const App: React.FC = () => {
  useScrollAnimation(); // activates smooth background scroll

  return (
    <div
      style={{
        fontFamily: "Orbitron, sans-serif",
        color: "#e5e5e5",
        backgroundColor: "#000",
        overflowX: "hidden",
      }}
    >
      <Header />
      <Hero />
      <VideoIntro />
      <LogoFadeIn />
      <RepairServices />
      <CollisionServices />
      <Footer />
    </div>
  );
};

export default App;
