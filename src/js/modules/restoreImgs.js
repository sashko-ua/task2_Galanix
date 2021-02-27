import imgCounter from "./imgCounter";
import renderImgs from "./renderImgs";

function restoreImgs() {
    const restoreBtn = document.querySelector('.restoreBtn');
    restoreBtn.addEventListener('click', () => {
        const allImgsSrc = JSON.parse(localStorage.getItem('All'));
        localStorage.removeItem('Remained');
        renderImgs(allImgsSrc);
        imgCounter();
    });
}

export default restoreImgs;