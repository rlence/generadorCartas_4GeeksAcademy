const listValueCard = ['A', '2', '3', '4', '5', '6', '7','8','9','10', 'J', 'Q', 'K'];

let urlCorazon = 'https://images.emojiterra.com/mozilla/512px/2665.png';
let urlTreabol = 'https://e7.pngegg.com/pngimages/482/186/png-clipart-playing-card-computer-icons-suit-clover-logo-black.png';
let urlDiamante = 'https://www.pinclipart.com/picdir/middle/122-1222064_molde-de-carta-de-baralho-asta-powerproject-icon.png'
let urlPica ='https://img2.freepng.es/20180405/ujq/kisspng-playing-card-suit-ace-of-spades-card-game-black-5ac5d88954e762.7737817015229154653478.jpg'

const listSimbol = [urlCorazon, urlTreabol, urlDiamante, urlPica];

function generateCard(){
    const indexValueCard = Math.floor(Math.random() * (listValueCard.length - 0 ) ) + 0;
    const indexUrlSimbol = Math.floor(Math.random() * (listSimbol.length - 0 ) ) + 0;

    document.getElementById('print').innerHTML = `<div class="top">
                                                    <img src=${listSimbol[indexUrlSimbol]} alt="img-simbol">
                                                </div>
                                                <div class="midel">
                                                    <p> ${listValueCard[indexValueCard]} </p>
                                                </div>
                                                <div class="bottom"> 
                                                    <img class="reverse" src=${listSimbol[indexUrlSimbol]} alt="img-simbol">
                                                </div>`
    
} 

generateCard();