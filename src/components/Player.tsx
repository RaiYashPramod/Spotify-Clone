import { FaPause, FaPlay } from "react-icons/fa";
import useStore from "../store/useStore";
import { IoPlaySkipBack, IoPlaySkipForward } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";

const Player = () => {
  const { currentTrack } = useStore();
  const trackRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    if (currentTrack) {
      if (!trackRef.current) {
        trackRef.current = new Audio(currentTrack.media_url);
        trackRef.current.addEventListener('timeupdate', () => {
          const progress = trackRef.current!.currentTime;
          setProgress(progress);
        })
      } else {
        trackRef.current.src = currentTrack.media_url;
        trackRef.current.load();
      }
      
      trackRef.current.play()
      setIsPlaying(true);
      return () => {
        trackRef.current?.pause();
        setIsPlaying(false);
      };
    }

  }, [currentTrack])

  const handlePlayPause = () => {
    if (isPlaying) {
      trackRef.current?.pause();
      setIsPlaying(false);
    } else {
      trackRef.current?.play();
      setIsPlaying(true);
    }
  };

  const handleTime = (event: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = event.currentTarget;

    const clickPosition = event.clientX - progressBar.getBoundingClientRect().left; 
    const progressBarWidth = progressBar.clientWidth; 
    const clickPercentage = clickPosition / progressBarWidth; 
    const newTime = clickPercentage * parseInt(currentTrack!.duration);

    trackRef.current!.currentTime = newTime; 
    setProgress(newTime);
  }
  return (
    <div className="h-full w-full">
      {currentTrack ? (
        <div className="flex flex-col justify-center items-center h-full mt-4 md:-mt-16">
          <h3 className="hidden lg:block text-3xl font-bold text-white p-10">Now Playing</h3>
          <div className="flex flex-row md:flex-col gap-2">
            <img src={currentTrack.image} alt="" className="h-28 w-28 md:h-80 md:w-80 object-cover" />
            <div>
              <h2 className="text-white pt-4 text-md md:text-3xl">{currentTrack.song}</h2>
              <p className="text-gray-400 text-xs md:text-lg truncate max-w-48 md:max-w-80">{Object.keys(currentTrack.artistMap).join(', ')}</p>
            </div>
          </div>
          <audio src={currentTrack.media_url}></audio>
          <div className="w-full flex justify-center items-center mt-4">
            <div className="flex flex-row gap-2 w-96 items-center">
              <p className="text-white">{formatTime(progress)}</p>
              <div className="flex-1 h-2 relative rounded-full bg-gray-600 cursor-pointer" onClick={handleTime}>
                <div
                  className="absolute top-0 left-0 h-2 bg-green-500 rounded-full"
                  style={{ width: `${(progress / parseInt(currentTrack.duration)) * 100}%` }}
                />
              </div>
              <p className="text-white">{formatTime(parseInt(currentTrack.duration))}</p>
            </div>
          </div>

          <div className="flex flex-row items-center justify-center gap-8 mt-4">
            <IoPlaySkipBack size={24} color="white"/>
            <div className="bg-white h-14 w-14 rounded-full flex items-center justify-center" onClick={handlePlayPause}>
              <button className="focus:outline-none">
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
            </div>
            <IoPlaySkipForward size={24} color="white" />
          </div>
        </div>
      ) : (
        <p className="text-gray-400 flex justify-center items-center h-full">
          No track is currently playing.
        </p>
      )}
    </div>
  );
};

export default Player;
