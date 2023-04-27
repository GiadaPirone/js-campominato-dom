let btn = document.getElementById("bottone");
let numero = [];


btn.addEventListener("click", function(){

    creaDivContenitore();

    creaDivQuadratino();

   
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
            this.classList.toggle("cambioColore");
            console.log("hai selezionato il n:", i);
        })
    }
}


var numeroCasuale = Math.floor(Math.random()*100);
function creaNumeroCasuale(){
    for (let i = 0; i < 16; i++) {
        numero.push(numeroCasuale);
    }

}

console.log(numero);
