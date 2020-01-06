// $(document).ready(function(){

$("#btn1").click(function(){
   
    $(".container").hide();
    $(".title").hide();
    $("#tabla").css("display","block");
})
    

$("#btnTable").click(function(){
    $("#tabla").css("display","none");
    $(".container").show();
})

/////////////////
// Carta NUmero 1
/////////////////
$("#l1").click(function () {
    $(".container").hide();
    $(".title").hide();
    $(".descripcion1 .carta1").show(); //poner el .carta
    $("#d1").css("z-index","10");
})

$("#r1").click(function () {
    $(".container").show();
    $(".title").show();
    $(".descripcion1 .carta1").hide();
    $("#d1").css("z-index","-3");
    $("#d2").css("z-index","-4");
    $("#d3").css("z-index","-6");
    $("#d4").css("z-index","-7");
})

/////////////////
// Carta NUmero 2
/////////////////

$("#l2").click(function () {
    $(".container").hide();
    $(".title").hide();
    $(".descripcion2 .carta1").show();
    $("#d2").css("z-index","10");
})

$("#r2").click(function () {
    $(".container").show();
    $(".title").show();
    $(".descripcion2 .carta1").hide();
    $("#d1").css("z-index","-4");
    $("#d2").css("z-index","-3");
    $("#d3").css("z-index","-6");
    $("#d4").css("z-index","-7");
})

/////////////////
// Carta NUmero 3
/////////////////

$("#l3").click(function () {
    $(".container").hide();
    $(".title").hide();
    $(".descripcion3 .carta1").show();
    $("#d3").css("z-index","10");
})

$("#r3").click(function () {
    $(".container").show();
    $(".title").show();
    $(".descripcion3 .carta1").hide();
    $("#d1").css("z-index","-6");
    $("#d2").css("z-index","-4");
    $("#d3").css("z-index","-3");
    $("#d4").css("z-index","-7");
})

$("#l4").click(function () {
    $(".container").hide();
    $(".title").hide();
    $(".descripcion4 .carta1").show();
    $("#d4").css("z-index","10");
})

$("#r4").click(function () {
    $(".container").show();
    $(".title").show();
    $(".descripcion4 .carta1").hide();
    $("#d1").css("z-index","-6");
    $("#d2").css("z-index","-4");
    $("#d3").css("z-index","-7");
    $("#d4").css("z-index","-3");
})

let d_tiempoD;
    
const d_caloriasD = 12,
    d_repeticionD = 15;

let md_caloriasD,
    md_repeticionD;




let d_tiempoF;
    
const d_caloriasF = 9,
    d_repeticionF = 16;

let md_caloriasF,
    md_repeticionF;




let d_tiempoT;
    
const d_caloriasT = 13,
    d_repeticionT = 19;

let md_caloriasT,
    md_repeticionT;


let d_tiempoS;
    
const d_caloriasS = 14,
    d_repeticionS = 17;

let md_caloriasS,
    md_repeticionS;

let rutina = [];

/////////////////
// Muestra personalizacion de la rutina 1
/////////////////

$("#btnAgregar1").click(function () {
    $(".colocarRutina1 .carta").show();
    $(".descripcion1 .carta1").hide();
    $("#d1").css("z-index","-2");
    $("#rutina1").css("z-index","-1");
    $("#rutina2").css("z-index","-4");
    $("#rutina3").css("z-index","-6");
    $("#rutina4").css("z-index","-8");
})


$("#btnAgregar2").click(function () {
    $(".colocarRutina2 .carta").show();
    $(".descripcion2 .carta1").hide();
    $("#d2").css("z-index","-2");
    $("#rutina1").css("z-index","-4");
    $("#rutina2").css("z-index","-1");
    $("#rutina3").css("z-index","-6");
    $("#rutina4").css("z-index","-8");
})


$("#btnAgregar3").click(function () {
    $(".colocarRutina3 .carta").show();
    $(".descripcion3 .carta1").hide();
    $("#d3").css("z-index","-2");
    $("#rutina1").css("z-index","-6");
    $("#rutina2").css("z-index","-4");
    $("#rutina3").css("z-index","-1");
    $("#rutina4").css("z-index","-8");
})

$("#btnAgregar4").click(function () {
    $(".colocarRutina4 .carta").show();
    $(".descripcion4 .carta1").hide();
    $("#d4").css("z-index","-2");
    $("#rutina1").css("z-index","-6");
    $("#rutina2").css("z-index","-4");
    $("#rutina3").css("z-index","-8");
    $("#rutina4").css("z-index","-1");
})


