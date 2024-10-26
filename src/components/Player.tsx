import { FaPlay } from "react-icons/fa";
import useStore from "../store/useStore";
import { IoPlaySkipBack, IoPlaySkipForward } from "react-icons/io5";

const Player = () => {
  const { currentTrack } = useStore();

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="h-full w-full">
      {currentTrack ? (
        <div className="flex flex-col justify-center items-center h-full -mt-28">
          <img src={currentTrack.image} alt="" className="h-80 w-80" />
          <h2 className="text-white pt-4 text-3xl">{currentTrack.song}</h2>
          <p className="text-gray-400 text-lg truncate max-w-96">{Object.keys(currentTrack.artistMap).join(', ')}</p>
          <audio src={currentTrack.media_url}></audio>
          <div className="w-full flex justify-center items-center mt-4">
            <div className="flex flex-row gap-2 w-96 items-center">
              <p className="text-white">0:00</p>
              <div className="flex-1 h-2 relative rounded-full bg-gray-600">
                <div
                  className="absolute top-0 left-0 h-2 bg-green-500 rounded-full"
                  style={{ width: `30%` }}
                />
              </div>
              <p className="text-white">{formatTime(parseInt(currentTrack.duration))}</p>
            </div>
          </div>

          <div className="flex flex-row items-center justify-center gap-12 mt-4">
            <IoPlaySkipBack size={24} color="white"/>
            <div className="bg-white h-10 w-10 rounded-full flex items-center justify-center">
              <button className="focus:outline-none">
                <FaPlay />
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
