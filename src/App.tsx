import React from "react";
import spotifyLogo from "./assets/spotify-logo.png";
import ListingSection from "./components/ListingSection";
import useStore from "./store/useStore";
import { motion } from "framer-motion";
import Player from "./components/Player";

const App: React.FC = () => {
  const { backgroundColor } = useStore();

  return (
    <div className="h-screen flex relative">
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{ background: `linear-gradient(0deg, #121212,  ${backgroundColor})` }}
        transition={{ duration: .3 }}
      />

      <div className="w-1/4 p-4">
        <img src={spotifyLogo} alt="Spotify Logo" className="h-12 mb-4" />
      </div>

      <div className="w-1/2 p-4">
        <ListingSection />
      </div>

      <div className="w-1/2 p-4">
        <Player />
      </div>
    </div>
  );
};

export default App;
