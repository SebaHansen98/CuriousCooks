// Underlines på navlinks
document.querySelectorAll(".link").forEach(line => {
line.addEventListener('click', () => {
    const underline = document.querySelector('.underline');
    underline.style.width = line.offsetWidth + 'px';
    underline.style.left = line.offsetLeft + 'px';
    });
});