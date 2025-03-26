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

const passwordField = document.getElementById("passwordField");
const errorMessage = document.createElement("div");
errorMessage.textContent = "Забыли ID? Введите год создания лаборатории";
errorMessage.style.color = "white";
errorMessage.style.fontFamily = "TTTravels-Regular";
errorMessage.style.fontSize = "1.5vw";
errorMessage.style.position = "absolute";
errorMessage.style.top = "60%";
errorMessage.style.display = "none";
document.body.appendChild(errorMessage);

passwordField.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        if (passwordField.value === "2024") {
            
            document.querySelector(".third").scrollIntoView({ behavior: "smooth" });
        } else {
           
            errorMessage.style.display = "block";
        }
    }
});

passwordField.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        checkPassword();
    }
});


