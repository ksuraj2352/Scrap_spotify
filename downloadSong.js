// Imports

const fs = require('fs');
const ytdl = require('ytdl-core');

// Function to download the audio from youtube and save the audio file
// Params -- videoInfo (videoInfo have the first video details from youtube search and keyword is the query we search on youtube for that song)
// We are using a third party library to download youtube audio/video -- (ytdl-core)
async function downloadSongsFromYoutube(videoInfo, keyword) {
    try {
        // Video Id of each video
        let videoId = videoInfo.id.videoId
        // Creating youtube url of that particular video
        let url = `http://www.youtube.com/watch?v=${videoId}`
        // Fetching songs info
        let songInfo = await ytdl.getInfo(videoId);
        // Available audio formats of song
        let audioFormats = ytdl.filterFormats(songInfo.formats, 'audioonly');
        console.log(`Formats with only audio: ${audioFormats.length}`);
        // Downloading and saving the file
        ytdl(url, { filter: 'audioonly' }).pipe(fs.createWriteStream(`${keyword}.mp3`));
    } catch (error) {
        console.log(error)
    }
}

module.exports = downloadSongsFromYoutube