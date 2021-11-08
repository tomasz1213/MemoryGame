document.addEventListener('DOMContentLoaded', () => {
    const scoreTable = document.getElementById('result');
    const grid = document.querySelector('.grid');
    let cards = [];
    let cards2 = [];
    let cardsSelected = [];
    let cardsId  = [];
    let selected = 0;
    let uid = 1;
    let score = 0;


// grid , card, player
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    function sortId() {
        for (let i=0;i<200;i++){
            let id = getRandomInt(1,7);
            let test = cards.find(number => number === id);
            let id2 = getRandomInt(1,7);
            let test2 = cards2.find(number => number === id2);
            if (!test && !test2){
                cards.push(id);
                cards2.push(id2);
                createBoard(id);
                createBoard(id2);
            };
        };
    };
    function createBoard(id) {
        let img = document.createElement('img');
        img.setAttribute('src',`./images/blank.png`);
        img.setAttribute('class',`item`);
        img.setAttribute('data-id', id);
        img.setAttribute('id', uid);
        uid++;
        grid.appendChild(img);
        img.addEventListener('click', flipCard);
    };
    function checkCard() {
        if (cardsSelected[0] === cardsSelected[1]){
            score++;
            cardsSelected[0] = undefined;
            cardsSelected[1] = undefined;
            selected = 0;
            scoreTable.innerHTML = score;
        }else {
            const cos1 = document.getElementById(`${cardsId[0]}`);
            const cos2 = document.getElementById(`${cardsId[1]}`);
            cos1.setAttribute('src', './images/blank.png');
            cos2.setAttribute('src', './images/blank.png');
            cardsSelected[0] = undefined;
            cardsSelected[1] = undefined;
            selected = 0;
        };
    };

    function flipCard() {
        if (selected < 2){
            if (selected === 0){
                let cardId = this.getAttribute('data-id');
                let cardId2 = this.getAttribute('id');
                this.setAttribute('src', `./images/${cardId}.png`);
                cardsSelected[0] = cardId;
                cardsId[0] = cardId2;
                selected ++;
            }else{
                let cardId = this.getAttribute('data-id');
                let cardId2 = this.getAttribute('id');
                this.setAttribute('src', `./images/${cardId}.png`);
                cardsSelected[1] = cardId;
                cardsId[1] = cardId2;
                selected ++;
                setTimeout(checkCard, 1000);
            };
        }else{
            checkCard();
        };
    };
    sortId();
});





