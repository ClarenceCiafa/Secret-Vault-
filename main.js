window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) { 
      navbar.classList.add('glass'); 
      navbar.classList.remove('transparent'); 
    } else { 
      navbar.classList.remove('glass');
      navbar.classList.add('transparent');
    }
  });

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
  });


