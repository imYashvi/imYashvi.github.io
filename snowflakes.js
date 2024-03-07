document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('nav ul').classList.add('show');
    
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('emboss'));
            this.classList.add('emboss');
        });
    });
});

const text = "<h1>I am Yashvi, an aspiring Front-End Developer "; 
let index = 0;

function type() {
  document.getElementById('text').innerHTML = text.slice(0, index++);
  if (index <= text.length) {
    setTimeout(type, 100);
  }
}

type();
