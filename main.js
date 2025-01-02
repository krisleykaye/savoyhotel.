const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  });

  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  // header container
  ScrollReveal().reveal(".header__container .section__subheader", {
    ...scrollRevealOption,
  });
  
  ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
    delay: 500,
  });
  
  ScrollReveal().reveal(".header__container .btn", {
    ...scrollRevealOption,
    delay: 1000,
  });
  
  // room container
  ScrollReveal().reveal(".room__card", {
    ...scrollRevealOption,
    interval: 500,
  });
  
  // feature container
  ScrollReveal().reveal(".feature__card", {
    ...scrollRevealOption,
    interval: 500,
  });
  
  // news container
  ScrollReveal().reveal(".news__card", {
    ...scrollRevealOption,
    interval: 500,
  });

  
  
let currentImageIndex=0;
const images=document.querySelectorAll('.thumbnail');
function openLightbox(){
  document.getElementById('lightbox').style.display='block';
  showImage(currentImageIndex);
}

function closeLightBox(){
  document.getElementById('lightbox').style.display='none';
}

function showImage(index){
  currentImageIndex=index;
  document.getElementById('lightboxImage').src=images[currentImageIndex].src;
}

function changeImage(direction){
  currentImageIndex += direction;
  if(currentImageIndex < 0){
    currentImageIndex = images.length - 1;
  }else if(currentImageIndex >= images.length){
    currentImageIndex = 0;
  }

  showImage(currentImageIndex);
}
  images.forEach((img, index) => {
    img.addEventListener('click', () => showImage(index));
  });









  // Reference to the "Book Now" button
const bookNowBtn = document.getElementById('book-now-btn');

// Add a click event listener to show an alert
bookNowBtn.addEventListener('click', () => {
  alert('THANK YOU FOR BOOKING');
});

