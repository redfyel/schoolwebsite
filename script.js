let slideIndex = 0;
showSlides();

function plusSlides(n) {
    showSlides(slideIndex += n);//slideIndex=slideIndex+n
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (slideIndex >= slides.length) { slideIndex = 0 }
    // If the slideIndex goes beyond the last slide
    // (exceeds the length of the slides array), it resets to the first slide (index 0).
    if (slideIndex < 0) { slideIndex = slides.length - 1 }
    // If the slideIndex goes below 0 (before the first slide), 
    //it wraps around to the last slide by setting slideIndex to slides.length - 1.
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

