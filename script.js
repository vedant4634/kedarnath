
AOS.init({
    duration: 1000,
    once: true
});

const form = document.querySelector('.contact-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    alert('Inquiry Submitted Successfully!');

    form.reset();
});

