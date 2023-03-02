
//OPCION DE DESPLEGAR PRECIOS Y NOMBRE DE PRENDAS
//imagen remera verde
function verdeAbrir(){
    document.getElementById("info").style.display ="block";
    document.getElementById("info").style.boxShadow ="0px -1px 10px 1px rgb(0, 0, 0 )";
    document.getElementById("cambio").style.boxShadow ="0px -1px 10px 1px rgb(0, 0, 0 )";
    document.getElementById("info").style.position ="absolute";
    
}
function verdeCerrar(){
    document.getElementById("info").style.display ="none"; 
    document.getElementById("cambio").style.boxShadow ="none"; 
}



//imagen remera blanca
function blancoAbrir(){
    document.getElementById("info2").style.display ="block";
    document.getElementById("info2").style.boxShadow ="0px -1px 10px 1px rgb(0, 0, 0 )";
    document.getElementById("blanco").style.boxShadow ="0px -1px 10px 1px rgb(0, 0, 0 )";
    document.getElementById("info2").style.position ="absolute";
}
function blancoCerrar(){
    document.getElementById("info2").style.display ="none";  
    document.getElementById("blanco").style.boxShadow ="none";
}


//imagen remera celeste
function celesteAbrir(){
    document.getElementById("info3").style.display ="block";
    document.getElementById("info3").style.boxShadow ="0px -1px 10px 1px rgb(0, 0, 0 )";
    document.getElementById("celeste").style.boxShadow ="0px -1px 10px 1px rgb(0, 0, 0 )";
    document.getElementById("info3").style.position ="absolute";
    
}
function celesteCerrar(){
    document.getElementById("info3").style.display ="none";
    document.getElementById("celeste").style.boxShadow ="none";
}


//imagen campera

function camperaAbrir(){
    document.getElementById("info4").style.display ="block";
    document.getElementById("info4").style.boxShadow ="0px -1px 10px 1px rgb(0, 0, 0 )";
    document.getElementById("campera").style.boxShadow ="0px -1px 10px 1px rgb(0, 0, 0 )";
    document.getElementById("info4").style.position ="absolute";
    
}
function camperaCerrar(){
    document.getElementById("info4").style.display ="none";
    document.getElementById("campera").style.boxShadow ="none";
    
}


//imagen pantalon
function panalonAbrir(){
    document.getElementById("info5").style.display ="block";
    document.getElementById("info5").style.boxShadow ="0px -1px 10px 1px rgb(0, 0, 0 )";
    document.getElementById("u").style.boxShadow ="0px -1px 10px 1px rgb(0, 0, 0 )";
    document.getElementById("info5").style.position ="absolute";
}
function pantalonCerrar(){
    document.getElementById("info5").style.display ="none";
    document.getElementById("u").style.boxShadow ="none";
}

//imagen remera marron mujer
function marronAbrir(){
    document.getElementById("info6").style.display ="block";
    document.getElementById("info6").style.boxShadow ="0px -1px 10px 1px rgb(0, 0, 0 )";
    document.getElementById("marron").style.boxShadow ="0px -1px 10px 1px rgb(0, 0, 0 )";
    document.getElementById("info6").style.position ="absolute";
}
function marronCerrar(){
    document.getElementById("info6").style.display ="none";
    document.getElementById("marron").style.boxShadow ="none";

}


//fecha encabezado de pagina index

function DatosFecha(){
    var tiempo = new Date();
    var dia = tiempo.getDay();
    if (dia ==1){
        dia = "lunes";
    }
    if (dia ==2){
        dia = "Martes";
    }
    if (dia ==3){
        dia = "Miercoles";
    }
    if (dia ==4){
        dia = "Jueves";
    }
    if (dia ==5){
        dia = "Viernes";
    }
    if (dia ==6){
        dia = "Sabado";
    }
    if (dia ==7){
        dia = "Domingo";
    }

    var fecha = tiempo.getDate();
    var mes = tiempo.getMonth();
    var año = tiempo.getFullYear();

    if (mes == 0){
        mes = "Enero";
    }
    if (mes == 1){
        mes = "Febrero";
    }
    if (mes == 2){
        mes = "Marzo";
    }
    if (mes == 3){
        mes = "Abril";
    }
    if (mes == 4){
        mes = "Mayo";
    }
    if (mes == 5){
        mes = "Junio";
    }
    if (mes == 6){
        mes = "julio";
    }
    if (mes == 7){
        mes = "Agosto";
    }
    if (mes == 8){
        mes = "Septiembre";
    }
    if (mes == 9){
        mes = "Octubre";
    }
    if (mes == 10){
        mes = "Noviembre";
    }
    if (mes == 11){
        mes = "Diciembre";
    }


    if (fecha <=9){
        fecha = "0" + fecha;
    }

    document.formulario.fecha.value = dia + " " + fecha + " de " + mes + " del "+ año;
}
setInterval(DatosFecha);
  



//menu desplegable hombre
function abrir(){
    document.getElementById("menu").style.width ="300px";
    document.getElementById("menu").style.backgroundColor ="white";
    document.getElementById("menu").style.display="block";
    document.getElementById("menu").style.position="absolute";
    document.getElementById("mujer").style.display= "none";
    
    
}

function cerrar(){
    document.getElementById("menu").style.width= "0";
    document.getElementById("menu").style.display="none";

}


//menu desplegable mujer

function abrirm(){
    document.getElementById("mujer").style.display= "block";
    document.getElementById("mujer").style.position="absolute";
    document.getElementById("menu").style.display="none";
    
}
function cerrarm(){
    document.getElementById("mujer").style.display= "none";

}

//reloj pagina contacto

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



//redes en pagina index y contacto
//facebook
function redesOpen(){
    document.getElementById("face").style.color= "blue";
    document.getElementById("face").style.fontSize= "65px";
    document.getElementById("face").style.transition= "1s";
}
function redesClose(){
    document.getElementById("face").style.color= "white";
    document.getElementById("face").style.fontSize= "50px";
}


//twiter

function twiOpen(){
    document.getElementById("twi").style.color= "rgb(0, 117, 212)";
    document.getElementById("twi").style.fontSize= "65px";
    document.getElementById("twi").style.transition= "1s";
}
function twiClose(){
    document.getElementById("twi").style.color= "white";
    document.getElementById("twi").style.fontSize= "50px";
   
}

//instagram

function instOpen(){
    document.getElementById("inst").style.color= "orange";
    document.getElementById("inst").style.fontSize= "65px";
    document.getElementById("inst").style.transition= "1s";
}
function instClose(){
    document.getElementById("inst").style.color= "white";
    document.getElementById("inst").style.fontSize= "50px";
}

//youtube

function youOpen(){
    document.getElementById("you").style.color= "red";
    document.getElementById("you").style.fontSize= "65px";
    document.getElementById("you").style.transition= "1s";
}
function youClose(){
    document.getElementById("you").style.color= "white";
    document.getElementById("you").style.fontSize= "50px";
}