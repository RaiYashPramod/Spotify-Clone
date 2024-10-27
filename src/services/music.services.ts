import { Playlist } from "../types";

const playLists = async(): Promise<Playlist> => {
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/playlists`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data: Playlist = await response.json();
  return data;
}

export {playLists};