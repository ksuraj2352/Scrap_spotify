// Imports
const axios = require('axios');
const downloadSongsFromYoutube = require('./downloadSong');
require("dotenv").config();

// Variables
let youtubeAPIKey = process.env.YOUTUBE_API_KEY
let apiUrl = "https://www.googleapis.com/youtube/v3/search"

// Function to query in youtube using songs keyword
// Params -- songsArray (contains each songs from the playlist, it is require to search in youtube)
function searchOnYoutube(songsArray) {
    try {
        songsArray.forEach(async (song) => {
            let keyword = `${song.albumName} ${song.artistName} ${song.trackName}`
            // console.log(keyword)
            const response = await axios.get(apiUrl, {
                params: {
                    key: youtubeAPIKey,
                    part: 'snippet',
                    type: 'video',
                    q: keyword,
                    maxResults: 10
                }
            })
             // for ease and accuracy, we will take the first video from search everytime
             let firstVideo = response.data.items[0]
             // For downloading and saving the video we are using below function
             downloadSongsFromYoutube(firstVideo,keyword)
        });
    } catch (error) {
        console.log('Error fetching data:',error)
    }
}

module.exports = searchOnYoutube