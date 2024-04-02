const contactButton = document.querySelector('.contact-button');

    contactButton.addEventListener('click', function(e) {
      e.preventDefault();

      const footer = document.getElementById('footer');
      footer.scrollIntoView({ behavior: 'smooth' });
    });   
