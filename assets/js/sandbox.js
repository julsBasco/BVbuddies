let card = document.querySelector(".card");
let imgJuls = document.querySelector('.juls-display');
let note_card = document.querySelector(".card_note");
let quoteGrid_card = document.querySelector(".card_quoteGrid");
let mediaMedium = window.matchMedia("(min-width: 769px)")

// event handlers
const changeDisplayJuls = () => {

    if(mediaMedium.matches){
        document.getElementById('img-juls').style.display = "none";

    }
}

const changeDisplayDan = () => {

    if(mediaMedium.matches){
        document.getElementById('img-dan').style.display = "none";

    }
}

const changeDisplayLem = () => {

    if(mediaMedium.matches){
        document.getElementById('img-lem').style.display = "none";

    }
}

const changeDisplayIvan = () => {

    if(mediaMedium.matches){
        document.getElementById('img-ivan').style.display = "none";

    }
}

const changeDisplayMicah = () => {

    if(mediaMedium.matches){
        document.getElementById('img-micah').style.display = "none";

    }
}

const changeDisplayNads = () => {

    if(mediaMedium.matches){
        document.getElementById('img-nads').style.display = "none";

    }
}

const changeDisplayBianca = () => {

    if(mediaMedium.matches){
        document.getElementById('img-bianca').style.display = "none";

    }
}

const changeDisplayCn = () => {

    if(mediaMedium.matches){
        document.getElementById('img-cn').style.display = "none";

    }
}


// event listeners
document.querySelector('.juls').addEventListener('click', changeDisplayJuls);
document.querySelector('.dan').addEventListener('click', changeDisplayDan);
document.querySelector('.lem').addEventListener('click', changeDisplayLem);
document.querySelector('.ivan').addEventListener('click', changeDisplayIvan);
document.querySelector('.micah').addEventListener('click', changeDisplayMicah);
document.querySelector('.nads').addEventListener('click', changeDisplayNads);
document.querySelector('.bianca').addEventListener('click', changeDisplayBianca);
document.querySelector('.cn').addEventListener('click', changeDisplayCn);