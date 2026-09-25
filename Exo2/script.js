const chooser = document.getElementById('chooser');

chooser.addEventListener('input', function(e) {
    document.documentElement.style.setProperty('--main-color', e.target.value);
});