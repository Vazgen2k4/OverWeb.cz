let allBtns = [...document.querySelectorAll('.btn')];

allBtns.forEach((button, index) => {
    let square = document.createElement('div');
    square.classList.add('square');
    button.append(square);


    let animation = [{
        right: "-10%",
        transform: "translateX(100%)",
    }]

    let animationOption = {
        duration: 1000,
        delay: 1000 * index,
    };

    let goAnimate = () => square.animate(animation, animationOption);
    let _animate = setInterval(goAnimate, 6000);
});

let body = document.body;
let menuBtn = document.querySelector('label.bars');
let navBg = document.querySelector('.nav__content-bg');

let swithBodyScroll = (e) => body.classList.toggle('_no__scroll');

let bodyScrollCorrekting = (e) => innerWidth > 992 ? body.classList.remove('_no__scroll') : 0;

menuBtn.addEventListener('click', swithBodyScroll);
navBg.addEventListener('click', swithBodyScroll);
addEventListener('resize', bodyScrollCorrekting);