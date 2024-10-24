// Event listener per lo scroll della navbar
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 0) {
    navbar.classList.add('glass');
    navbar.classList.remove('transparent');
  } else {
    navbar.classList.remove('glass');
    navbar.classList.add('transparent');
  }
});

// Event listener per il menu hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});


// Gestione del filtro dropdown
const dropdownLinks = document.querySelectorAll('.dropdown-content a');
dropdownLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Impedisci il comportamento di default del link
        const dataset = this.dataset.set;
        filterCards(dataset); 
    });
});

function filterCards(dataset) {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
      if (dataset === 'tutti' || card.dataset.set === dataset) {
          card.style.display = 'block'; // Mostra la card
      } else {
          card.style.display = 'none'; // Nascondi la card
      }
  });
}

// Linea Menu //
const dropdownContent = document.querySelector('.dropdown-content');
const scrollLine = document.querySelector('.scroll-line');

dropdownContent.addEventListener('scroll', () => {
    const scrollTop = dropdownContent.scrollTop; // Posizione verticale dello scroll
    const scrollHeight = dropdownContent.scrollHeight; // Altezza totale del contenuto
    const clientHeight = dropdownContent.clientHeight; // Altezza visibile del contenuto

    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

    scrollLine.style.top = scrollPercentage + '%';
});
