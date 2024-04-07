document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            document.body.classList.toggle('light-mode');
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
