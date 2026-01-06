document.addEventListener("DOMContentLoaded", () => {
    const salamiButton = document.getElementById("salami-button");
    const mionImage = document.getElementById("mion-image");

    salamiButton.addEventListener("click", () => {
        mionImage.style.display = "block";
        salamiButton.style.display = "none";
    });
});
