const modalOverlay = document.getElementById('modalOverlay');
const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeModalBtn');
const progressBar = document.querySelector('.progress-bar');

function openModal() {
    modalOverlay.classList.add('active');
    let progress = 0;
    progressBar.style.setProperty('--progress', '0%');

    const interval = setInterval(() => {
        progress += 2;
        if (progress > 100) {
            clearInterval(interval);
        } else {
            progressBar.style.setProperty('--progress', progress + '%');
        }
    }, 50);
}

function closeModal() {
    modalOverlay.classList.remove('active');
}

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => {
    if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) closeModal();
});