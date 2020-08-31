import './movie-item.js';

class MovieList extends HTMLElement {

    set movies(movies){
        this._movies = movies;
        this.render();
    }

    render(){        
        const MovieCardElement = document.createElement("div");
        MovieCardElement.setAttribute("class", "card-deck row");

        this._movies.forEach(movie => {
            const MovieItem = document.createElement("movie-item");
            MovieItem.setAttribute("class", "col-lg-4 col-md-6 col-sm-12")
            MovieItem.movie = movie;
            MovieCardElement.appendChild(MovieItem);            
        })
        this.appendChild(MovieCardElement);
    }

    renderError(message){
        this.innerHTML =`
        <div class="card text-white bg-danger mb-3">
            <div class="card-body">
                <h5 class="card-title">Error</h5>
                <p class="card-text">${message}</p>
            </div>
        </div>
        `;
    }
}

customElements.define("movie-list", MovieList);