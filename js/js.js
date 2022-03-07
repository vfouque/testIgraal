//Ouverture des menus déroulants
for (n=0; n < 10; n++ ) {

    let block = "block" + n;
    let classBlock = '.' + block ;
    let blocke = document.querySelector(classBlock);
    
    let question = "question" + n;
    let classQuestion = '.' + question ;
    let questione = document.querySelector(classQuestion); 
    let plusColor = document.querySelector(".questionsContainer i")

    questione.addEventListener("click", () => {
        if (blocke.style.display == "none"){
           blocke.style.display = "block" ;
           //plusColor.style.color = "#fe5a13";
           questione.style.color = "#fe5a13";
            
        }else  {
            blocke.style.display ="none";
            questione.style.color = "black";
            //plusColor.style.color = "#c9c7c8";
        };
    });
};

//Alerte sur les boutons de navigation non implémentés

let blockAlert = document.querySelector('.alert');
let selecteurNonActifs = document.querySelector( 'li' );
let selecteurNonActifs1 = document.querySelector( 'li+li' );
let selecteurNonActifs2 = document.querySelector( 'li+li+li' );
let selecteurNonActifs3 = document.querySelector( 'li+li+li+li' );
let selecteurNonActifs4 = document.querySelector( '.mainElement a' );
selecteurNonActifs.addEventListener('click',  () => {
    blockAlert.style.display = "block";
});
selecteurNonActifs1.addEventListener('click',  () => {
    blockAlert.style.display = "block";
});

selecteurNonActifs2.addEventListener('click',  () => {
    blockAlert.style.display = "block";
});

selecteurNonActifs3.addEventListener('click',  () => {
    blockAlert.style.display = "block";
});
selecteurNonActifs4.addEventListener('click',  () => {
    blockAlert.style.display = "block";
});

//Fermeture de l'alerte

let croix = document.querySelector('.alert i.fa-times');

croix.addEventListener('click',  () => {
    blockAlert.style.display = "none";
});



