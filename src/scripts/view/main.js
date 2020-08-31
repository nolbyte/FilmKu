import '../../components/movie-list.js';
import '../../components/search-bar.js';
import moviedb from '../data/movieDB.js';

const main = () => {
    const movieElement = document.querySelector("movie-list");
    const searchElement = document.querySelector("search-bar");

    const SearchMovie = async (event) => {
        event.preventDefault();
        if(searchElement.value.length === 0){
            
            try{
                const result = await moviedb.nowplaying();
                movieElement.movies = result;
                //movieElement.movies("Now playing movies", result);
            }
            catch(message){
                movieElement.renderError(`Error:, ${message}`);
            }
            return;
        }
        movieElement.renderError(`Searching movies..`);
        try{
            const result = await moviedb.search(searchElement.value);
            renderResult(result);
        }
        catch(message){
            fallbackResult(message);
        }
    };
    const renderResult = results => {
        movieElement.movies = results;        
    };

    const fallbackResult = message => {
        movieElement.renderError(`error: ${message}`);
    };

    searchElement.clickEvent = SearchMovie;

    //movieElement.renderError(`Getting now playing...`);
    moviedb.nowplaying()
        .then(result => {
            movieElement.movies = result;            
        })
        .catch(message => {
            movieElement.renderError(`error: ${message}`);
        });
}

export default main;