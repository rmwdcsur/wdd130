//Listening events for all 3 small river images
document.getElementById("rivers-card1").addEventListener("click", () => {
    document.getElementById("rivers-img").src = "images/rsz_rivers1.jpg";
});
document.getElementById("rivers-card2").addEventListener("click", () => {
    document.getElementById("rivers-img").src = "images/rsz_rivers2.jpg";
});
document.getElementById("rivers-card3").addEventListener("click", () => {
    document.getElementById("rivers-img").src = "images/rsz_rivers3.jpg";
});


let images = ["images/rsz_rivers2.jpg", "images/rsz_rivers3.jpg", "images/rsz_rivers1.jpg"];

let index = 0;
const imgElement = document.getElementById('rivers-img');

function change() {
   imgElement.src = images[index];
   index > 1 ? index = 0 : index++;
}

window.onload = function () {
    setInterval(change, 5000);
};