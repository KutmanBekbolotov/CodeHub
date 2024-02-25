function showModal(title, description) {
    var modal = document.getElementById('modal');
    var courseTitle = document.getElementById('courseTitle');
    var courseDescription = document.getElementById('courseDescription');

    courseTitle.textContent = title;
    courseDescription.textContent = description;

    modal.style.display = 'block';
}

function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}

function redirectToInstagram() {
    window.location.href = "https://www.instagram.com/bulgass.it/";
}


function showOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    const instagramLink = document.getElementById('instagram-link');
    if (instagramLink) {
        instagramLink.addEventListener('click', function(event) {
            event.preventDefault();
            redirectToInstagram();
        });
    }

    const aboutLink = document.getElementById('about-link');
    const coursesLink = document.getElementById('courses-link');

    if (aboutLink) {
        aboutLink.addEventListener('click', function(event) {
            event.preventDefault();
            showOverlayAbout();
        });
    }

    if (coursesLink) {
        coursesLink.addEventListener('click', function(event) {
            event.preventDefault();
            showOverlayCourses();
        });
    }
});

function showOverlayAbout() {
    const overlay = document.getElementById('overlay-about');
    overlay.style.display = 'block';
}

function closeOverlayAbout() {
    const overlay = document.getElementById('overlay-about');
    overlay.style.display = 'none';
}

function showOverlayCourses() {
    const overlay = document.getElementById('overlay-courses');
    overlay.style.display = 'block';
}

function closeOverlayCourses() {
    const overlay = document.getElementById('overlay-courses');
    overlay.style.display = 'none';
}

  