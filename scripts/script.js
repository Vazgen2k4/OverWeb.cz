function setupPortfolio(params) {
    let portfolioGrid = document.querySelector('.portfolio__grid');

    portfolioList.forEach((itemData, index) => {

        let porrtfolioCard = document.createElement('div');
        porrtfolioCard.classList.add('portfolio__card');

        let indexWithLimit = index % 3;
        let isDevideThree = (indexWithLimit + 1) % 3 === 0;
        let isEven = (indexWithLimit + 1) % 2 === 0;
        let animationName = isDevideThree ? '-left' : isEven ? '' : '-right';

        // data-aos-duration="${500}"
        // data-aos-offset="${600}"

        porrtfolioCard.innerHTML = `
            <div class="portfolio__card-content" 
                 data-aos="${"zoom-out" + animationName}"
                >
                <div class="portfolio__card-body">
                    <a href="#!" class="portfolio__card-link">
                        <img class="portfolio__card-img" src="${itemData.img_url}"
                            alt="${itemData.title}">
                    </a>
                    <p class="portfolio__card-descr">${itemData.description}</p> 
                </div>
                <a href="${itemData.link}" class="btn">
                    <span>Перейти</span>
                </a>
            </div>
        `;

        portfolioGrid.appendChild(porrtfolioCard);
    });

    let sites = [...portfolioGrid.querySelectorAll('.portfolio__card-content')];

    sites.forEach(mouseOnSite);

    function mouseOnSite(site, index) {
        site.addEventListener('mouseenter', (e) => {
            sites.forEach((item) => {
                item.classList.remove('_active');
            });

            site.classList.add('_active');
        });

        site.addEventListener('mouseleave', (e) => {
            site.classList.remove('_active');
        });
    }
};

function setupButtons(params) {
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
}

function setupNavBar(params) {
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
}

function setupSkills(params) {
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
}

function setupFooter() {
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

    footerItems.forEach(item => {
        item.addEventListener('mouseenter', (e) => {
            let _span = item.querySelector('span');
            _span.animate(footerKeyframe, {
                duration: 2000
            });
        });
    });

}

function setupSound(params) {
    let soundBtn = document.querySelector('#sound__btn.sound__btn');
    let soundPlayer = document.querySelector('#sound');

    soundPlayer.autoplay = true;
    soundPlayer.loop = true;
    soundPlayer.pause();

    soundBtn.addEventListener('click', switchSound);
    addEventListener('keyup', (e) => {
        e.key.toLocaleLowerCase() === 'm' ? switchSound() : 0;
    });

}

function switchSound(e) {
    let soundBtn = document.querySelector('#sound__btn.sound__btn');
    let isPlayed = soundBtn.classList.contains('_active');

    console.log(isPlayed);
    isPlayed ? soundPlayer.pause() : soundPlayer.play();

    soundBtn.classList.toggle('_active');
}
