import imgCounter from "./imgCounter";
import renderImgs from "./renderImgs";
import saveToLocalStorage from "./saveToLocalstorage";

function hideImg() {
    const allImgs = document.querySelectorAll('.gallery__img'),
        parent = document.querySelector('.gallery');
    let allImgsSrc = [];
    allImgs.forEach((e) => {
        allImgsSrc.push(e.getAttribute('src'));
    });
    saveToLocalStorage('All', allImgsSrc);
    parent.addEventListener('click', (e) => {
        if (e.target.className == "gallery__box-hide") {
            const index = e.target.dataset.id;
            allImgsSrc.splice(index, 1);
            renderImgs(allImgsSrc);
            saveToLocalStorage('Remained', allImgsSrc);
            imgCounter();
        }
    });
}

function firstLoad() {
    if (localStorage.getItem('Remained')) {
        const srcArr = JSON.parse(localStorage.getItem('Remained'));
        renderImgs(srcArr);
        imgCounter();
    }
}

export { firstLoad };
export default hideImg;