/////////////////
// Oculta y vacia input
/////////////////

$("#cr1").click(function () {
    $(".colocarRutina1 .carta").hide();
    $(".descripcion1 .carta1").show();
    $("#gd_tiempo1").val("");
    $("#md_calorias1").val("");
    $("#md_repeticion1").val("");
    $("#rutina1").css("z-index","-8");
    
})

$("#cr2").click(function () {
    $(".colocarRutina2 .carta").hide();
    $(".descripcion2 .carta1").show();
    $("#gd_tiempo2").val("");
    $("#md_calorias2").val("");
    $("#md_repeticion2").val("");
    $("#rutina2").css("z-index","-10");
    
})

$("#cr3").click(function () {
    $(".colocarRutina3 .carta").hide();
    $(".descripcion3 .carta1").show();
    $("#gd_tiempo3").val("");
    $("#md_calorias3").val("");
    $("#md_repeticion3").val("");
    $("#rutina3").css("z-index","-12");
})

$("#cr4").click(function () {
    $(".colocarRutina4 .carta").hide();
    $(".descripcion4 .carta1").show();
    $("#gd_tiempo4").val("");
    $("#md_calorias4").val("");
    $("#md_repeticion4").val("");
    $("#rutina4").css("z-index","-14");
})


/////////////////
// Obtener y calcular valores
/////////////////

$("#getD1").click(function () {
    d_tiempoD = $("#gd_tiempo1").val();
    md_caloriasD = d_tiempoD * d_caloriasD;
    md_repeticionD = d_tiempoD * d_repeticionD;

    $("#gd_tiempo1").val(d_tiempoD);
    $("#md_calorias1").val(md_caloriasD);
    $("#md_repeticion1").val(md_repeticionD);
})


$("#getD2").click(function () {
    d_tiempoF = parseInt($("#gd_tiempo2").val());
    md_caloriasF = d_tiempoF * d_caloriasF;
    md_repeticionF = d_tiempoF * d_repeticionF;

    $("#gd_tiempo2").val(d_tiempoF);
    $("#md_calorias2").val(md_caloriasF);
    $("#md_repeticion2").val(md_repeticionF);
})

$("#getD3").click(function () {
    d_tiempoT = parseInt($("#gd_tiempo3").val());
    md_caloriasT = d_tiempoT * d_caloriasT;
    md_repeticionT = d_tiempoT * d_repeticionT;

    $("#gd_tiempo3").val(d_tiempoT);
    $("#md_calorias3").val(md_caloriasT);
    $("#md_repeticion3").val(md_repeticionT);
})

$("#getD4").click(function () {
    d_tiempoS = parseInt($("#gd_tiempo4").val());
    md_caloriasS = d_tiempoS * d_caloriasS;
    md_repeticionS = d_tiempoS * d_repeticionS;

    $("#gd_tiempo4").val(d_tiempoS);
    $("#md_calorias4").val(md_caloriasS);
    $("#md_repeticion4").val(md_repeticionS);
})


$("#catalogo1").click(function(){
    $(".container").show();
    $(".colocarRutina1 .carta").hide();
})


$("#catalogo2").click(function(){
    $(".container").show();
    $(".colocarRutina2 .carta").hide();
})


$("#catalogo3").click(function(){
    $(".container").show();
    $(".colocarRutina3 .carta").hide();

    
$("#catalogo4").click(function(){
    $(".container").show();
    $(".colocarRutina4 .carta").hide();
})
})

/////////////////
// Deshabilitar
/////////////////
$("#md_nombre1").prop('disabled', true);
$("#md_calorias1").prop('disabled', true);
$("#md_repeticion1").prop('disabled', true);

$("#md_nombre2").prop('disabled', true);
$("#md_calorias2").prop('disabled', true);
$("#md_repeticion2").prop('disabled', true);

$("#md_nombre3").prop('disabled', true);
$("#md_calorias3").prop('disabled', true);
$("#md_repeticion3").prop('disabled', true);

$("#md_nombre4").prop('disabled', true);
$("#md_calorias4").prop('disabled', true);
$("#md_repeticion4").prop('disabled', true);





document.querySelector("#getD1").addEventListener("click", saveRutina1);
drawRutina1();



