interface ArtistMap {
  [artistName: string]: string;
}


export interface Song {
  album: string;
  artistMap: ArtistMap;
  duration: string;
  image: string;
  media_preview_url: string;
  media_url: string;
  origin: string;
  song: string;
}


export interface Playlist {
  _id: string; 
  songs: Song[]; 
  playlist: string; 
}

