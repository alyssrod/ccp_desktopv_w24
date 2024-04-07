document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', function() {
            console.log('Before toggle:', document.body.classList);
            document.body.classList.toggle('dark-mode');
            document.body.classList.toggle('light-mode');
            console.log('After toggle:', document.body.classList);
        });
    } else {
        console.log('Theme toggle button not found.');
    }

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
