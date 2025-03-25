document.addEventListener("DOMContentLoaded", function () {
    const scrollButton = document.getElementById("scrollButton");
    const section2 = document.getElementById("section2");

    scrollButton.addEventListener("click", function () {
        section2.scrollIntoView({ behavior: "smooth" });
    });
});