class HeadApp extends HTMLElement {

    connectedCallback(){
        this.innerHTML = `
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a class="navbar-brand" href="#">MovieQu</a>
        </nav>`;
    }
    
}

customElements.define("head-app", HeadApp);