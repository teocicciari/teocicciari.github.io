"use strict";

var pelis = [
    {
        "nombre": "pinocho",
        "anio": 2001,
        "peso": 2.4
    },
    {
        "nombre": "blancanieves",
        "anio": 1998,
        "peso": 5.4
    }
]

var series = [
    {
        "nombre": "peaky blinders",
        "anio": 2001,
        "peso": 2.4
    },
    {
        "nombre": "dark",
        "anio": 1998,
        "peso": 5.4
    }
]

var documentales = [
    {
        "nombre": "life of yogananda",
        "anio": 2001,
        "peso": 2.4
    },
    {
        "nombre": "educacion en dinamarca",
        "anio": 1998,
        "peso": 5.4
    }
]

buildTable(pelis);

function buildTable(data){
    var table = document.getElementById("theTable");

    for(var i = 0; i < data.length; i++){
        var row =   `<tr>
                        <td>${data[i].nombre}</td>
                        <td>${data[i].anio}</td>
                        <td>${data[i].peso}</td>
                    </tr>`;

        table.innerHTML += row;
    }
}

document.getElementById("pelis").onclick = function(){
    var table = document.getElementById("theTable");
    table.innerHTML = ""
    buildTable(pelis);
}
document.getElementById("series").onclick = function(){
    var table = document.getElementById("theTable");
    table.innerHTML = ""
    buildTable(series);
}
document.getElementById("documentales").onclick = function(){
    var table = document.getElementById("theTable");
    table.innerHTML = ""
    buildTable(documentales);
}