
document.addEventListener('DOMContentLoaded', function() {
    document.title = 'Dynamic Title Set by JavaScript';
});

<script>
document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    themeToggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
    });
});
</script>

