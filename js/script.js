document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    toggleSwitch.addEventListener('change', switchTheme, false);

    function switchTheme(e) {
        if (e.target.checked) {
            document.body.setAttribute('class', 'dark-mode');
        } else {
            document.body.setAttribute('class', 'light-mode');
        }
    }

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

    typeWriter('typewriter-text-travel', 'Welcome to Our Travel Section!', 100);
});
