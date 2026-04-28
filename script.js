// Set name and color
const title = document.getElementById("myName");
if (title) {
    title.innerText = "Deign Marc M. Dela Torre";
    title.style.color = "#2C3947";
}

// Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {
    hamburger.addEventListener("click", function() {
        navLinks.classList.toggle("open");
    });
}

// Typing Animation (only on index page)
const typingText = document.querySelector(".hero-text h3:last-of-type");
if (typingText) {
    const words = ["Web Designer", "Web Developer", "UI/UX Designer", "Figma User"];
    let wordIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];

        if (!isDeleting) {
            typingText.innerText = currentWord.substring(0, letterIndex + 1);
            letterIndex++;

            if (letterIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(type, 1500);
                return;
            }
        } else {
            typingText.innerText = currentWord.substring(0, letterIndex - 1);
            letterIndex--;

            if (letterIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }
        }

        setTimeout(type, isDeleting ? 80 : 120);
    }

    type();
}

// Scroll Animation
const fadeElements = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

fadeElements.forEach(function(el) {
    observer.observe(el);
});