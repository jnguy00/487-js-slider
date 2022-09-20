// On page load: init()
//     Hide all but first slide 
//     Hide text for all but first slide 
//     Adds buttons top page if needed

// When user clicks next: nextSlide()
//     Fade out current slide, fade in next slide 

// When user clicks back: prevSlide()
//     Fade out current slide, fade in previous slide 

// When user is on last slide and clicks next:
//     Fade out current slide, go back to first slide

var slideIndex = 1;

function plusSlides(n){ //n = slide number ; function only runs when dots are being clicked (which is stated in the 'onclick' in the html)
    console.log("inside plusSlides with a value of " + n);
    showSlides(slideIndex += n); //calls the showSlides function according to what slideIndex is (1), then incrementing it by what n is
}


function currentSlide(n){ //for the slideshow dots ; n is what is defined in the onclick property in the HTML
    console.log(n);
    showSlides(slideIndex = n);
}


function showSlides(n){ //creating the function
    console.log("inside showSlides with a value of " + n);

    var slides = document.getElementsByClassName("my-slides"); //making all of the "my-slides" classes a variable so we can manipulate it
    console.log(slides);
    var dots = document.getElementsByClassName("dot"); //making all of the dots a variable

    //resets if end node
    if (n < 1){ //resets the slideIndex so that when you click back on the first slide it'll take you to the third slide
        console.log("inside the if statement");
        slideIndex = slides.length;
    }

    if (n > slides.length) { //resets the slideIndex so that when you click next on the third slide it'll take you to the first slide
        slideIndex = 1;
    }

    //hides the slides
    for (i = 0; i < slides.length; i++){ //hides all of the images so we can then make them appear one by one in the slideshow
        slides[i].style.display = "none"; //looping through each of the images and hiding each iteration
    }

    //changes the dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); //changes whatever the slide is at for the dot to be "active" ; changes the class name to "active"
    }

    slides[slideIndex-1].style.display = "block"; //-1 = minus 1 so the index becomes 0 ; setting the first slide to display: block so that it shows up
    dots[slideIndex-1].className += " active";
}

showSlides(slideIndex);