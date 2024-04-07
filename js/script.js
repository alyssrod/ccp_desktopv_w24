document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('checkbox');
    if (checkbox) {
        checkbox.addEventListener('change', function() {
            document.body.classList.toggle('dark-mode', checkbox.checked);
            document.body.classList.toggle('light-mode', !checkbox.checked);
        });
    }

    function typeWriter(elementId, text, speed) {
        let i = 0;
        const element = document.getElementById(elementId);
        if (element) {
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            type();
        }
    }
    if (document.getElementById('typewriter-text')) {
        typeWriter('typewriter-text', 'Welcome to My Page!', 100);
    }
});
