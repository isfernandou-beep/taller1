function calcularEntrada() {
    const edad = parseInt(document.getElementById("edad").value);
    let mensaje = "";

    if (edad < 0) {
        mensaje = "Edad no válida.";
    } else if (edad > 1 && edad <4) {
        mensaje = "Precio de boleto: gratuito.";
    } else if (edad >= 4 && edad <= 8) {
        mensaje = "Precio de boleto: $2.00.";
    } else if (edad > 8 && edad <= 16) {
        mensaje = "Precio de boleto: $5.00.";
    } else if (edad > 16 && edad <= 35) {
        mensaje = "Precio de boleto: $7.00.";
    } else if (edad > 35) {
        mensaje = "Precio de boleto: $10.00.";
    }
    document.getElementById("resultado").innerText = mensaje;
}

//Problema 2
function determinarCategoria() {
    const codigo = document.getElementById("codigo").value;

    const codigoStr = codigo.toString();
    
    let contadorPares = 0;
    let mensaje = "";

    for (let i = 0; i < codigoStr.length; i++) {
        const digito = parseInt(codigoStr[i]);
        if (digito % 2 == 0) {
            contadorPares++;
        }
    }

    if (contadorPares == 3) {
        mensaje= "Categoría: Director General";
    } else if (contadorPares == 2) {
        mensaje= "Categoría: Directivo";
    } else if (contadorPares == 1) {
        mensaje= "Categoría: Staff";
    } else {
        mensaje= "Categoría: Seguridad";
    }
    document.getElementById("categoria").innerText = mensaje;
}

// Probkema 3
function calcularPendiente() {
    const x1 = document.getElementById("x1").value;
    const y1 = document.getElementById("y1").value;
    const x2 = document.getElementById("x2").value;
    const y2 = document.getElementById("y2").value;
    
    let mensaje = "";
    
    if (x1 === "" || y1 === "" || x2 === "" || y2 === "") {
        mensaje = "Por favor, completa todas las coordenadas.";
    } 
    else if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
        mensaje = "Por favor, ingresa números válidos.";
    } 
    else if (parseFloat(x1) === parseFloat(x2) && parseFloat(y1) === parseFloat(y2)) {
        mensaje = "Los puntos son iguales, no se puede calcular la pendiente.";
    } 
    else if (parseFloat(x1) === parseFloat(x2)) {
        mensaje = "La pendiente es indefinida (línea vertical).";
    } 
    else {
        const pendiente = (parseFloat(y2) - parseFloat(y1)) / (parseFloat(x2) - parseFloat(x1));
        mensaje = `La pendiente de la recta que pasa por (${x1},${y1}) y (${x2},${y2}) es: ${pendiente.toFixed(2)}`;
    }
    
    document.getElementById("resultado").innerText = mensaje;
}

// Problema 4
function determinarClima() {
    const temperatura = parseFloat(document.getElementById("temperatura").value);
    const humedad = parseFloat(document.getElementById("humedad").value);
    
    let mensaje = "";

    if (isNaN(temperatura) || isNaN(humedad)) {
        mensaje = "Por favor, ingresa valores numéricos válidos.";
    } 
    else if (temperatura < 10) {
        mensaje = "Clima frío";
    }
    else if (temperatura >= 10 && temperatura <= 25) {
        if (humedad < 60) {
            mensaje = "Clima templado y seco";
        } else {
            mensaje = "Clima templado y húmedo";
        }
    }
    else if (temperatura >= 26 && temperatura <= 35) {
        mensaje = "Clima cálido";
    }
    else if (temperatura > 35) {
        mensaje = "Clima caluroso extremo, mantente hidratado";
    }
    else {
        mensaje = "Valores fuera de rango, verifica los datos";
    }
    
    document.getElementById("resultado").innerText = mensaje;
}