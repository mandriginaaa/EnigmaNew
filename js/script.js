//Прелоадер
window.onload = function () {
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
};


//Подтверждение 18+
function changeStyleDiv() {
    document.getElementById('limitation').style.display = 'none';
}
const limitationButton = document.querySelector('.limitation-close');
limitationButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'http://google.com';
})


//Меню бургер главной страницы
function openBurger() {
    document.getElementById("menu__list-container").style.zIndex = "100000000";
    document.getElementById("menu__list-container").style.opacity = "1";
    document.getElementById("burger-close").style.zIndex = "11111111111111111111111111";
}
function link() {
    document.getElementById("menu__list-container").style.zIndex = "-9999999";
    document.getElementById("menu__list-container").style.opacity = "0";
    document.getElementById("burger-close").style.zIndex = "-11111111111111111111111111";
}


// Слайдер в заголовке
new Swiper('.header__slider', {
    loop: true,
    autoplay: {
        //пауза между прокруткой
        delay: 10000,
        //Заканчивать на последнем слайде
        stopOnLastSlide: false,
        //Отключить после ручного переключения
        disableOnInteraction: false
    },
    // скорость перелистывания слайдов
    speed: 800,
});


// Таб выбора мастеров
const tabNavItem = document.querySelectorAll('.tab-nav-item');
const tabContentItem = document.querySelectorAll('.tab_content');

tabNavItem.forEach(function (elem) {
    elem.addEventListener('click', activeTab);
})

function activeTab() {
    tabNavItem.forEach(function (elem) {
        elem.classList.remove('active');
    })
    this.classList.add('active');
    const tabName = this.getAttribute('data-tab');

    activeTabContent(tabName);
}

function activeTabContent(tabName) {
    tabContentItem.forEach(function (item) {
        item.classList.contains(tabName) ? item.classList.add('active') : item.classList.remove('active');
    })
}


// Слайдер выбора девушек
new Swiper('.girl_2-1-slider', {
    navigation: {
        nextEl: '.kriss__button-next',
        prevEl: '.kriss__button-prev'
    },
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
});
new Swiper('.girl_2-2-slider', {
    navigation: {
        nextEl: '.nelli__button-next',
        prevEl: '.nelli__button-prev'
    },
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
});
new Swiper('.girl_2-3-slider', {
    navigation: {
        nextEl: '.diana__button-next',
        prevEl: '.diana__button-prev'
    },
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
});




// Слайдер выбора программ
new Swiper('.image-slider', {
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev'
    },
    loop: true,
    slidesPerView: 2.4,
    centeredSlides: true,

    breakpoints: {
        1920: {
            slidesPerView: 2.4,
        },
        1440: {
            slidesPerView: 2.3,
        },
        1200: {
            slidesPerView: 2.3,
        },
        610: {
            slidesPerView: 1.8,
        },
        420: {
            slidesPerView: 1.6,
        },
        320: {
            slidesPerView: 1.3,
        }
    }
});




// Блок Частые вопросы
const mod = document.querySelectorAll('.questions-block-answer');
const modBtn = document.querySelectorAll('#questions-href');
for (let i = 0; i < modBtn.length; i++) {

    modBtn[i].addEventListener('click', (e) => {
        e.preventDefault();
        e.target.classList.toggle('questions-arrow-active');
        mod[i].classList.toggle('questions-block-answer-active');
    });
}



// Форма записи клиентов
function openFormWin() {
    document.getElementById("window").style.display = "block";
}
function closeFormWin() {
    document.getElementById("window").style.display = "none";
}


// Форма записи Вакансии
function openForm() {
    document.getElementById("window-interview").style.display = "block";
}

function closeForm() {
    document.getElementById("window-interview").style.display = "none";
}













