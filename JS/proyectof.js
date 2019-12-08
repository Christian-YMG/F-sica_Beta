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
})

$("#r1").click(function () {
    $(".container").show();
    $(".title").show();
    $(".descripcion1 .carta1").hide();
})

/////////////////
// Carta NUmero 2
/////////////////

$("#l2").click(function () {
    $(".container").hide();
    $(".title").hide();
    $(".descripcion2 .carta1").show();
})

$("#r2").click(function () {
    $(".container").show();
    $(".title").show();
    $(".descripcion2 .carta1").hide();
})

/////////////////
// Carta NUmero 3
/////////////////

$("#l3").click(function () {
    $(".container").hide();
    $(".title").hide();
    $(".descripcion3 .carta1").show();
})

$("#r3").click(function () {
    $(".container").show();
    $(".title").show();
    $(".descripcion3 .carta1").hide();
})

$("#l4").click(function () {
    $(".container").hide();
    $(".title").hide();
    $(".descripcion4 .carta").show();
})

$("#r4").click(function () {
    $(".container").show();
    $(".title").show();
    $(".descripcion4 .carta").hide();
})

let d_tiempo;
    
const d_calorias = 12,
    d_repeticion = 15;

let md_calorias,
    md_repeticion;

let rutina = [];

/////////////////
// Muestra personalizacion de la rutina 1
/////////////////

$("#btnAgregar1").click(function () {
    $(".colocarRutina1 .carta").show();
    $(".descripcion1 .carta1").hide();
    $("#rutina1").css("z-index","-2");
    $("#rutina2").css("z-index","-4");
    $("#rutina3").css("z-index","-6");
})


$("#btnAgregar2").click(function () {
    $(".colocarRutina2 .carta").show();
    $(".descripcion2 .carta1").hide();
    $("#rutina1").css("z-index","-4");
    $("#rutina2").css("z-index","-2");
    $("#rutina3").css("z-index","-6");
})


$("#btnAgregar3").click(function () {
    $(".colocarRutina3 .carta").show();
    $(".descripcion3 .carta1").hide();
    $("#rutina1").css("z-index","-6");
    $("#rutina2").css("z-index","-4");
    $("#rutina3").css("z-index","-2");
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
})

$("#cr2").click(function () {
    $(".colocarRutina2 .carta").hide();
    $(".descripcion2 .carta1").show();
    $("#gd_tiempo2").val("");
    $("#md_calorias2").val("");
    $("#md_repeticion2").val("");
})

$("#cr3").click(function () {
    $(".colocarRutina3 .carta").hide();
    $(".descripcion3 .carta1").show();
    $("#gd_tiempo3").val("");
    $("#md_calorias3").val("");
    $("#md_repeticion3").val("");
})

/////////////////
// Obtener y calcular valores
/////////////////

$("#getD1").click(function () {
    d_tiempo = $("#gd_tiempo1").val();
    md_calorias = d_tiempo * d_calorias;
    md_repeticion = d_tiempo * d_repeticion;

    $("#gd_tiempo1").val(d_tiempo);
    $("#md_calorias1").val(md_calorias);
    $("#md_repeticion1").val(md_repeticion);
})


$("#getD2").click(function () {
    d_tiempo = parseInt($("#gd_tiempo2").val());
    md_calorias = d_tiempo * d_calorias;
    md_repeticion = d_tiempo * d_repeticion;

    $("#gd_tiempo2").val(d_tiempo);
    $("#md_calorias2").val(md_calorias);
    $("#md_repeticion2").val(md_repeticion);
    rutina.push("Lagartijas", d_tiempo, md_calorias, md_repeticion);
    for (let b of rutina) {
        console.log(b);
    }
})

$("#getD3").click(function () {
    d_tiempo = parseInt($("#gd_tiempo3").val());
    md_calorias = d_tiempo * d_calorias;
    md_repeticion = d_tiempo * d_repeticion;

    $("#gd_tiempo3").val(d_tiempo);
    $("#md_calorias3").val(md_calorias);
    $("#md_repeticion3").val(md_repeticion);
    rutina.push("Saltos de Tijera", d_tiempo, md_calorias, md_repeticion);
    for (let b of rutina) {
        console.log(b);
    }
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





document.querySelector("#getD1").addEventListener("click", saveRutina);
drawRutina();



function saveRutina(){
    let tnombre = document.querySelector("#md_nombre1").value,
        ttiempo = document.querySelector("#gd_tiempo1").value,
        tcalorias = document.querySelector("#md_calorias1").value,
        trepeticion = document.querySelector("#md_repeticion1").value;

        addRutina(tnombre,ttiempo,tcalorias,trepeticion);
        drawRutina();
        
    }

    function drawRutina(){
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
    