function saveRutina1(){
    let tnombre = document.querySelector("#md_nombre1").value,
        ttiempo = document.querySelector("#gd_tiempo1").value,
        tcalorias = document.querySelector("#md_calorias1").value,
        trepeticion = document.querySelector("#md_repeticion1").value;

        addRutina(tnombre,ttiempo,tcalorias,trepeticion);
        drawRutina1();

       
    }

    function drawRutina1(){
        let list = getRutinaList(),
    tbody = document.querySelector('#rutinaTable tbody');

    tbody.innerHTML = "";
    
    for(let i = 0; i<list.length;i++){
        let row = tbody.insertRow(i),
        nombreCell = row.insertCell(0),
        tiempoCell = row.insertCell(1),
        caloriasCell = row.insertCell(2),
        repeticionCell = row.insertCell(3);

        nombreCell.innerHTML = list[i].nombre;
        tiempoCell.innerHTML = list[i].tiempo;
        caloriasCell.innerHTML = list[i].calorias;
        repeticionCell.innerHTML = list[i].repeticion;

        tbody.appendChild(row);

    }
}



document.querySelector("#getD2").addEventListener("click", saveRutina2);
drawRutina2();



function saveRutina2(){
    let tnombre = document.querySelector("#md_nombre2").value,
        ttiempo = document.querySelector("#gd_tiempo2").value,
        tcalorias = document.querySelector("#md_calorias2").value,
        trepeticion = document.querySelector("#md_repeticion2").value;

        addRutina(tnombre,ttiempo,tcalorias,trepeticion);
        drawRutina2();

       
        
    }

    function drawRutina2(){
        let list = getRutinaList(),
    tbody = document.querySelector('#rutinaTable tbody');

    tbody.innerHTML = "";
    
    for(let i = 0; i<list.length;i++){
        let row = tbody.insertRow(i),
        nombreCell = row.insertCell(0),
        tiempoCell = row.insertCell(1),
        caloriasCell = row.insertCell(2),
        repeticionCell = row.insertCell(3);

        nombreCell.innerHTML = list[i].nombre;
        tiempoCell.innerHTML = list[i].tiempo;
        caloriasCell.innerHTML = list[i].calorias;
        repeticionCell.innerHTML = list[i].repeticion;

        tbody.appendChild(row);

    }
}


document.querySelector("#getD3").addEventListener("click", saveRutina3);
drawRutina3();



function saveRutina3(){
    let tnombre = document.querySelector("#md_nombre3").value,
        ttiempo = document.querySelector("#gd_tiempo3").value,
        tcalorias = document.querySelector("#md_calorias3").value,
        trepeticion = document.querySelector("#md_repeticion3").value;

        addRutina(tnombre,ttiempo,tcalorias,trepeticion);
        drawRutina3();

       
    }

    function drawRutina3(){
        let list = getRutinaList(),
    tbody = document.querySelector('#rutinaTable tbody');

    tbody.innerHTML = "";
    
    for(let i = 0; i<list.length;i++){
        let row = tbody.insertRow(i),
        nombreCell = row.insertCell(0),
        tiempoCell = row.insertCell(1),
        caloriasCell = row.insertCell(2),
        repeticionCell = row.insertCell(3);

        nombreCell.innerHTML = list[i].nombre;
        tiempoCell.innerHTML = list[i].tiempo;
        caloriasCell.innerHTML = list[i].calorias;
        repeticionCell.innerHTML = list[i].repeticion;

        tbody.appendChild(row);

    }
}

document.querySelector("#getD4").addEventListener("click", saveRutina4);
drawRutina4();



function saveRutina4(){
    let tnombre = document.querySelector("#md_nombre4").value,
        ttiempo = document.querySelector("#gd_tiempo4").value,
        tcalorias = document.querySelector("#md_calorias4").value,
        trepeticion = document.querySelector("#md_repeticion4").value;

        addRutina(tnombre,ttiempo,tcalorias,trepeticion);
        drawRutina4();

       
    }

    function drawRutina4(){
        let list = getRutinaList(),
    tbody = document.querySelector('#rutinaTable tbody');

    tbody.innerHTML = "";
    
    for(let i = 0; i<list.length;i++){
        let row = tbody.insertRow(i),
        nombreCell = row.insertCell(0),
        tiempoCell = row.insertCell(1),
        caloriasCell = row.insertCell(2),
        repeticionCell = row.insertCell(3);

        nombreCell.innerHTML = list[i].nombre;
        tiempoCell.innerHTML = list[i].tiempo;
        caloriasCell.innerHTML = list[i].calorias;
        repeticionCell.innerHTML = list[i].repeticion;

        tbody.appendChild(row);

    }
}

