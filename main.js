const { allowedNodeEnvironmentFlags } = require("process");
const fetchPlaylistItems = require("./fetchPlaylistSongs")
const generateToken = require("./spotifyToken");
const searchOnYoutube = require("./searchOnYoutube");
require("dotenv").config();

// Variables
let spotifyToken
let playlistId = process.env.PLAYLIST_ID
let simplifiedTrackData = []

// Script starts from here
generateToken().then((token) => {
    spotifyToken = token
    // console.log(spotifyToken)
    fetchPlaylistItems(spotifyToken, playlistId)
        .then((allPlaylistSongs) => {
            // console.log(allPlaylistSongs)
            allPlaylistSongs.forEach((song) => {
                let songData = {
                    albumName: song.track.album.name,
                    artistName: song.track.artists[0].name,
                    trackName: song.track.name,
                    trackHref : song.track.href
                }
                simplifiedTrackData.push(songData)
            })
            // console.log(simplifiedTrackData)
            searchOnYoutube(simplifiedTrackData)
        }).catch((error) => {
            console.log('Error fetching data:',error)
        })
}).catch((error) => {
    console.error("An error occurred:", error);
})