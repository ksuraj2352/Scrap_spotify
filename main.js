const generateToken = require("./spotifyToken")


let spotifyToken

generateToken().then((token) => {
    spotifyToken = token
    console.log(spotifyToken)
}).catch((error) => {
    console.log(error)
})