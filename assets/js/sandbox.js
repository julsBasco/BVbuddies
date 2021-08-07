let card = document.querySelector(".card");
let img_card = document.querySelector(".card_img");
let note_card = document.querySelector(".card_note");
let quoteGrid_card = document.querySelector(".card_quoteGrid");
let mediaMedium = window.matchMedia("(min-width: 769px)")


// const changeDisplay = () => {
    
//     if(mediaMedium.matches){
//         switch(img_card.style.display){
//             case "": 
//                 img_card.style.display = "none";
//                 note_card.style.display ="grid";
//                 quoteGrid_card.style.display = "grid";
//                 break;

//             case "none":
//                 img_card.style.display = "";
//                 note_card.style.display ="none";
//                 quoteGrid_card.style.display = "none";
//                 break; 


//         }
        
//     }
// }


document.querySelector('.juls').addEventListener('click', changeDisplay);
document.querySelector('.dan').addEventListener('click', changeDisplay);
