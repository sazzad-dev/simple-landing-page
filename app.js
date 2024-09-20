// Add simple fade-in animations
// window.addEventListener('scroll', () => {
//   const sections = document.querySelectorAll('section');
//   const scrollPos = window.pageYOffset;

//   sections.forEach((section) => {
//     if (scrollPos > section.offsetTop - window.innerHeight / 1.3) {
//       section.style.opacity = 1;
//       section.style.transform = 'translateY(0)';
//     } else {
//       section.style.opacity = 0;
//       section.style.transform = 'translateY(20px)';
//     }
//   });
// });

// For responsive menu toggle
// const navToggle = document.querySelector('.nav-toggle');
// const navList = document.querySelector('.nav-list');

// navToggle.addEventListener('click', () => {
//   navList.classList.toggle('nav-list-active');
// });

function navigationHandler(x) {
  x.classList.toggle('change');
}
