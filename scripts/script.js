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

let navBns = [...document.querySelectorAll('.nav__list-link')];

navBns.forEach((item) => {
    item.addEventListener('click', (e) => body.classList.remove('_no__scroll'));
});


let skillsCards = [...document.querySelectorAll('.skills__grid-item.skills__item')];

if (skillsCards.length > 0) {
    skillsCards.forEach((card) => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            skillsCards.forEach((item) => item.classList.remove('active'));
            card.classList.toggle('active');
        });
    });
}
setFooter();

function setFooter() {
    let footerGrid = document.querySelector('.footer__grid');
    if (!footerGrid) return;

    const itemCount = 100;

    for (let index = 0; index < itemCount; index++) {
        let footerGridItem = document.createElement('div');
        footerGridItem.classList.add('footer__grid-item');
        let footerGridSpan = document.createElement('span');
        footerGridItem.appendChild(footerGridSpan);
        footerGrid.appendChild(footerGridItem);
    }



    let footerItems = [...document.querySelectorAll('.footer__grid-item')];

    let footerKeyframe = [{
            transform: 'scale(1)',
            background: '#fff',
        },
        {
            transform: 'scale(8)',
            background: '#B88CFF',
        },
        {
            transform: 'scale(6.2)',
            background: '#A5A6F6',
        },
        {
            transform: 'scale(9.2)',
            background: ' #9D78D8',

        },
        {
            transform: 'scale(1)',
            background: ' #fff'
        }
    ];

    footerItems.forEach(item => {
        item.addEventListener('mouseenter', (e) => {
            let _span = item.querySelector('span');
            _span.animate(footerKeyframe, {
                duration: 2000
            });
        });
    });

}