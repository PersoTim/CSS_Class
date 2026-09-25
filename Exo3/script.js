const color = document.querySelector('input[type="color"]');
const blur = document.querySelector('input[name="blur"]');
const spacing = document.querySelector('input[name="spacing"]');

function updateVariable(e) {
    const suffix = e.target.dataset.sizing || '';

    document.documentElement.style.setProperty(
        `--${e.target.name}`,
        e.target.value + suffix
    );

}

color.addEventListener('input', updateVariable);
blur.addEventListener('input', updateVariable);
spacing.addEventListener('input', updateVariable);
