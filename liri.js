// Packages

// add code to read and set any environment variables with the dotenv package:
require("dotenv").config();

var request = require('request');

// file sync package
var fs = require ("fs");
var axios = require("axios");
var Spotify = require("node-spotify-api");

// set up to convert the date on the concert
var moment = require('moment');
moment().format();

// API keys in the keys.js file that is actually pulling the spotify key from the .env page
var keys = require("./keys.js");



//To acces key information for Spotify
var spotify = new Spotify(keys.spotify);




// Create variables to be able to pull what is entered in the terminal
var nodeComandeOne = process.argv[2];
var nodeComandeTwo = process.argv[3];

UserInputs(nodeComandeOne, nodeComandeTwo);

function UserInputs (nodeComandeOne, nodeComandeTwo) {
    switch(nodeComandeOne) {
        case 'concert-this':
        concertShows(nodeComandeTwo);
        break;

        case 'spotify-this-song':
        spotifySong(nodeComandeTwo);
        break;

        case 'movie-this':
        movieInfo(nodeComandeTwo);
        break;

        case 'do-what-it-says':
        getRandom();
        break;

        default:
        console.log("Invalid Instruction");
        break;

    }
};

// Spotify comands

function spotifySong (nodeComandeTwo) {

    var searchSong;
    if (nodeComandeTwo === undefined){
          // If no song is provided then your program will default to "The Sign" by Ace of Base.
        searchSong = "The Sign by Ace of Base";
    } else {
        searchSong = nodeComandeTwo;
        console.log(searchSong);
    }

        spotify.search ({
            type: 'track',
            query: searchSong
        }, function (error, data) {
            if (error) {
                console.log("Error Occured:" + error);
                return;
            } else {
                // console.log(data);
                console.log("Artist:" + data.tracks.artist);
                console.log("Song:" + data.tracks.name);
                console.log("Preview:" + data.tracks.items[3].preview_url);
                console.log("Album:" + data.tracks.items[0].album.name);
                // look at these properities for the Spotify API
            
                }
            });
        };

  
  



// node liri.js concert-this <artist/band name here>

// Will need to pickup what is entered in the terminal under node comand to then look up the information from the API and out put it onto the terminal

// This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:
function concertShows (nodeComandeOne) {

        concertName = nodeComandeTwo;
    

var queryURL = "https://rest.bandsintown.com/artists/" + concertName + "/events?app_id=codingbootcamp";
axios.get(queryURL)   

.then(function(response) {

    for (var i = 0; i< response.data.length; i++){
        console.log("Venue: " + response.data[i].venue.name);
        console.log("Location: " + response.data[i].venue.city);
        console.log("Date: " + response.data[i].datetime);
        // lookup api access to fields

        }

    })

}

// node liri.js spotify-this-song '<song name here>'

// This will show the following information about the song in your terminal/bash window

// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from

// Movie node comands:
// Store all of the arguments in an array
function movieInfo(nodeComandeTwo) {
    var movieName = "";

    if (nodeComandeTwo === undefined) {
        movieName = "Blank";
    } else {
        movieName = nodeComandeTwo;
    };



// Create an empty variable for holding the movie name

// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
        // for (var i = 2; i < nodeArgs.length; i++) {

        //   if (i > 2 && i < nodeArgs.length) {
        //     movieName = movieName + "+" + nodeArgs[i];
        //   } else {
        //     movieName += nodeArgs[i];

        //   }
        // }

// Then run a request with axios to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

axios.get(queryUrl).then(
  function(response) {
    console.log("Movie Title: " + response.data.Title);
    console.log("Movie Rating: " + response.data.imdbRating);
    console.log("Movie Release Year: " + response.data.Year);
    console.log("Movie Rotten Tomatoes: " + response.data.Ratings[1].value);
    console.log("Country Produced: " + response.data.Country);
    console.log("Movie Language: " + response.data.Language);
    console.log("Movie Plot: " + response.data.Plot);
    console.log("Movie Cast: " + response.data.Actors);

  })
  .catch(function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Status---------------");
      console.log(error.response.status);
      console.log("---------------Status---------------");
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });

};

// comands that i should be able to make
    // concert-this
    // spotify-this-song
    // movie-this
    // do-what-it-says

function getRandom(){
    fs.readFile("random.txt", "utf8", function(error,data){
        if (error){
            return console.log(error);
        }
        console.log(data);

        var dataArr = data.split(",");
        console.log(dataArr);

        UserInputs(dataArr[0], dataArr[1]);

    })
}