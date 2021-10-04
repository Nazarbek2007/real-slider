const upBtn = document.querySelector('.up-button'),
    downBtn = document.querySelector('.down-button'),
    sideBar = document.querySelector('.sidebar'),
    mainSlide = document.querySelector('.main-slide'),
    slidesCount = mainSlide.querySelectorAll('div').length,
    container = document.querySelector('.container');


// console.log(slidesCount);

let activeSlide = 0;

sideBar.style.left = `-${(slidesCount - 1) * 100}vw`


function changeSlide(str) {
    if (str === 'up') {
        activeSlide++
        if (activeSlide === slidesCount) {
            activeSlide = 0
        }
    } else if (str === 'down') {
        activeSlide--
        if (activeSlide < 0) {
            activeSlide = slidesCount - 1
        }
    }


    let width = container.clientWidth


    mainSlide.style.transform = `
        translateX(-${activeSlide * width}px)
    `

    sideBar.style.transform = `
        translateX(${activeSlide * width}px)
    `
}


upBtn.addEventListener('click', function () {
    changeSlide('up')
})

downBtn.addEventListener('click', function () { 
    changeSlide('down')
 })