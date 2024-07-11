let youPunti = document.querySelector("#sf1 span");
let cpuPunti = document.querySelector("#sf2 span");

let punteggioYou=0;
let punteggioCpu=0;

document.getElementById("gioca").onclick= operazione;

function operazione(){
    numRand = Math.floor(Math.random()*10)+1;
    numRand2 = Math.floor(Math.random()*10)+1;
    console.log(numRand, numRand2);
    document.getElementById("you").innerHTML = "<span>"+numRand+"</span>";
    document.getElementById("cpu").innerHTML = "<span>"+numRand2+"</span>";
    let messaggio = document.getElementById("messaggio");
    if(numRand > numRand2){
        messaggio.innerHTML = "Hai vinto!"
        punteggioYou++; 
        youPunti.innerHTML=punteggioYou; 
    }
    else if (numRand == numRand2){
        messaggio.innerHTML = "Pareggio!"
    }
    else{
        messaggio.innerHTML = "Hai perso!"
        punteggioCpu++; 
        cpuPunti.innerHTML=punteggioCpu; 
    }
}