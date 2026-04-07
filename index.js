document.addEventListener('DOMContentLoaded', () => {
    const modalOverlay = document.getElementById('modalOverlay');
    const openBtn = document.getElementById('openModalBtn');
    const closeBtn = document.getElementById('closeModalBtn');
    const progressFill = document.querySelector('.progress-fill');
    const accordion = document.querySelector('.accordion');
    const progressBar = document.querySelector('.progress-bar');
    const loadingText = document.querySelector('.loading-text');

    function openModal() {
        modalOverlay.classList.add('active');
        progressFill.style.width = '0%';
        accordion.style.display = 'none';
        animateProgress(() => {
            accordion.style.display = 'block';
            progressBar.style.display = 'none';
            loadingText.textContent = 'Загрузка завершена （￣︶￣）↗　'
        });
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
    }

    function animateProgress(callback) {
        const duration = 3000;
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
            } else {
                if (callback) callback();
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
});