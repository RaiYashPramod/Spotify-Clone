import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { useState } from "react"
import { Playlist } from "../types";
import { playLists } from "../services/music.services";
import Card from "./Card";
import Tabs from "./Tabs";

const ListingSection = () => {
  const [query, setQuery] = useState<string>('');
  const [selectedTab, setSelectedTab] = useState<string>('forYou');

  const {data, error, isLoading}: UseQueryResult<Playlist[], Error> = useQuery({
    queryKey: ['playlist'],
    queryFn: () => playLists(),
  });

  const filteredSongs = data?.find(playlist => 
    playlist.playlist.toLowerCase() === selectedTab.toLowerCase()
  )?.songs || [];
  
  const displayedSongs = query
    ? filteredSongs.filter(song =>
        song.song.toLowerCase().includes(query.toLowerCase()) ||
        song.album.toLowerCase().includes(query.toLowerCase()) ||
        Object.keys(song.artistMap).some(artist =>
          artist.toLowerCase().includes(query.toLowerCase())
        )
      )
    : filteredSongs;

  return (
    <>
      <div className='flex flex-col justify-center items-center h-full w-full'>
        <div className="md:fixed top-0 md:p-4 w-full md:w-72 md:-ml-60 mx-auto">
          <Tabs selectedTab={selectedTab} onSelectTab={setSelectedTab} />
          <input
            type="text"
            placeholder="Search for songs, artists, or albums..."
            className="w-full md:w-96 py-2 px-4 rounded-md backdrop-blur-md bg-white/10 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-green-500"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="flex-grow overflow-y-auto h-96 md:max-h-[calc(100vh-112px)] mt-12 md:mt-28 w-full scrollable-container">
          {isLoading && <p className="text-white">Loading...</p>}

          {error instanceof Error && <p className="text-red-500">Error fetching songs: {error.message}</p>}

          {!isLoading && displayedSongs.length === 0 && (
            <p className="text-white">No songs found for "{selectedTab}"</p>
          )}

          {displayedSongs && (
            <div className="flex flex-col gap-2 md:w-96 md:px-4">
              {displayedSongs.map((song, index) => (
                <Card key={song.song + index} song={song} />
              ))}
            </div>
          )}

          
        </div>
      </div>
    </>
  )
}

export default ListingSection