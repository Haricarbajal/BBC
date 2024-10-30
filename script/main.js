const noticias = [
    {
        "id": 1,
        "image": "https://ichef.bbci.co.uk/ace/standard/1536/cpsprodpb/f390/live/dd05ab20-9142-11ef-89ae-5575c76d98e6.jpg.webp",
        "title": "Labour Volunteers Helping Harris",
        "description": "It's 10 days to go until election day, and the race couldn't be tighter - welcome back to our live US election coverage.",
        "date": "2023-10-17T11:00:16Z",
        "category": "News"
    },
    {
        "id": 2,
        "image": "https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/2a2a/live/e36c28f0-950b-11ef-9504-b516e8b5f45f.jpg",
        "title": "Backlash Over Comments About Puerto Rico by Comedian",
        "description": "Vice-President Kamala Harris criticized Donald Trump's rally in New York, where a comedian referred to Puerto Rico as a 'floating island of garbage'.",
        "date": "2024-09-17T10:32:45Z",
        "category": "News"
    },
    {
        "id": 3,
        "image": "https://ichef.bbci.co.uk/ace/standard/1536/cpsprodpb/c4c7/live/176de2f0-91cf-11ef-b3c2-754b6219680e.png.webp",
        "title": "Gisele Pelicot's Stand in French Mass Rape Trial",
        "description": "Gisele Pelicot tells the court that women who have been raped should not feel shame - it's the perpetrators who should.",
        "date": "2024-10-15T10:30:56Z",
        "category": "News"
    },
    {
        "id": 4,
        "image": "https://ichef.bbci.co.uk/news/1536/cpsprodpb/e970/live/8d83cdb0-9512-11ef-8e6d-e3e64e16c628.jpg.webp",
        "title": "Comedian Calls Puerto Rico 'Island of Garbage' at Trump Rally",
        "description": "Comedian Tony Hinchcliffe's remarks at a Trump rally sparked outrage from both Republicans and Democrats, leading to accusations of racism.",
        "date": "2024-10-13T10:25:24Z",
        "category": "News"
    },
    {
        "id": 5,
        "image": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/3e81/live/e174ad80-91d0-11ef-8581-cd31a4127fee.jpg.webp",
        "title": "India Evacuates Millions as Cyclone Dana Approaches",
        "description": "Authorities in India are evacuating nearly 1.5 million people from the path of an approaching cyclone in the eastern states of Odisha and West Bengal.",
        "date": "2024-10-01T10:22:56Z",
        "category": "News"
    },
    {
        "id": 6,
        "image": "https://ichef.bbci.co.uk/news/1536/cpsprodpb/c509/live/f5610bc0-931c-11ef-b22c-69d6fbdd7891.jpg.webp",
        "title": "Mining Giants Sign $30bn Deal",
        "description": "A dam collapse released toxic waste and mud, flooding nearby towns, rivers, and forests.",
        "date": "2024-10-01T10:22:56Z",
        "category": "News"
    },
    {
        "id": 7,
        "image": "https://ichef.bbci.co.uk/images/ic/1024xn/p0jzgv06.jpg.webp",
        "title": "Guide to Traditional Irish Music Experiences in Galway",
        "description": "Galway, known for its vibrant pub culture and lively atmosphere, is home to one of Ireland's best music scenes.",
        "date": "2024-10-01T10:22:56Z",
        "category": "Culture"
    },
    {
        "id": 8,
        "image": "https://ichef.bbci.co.uk/news/1536/cpsprodpb/1fd3/live/5cebfca0-908e-11ef-a624-634f82a66078.jpg.webp",
        "title": "Tariffs Hurt His Business, Yet He's Voting for Trump",
        "description": "Wyoming entrepreneur Alan Chadwick is grappling with Trump's proposed tariffs while considering his voting priorities.",
        "date": "2024-10-01T10:22:56Z",
        "category": "News"
    },
    {
        "id": 9,
        "image": "https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/f46c/live/a846eef0-95cd-11ef-90df-3f1823a91773.jpg",
        "title": "Ballon d'Or Reaction & Man Utd Manager Latest",
        "description": "Vincent Garcia from France Football discusses Vinicius Jr's near win at the 2024 Ballon d'Or ceremony in Paris.",
        "date": "2024-10-01T10:22:56Z",
        "category": "Sport"
    },
    {
        "id": 10,
        "image": "https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/f46c/live/a846eef0-95cd-11ef-90df-3f1823a91773.jpg",
        "title": "Ballon d'Or Reaction & Man Utd Manager Latest",
        "description": "Vincent Garcia discusses the factors affecting Vinicius Jr's chances at the 2024 Ballon d'Or ceremony.",
        "date": "2024-10-01T10:22:56Z",
        "category": "Sport"
    }
];


class CustomSearch extends HTMLElement {
    constructor() {
        super();
        this.noticias = noticias;
    }

