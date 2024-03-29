const buttons = document.querySelectorAll('.button');
console.log(buttons)

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]")
        const currentSlide = slides.querySelector("[data-current]")
        let newIndex = [...slides.children].indexOf(currentSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0
        slides.children[newIndex].dataset.current = true
        delete currentSlide.dataset.current
    })
})
