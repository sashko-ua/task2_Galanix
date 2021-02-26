function imgCounter() {
    const images = document.querySelectorAll('.gallery__img'),
        counterSelecrot = document.querySelector('.img-counter');

    counterSelecrot.innerHTML = `На сторінці ${images.length} картинок`;

}

export default imgCounter;