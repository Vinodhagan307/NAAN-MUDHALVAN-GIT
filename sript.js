// Smooth scrolling for navbar links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Highlight active section in navbar
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + window.innerHeight / 2;
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        document.querySelectorAll('nav a').forEach(link => {
          link.classList.remove('text-blue-200'); // Remove highlight from other links
        });
        document.querySelector(`nav a[href="#${sectionId}"]`).classList.add('text-blue-200'); // Highlight the active link
      }
    });
  });
  