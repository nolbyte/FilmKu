class SearchBar extends HTMLElement {

    connectedCallback(){
        this.render();
    }

    set clickEvent(event){
        this._clikEvent = event;
        this.render();
    }

    get value(){
        return this.querySelector("#searchMovie").value;
    }

    render(){
        this.innerHTML =`
        <section class="jumbotron">
            <div class="container">
                <div class="hero-text">                    
                    <div class="input-group input-group-lg">
                        <input type="text" class="form-control" placeholder="Type here..."
                            id="searchMovie">
                        <div class="input-group-append">
                            <button class="btn btn-primary" type="submit" id="searchButtonMovie">Find Movies</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;
        this.querySelector("#searchButtonMovie").addEventListener("click", this._clikEvent);
    }

}

customElements.define("search-bar", SearchBar);