let btn = document.getElementById("bottone");


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
    NuovoQadratino = document.createElement("div");
    NuovoQadratino.className = "quadratino";

    
    
    document.querySelector("main").appendChild(NuovoQadratino);
}

