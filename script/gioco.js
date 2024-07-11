console.log("ciao");

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
    }
    else if (numRand == numRand2){
        messaggio.innerHTML = "Pareggio!"
    }
    else{
        messaggio.innerHTML = "Hai perso!"
    }
}