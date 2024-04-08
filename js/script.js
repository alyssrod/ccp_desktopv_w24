document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('checkbox');
    if (checkbox) {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                document.body.classList.remove('light-mode');
                document.body.classList.add('dark-mode');
            } else {
                document.body.classList.remove('dark-mode');
                document.body.classList.add('light-mode');
            }
        });
    }

    function typeWriter(text, id, speed = 100) {
        const element = document.getElementById(id);
        if (!element) return; // Exit if element not found
        
        let i = 0;
        function typing() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(typing, speed);
            }
        }
        typing();
    }

    const pageTitle = document.title;
    switch (pageTitle) {
        case 'About Me':
            typeWriter('Welcome to My About Me Page!', 'typewriter-text-index');
            break;
        case 'Pets':
            typeWriter('Explore Our Furry Friends!', 'typewriter-text-pets');
            break;
        case 'Recipes':
            typeWriter('Discover Delicious Recipes!', 'typewriter-text-recipes');
            break;
        case 'Travel':
            typeWriter('Join Our Travel Adventures!', 'typewriter-text-travel');
            break;
        default:
            console.log('No typewriter text set for this page.');
    }
});
