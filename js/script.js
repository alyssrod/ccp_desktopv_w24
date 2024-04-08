document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('checkbox');
    if (checkbox) {
        checkbox.addEventListener('change', function() {
            document.body.classList.toggle('dark-mode', checkbox.checked);
            document.body.classList.toggle('light-mode', !checkbox.checked);
        });
    }

    const typewriterTargets = [
        { id: 'typewriter-text-index', text: 'Welcome to My Page!' },
        { id: 'typewriter-text-recipes', text: 'Delicious Recipes Await!' },
        { id: 'typewriter-text-pets', text: 'Care for Your Beloved Pets' },
        { id: 'typewriter-text-travel', text: 'Explore the World With Us' }
    ];

    typewriterTargets.forEach(target => {
        const element = document.getElementById(target.id);
        if (element) {
            let i = 0;
            function type() {
                if (i < target.text.length) {
                    element.innerHTML += target.text.charAt(i);
                    i++;
                    setTimeout(type, 100);
                }
            }
            type();
        }
    });
});
