const Movie = require("../models/Movie");

export const saveMovieToDB = async (movieID, movieData) => {
    const newMovie = new Movie(movieData)
    try {
        const savedMovie = await newMovie.save();
        return {success:true};
    } catch (err) {
        console.log("saveMovieToDB err:", err)
        throw(err);
    }
} 

export const fetchMovieFromDb = async (movieID) => {
    try {
        const movie = await Movie.findById(movieID);
        return movie
      } catch (err) {
        console.log("fetchMovieFromDb err:", err)
        throw(err)
      }
}


export const updateMovieInDb = async (movieID, movieData) => {
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(
          movieID,
          {
            $set: movieData,
          },
          { new: true }
        );
        return updatedMovie
    } catch(err) {
        console.log("fetchMovieFromDb err:",err);
        throw(err)
    }
}