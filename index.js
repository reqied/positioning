const modalOverlay = document.getElementById('modalOverlay');
const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeModalBtn');
const progressFill = document.querySelector('.progress-fill');

function openModal() {
    modalOverlay.classList.add('active');

    if (progressFill) {
        progressFill.style.width = '0%';
    }
    if (progressFill) {
        animateProgress();
    }
}

function closeModal() {
    modalOverlay.classList.remove('active');
}

function animateProgress() {
    const duration = 3000; // 3 секунды
    let startTime = null;

    function animate(currentTime) {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;

        let progress = timeElapsed / duration;
        if (progress > 1) progress = 1;

        progressFill.style.width = progress * 100 + '%';

        progressFill.parentElement.style.setProperty('--progress', progress * 100 + '%');

        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}
openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', e => {
    if (e.target === modalOverlay) closeModal();
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) closeModal();
});