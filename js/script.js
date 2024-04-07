document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('checkbox');
    checkbox.addEventListener('change', function(e) {
        if (e.target.checked) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
        }
    });

    function typeWriter(elementId, text, speed) {
        let i = 0;
        const element = document.getElementById(elementId);
        if (!element) {
            console.log(`Element with ID ${elementId} not found.`);
            return;
        }
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }
    typeWriter('typewriter-text', 'Welcome to My Page!', 100);
});
