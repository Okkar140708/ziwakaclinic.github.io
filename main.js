// readmorefunction
document.addEventListener("DOMContentLoaded", function() {
    const readMoreBtn = document.querySelector('.read-more');
    const remainingParagraph = document.querySelector('.remaining');

    // Set a fixed height for the paragraph initially
    remainingParagraph.style.height = '60px'; // Adjust the height as needed

    readMoreBtn.addEventListener('click', function() {
        remainingParagraph.classList.toggle('hidden');
        if (remainingParagraph.classList.contains('hidden')) {
            // Hide the paragraph and set a fixed height
            remainingParagraph.style.height = '60px'; // Adjust the height as needed
            readMoreBtn.textContent = 'Read more';
        } else {
            // Show the entire paragraph and remove the fixed height
            remainingParagraph.style.height = 'auto';
            readMoreBtn.textContent = 'Read less';
        }
    });
});

// doctore section
document.addEventListener("DOMContentLoaded", function() {
    const readMoreBtn = document.querySelector('.read-more');
    const remainingParagraph = document.querySelector('.remaining hidden');

    readMoreBtn.addEventListener('click', function() {
        remainingParagraph.classList.toggle('show');
        if (remainingParagraph.classList.contains('show')) {
            readMoreBtn.textContent = 'Read less';
        } else {
            readMoreBtn.textContent = 'Read more';
        }
    });
});

// doctor selection animation
document.addEventListener("DOMContentLoaded", function() {
    const doctorImage = document.getElementById('doctor-image');
    const doctorSection = document.getElementById('doctors');

    doctorSection.addEventListener('click', function() {
        doctorImage.classList.add('animate-doctor-image');
    });
});


// contact 
document.getElementById('toggleMapBtn').addEventListener('click', function() {
    var map = document.querySelector('.map');
    if (map.style.display === 'none' || map.style.display === '') {
        map.style.display = 'block';
    } else {
        map.style.display = 'none';
    }
});

function toggleMap() {
    // Add your logic to show/hide the map here
}

// Prevent the default behavior of anchor links
document.getElementById('toggleMapBtn').addEventListener('click', function(event) {
    event.preventDefault();
});

// Prevent the default behavior of form submission
document.getElementById('contactNowBtn').addEventListener('click', function(event) {
    event.preventDefault();
    // Add any additional logic here, such as form validation and submission
});



