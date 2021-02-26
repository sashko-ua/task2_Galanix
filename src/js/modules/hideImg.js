function hideImg() {
    const hide = document.querySelectorAll('.gallery__box-hide');
    const allImgs = document.querySelectorAll('.gallery__img');

    let allImgsSrc = [];

    allImgs.forEach((e) => {
        allImgsSrc.push(e.getAttribute('src'));
    });

    hide.forEach((e) => {
        e.addEventListener('click', (e) => {
            const index = e.target.dataset.id;
            allImgsSrc.splice(index, 1);
            console.log(allImgsSrc);
            renderNewImgs(allImgsSrc);
        });
    });
}

function renderNewImgs(allImgsSrc) {
    const parent = document.querySelector('.gallery');

    // for (let i = 0; i < allImgsSrc.length; i++) {
    //     parent.innerHTML = `
    //         <div class="gallery__box">
    //             <img class="gallery__img" src="${allImgsSrc[i]}" alt="img-${i+1}">
    //             <div class='gallery__box-hide' data-id='${i}'>&#x2716;</div>
    //         </div>
    //     `;
    // }
}

export default hideImg;