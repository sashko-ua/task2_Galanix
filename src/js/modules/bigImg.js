function bigImg() {
    const images = document.querySelectorAll('.gallery__img'),
        overlay = document.querySelector('.overlay');

    images.forEach((e) => {
        e.addEventListener('click', () => {
            const src = e.getAttribute('src'),
                alt = e.getAttribute('alt');

            overlay.innerHTML = `
                <img src="${src}" alt="${alt}"> 
                <div class='overlay__close'>&#x2716;</div>
            `;
            overlay.classList.add('overlay--active');

            closeModal(overlay);
        });
    });
}

function closeModal(overlay) {
    const close = document.querySelector('.overlay__close');

    close.addEventListener('click', () => {
        overlay.classList.remove('overlay--active');
    });
}
export default bigImg;