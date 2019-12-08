let rutinaList = [];

function addRutina(pnombre, ptiempo, pcalorias, prepeticion){
    let newRutina = {
        nombre : pnombre,
        tiempo : ptiempo,
        calorias : pcalorias,
        repeticion : prepeticion
    };

    
    rutinaList.push(newRutina);
    console.log(newRutina);

}

function getRutinaList(){
    return rutinaList;
}