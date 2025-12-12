if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("service-worker.js");
}

const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupText = document.getElementById("popup-text");
const closePopup = document.getElementById("closePopup");

document.getElementById("purchase-xbox").addEventListener("click", () => {
    popupTitle.textContent = "Xbox 720 Preorder";
    popupText.textContent = "best console to preorder excellent choice mr professor";
    popup.style.display = "flex";
});

document.getElementById("purchase-phone").addEventListener("click", () => {
    popupTitle.textContent = "Gamer Phone 1080 Preorder";
    popupText.textContent = "ELITE GAMER PHONE BUY NOW";
    popup.style.display = "flex";
});

closePopup.addEventListener("click", () => {
    popup.style.display = "none";
});
