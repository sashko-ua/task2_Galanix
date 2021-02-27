import restoreImgs from "./restoreImgs";

function renderImgs(allImgsSrc) {
    const parent = document.querySelector('.gallery');
    parent.innerHTML = '';
    for (let i = 0; i < allImgsSrc.length; i++) {
        let item = `
            <div class="gallery__box">
                <img class="gallery__img" src="${allImgsSrc[i]}" alt="img-${i}">
                <div class='gallery__box-hide' data-id='${i}'>&#x2716;</div>
            </div>
        `;
        parent.innerHTML += item;
    }
    parent.innerHTML += `
        <div class="gallery__box gallery__box-btn">
            <button class="restoreBtn">Restore all pictures</button>
        </div>
    `;
    restoreImgs();
}

export default renderImgs;