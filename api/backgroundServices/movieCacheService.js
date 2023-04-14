//https://blog.risingstack.com/redis-node-js-introduction-to-caching/

import { saveMovieToDB } from './movieDbServcie';

const redis = require('redis');

const redisPort = process.env.PORT || 6379;  // Replace with your redis port
const redisHost = "127.0.0.1";  // Replace with your redis host
const redisClient = redis.createClient({
    socket: {
      port: redisPort,
      host: redisHost,
    }
  });

// const redisClient = redis.createClient(6379)

redisClient.connect().catch((err)=>{
  console.log("redis err:", err)
})

/**
 * @param {string} movieId Id of movie
 * @param {json} movieData data of movie, usually json 
 */

export const createMovieInCache = async (movieID, movieData) => {
  //client.set('some key', 'some value');
  redisClient.set(movieID, movieData);
  //movie data is now cached at movieID key
}

/**
 * @param {string} movieId Id of movie
 */

export const fetchMovieFromCache = async (movieID) => {

  try {
    const movieData = redisClient.get(movieID);
    return movieData;
  } catch(err) {
    console.log("error fetchMovieFromCache: ", err)
    throw(err)
  }
  
}


/**
 * @param {string} movieId Id of movie
 * @param {json} movieData data of movie, usually json 
 */

 export const updateMovieInCache = async (movieID, movieData) => {
  //client.set('some key', 'some value');
  redisClient.set(movieID, movieData);
  //movie data is now cached at movieID key
}