gsap.registerPlugin(ScrollTrigger);


// --- SETUP START ---
// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    lerp: 0.02
});




var lastScrollTop = 0;

locoScroll.on('scroll', function (scrollArgs) {
    var logoHeading = document.querySelector('.logo .text-logo');
    var header = document.querySelector('header');
    var scrollPosition = scrollArgs.scroll.y;
    var opacity = 1 - (scrollPosition / 200);

    // Update logo opacity
    logoHeading.style.opacity = opacity < 0 ? 0 : opacity;

    // Determine scroll direction
    var scrollDirection = scrollPosition > lastScrollTop ? 'down' : 'up';
    lastScrollTop = scrollPosition;

    // Check if scrolling down and header is not black
    if (scrollDirection === 'down' && header.style.backgroundColor !== 'rgba(0, 0, 0, 0.2)') {
        // Set black background instantly with opacity 0.2
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
    } else if (scrollDirection === 'up') {
        // Scroll up, gradually transition to transparent background
        header.style.transition = 'background-color 0.5s';
        header.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
});



$('.portfolio-item').isotope({
    // options
    itemSelector: '.item',
    layoutMode: 'fitRows'
});

$(".portfolio-menu ul li").click(function () {
    $(".portfolio-menu ul li").removeClass("active");
    $(this).addClass("active");

    var selector = $(this).attr("data-filter");
    $(".portfolio-item").isotope({
        filter: selector
    });
    return false;
});

// swiper js testimonials
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pauseOnMouseEnter: true,
    waitForTransition: true,
    autoplay: {
        delay: 5000,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

// Pause autoplay when mouse enters Swiper container
swiper.el.addEventListener('mouseenter', function () {
    swiper.autoplay.stop();
});

// Resume autoplay when mouse leaves Swiper container
swiper.el.addEventListener('mouseleave', function () {
    swiper.autoplay.start();
});

// clone logos

var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".partner-logos").appendChild(copy);

// equal card size

window.addEventListener('load', function () {
    setEqualHeight('.services-items .service-container');
});

function setEqualHeight(selector) {
    const elements = document.querySelectorAll(selector);
    let maxHeight = 0;

    elements.forEach(function (element) {
        const height = element.scrollHeight + 50; // Subtracting 50px for top padding
        if (height > maxHeight) {
            maxHeight = height;
        }
    });

    elements.forEach(function (element) {
        element.style.height = maxHeight + 'px';
    });
}

function menuOpen() {
    var sidebar = document.querySelector(".mobile-nav");
    sidebar.classList.add("active");
}

function menuClose() {
    var sidebar = document.querySelector(".mobile-nav");
    sidebar.classList.remove("active");
}

// Define the scroll-to-top button element
var scrollToTop = document.querySelector(".scroll-top");

// Function to handle scroll-to-top action
function scrollToTopHandler() {
    locoScroll.scrollTo("#hero");
}

// Add click event listener for scroll-to-top button
scrollToTop.addEventListener("click", scrollToTopHandler);

// Inside scroll event listener for Locomotive Scroll
locoScroll.on('scroll', function (scrollArgs) {
    // Your existing scroll event code here...

    // Check if the scroll-to-top button should be shown or hidden based on scroll position
    if (scrollArgs.scroll.y > 100) {
        scrollToTop.style.display = "block"; // Show scroll-to-top button if scroll position is greater than 100px
    } else {
        scrollToTop.style.display = "block"; // Hide scroll-to-top button otherwise
    }
});


// Define the "Our Work" link element
var ourWork = document.querySelector(".work-link");

// Add click event listener for "Our Work" link
ourWork.addEventListener("click", function () {
    locoScroll.scrollTo("#work");
});

// Define the "Our Services" link element
var serviceLink = document.querySelector(".services-link");

// Add click event listener for "Our Services" link
serviceLink.addEventListener("click", function () {
    locoScroll.scrollTo("#services");
});

var mobileWork = document.querySelector("#mobile-work");
var mobileServices = document.querySelector("#mobile-services");

mobileWork.addEventListener("click", function () {
    scroll.scrollTo("#work");
});


mobileServices.addEventListener("click", function () {
    scroll.scrollTo("#services");
});

// count js

// Function to start count animation when element is in view
function startCountAnimation(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let valueDisplay = entry.target;
            let startValue = 0;
            let endValue = parseInt(valueDisplay.getAttribute("data-val"));
            let duration = Math.floor(interval / endValue);

            let counter = setInterval(function () {
                startValue += 1;
                valueDisplay.textContent = startValue;
                if (startValue >= endValue) {
                    clearInterval(counter);
                    observer.unobserve(valueDisplay); // Stop observing once animation is completed
                }
            }, duration);
        }
    });
}

