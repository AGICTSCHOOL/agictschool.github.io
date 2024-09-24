/* toggle icon navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* Scroll sections active link*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    
/* sticky navbar */
let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);

/* remove toggle icon and navbar when click navbar link (scroll) */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/* scroll reveal */
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services.container, .pictures-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/* typed js */
const typed = new Typed('.multiple-text', {
    strings: ['Typist', 'Graphic Designer', 'Blogger'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

    document.querySelector("form").addEventListener("submit", function (event) {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const mobile = document.getElementById("mobile").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        // Basic validation
        if (!name || !email || !mobile || !subject || !message) {
            alert("Please fill out all fields.");
            event.preventDefault(); // Prevent form from submitting
        }
    });

    document.getElementById("download-btn").addEventListener("click", function() {
        // Dynamically trigger a file download or handle another action
        window.location.href = "files/bs-profile.pdf"; // File path
    });

    function toggleContent(event) {
        event.preventDefault(); // Prevent the default link behavior
        var moreContent = document.querySelector('.more-content');
        var btn = event.target;
    
        if (moreContent.style.display === "none") {
            moreContent.style.display = "block";
            btn.textContent = "Read Less";
        } else {
            moreContent.style.display = "none";
            btn.textContent = "Read More";
        }
    }

    function toggleReadMore(event) {
        event.preventDefault(); // Prevent default anchor behavior
        var serviceBox = event.target.closest('.services-box'); // Find the nearest services-box container
        var fullText = serviceBox.querySelector('.full-text');
        var shortText = serviceBox.querySelector('.short-text');
        var btn = event.target;
    
        if (fullText.style.display === "none") {
            fullText.style.display = "block";
            shortText.style.display = "none"; // Hide short text
            btn.textContent = "Read Less";
        } else {
            fullText.style.display = "none";
            shortText.style.display = "block"; // Show short text
            btn.textContent = "Read More";
        }
    }

    function toggleReadMore(event) {
        event.preventDefault(); // Prevent default anchor behavior
        var serviceBox = event.target.closest('.services-box'); // Find the nearest services-box container
        var fullText = serviceBox.querySelector('.full-text');
        var shortText = serviceBox.querySelector('.short-text');
        var btn = event.target;
    
        if (fullText.style.display === "none") {
            fullText.style.display = "block";
            shortText.style.display = "none"; // Hide short text
            btn.textContent = "Read Less";
        } else {
            fullText.style.display = "none";
            shortText.style.display = "block"; // Show short text
            btn.textContent = "Read More";
        }
    }

    function toggleReadMore(event) {
        event.preventDefault(); // Prevent default anchor behavior
        var serviceBox = event.target.closest('.services-box'); // Find the nearest services-box container
        var fullText = serviceBox.querySelector('.full-text');
        var shortText = serviceBox.querySelector('.short-text');
        var btn = event.target;
    
        if (fullText.style.display === "none") {
            fullText.style.display = "block";
            shortText.style.display = "none"; // Hide short text
            btn.textContent = "Read Less";
        } else {
            fullText.style.display = "none";
            shortText.style.display = "block"; // Show short text
            btn.textContent = "Read More";
        }
    }

    // JavaScript for handling the popup
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    const openPopupBtn = document.getElementById('open-popup');
    const closePopupBtn = document.getElementById('close-popup');
    const thumbnail = document.getElementById('thumbnail');
    const popupImage = document.getElementById('popup-image');

    // Open the popup when the link is clicked
    openPopupBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        // Set the src of the popup image to the src of the thumbnail
        popupImage.src = thumbnail.src;
        popup.style.display = 'block';
        overlay.style.display = 'block';
    });

    // Close the popup when the close button is clicked
    closePopupBtn.addEventListener('click', function() {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });

    // Close the popup when clicking outside of the popup
    overlay.addEventListener('click', function() {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });

    document.getElementById("download-btn").addEventListener("click", function (event) {
        event.preventDefault(); // Prevents the default anchor behavior

        // Create a download link
        var link = document.createElement("a");
        link.href = "Files/AG_Printer-Stationary_Profile";  // Relative path to your file in the project
        link.download = "AG_Printer-Stationary_Profile";  // Specify the file name for download
        link.click();  // Simulate the click
    });

 // JavaScript to handle button click and show confirmation message
 const sendBtn = document.getElementById('sendBtn');
 const confirmationMessage = document.getElementById('confirmationMessage');

 sendBtn.addEventListener('click', function() {
     // Show confirmation message by adding the 'show' class
     confirmationMessage.classList.add('show');

     // Disable the button to prevent further clicks
     sendBtn.disabled = true;

     // Optionally, hide the confirmation after a few seconds
     setTimeout(function() {
         confirmationMessage.classList.remove('show');
     }, 3000);  // Message will disappear after 3 seconds
 });