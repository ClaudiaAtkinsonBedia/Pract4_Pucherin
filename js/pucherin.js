// Modo texto
window.onload = inicio;

var pucheros;
var jugadorActual=0;

function inicio(){
    let introduccion = document.getElementById("intro");
    let jugar = document.getElementById("jugar");
    introduccion.innerHTML= "¿Cuántos jugadores vais a ser hoy?";
    jugar.addEventListener("click", iniciarPartida);

    function iniciarPartida()
    {
        jugadorActual++;
        alert("Es el turno de jugador " + jugadorActual); 
        dados();
    }
    
    function dados()
    {
        var dado1 = Math.floor(Math.random() * 6) + 1;
        var dado2 = Math.floor(Math.random() * 6) + 1;
        introduccion.innerHTML = dado1 + " " + dado2;
        // EN CASO DE HACERLO VISUAL, AQUI TENEMOS CÓMO HACER LA PARTE DE LOS DADOS
        /*switch(num)
        {
            case 1:
            dom_img.src='./cara1.png';
            break;
            case 2:
            dom_img.src='./cara2.png';
            break;
        }*/
    }
}

function pucheros(){
    pucheros = new Array (new puchero,new puchero,new puchero,new puchero,new puchero,
        new puchero,new puchero,new puchero,new puchero,new puchero);
    
    for(let i = 2; i <= 11; i++){
        pucheros[i].puchero.numero=i;
        if(i!=7)
            pucheros[i].puchero.casillasMax=i;
        else
            pucheros[i].puchero.casillasMax=50;
        for(let j = 1; j <= pucheros[i].puchero.casillasMax; j++){
            pucheros[i].puchero.casillas["ocupada"+j]=false;
        }
    }
}


function anadirFicha(jugador){
    //i=reroll dados Objeto
    pucheros[i].puchero.fichasDentro++;
    if(pucheros[i].puchero.fichasDentro<casillasMax){
        pucheros[i].puchero.casillas[fichasDentro-1]=true;
    }else if(pucheros[i].puchero.fichasDentro+1==casillasMax){
        pucheros[i].puchero.fichasDentro=0;
        jugador.puntacion+=pucheros[i].puchero.casillasMax;
        for(let j = 0; j <= pucheros[i].puchero.casillas.length; j++){
            pucheros[i].puchero.casillas[j]=false;
        }
    }

    saltarJugador();
}

function saltarJugador(){
    jugadorActual++;
}