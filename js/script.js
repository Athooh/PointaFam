// home page image slider
document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll('.slide');
    var currentSlide = 0;

    function showSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(showSlide, 5000); // Change slide every 10 seconds
    showSlide(); // Show initial slide
});

// Function to move carousel in about us page
function moveCarousel() {
    const container = document.querySelector('.carousel-container');
    const items = document.querySelectorAll('.carousel-item');
    const currentItem = items[0];
    container.style.transition = 'transform 0.9s ease';
    container.style.transform = `translateX(-${currentItem.offsetWidth}px)`;
    setTimeout(() => {
    container.appendChild(currentItem);
    container.style.transition = 'none';
    container.style.transform = 'translateX(0)';
    }, 3000); // Move every 3 seconds
}

  // Start carousel movement
setInterval(moveCarousel, 5000);

// product slider
function myFunction(smallImg)
{
    var fullImg = document.getElementById("imageSlide");
    fullImg.src = smallImg.src;
}

// Quantity scale (product page)
document.addEventListener("DOMContentLoaded", function() {
    const decreaseButton = document.querySelector(".decrease");
    const increaseButton = document.querySelector(".increase");
    const quantityInput = document.querySelector("input[type='number']");

    decreaseButton.addEventListener("click", function() {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });

    increaseButton.addEventListener("click", function() {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue < 10) { // Assuming the maximum quantity is 10
            quantityInput.value = currentValue + 1;
        }
    });
});

// shop description/reviews section
function showDescription(event) {
    document.getElementById("descriptionContent").style.display = "block";
    document.getElementById("reviewsContent").style.display = "none";
}

function showReviews(event) {
    document.getElementById("descriptionContent").style.display = "none";
    document.getElementById("reviewsContent").style.display = "block";
    // You can dynamically load reviews content here if needed
}
