interface ArtistMap {
  [artistName: string]: string; // Maps artist names to their IDs
}

interface Rights {
  cacheable: boolean;
  code: number;
  delete_cached_object: boolean;
  reason: string;
}

export interface Song {
  "320kbps": string;
  album: string;
  album_url: string;
  albumid: string;
  artistMap: ArtistMap;
  cache_state: string;
  copyright_text: string;
  duration: string; // In seconds
  encrypted_drm_media_url: string;
  encrypted_media_path: string;
  encrypted_media_url: string;
  explicit_content: number; // 0 or 1
  featured_artists: string;
  featured_artists_id: string;
  has_lyrics: string; // "true" or "false"
  id: string; // Unique identifier for the song
  image: string; // URL to the album artwork
  is_dolby_content: boolean;
  is_drm: number; // 0 or 1
  label: string;
  label_url: string;
  language: string;
  lyrics_snippet: string;
  media_preview_url: string;
  media_url: string; // Direct link to the media file
  music: string; // Composers
  music_id: string; // Composers IDs
  origin: string;
  perma_url: string; // Permanent link to the song
  play_count: number; // Total number of plays
  primary_artists: string; // Main artists
  primary_artists_id: string; // IDs of main artists
  release_date: string; // ISO date string
  rights: Rights; // Rights information
  singers: string; // Additional singers
  song: string; // Song title
  starred: string; // "true" or "false"
  starring: string; // Actors featured in the music video
  triller_available: boolean;
  type: string;
  webp: boolean; // Whether the image is in WebP format
  year: string; // Year of release
}

export interface Album {
  albumid: string;              
  image: string;               
  name: string;                 
  perma_url: string;            
  primary_artists: string;      
  primary_artists_id: string;   
  release_date: string;         
  songs: ApiResponse;           
  title: string;                
  year: string;     
}

export interface Playlist {
  H2: null; 
  artists: string[]; 
  content_list: string[]; 
  fan_count: string; 
  firstname: string; 
  follower_count: string; 
  image: string; 
  images: string[]; 
  isFY: boolean; 
  is_dolby_playlist: boolean; 
  is_followed: boolean | null; 
  last_updated: string; 
  lastname: string; 
  list_count: string; 
  listid: string; 
  listname: string; 
  perma_url: string; 
  share: string;
  songs: ApiResponse; 
  sub_types: string[]; 
  subheading: string | null;
  type: string; 
  uid: string; 
  username: string; 
  video_available: boolean; 
  video_count: number; 
}


// Response type
export type ApiResponse = Song[]; // Array of songs
