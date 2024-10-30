const noticias = [
    {
        "id": 1,
        "image": "https://ichef.bbci.co.uk/ace/standard/1536/cpsprodpb/f390/live/dd05ab20-9142-11ef-89ae-5575c76d98e6.jpg.webp",
        "title": "Labour Volunteers Helping Harris",
        "description": "It's 10 days to go until election day, and the race couldn't be tighter - welcome back to our live US election coverage.",
        "date": 1697540416000,
        "category": "News"
    },
    {
        "id": 2,
        "image": "https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/2a2a/live/e36c28f0-950b-11ef-9504-b516e8b5f45f.jpg",
        "title": "Backlash Over Comments About Puerto Rico by Comedian",
        "description": "Vice-President Kamala Harris criticized Donald Trump's rally in New York, where a comedian referred to Puerto Rico as a 'floating island of garbage'.",
        "date": 1730315372000,
        "category": "News"
    },
    {
        "id": 3,
        "image": "https://ichef.bbci.co.uk/ace/standard/1536/cpsprodpb/c4c7/live/176de2f0-91cf-11ef-b3c2-754b6219680e.png.webp",
        "title": "Gisele Pelicot's Stand in French Mass Rape Trial",
        "description": "Gisele Pelicot tells the court that women who have been raped should not feel shame - it's the perpetrators who should.",
        "date": 1728981056000,
        "category": "News"
    },
    {
        "id": 4,
        "image": "https://ichef.bbci.co.uk/news/1536/cpsprodpb/e970/live/8d83cdb0-9512-11ef-8e6d-e3e64e16c628.jpg.webp",
        "title": "Comedian Calls Puerto Rico 'Island of Garbage' at Trump Rally",
        "description": "Comedian Tony Hinchcliffe's remarks at a Trump rally sparked outrage from both Republicans and Democrats, leading to accusations of racism.",
        "date": 1728548724000,
        "category": "News"
    },
    {
        "id": 5,
        "image": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/3e81/live/e174ad80-91d0-11ef-8581-cd31a4127fee.jpg.webp",
        "title": "India Evacuates Millions as Cyclone Dana Approaches",
        "description": "Authorities in India are evacuating nearly 1.5 million people from the path of an approaching cyclone in the eastern states of Odisha and West Bengal.",
        "date": 1725128576000,
        "category": "News"
    },
    {
        "id": 6,
        "image": "https://ichef.bbci.co.uk/news/1536/cpsprodpb/c509/live/f5610bc0-931c-11ef-b22c-69d6fbdd7891.jpg.webp",
        "title": "Mining Giants Sign $30bn Deal",
        "description": "A dam collapse released toxic waste and mud, flooding nearby towns, rivers, and forests.",
        "date": 1725128576000,
        "category": "News"
    },
    {
        "id": 7,
        "image": "https://ichef.bbci.co.uk/images/ic/1024xn/p0jzgv06.jpg.webp",
        "title": "Guide to Traditional Irish Music Experiences in Galway",
        "description": "Galway, known for its vibrant pub culture and lively atmosphere, is home to one of Ireland's best music scenes.",
        "date": 1725128576000,
        "category": "Culture"
    },
    {
        "id": 8,
        "image": "https://ichef.bbci.co.uk/news/1536/cpsprodpb/1fd3/live/5cebfca0-908e-11ef-a624-634f82a66078.jpg.webp",
        "title": "Tariffs Hurt His Business, Yet He's Voting for Trump",
        "description": "Wyoming entrepreneur Alan Chadwick is grappling with Trump's proposed tariffs while considering his voting priorities.",
        "date": 1696144976000,
        "category": "News"
    },
    {
        "id": 9,
        "image": "https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/f46c/live/a846eef0-95cd-11ef-90df-3f1823a91773.jpg",
        "title": "Ballon d'Or Reaction & Man Utd Manager Latest",
        "description": "Vincent Garcia from France Football discusses Vinicius Jr's near win at the 2024 Ballon d'Or ceremony in Paris.",
        "date": 1725128576000,
        "category": "Sport"
    },    
    {
        "id": 10,
        "image": "https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/f46c/live/a846eef0-95cd-11ef-90df-3f1823a91773.jpg",
        "title": "Ballon d'Or Reaction & Man Utd Manager Latest",
        "description": `Manchester City's Rodri was a worthy winner of the 2024 Ballon d'Or award, according to manager Pep Guardiola.
        The Spain midfielder saw off competition from Real Madrid duo Vinicius Jr and Jude Bellingham - who finished second and third respectively - to win the prize.`,
        "date": "1730279343000",
        "category": "Sport"
    },
    {
        "id": 11,
        "image": "https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/0ede/live/a32e4cd0-9544-11ef-89ae-5575c76d98e6.jpg",
        "title": "League Cup: Build-up to six EFL Cup matches including Spurs v Man City",
        "description": `Manchester United interim boss Ruud van Nistelrooy told Sky Sports: "It's mixed feelings. Sad to see Erik go. He was the one who got me here. Our first conversation was about his passion for Man Utd. He did everything for this club.`,
        "date": "1730279343000",
        "category": "Sport"
    },
    {
        "id": 12,
        "image": "https://ichef.bbci.co.uk/ace/standard/800/cpsprodpb/8f16/live/f9b4cd70-96a9-11ef-aad8-ef2f741889f2.jpg.webp",
        "title": "Van Nistelrooy on Chelsea match duties amid Amorim pursuit",
        "description": `Interim manager Ruud van Nistelrooy will conduct Manchester United's pre-match media before Sunday's Premier League game against Chelsea, the clearest sign yet Ruben Amorim will not be in charge this weekend.`,
        "date": "1730192943000",
        "category": "Sport"
    },
    {
        "id": 13,
        "image": "https://ichef.bbci.co.uk/ace/standard/624/cpsprodpb/11E88/production/_133625337_0915af2b-d0ba-4aa8-b9dc-2e46f8153b13.jpg.webp",
        "title": "The Rumble in the Jungle 50 years on, by those who witnessed it",
        "description": `He announced that the winner would fight Ali in Kinshasa, Zaire [now the Democratic Republic of the Congo]. I'd never even heard of Kinshasa. When King went on to say the fight would take place at 4am, I nearly fell off my chair laughing. I was thinking: 'Who is this clown?' Seven months later and there I was, ringside in Kinshasa, at 4 o'clock in the morning…`,
        "date": "1729328943000",
        "category": "Sport"
    },
    {
        "id": 14,
        "image": "https://ichef.bbci.co.uk/ace/standard/624/cpsprodpb/b9e4/live/33c19c10-96b8-11ef-bba6-b9fc90380578.jpg.webp",
        "title": "Boulter through to quarter-finals of Hong Kong Open",
        "description": `He announced that the winner would fight Ali in Kinshasa, Zaire [now the Democratic Republic of the Congo]. I'd never even heard of Kinshasa. When King went on to say the fight would take place at 4am, I nearly fell off my chair laughing. I was thinking: 'Who is this clown?' Seven months later and there I was, ringside in Kinshasa, at 4 o'clock in the morning…`,
        "date": "1729328943000",
        "category": "Sport"
    },
    {
        "id": 15,
        "image": "https://ichef.bbci.co.uk/ace/standard/800/cpsprodpb/2aa2/live/40561e40-9615-11ef-83ca-a3329ade90f4.jpg.webp", 
        "title": "England's time to win tight games is now - Earl",
        "description": `Autumn Nations Series: England v New Zealand Venue: Allianz Stadium, Twickenham Date: Saturday 2 November Kick-off: 15:10 GMTCoverage: Listen on BBC Radio 5 Sports Extra and BBC Sounds and follow live text commentary on the BBC Sport website and app.`,
        "date": "1732007343000",
        "category": "Sport"
    },
    {
        "id": 16,
        "image": "https://ichef.bbci.co.uk/ace/standard/640/cpsprodpb/9937/live/a4215b30-66e8-11ef-b0a5-4324d1372609.jpg.webp", 
        "title": "'The cash came up to my torso' - tales of a match-fixer",
        "description": `The hotel lift gently levelled out and a muffled ding sounded. The doors slid back.What Moses Swaibu saw next has stayed with him ever since."We were going to the room at the end of the corridor," he says."I just remember that colour red, it was a really royal type of colour."And the place smelled expensive, you took a breath in and it was like 'damn this environment ain't how outside is'. It felt like a film set."`,
        "date": "1732007343000",
        "category": "Sport"
    },
    {
        "id": 17,
        "image": "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/04bc/live/216581e0-9608-11ef-83ca-a3329ade90f4.jpg.webp", 
        "title": "'Injustice' - Brazil reacts to Vinicius Jr snub",
        "description": `Journalists and politicians in Brazil have criticised Rodri being voted the winner of the Ballon d'Or ahead of Vinicius Junior. Brazil forward Vinicius, 24, was Real Madrid's top scorer last season as the Spanish giants won the Champions League and La Liga. Manchester City's Spain midfielder Rodri helped his country win Euro 2024 in July and also won the Premier League, Uefa Super Cup and Club World Cup with City.`,
        "date": "1731229323000",
        "category": "Sport"
    },
    {
        "id": 18,
        "image": "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/e997/live/8c7e32e0-96e6-11ef-adc9-970c197ac134.jpg.webp", 
        "title": "You can't please everyone - Klopp defends Red Bull role",
        "description": `Jurgen Klopp has defended his decision to become head of global soccer at Red Bull and explained it was difficult to take a job where "everyone is happy".The German, who left Liverpool at the end of last season, has received a lot of criticism for joining Red Bull - especially among fans of his former club Borussia Dortmund.`,
        "date": "1731229323000",
        "category": "Sport"
    }

];

const getId = () => {
    const searchParams = new URLSearchParams(location.search.slice(1));
    return Number(searchParams.get('id'));
  }

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
        this.articleId = getId();
    }
    connectedCallback() {
        this.render();
    }

    render() {
        const article = noticias.find(article => article.id === this.articleId)
        if (article) {
            // reemplazos de los contenidos del article
            const h1 = this.querySelector('h1');
            h1.textContent = article.title;

            // reemplazar image
            const img = this.querySelector('img');
            img.src = article.image;

            const description = this.querySelector("p");
            description.textContent = article.description;

            const time = this.querySelector("relative-time");
            time.setAttribute('time', article.date)
            console.log(article.date)
        }
    }
}
customElements.define('custom-article', CustomArticle);