    connectedCallback() {
        const dialogBtn = document.querySelector('.dialog-search');
        const dialog = this.querySelector('dialog');
        const closeBtn = this.querySelector('.close-btn');

        // Show the dialog as a modal
        dialogBtn.addEventListener('click', () => {
            dialog.showModal();
        });

        // Close the dialog when clicking the close button
        closeBtn.addEventListener('click', () => {
            dialog.close();
        });

        // Event to perform the search
        const siteSearch = this.querySelector('#site-search');
        siteSearch.addEventListener('input', (event) => this.search(event));

        this.renderResults(''); // Initial render with empty search term
    }

    search(event) {
        event.preventDefault();
        const siteSearch = this.querySelector('#site-search');
        const term = siteSearch.value;
        this.renderResults(term); // Call renderResults with the search term
    }

    renderResults(term = '') {
        const searchResults = this.querySelector('#search-results');
        searchResults.innerHTML = ''; // Clear previous results

        const _noticias = this.noticias.filter(noticia =>
            noticia.title.toLowerCase().includes(term.toLowerCase())
        );  

        const template = this.querySelector('template').content;

        // Loop through filtered noticias and render them
        _noticias.forEach(noticia => {
            const li = template.querySelector('li').cloneNode(true);
            li.querySelector('.card .item-image').src = noticia.image;
            li.querySelector('.card .item-description').textContent = noticia.description;
            li.querySelector('relative-time').setAttribute('time', noticia.date);
            li.querySelector('.card .item-title a').textContent = noticia.title;

            const enlace = li.querySelector('.card .item-title a');
            const href = enlace.href;
            enlace.href = href.replace('{id}', noticia.id);

            searchResults.appendChild(li); // Append the new list item to the results
        });
    }
}

customElements.define('custom-search', CustomSearch);




class RelativeTime extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.render();
        setInterval(() => this.render(), 1000);
    }
    render() {
        const timeValue = this.getAttribute('time')
        const time = timeValue ? new Date(Number(timeValue)).getTime() : Date.now();
        const now = Date.now();

        const diff = now - time;
        const seconds = Math.floor(diff / 1000) || 1;
        const minutes = Math.floor(diff / (1000 * 60));
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);
        const years = Math.floor(months / 12);

        let aux = '...';
        if (months >= 12) {
            aux = `Hace ${years} año${years > 1 ? 's' : ''}`
        } else if (days > 30 && months >= 1) {
            aux = `Hace ${months} mes${months > 1 ? 'es' : ''}`
        } else if (days >= 1) {
            aux = `Hace ${days} día${days > 1 ? 's' : ''}`
        } else if (hours >= 1) {
            aux = `Hace ${hours} hora${hours > 1 ? 's' : ''}`
        } else if (minutes >= 1) {
            aux = `Hace ${minutes} minuto${minutes > 1 ? 's' : ''}`
        } else if (seconds >= 1) {
            aux = `Hace ${seconds} segundo${seconds > 1 ? 's' : ''}`
        }

        this.textContent = aux;
    }
}

customElements.define('relative-time', RelativeTime);
const botonNavegacion = document.querySelectorAll(".boton-navegacion");
botonNavegacion.forEach(button => {
    button.addEventListener("mouseover", function () {
        button.classList.add("nuevo-boton-navegacion");
    });

    button.addEventListener("mouseout", function () {
        button.classList.remove("nuevo-boton-navegacion");
    });
});

class MenuDialog extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const MenuDialog = this.querySelector(".contenedor-dialog-menu");
        const botonAbrir = document.querySelector(".imagen-menu");
        const botonesMenu = this.querySelector("boton-menu-dialog");

        botonAbrir.addEventListener("click", function () {
            MenuDialog.classList.toggle("mostrar-contenedor");
            if (botonAbrir.src.endsWith("cerrar.png")) {
                botonAbrir.src = "styles/lista.png"; // Cambiamos a lista.png
                botonAbrir.classList.remove("rotar"); // Quitar la rotación
            } else {
                botonAbrir.src = "styles/cerrar.png"; // Cambiamos a cerrar.png
                botonAbrir.classList.add("rotar"); // Agregar la rotación
            }
        });

        botonesMenu.addEventListener("mouseover", function () {
            botonesMenu.style.backgroundColor = 'rgba(230, 230, 230, 0.53)';
        });


    }
}
customElements.define("custom-menu", MenuDialog)

class CustomArticle extends HTMLElement {
    constructor() {
        super();
        this.articleId = Number(getId()); // Asegurarse que sea un número
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const article = noticias.find(article => article.id === this.articleId);
        if (article) {
            const h1 = this.querySelector('h1');
            h1.textContent = article.title;
            const imagen = this.querySelector("img");
            imagen.src = article.image;
            const description = this.querySelector("p");
            description.textContent = article.description;
            const time = this.querySelector("relative-time");
            time.setAttribute('time', article.date);

        }
    }
}
customElements.define('custom-article', CustomArticle);