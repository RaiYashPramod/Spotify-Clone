import { Album, ApiResponse, Playlist } from "../types";


const fetchResults = async(query: string): Promise<ApiResponse> => {
  const response = await fetch(`http://127.0.0.1:5100/song/?query=${query}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data: ApiResponse = await response.json();
  return data;
}

const forYou = async(): Promise<Album> => {
  const response = await fetch('http://127.0.0.1:5100/playlist/?query=https://www.jiosaavn.com/featured/hindi-hit-songs/ZodsPn39CSjwxP8tCU-flw__');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data: Album = await response.json();
  return data;
}

const topPicks = async(): Promise<Playlist> => {
  const response = await fetch('http://127.0.0.1:5100/playlist/?query=https://www.jiosaavn.com/featured/best-of-sad-songs-2000s/KQaWtlmKQuQwkg5tVhI3fw__');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data: Playlist = await response.json();
  return data;
}
export {fetchResults, forYou, topPicks};