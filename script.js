'use strict'
/*Selectors*/
const btn = document.querySelector('.toggleSwitch')
const learnMoreBtn = document.querySelector('.moreBtn')
const prices = document.querySelectorAll('.price')
const contentBlocks = document.querySelectorAll('.activeBlock')
/*Changed Monthly/Yearly*/
let i = 0;
btn.addEventListener('click', (e) => {
    let priceEl;
    removePrices();
    prices.forEach(price => {

        priceEl = Number(price.textContent);
        price.textContent = `${Math.floor(priceEl * 11 / 2)}.99`

    })
})


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

function removePrices() {
    prices[0].innerHTML = '19.99';
    prices[1].innerHTML = '24.99';
    prices[2].innerHTML = '39.99';
}