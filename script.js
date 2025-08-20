const boxes = document.querySelectorAll('.scroll , .upside');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1 // Adjust this to control when the animation triggers
});

boxes.forEach(box => observer.observe(box));