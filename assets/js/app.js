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
    alert("Du har ikke adgang til at oprette Food stories endnu. or at dele dine egne Food stories med fællesskabet skal du være Pro Chef. Bliv Pro Chef og få mulighed for at oprette, dele og inspirere andre med dine egne historier.");
}