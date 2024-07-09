var swiper = new Swiper(".myswiper", {
    spaceBetween: 30,
    centeredSlides: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('menu-icon');
  const navbar = document.querySelector('.navbar');

  menuIcon.addEventListener('click', function () {
      navbar.classList.toggle('active');
  });
});






document.addEventListener("DOMContentLoaded", function() {
  var whatsappLink = document.querySelector('.whatsapp-link');
  var message = encodeURIComponent("Hello, I'm interested in your services. Please contact me.");

  whatsappLink.addEventListener('click', function(event) {
    event.preventDefault();
    var href = this.getAttribute('href');
    var finalHref = href + '?text=' + message;
    window.open(finalHref, '_blank');
  });
});





document.addEventListener("DOMContentLoaded", function() {
  var instagramLink = document.querySelector('.instagram-link');
  var message = encodeURIComponent("Hello, I'm interested in your services. Please contact me.");

  instagramLink.addEventListener('click', function(event) {
    event.preventDefault();
    var href = this.getAttribute('href');
    var finalHref = href + '?message=' + message;
    window.open(finalHref, '_blank');
  });
});