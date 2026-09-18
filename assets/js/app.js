// Underlines på navlinks
// document.querySelectorAll(".link").forEach(line => {
// line.addEventListener('click', () => {
//     const underline = document.querySelector('.underline');
//     underline.style.width = line.offsetWidth + 'px';
//     underline.style.left = line.offsetLeft + 'px';
//     });
// });
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

function myFunction() {
    alert("Du har ikke adgang til at oprette Food stories eller opskrifter endnu. For at dele dine egne Food stories med fællesskabet skal du være Pro Chef. Bliv Pro Chef eller amateur cook og få mulighed for at oprette, dele og inspirere andre med dine egne historier og opskrifter.");
}


function myFunction1() {
    alert("Du har ikke adgang til at oprette opskrifter endnu. For at dele dine egne opskrifter med fællesskabet skal du være Pro Chef eller Amateur Cook. Bliv opgraderet og få mulighed for at oprette, dele og inspirere andre med dine egne retter.")
}

const gemKnapFoodstories = document.querySelectorAll(".fa-bookmark")

gemKnapFoodstories.forEach(function (gem) {
    gem.addEventListener("click", function () {
        gem.classList.toggle("fa-regular");
        gem.classList.toggle("fa-solid");
    });
});