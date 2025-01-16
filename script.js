// Parallax Scrolling Effect
window.addEventListener('scroll', () => {
  let offset = window.pageYOffset;
  document.querySelector('.hero').style.backgroundPositionY = offset * 0.5 + 'px';
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Testimonials Carousel
let index = 0;
const testimonials = document.querySelectorAll('.testimonial');
const total = testimonials.length;

setInterval(() => {
  index = (index + 1) % total;
  document.querySelector('.testimonial-container').style.transform = `translateX(-${index * 100}%)`;
}, 4000);

// AJAX Form Submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  fetch('/submit', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById('responseMessage').textContent = data.message;
  })
  .catch(error => {
    document.getElementById('responseMessage').textContent = 'Error submitting form.';
  });
});
