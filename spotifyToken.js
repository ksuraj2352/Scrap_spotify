// Imports
const axios = require('axios');
require("dotenv").config();

// Post data for spotify
const requestDataForTokenGeneration = {
    grant_type: 'client_credentials',
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET
};

// Spotify api for generating token
const apiUrlForGeneratingToken = 'https://accounts.spotify.com/api/token';


// Generate spotify authentication token
function generateToken() {
    return new Promise((resolve, reject) => {
        axios.post(apiUrlForGeneratingToken,
            new URLSearchParams(requestDataForTokenGeneration),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        )
            .then(response => {
                let accessToken = response.data.access_token
                resolve(accessToken);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                reject(error)
            });
    })
}

// Exports
module.exports = generateToken
