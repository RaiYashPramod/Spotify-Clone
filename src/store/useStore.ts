import { create } from "zustand";
import { Song } from "../types";

interface StoreState {
  backgroundColor: string;
  setBackgroundColor: (color: string) => void;
  currentTrack: Song | null;
  setCurrentTrack: (track: Song | null) => void;
}

const useStore = create<StoreState>((set) => ({
  backgroundColor: "#1e9548",
  setBackgroundColor: (color) => set({ backgroundColor: color }),


  currentTrack: null,
  setCurrentTrack: (track) => set({ currentTrack: track }),
}))

export default useStore;