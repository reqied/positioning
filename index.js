const modal = document.getElementById("myModal");
const btn = document.getElementById("openModalBtn");
const span = document.getElementsByClassName("close")[0];

const progressFill = document.querySelector('.progress-fill');

function openModal() {
    modal.style.display = "flex"; 
    
    if (progressFill) {
        progressFill.style.width = '0%';
    }
    
    setTimeout(() => {
        modal.classList.add("show");
        if (progressFill) {
            animateProgress();
        }
    }, 10);
}

function closeModal() {
    modal.classList.remove("show");
    setTimeout(() => {
        modal.style.display = "none";
    }, 300);
}

function animateProgress() {
    const duration = 3000;
    let startTime = null;

    function animate(currentTime) {
        if (!startTime) startTime = currentTime;

        const timeElapsed = currentTime - startTime;

        let progress = timeElapsed / duration;

        if (progress > 1) progress = 1;

        progressFill.style.width = progress * 100 + '%';
        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }
    requestAnimationFrame(animate);
}

btn.onclick = openModal;

span.onclick = closeModal;

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}