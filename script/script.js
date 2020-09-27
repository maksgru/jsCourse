"use strict";


let cardData = {
    espLtdOld: {
        imgUrl: 'img/espLtdOld.png',
        cardTitle: 'ESP LES PAUL LTD',
        cardPrise: '500 - 900 $'
    },
    espMHRed: {
        imgUrl: 'img/espMHRed.png',
        cardTitle: 'ESP MH LTD',
        cardPrise: '300 - 500 $'
    },
    espVIPERBlue: {
        imgUrl: 'img/espVIPERBlue.png',
        cardTitle: 'ESP VIPER LTD',
        cardPrise: '700 - 1000 $'
    },
    espWaLTD: {
        imgUrl: 'img/espWaLTD.png',
        cardTitle: 'ESP WA LTD',
        cardPrise: '500 - 900 $'
    },
    fenderSquier: {
        imgUrl: 'img/fenderSquier.png',
        cardTitle: 'FENDER SQUIER',
        cardPrise: '200 - 400 $'
    },
    gibsonFlyingV: {
        imgUrl: 'img/gibsonFlyingV.png',
        cardTitle: 'GIBSON FLYING V',
        cardPrise: '900 - 1200 $'
    }, 
    ibanezPrestige: {
        imgUrl: 'img/ibanezSPrestige.png',
        cardTitle: 'IBANEZ PRESTIGE',
        cardPrise: '400 - 700 $'
    },
    fenderSquierStrat: {
        imgUrl: 'img/fenderSquierStrat.png',
        cardTitle: 'FENDER STRATOCASTER',
        cardPrise: '500 - 800 $'
    },
    fenderPPBass: {
        imgUrl: 'img/fenderPPBass.png',
        cardTitle: 'FENDER PLAYER',
        cardPrise: '700 - 1000 $'
    },
    fenderJazzBass: {
        imgUrl: 'img/fenderJazzBass.png',
        cardTitle: 'FENDER JAZZ BASS',
        cardPrise: '500 - 900 $'
    },

    esp87SeriesLTD: {
        imgUrl: 'img/esp87SeriesLTD.png',
        cardTitle: 'ESP 87 S BASS',
        cardPrise: '600 - 1000 $'
    },
}

function buildCard(item) {
    
    let card = document.createElement('div');
    card.className = 'card';

    let cardPic = document.createElement('img');
    cardPic.className = 'card-pic';
    cardPic.src = item.imgUrl;

    let itemName = document.createElement('h4');
    itemName.className = 'item-name';
    itemName.innerHTML = item.cardTitle;

    let description = document.createElement('button');
    description.className = 'description';
    description.innerHTML = 'DESCRIPTION';

    let prise = document.createElement('strong');
    prise.className = 'prise';
    prise.innerHTML = 'PRISE';

    let cost = document.createElement('span');
    cost.className = 'cost';
    cost.innerHTML = item.cardPrise;

    
    card.append(cardPic);
    card.append(itemName);
    card.append(description);
    card.append(prise);
    card.append(cost);
    cardBox.append(card);

}
for (let card of Object.keys(cardData)) {
    buildCard(cardData[card]);
};
