document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('checkbox');
    if (checkbox) {
        checkbox.addEventListener('change', function() {
            document.body.classList.toggle('dark-mode', checkbox.checked);
            document.body.classList.toggle('light-mode', !checkbox.checked);
        });
    }

    function typeWriter(elements) {
        elements.forEach(({ elementId, text, speed }) => {
            const element = document.getElementById(elementId);
            if (element) {
                let i = 0;
                function type() {
                    if (i < text.length) {
                        element.innerHTML += text.charAt(i);
                        i++;
                        setTimeout(type, speed);
                    }
                }
                type();
            }
        });
    }

    const pageTexts = [
        { elementId: 'typewriter-text-index', text: 'Welcome to My Home Page!', speed: 100 },
        { elementId: 'typewriter-text-pets', text: 'Discover Our Pet Care Tips!', speed: 100 },
        { elementId: 'typewriter-text-recipes', text: 'Explore Delicious Recipes!', speed: 100 },
        { elementId: 'typewriter-text-travel', text: 'Travel With Us Around the World!', speed: 100 }
    ];

    typeWriter(pageTexts);
});
