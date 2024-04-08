document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.querySelector('#checkbox');
    themeSwitch.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
        }
    });

    const typewriterText = document.getElementById('typewriter');
    const text = 'Common Class Project'; 
    
    if (typewriterText) {
        let index = 0;
        function typeWriter() {
            if (index < text.length) {
                typewriterText.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeWriter, 100);
            }
        }
        typeWriter();
    }
}); 
