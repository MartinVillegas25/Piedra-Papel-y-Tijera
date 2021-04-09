const piedra = 0;
const papel = 1;
const tijera = 2;

const pierdes = 0;
const ganas = 1;
const empate = 2;

const piedraBtn = document.getElementById("piedra");
const papelBtn = document.getElementById("papel");
const tijeraBtn = document.getElementById("tijera");
const resultext = document.getElementById("choose");

piedraBtn.addEventListener ("click",()=>{
    play(piedra);
});

papelBtn.addEventListener("click",()=>{
    play(papel);
});
tijeraBtn.addEventListener("click",()=>{
    play(tijera);
});

function play(opcionUsuario) {
    const opcionCpu = Math.floor(Math.random() * 3);

    const result = calcResult(opcionUsuario, opcionCpu);
    
    switch(result) {
        case empate:
        resultext.innerHTML = "Empataste";
        break
        case ganas:
        resultext.innerHTML = "Ganaste";
        break
        case pierdes:
        resultext.innerHTML = "Perdiste";
        break
    }
    } 

    function calcResult(opcionUsuario,opcionCpu) {
    
    if (opcionUsuario===opcionCpu){
        return empate;

    } else if(opcionUsuario===piedra) {
        if(opcionCpu===papel) return pierdes;
        if(opcionCpu===tijera) return ganas; 

    }else if (opcionUsuario===papel){
        if(opcionCpu===piedra) return ganas;
        if(opcionCpu===tijera) return pierdes; 

    }else if (opcionUsuario===tijera){
        if(opcionCpu===papel) return ganas;
        if(opcionCpu===piedra) return pierdes;
    }

}



