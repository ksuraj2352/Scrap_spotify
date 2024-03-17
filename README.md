# Download spotify playlist in one go

## Requirements

Create (.env) file in root directory of the project containing these below data:

-- Spotify Client ID (as CLIENT_ID)
-- Spotify Client Secret (as CLIENT_SECRET)
-- Spotify Playlist ID (as PLAYLIST_ID)
-- Youtube API Key (as YOUTUBE_API_KEY)

## Installation

-- Clone the repository.
-- Install dependencies:

run npm install

## Workflow

There are four functions in four different files:

1. spotifyToken.js -- This is the first step. This will generate spotify account token to fetch all the playlist and playlist info.
2. fetchPlaylistSongs.js -- Depending on the token, this function will help to fetch all songs from a given Playlist ID of a user.
3. searchOnYoutube.js -- After fetching all the songs, this function will query for each song in youtube.
4. downloadSong.js -- After querying in youtube, this function will download each song in audio format from youtube using a third party library (ytdl-core).

## Usage

-- Simply run `main.js` to download the songs from the specified Spotify playlist and save them in audio format:

```bash
node main.js

