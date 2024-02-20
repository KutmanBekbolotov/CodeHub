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

document.addEventListener('DOMContentLoaded', function() {
    const instagramLink = document.getElementById('instagram-link');
    if (instagramLink) {
        instagramLink.addEventListener('click', function(event) {
            event.preventDefault();
            redirectToInstagram();
        });
    }
});

