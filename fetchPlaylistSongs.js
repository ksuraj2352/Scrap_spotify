// Imports
const axios = require('axios');
require("dotenv").config();

// Fetch all songs of a playlist by giving its playlist id
// Params -- Token (Spotify Authentication Token) and PlaylistId (Spotify Playlist ID)
function fetchPlaylistItems(token, playlistId) {
    const apiUrlForFetchingPlaylistItems = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
    return new Promise((resolve, reject) => {
        axios.get(apiUrlForFetchingPlaylistItems, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                // all songs from playlist
                let allSongs = response.data.items
                resolve(allSongs)
            })
            .catch(error => {
                // Handle error
                console.error('Error fetching playlist items:', error.response ? error.response.data : error.message);
                reject(error)
            });
    })
}

module.exports = fetchPlaylistItems