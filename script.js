document.addEventListener("DOMContentLoaded", () => {
    const welcomeMessage = document.querySelector(".welcome-container p");

    
    setTimeout(() => {
        welcomeMessage.style.opacity = "1";
    }, 1000);
});
