'use strict'
/*Selectors*/
const btn = document.querySelector('.toggleSwitch')
const contentBlocks = document.querySelectorAll('.activeBlock')
const prices = document.querySelectorAll('.price')
const learnMoreBtns = document.querySelectorAll('.moreBtn')
/*Changed Monthly/Yearly*/
let i = 0 , j = 4;
btn.addEventListener('click', (e) => {
    i += 1;
    let priceEl;
    removePrices();
    prices.forEach(price => {
        priceEl = Number(price.textContent);
        price.textContent = `${Math.floor(priceEl * 11 / 2)-0.01}`
    })

    if (i == j) {
        removePrices()
        j += 4;
    }
})

function removePrices() {
    prices[0].innerHTML = '19.99';                          //Можно изменить на массивы
    prices[1].innerHTML = '24.99';
    prices[2].innerHTML = '39.99';
}

/*Active Content*/
contentBlocks.forEach(contentBlock => {
    contentBlock.addEventListener('click', () => {
        removeActiveClasses();
        contentBlock.classList.add('active');
    })
})

function removeActiveClasses() {
    contentBlocks.forEach((content) => {
        content.classList.remove('active')
    })
}

/*Modal Window when clicking Button Learn More*/

learnMoreBtns.forEach(learnMoreBtn => {
    learnMoreBtn.addEventListener('click', ()=>{

    })
})

