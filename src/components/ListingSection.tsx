import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { useState } from "react"
import { Album, ApiResponse, Playlist } from "../types";
import { fetchResults, forYou, topPicks } from "../services/music.services";
import Card from "./Card";
import Tabs from "./Tabs";

const ListingSection = () => {
  const [query, setQuery] = useState<string>('');
  const [selectedTab, setSelectedTab] = useState<string>('forYou');

  const {data, error, isLoading}: UseQueryResult<ApiResponse, Error> = useQuery({
    queryKey: ['results', query],
    queryFn: () => fetchResults(query),
    enabled: !!query,
  });

  const {data: forYouData, error: forYouError, isLoading: forYouLoading}: UseQueryResult<Album, Error> = useQuery({
    queryKey: ['forYou'],
    queryFn: () => forYou(),
  });

  const {data: topPicksData, error: topPicksError, isLoading: topPicksLoading}: UseQueryResult<Playlist, Error> = useQuery({
    queryKey: ['topPicks'],
    queryFn: () => topPicks(),
  })

  return (
    <>
      <div className='flex flex-col justify-center items-center h-full w-full'>
        <div className="fixed top-0 p-4 w-full max-w-2xl mx-auto">
          <Tabs selectedTab={selectedTab} onSelectTab={setSelectedTab} />
          <input
            type="text"
            placeholder="Search for songs, artists, or albums..."
            className="w-full py-2 px-4 rounded-md backdrop-blur-md bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="flex-grow overflow-y-auto max-h-[calc(100vh-112px)] mt-28 w-full scrollable-container">
          {isLoading && <p className="text-white">Loading...</p>}
          {selectedTab === 'forYou' && forYouLoading && <p className="text-white">Loading...</p>}
          {selectedTab === 'topPicks' && topPicksLoading && <p className="text-white">Loading...</p>}

          {error instanceof Error && <p className="text-red-500">Error fetching songs: {error.message}</p>}
          {forYouError instanceof Error && <p className="text-red-500">Error fetching songs: {forYouError.message}</p>}
          {topPicksError instanceof Error && <p className="text-red-500">Error fetching songs: {topPicksError.message}</p>}

          {data && (
            <div className="flex flex-col gap-4">
              {data.map(song => (
                <Card key={song.id} song={song} /> 
              ))}
            </div>
          )}

          {!query && selectedTab === 'forYou' && forYouData && (
            <div className="flex flex-col gap-4">
              {forYouData.songs.map(song => (
                <Card key={song.id} song={song} />
              ))}
            </div>
          )}

          {!query && selectedTab === 'topPicks' && topPicksData && (
            <div className="flex flex-col gap-4">
              {topPicksData.songs.map(song => (
                <Card key={song.id} song={song} />
              ))}
            </div>
          )}

        </div>
      </div>
    </>
  )
}

export default ListingSection