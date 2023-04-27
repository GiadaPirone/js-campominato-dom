let btn = document.getElementById("bottone");
let bombe = [];


btn.addEventListener("click", function(){

    creaDivContenitore();

    creaDivQuadratino();

    creaNumeroCasuale()
})

//funzione per creare div contenitore.
function creaDivContenitore(){
    nuovoDiv = document.createElement("div");
    nuovoDiv.className = "griglia";
    document.querySelector("main").appendChild(nuovoDiv);
}

//funzione per creare quadratini all'interno del contenitore.
function creaDivQuadratino(){

    for (let i = 1; i <= 100; i++) {
        
        NuovoQadratino = document.createElement("div");
        NuovoQadratino.className = "quadratino";
        document.querySelector(".griglia").appendChild(NuovoQadratino);

        NuovoQadratino.innerHTML = i;

        NuovoQadratino.addEventListener("click", function(){

            for (let c = 0; c < bombe.length; c++) {
                console.log(bombe[c]);
                let bomba = bombe[c];
                
                if ( i == bomba){
                    this.classList.add("cambioColoreRosso");
                    finePartita();
    
                } else {
                    this.classList.add("cambioColore");
                }
            }
            console.log("hai selezionato il n:", i);
        })
    }
}



function creaNumeroCasuale(){
    for (let i = 1; i <= 16; i++) {
        var numeroCasuale = Math.floor(Math.random()*100);
        bombe.push(numeroCasuale);
        
    }
    console.log(bombe)
}

function finePartita(){
    nuovoMess = document.createElement("div");
    nuovoMess.className ="fine";
    nuovoMess.innerHTML = "HAI PERSO!"
    document.querySelector("main").appendChild(nuovoMess);

}



