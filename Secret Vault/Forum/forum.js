const readMoreLinks = document.querySelectorAll('.read-more');
const overlay = document.querySelector('.overlay');
const overlayContent = document.querySelector('.overlay-content');
const closeOverlay = document.querySelector('.close-overlay');
const searchInput = document.getElementById('search-input');
const articleCards = document.querySelectorAll('.article-card');

// Funzionalità di ricerca (aggiornata)
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    articleCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const author = card.querySelector('.author').textContent.toLowerCase();

        if (title.includes(searchTerm) || author.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Funzionalità dell'overlay
readMoreLinks.forEach(link => {
    link.addEventListener('click', () => {
        const targetArticleId = link.dataset.target; // Ottieni l'ID dell'articolo dal dataset
        const articleContentElement = document.getElementById(targetArticleId); // Ottieni l'elemento con il contenuto completo
        const articleCard = link.closest('.article-card');
        const articleTitle = articleCard.querySelector('h3').textContent;
        const articleAuthor = articleCard.querySelector('.author').textContent;
        const articleDate = articleCard.querySelector('.date').textContent;
        const articleImage = articleCard.querySelector('img').src;

        // Crea elementi HTML per autore, data e immagine
        const authorElement = document.createElement('span');
        authorElement.className = 'author';
        authorElement.innerHTML = '<i class="fas fa-user"></i> ' + articleAuthor;

        const dateElement = document.createElement('span');
        dateElement.className = 'date';
        dateElement.innerHTML = '<i class="fas fa-calendar-alt"></i> ' + articleDate;

        const imageElement = document.createElement('img');
        imageElement.src = articleImage;
        imageElement.alt = articleTitle;
        imageElement.className = 'overlay-image';
       
        // Aggiungi il contenuto completo all'overlay
        const contentElement = document.createElement('div');
        contentElement.innerHTML = articleContentElement.innerHTML; // Ottieni il contenuto HTML dall'elemento nascosto
        overlayContent.appendChild(contentElement);
        

        // Aggiungi gli elementi all'overlay
        const overlayMeta = overlayContent.querySelector('.article-meta');
        overlayMeta.innerHTML = '';
        overlayMeta.appendChild(authorElement);
        overlayMeta.appendChild(dateElement);
        overlayContent.insertBefore(imageElement, overlayMeta);
        

        overlay.style.display = 'flex';
    });
});

// Event listener per la chiusura dell'overlay al click sulla "x"
closeOverlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    overlayContent.innerHTML = '<span class="close-overlay">&times;</span>' +
                                '<div class="article-meta"></div>';
});

// Event listener per la chiusura dell'overlay al click fuori dal contenuto
overlay.addEventListener('click', (event) => {
    if (event.target === overlay && !event.target.classList.contains('close-overlay') && !event.target.closest('.overlay-content > *')) {
        overlay.style.display = 'none';
        overlayContent.innerHTML = '<span class="close-overlay">&times;</span>' +
                                '<div class="article-meta"></div>';
    }
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});
