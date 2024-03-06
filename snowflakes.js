document.addEventListener('DOMContentLoaded', function() {
    // Navbar animation on page load
    document.querySelector('nav ul').classList.add('show');
    
    // Navbar link click event to add emboss effect
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove emboss effect from all links
            navLinks.forEach(l => l.classList.remove('emboss'));
            // Add emboss effect to the clicked link
            this.classList.add('emboss');
        });
    });
});
