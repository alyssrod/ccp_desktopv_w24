document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    themeToggleBtn.addEventListener('click', function() {
        console.log('Before toggle:', document.body.classList);
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
        console.log('After toggle:', document.body.classList);
    });

    function typeWriter(elementId, text, speed) {
        let i = 0;
        function type() {
            if (i < text.length) {
                document.getElementById(elementId).innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }
    typeWriter('typewriter-text', 'Welcome to My Page!', 100); 
});
