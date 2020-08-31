class MovieItem extends HTMLElement {
    
    set movie(movie){
        this._movie = movie;
        this.render();
    }

    render() {
        this.innerHTML =`
        <div class="card">
            <div class="row no-gutters">
                <div class="col-sm-5" style="background: #868e96;">
                    <img src="https://image.tmdb.org/t/p/w185${this._movie.poster_path}" class="card-img-top h-100" alt="Movie Poster">
                </div>
                <div class="col-sm-7">
                    <div class="card-body">
                        <h5 class="card-title">${this._movie.title}</h5>
                        <p class="card-text movie-overview">${this._movie.overview}</p>
                        <p class="card-text">Release: ${this._movie.release_date}</p>
                        <p class="card-text">Rate: ${this._movie.vote_average}</p>                        
                    </div>
                    <div class="card-footer"><a href="https://www.themoviedb.org/movie/${this._movie.id}" target="_blank" class="text-muted">View Detail</a></div>
                </div>
            </div>
        </div>
        `;
    }

}

customElements.define("movie-item", MovieItem);