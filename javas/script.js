document.addEventListener("DOMContentLoaded", function () {
    const scrollButton = document.getElementById("scrollButton");
    const section2 = document.getElementById("section2");

    scrollButton.addEventListener("click", function () {
        section2.scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    
    const images = document.querySelectorAll(".img2, .img3, .img4, .img5, .img6, .img7, .img8, .img9, .img10, .img11, .img12, .img13, .img14, .img15");
    
    images.forEach(img => {
        img.addEventListener("click", function () {
           
            const soundIndex = Math.floor(Math.random() * 3) + 1;
            const audio = new Audio(`sounds/PoppingBubble${soundIndex}.mp3`); // Указан правильный путь к аудио
            
            audio.play(); 
            
           
            img.style.transition = "opacity 0.3s ease-out, transform 0.3s ease-out";
            img.style.opacity = "0";
            img.style.transform = "scale(0.5)";
            
    
            setTimeout(() => {
                img.remove();
            }, 300);
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const passwordField = document.getElementById("passwordField");

    function switchSection() {
        const secondSection = document.querySelector(".second");
        const thirdSection = document.querySelector(".third");

        if (secondSection && thirdSection) {
            secondSection.style.transform = "translateY(-100vh)"; 
            thirdSection.style.transform = "translateY(0)"; 
        } else {
            console.error("Секции .second или .third не найдены");
        }
    }

    passwordField.addEventListener("keypress", function (event) {
        if (event.key === "Enter" && passwordField.value === "2024") {
            switchSection(); 
        }
    });
});

