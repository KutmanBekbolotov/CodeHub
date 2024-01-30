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
