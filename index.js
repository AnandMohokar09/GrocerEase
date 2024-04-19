const slider = () => {
    const imagelist = document.querySelector(".img-list");
    const slideButtons = document.querySelectorAll(".slide-button");

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imagelist.clientWidth * direction;
            imagelist.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

    const handleSlideButtons = () => {
        slideButtons[0].style.display = "block";
        slideButtons[1].style.display = "block";
    }

    imagelist.addEventListener("scroll", () => {
        handleSlideButtons();
    });

}

slider();
