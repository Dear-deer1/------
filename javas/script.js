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
        let height2 = secondSection.innerHeight

        thirdSection.scrollIntoView({ behavior: "smooth" });
    }

    passwordField.addEventListener("keypress", function (event) {
        if (event.key === "Enter" && passwordField.value === "2024") {
            switchSection(); 
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const scrollButton = document.getElementById("scrollButton");
    const section2 = document.getElementById("section2");
    const section4 = document.getElementById("section4");
    
   
    scrollButton.addEventListener("click", function () {
        section2.scrollIntoView({ behavior: "smooth" });
    });

   
    let clickedFlasks = 0;
    
    function handleFlaskClick() {
        clickedFlasks++;
        
        
        if(clickedFlasks === 3) {
           
            section4.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            
            section4.style.opacity = 1;
        }
    }

   
    document.getElementById('flask_img1').addEventListener('click', function() {
        this.style.display = 'none';
        document.getElementById('empty_flask1').style.opacity = '0';
        document.getElementById('flask_img1_1').style.opacity = '1';
        handleFlaskClick();
    });

    document.getElementById('flask_img2').addEventListener('click', function() {
        this.style.display = 'none';
        document.getElementById('empty_flask2').style.opacity = '0';
        document.getElementById('flask_img1_2').style.opacity = '1';
        handleFlaskClick();
    });

    document.getElementById('flask_img3').addEventListener('click', function() {
        this.style.display = 'none';
        document.getElementById('empty_flask3').style.opacity = '0';
        document.getElementById('flask_img1_3').style.opacity = '1';
        handleFlaskClick();
    });
});

