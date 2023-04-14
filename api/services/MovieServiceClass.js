
export function createNewMovie(movieData) {
    //create new movie in db
    saveMovieToDb(movieData);
    createMovieInCache(movieData);
}

class MovieService {

    createNewMovie(movieData) {
        //create new movie in db

        this.createMovieInCache(movieData)
    }

    createMovieInCache(movieData) {
        //add movieData to cache
        this.deleteMovieFromCache()
    }

    deleteMovie() {
        //delete movie from db

        
    }

    updateMovieInDb(movieData) {
        //update movie data in db

        //function end
        updateMovieInCache(movieData)
    }

    fetchMovieByName(name) {
        //fetch movie from cache filter by name
    }

    updateMovieInCache(movieData) {
        //update the movie data in cache
    }

    





}