// Intersection Observer options
const options = {
    root: null, // Use the viewport as the root
    threshold: 0.5 // Trigger when 50% of the element is visible
};

// Create an Intersection Observer instance
const observer = new IntersectionObserver(startCountAnimation, options);

// Get all elements with id "num" and observe each of them
var valueDisplays = document.querySelectorAll("#num");
let interval = 4000;

valueDisplays.forEach(valueDisplay => {
    observer.observe(valueDisplay);
});


var elemC = document.querySelector("#elem-container");
var fixedImage = document.querySelector("#fixed-image");

elemC.addEventListener("mouseenter", function () {
    fixedImage.style.display = "block";
});

elemC.addEventListener("mouseleave", function () {
    fixedImage.style.display = "none";
});

var elems = document.querySelectorAll(".elem");

elems.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        var image = elem.getAttribute("data-image");
        fixedImage.style.backgroundImage = `url(${image})`;
    });
});

function loader() {
    var t1 = gsap.timeline();

    t1.to("#loader-bg-1", {
        top: "-100%",
        delay: 0.5,
        duration: 0.5,
        ease: "ease.out"
    });

    t1.from("#loader-bg-2", {
        top: "100%",
        delay: 0.5,
        duration: 0.5,
        ease: "expo.out"
    }, "anim");

    t1.to("#loader .hero-content h1", {
        delay: 0.6,
        duration: 0.5,
        color: "var(--secondaryColor)",
    }, "anim");

    t1.to("#loader", {
        display: "none"
    });
}

loader();

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Assume form is valid initially
        let formIsValid = true;

        // Reset previous errors
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.style.display = 'none');

        // Full Name Validation
        const fullName = document.getElementById('fullName');
        if (!fullName.value.trim()) {
            showError(fullName, "Enter your Full Name");
            formIsValid = false;
        }

        // Company Name Validation
        const company = document.getElementById('company');
        if (!company.value.trim()) {
            showError(company, "Enter your Company Name");
            formIsValid = false;
        }

        // Email Validation
        const email = document.getElementById('email');
        if (!email.value.trim()) {
            showError(email, "Enter your Email");
            formIsValid = false;
        } else if (!validateEmail(email.value)) {
            showError(email, "Incorrect Email", true); // Passing true to target the second span for email
            formIsValid = false;
        }

        // Phone Number Validation
        const phone = document.getElementById('phone');
        if (!phone.value.trim()) {
            showError(phone, "Enter your Phone Number");
            formIsValid = false;
        }

        // If form is valid, you might want to actually submit it
        // For this example, we'll just log to the console
        if (formIsValid) {
            console.log("Form is valid! Submitting...");
            // form.submit();
            // Or, proceed with AJAX submission, etc.
        }
    });

    // Function to show error message
    function showError(inputField, message, isEmailIncorrect = false) {
        const errorSpan = isEmailIncorrect ? inputField.nextElementSibling.nextElementSibling : inputField.nextElementSibling;
        errorSpan.textContent = message;
        errorSpan.style.display = 'block';
    }

    // Email Validation Function
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    }
});

function glowBoxes() {
    window.addEventListener('DOMContentLoaded', (event) => {
        const container = document.getElementById('glow-boxes-container');

        // 300+ glow boxes generate karna
        for (let i = 0; i < 336; i++) {
            const glowBox = document.createElement('span');
            glowBox.classList.add('glow-box');
            glowBox.id = `glow-box-${i + 1}`;
            container.appendChild(glowBox);
        }

        // Event listeners add karna
        const glowBoxes = document.querySelectorAll('.glow-box');

        glowBoxes.forEach((box, index) => {
            box.addEventListener('mouseenter', function () {
                if ((index + 1) % 2 === 0) {
                    // For even glow-boxes, change background to purple
                    this.style.backgroundColor = 'purple';
                } else {
                    // For odd glow-boxes, change background to secondary color
                    this.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--secondaryColor');
                }
                // Add box shadow
                this.style.boxShadow = '0 0 10px 0 rgba(7, 84, 176, .3)';
            });
            box.addEventListener('mouseleave', function () {
                // Revert back to transparent on mouse leave
                this.style.backgroundColor = 'transparent';
                // Remove box shadow
                this.style.boxShadow = '';
            });
        });
    });
}

glowBoxes()























