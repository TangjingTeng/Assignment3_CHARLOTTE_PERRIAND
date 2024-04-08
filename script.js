document.addEventListener("DOMContentLoaded", function() {
  
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          
            e.preventDefault();

            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            
            targetSection.scrollIntoView({
                behavior: "smooth" 
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1 
    });


    document.querySelectorAll('.txt').forEach(el => {
        observer.observe(el);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1
    });

    
    const el = document.getElementById('animateMe');
    if (el) observer.observe(el);
});

