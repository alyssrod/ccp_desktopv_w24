document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    
    function switchTheme(e) {
        if (e.target.checked) {
            document.body.setAttribute('class', 'dark-mode');
        } else {
            document.body.setAttribute('class', 'light-mode');
        }
    }

    toggleSwitch.addEventListener('change', switchTheme, false);

    const typewriterText = "Welcome to Alyssa's Website!";
    let i = 0;
    const speed = 50; 

    function typeWriter() {
        if (i < typewriterText.length) {
            document.getElementById("typewriter-text-index").innerHTML += typewriterText.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});
