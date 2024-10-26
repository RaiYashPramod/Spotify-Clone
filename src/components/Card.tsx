import React from 'react'
import { Song } from '../types'
import { useExtractColors } from "react-extract-colors";
import useStore from '../store/useStore';

interface CardProps {
  song: Song; 
}

const Card: React.FC<CardProps> = ({song}) => {
  const {setBackgroundColor, setCurrentTrack} = useStore();

  const { dominantColor } =  useExtractColors(song.image, {format: 'hex'});
  
  const handleClick = () => {
    if (dominantColor) {
      setBackgroundColor(dominantColor)
    }
    setCurrentTrack(song);
  }

  return (
    <div className="p-4 rounded-lg flex flex-row gap-2 transition-colors duration-300 ease-in-out hover:bg-white/20" onClick={handleClick}>
      <div className="flex-shrink-0 w-14 h-14 rounded-full relative overflow-hidden">
          <img
            src={song.image}
            alt={`${song.album}'s album cover`}
            className="w-full h-full object-cover rounded-full"
          />
      </div>
      <div className=''>
        <h2 className="text-white text-xl font-normal transition-colors duration-300 ease-in-out group-hover:text-green-500">{song.song}</h2>
        <p className="text-gray-400 text-lg truncate max-w-96">{Object.keys(song.artistMap).join(', ')}</p>
      </div>
    </div>
  )
}

export default Card