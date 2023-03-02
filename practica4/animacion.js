//cambio de imagenes slider.......

var imagenes = [];
   imagenes[0] = "imagenes/marketing-digital-1200x675.jpg",
   imagenes[1] = "imagenes/por-que-investir-em-marketing-digital.jpg";
   imagenes[2] = "imagenes/diseno.jpg";
   imagenes[3] = "imagenes/l2.jpg";
   
var img = document.querySelector("#slide");
var i = 0;
function cambio(){
    img.src = imagenes[i];
    if (i < imagenes.length -1){
        i = i + 1;
    }
    else{
        i = 0;
    }
}
function interval(){
    setInterval(cambio, 2000);
}



// menu 

function abrir(){
   
    document.getElementById("menu").style.display= "flex";
}

function cerrar(){
    
    document.getElementById("menu").style.display= "none";
    
}


// reloj

function DatosTiempo(){
    let tiempo = new Date();
    let hora = tiempo.getHours();
    let minuto = tiempo.getMinutes();
    let segundo = tiempo.getSeconds();
    let horarios = document.getElementById("horario");

    if (hora >= 12){
        horarios.innerHTML = "PM";
    }
    else {
        horarios.innerHTML = "AM";
    }

    if (hora <=9){
        hora = "0" + hora;
    }

    if (minuto <=9){
        minuto = "0" + minuto;
    }

    if (segundo <=9){
        segundo = "0" + segundo;
    }
    document.getElementById("horas").innerHTML = hora;
    document.getElementById("minutos").innerHTML = minuto;
    document.getElementById("segundos").innerHTML = segundo;
   
}

setInterval(DatosTiempo);



//redes

function redesOpen(){
    document.getElementById("face").style.color= "blue";
    document.getElementById("face").style.fontSize= "65px";
    document.getElementById("face").style.transition= "2s";
}
function redesClose(){
    document.getElementById("face").style.color= "white";
    document.getElementById("face").style.fontSize= "20px";
   
}

function twiOpen(){
    document.getElementById("twi").style.color= "rgb(0, 117, 212)";
    document.getElementById("twi").style.fontSize= "65px";
    document.getElementById("twi").style.transition= "2s";
}
function twiClose(){
    document.getElementById("twi").style.color= "white";
    document.getElementById("twi").style.fontSize= "20px";
   
}


function instOpen(){
    document.getElementById("inst").style.color= "orange";
    document.getElementById("inst").style.fontSize= "65px";
    document.getElementById("inst").style.transition= "2s";
}
function instClose(){
    document.getElementById("inst").style.color= "white";
    document.getElementById("inst").style.fontSize= "20px";
}

//ventana

var ventana =document.getElementById("vent");

function abrirventana(reference){
    ventana.style.display="flex";
    ventana.style.transition="2s";
}

function cerrardif(){
    ventana.style.display= "none";
}

//ventana2
var ventana2 =document.getElementById("vent2");

function abrirventana2(){
    ventana2.style.display="flex";
    ventana2.style.transition="2s";
}

function cerrardif2(){
    ventana2.style.display= "none";
}


//ventana 3

var ventana3 =document.getElementById("vent3");

function abrirventana3(){
    ventana3.style.display="flex";
    ventana3.style.transition="2s";
}

function cerrardif3(){
    ventana3.style.display= "none";
}

//ventana 4

var ventana3 =document.getElementById("vent4");

function abrirventana4(){
    ventana3.style.display="flex";
    ventana3.style.transition="2s";
}

function cerrardif4(){
    ventana3.style.display= "none";
}