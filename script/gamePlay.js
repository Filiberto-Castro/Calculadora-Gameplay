let num1, num2;
let respuesta;
let indiceCorrecto;

txt_suma = document.getElementById("suma");
op1 = document.getElementById("op1");
op2 = document.getElementById("op2");
op3 = document.getElementById("op3");
txt_msj = document.getElementById("msj");
txt_resultado = document.getElementById("resultado");

function comenzar(){
    txt_resultado.innerHTML = "?";
    txt_msj.innerHTML = "";
    num1 = Math.round(Math.random() * 9);
    num2 = Math.round(Math.random() * 9);
    respuesta = num1 + num2;

    txt_suma.innerHTML = num1 + " + " + num2 + " = ";

    indiceCorrecto = Math.round(Math.random() * 2)
    if(indiceCorrecto == 0){
        op1.innerHTML = respuesta;
        op2.innerHTML = respuesta + 1;
        op3.innerHTML = respuesta - 1;
    }

    if(indiceCorrecto == 1){
        op2.innerHTML = respuesta;
        op1.innerHTML = respuesta + 2;
        op3.innerHTML = respuesta - 1;
    }

    if(indiceCorrecto == 2){
        op3.innerHTML = respuesta;
        op1.innerHTML = respuesta + 1;
        op2.innerHTML = respuesta - 1;
    }
}

function controlarRespuesta(opcionElegida)
{
    txt_resultado.innerHTML = opcionElegida.innerHTML;
    if(respuesta == opcionElegida.innerHTML){
        txt_msj.innerHTML = "¡EXCELENTE!";
        txt_msj.style.color = "green";

        setTimeout(comenzar, 1000);
    }else{
        txt_msj.innerHTML = "INTENTA DE NUEVO";
        txt_msj.style.color = "red"
        setTimeout(limpiar, 1000)
    }
}

function limpiar(){
    txt_resultado.innerHTML = "?";
    txt_msj.innerHTML = "";
}

comenzar();