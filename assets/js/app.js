// Underlines på navlinks
document.querySelectorAll(".link").forEach(line => {
    line.addEventListener('click', () => {
        const underline = document.querySelector('.underline');
        underline.style.width = line.offsetWidth + 'px';
        underline.style.left = line.offsetLeft + 'px';
    });
});

// Gem knap

const gemKnap = document.querySelectorAll(".opskriftKortGem");

gemKnap.forEach(function (knap) {

    const gemKnapIcon = knap.querySelector("i");
    knap.addEventListener("click", function () {
        gemKnapIcon.classList.toggle("fa-regular");
        gemKnapIcon.classList.toggle("fa-solid");
    });
});