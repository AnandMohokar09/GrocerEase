document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    let slideshowInterval;

    startAutomaticSlideshow();

    function startAutomaticSlideshow() {
        slideshowInterval = setInterval(() => {
            showSlides();
        }, 3000);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");

        if (n !== undefined) {
            slideIndex = n; 
        } else {
            slideIndex++;
        }

        if (slideIndex > slides.length) { 
            slideIndex = 1;
        } else if (slideIndex < 1) {
            slideIndex = slides.length;
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

   
    function plusSlides(n) {
        showSlides(slideIndex += n);
        clearInterval(slideshowInterval);
    }

    function currentSlide(n) {
        showSlides(n);
        clearInterval(slideshowInterval);
    }

    document.querySelector('.prev').addEventListener('click', function() {
        plusSlides(-1);
    });

    document.querySelector('.next').addEventListener('click', function() {
        plusSlides(1);
        startAutomaticSlideshow();
    });

    
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener('click', function() {
            currentSlide(i + 1);
        });
    }
});
