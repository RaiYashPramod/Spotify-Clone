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
  duration: string; 
  encrypted_drm_media_url: string;
  encrypted_media_path: string;
  encrypted_media_url: string;
  explicit_content: number; 
  featured_artists: string;
  featured_artists_id: string;
  has_lyrics: string; 
  id: string; 
  image: string; 
  is_dolby_content: boolean;
  is_drm: number; 
  label: string;
  label_url: string;
  language: string;
  lyrics_snippet: string;
  media_preview_url: string;
  media_url: string; 
  music: string; 
  music_id: string; 
  origin: string;
  perma_url: string; 
  play_count: number; 
  primary_artists: string; 
  primary_artists_id: string; 
  release_date: string; 
  rights: Rights; 
  singers: string; 
  song: string; 
  starred: string; 
  starring: string; 
  triller_available: boolean;
  type: string;
  webp: boolean; 
  year: string; 
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



export type ApiResponse = Song[]; 
