//Act 1
function determinarSigno(numero) {
    if (numero > 0) {
      return "El número es positivo";
    } else if (numero < 0) {
      return "El número es negativo";
    } else {
      return "El número es igual a 0";
    }
  }
  
  let numero = parseFloat(prompt("Ingrese un número:"));
  let mensaje = determinarSigno(numero);
  console.log(mensaje);
  // Act 2 
  
  function esPrimo(num) {
    if (num <= 1) {
      return false;
    }
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    
    return true;
  }
  
  let num = parseInt(prompt("Ingrese un número:"));
  let mensajes = esPrimo(num) ? "El número es primo" : "El número no es primo";
  console.log(mensajes);
  // Act 3
  function convertirTemperatura(temperatura, unidad) {
    if (unidad === "C") {
      let temperaturaFahrenheit = (temperatura * 9/5) + 32;
      return temperaturaFahrenheit.toFixed(2) + "°F";
    } else if (unidad === "F") {
      let temperaturaCelsius = (temperatura - 32) * 5/9;
      return temperaturaCelsius.toFixed(2) + "°C";
    } else {
      return "Unidad de temperatura inválida";
    }
  }
  
  let temperatura = parseFloat(prompt("Ingrese la temperatura:"));
  let unidad = prompt("Ingrese la unidad de temperatura (C para Celsius, F para Fahrenheit):");
  let resultado = convertirTemperatura(temperatura, unidad);
  console.log(resultado);

  //Act 4
  function calcularTotalCompra() {
    let total = 0;
    let precio = parseFloat(prompt("Ingrese el precio del producto (o escriba 'total' para finalizar):"));
    
    while (isNaN(precio) === false) {
      total += precio;
      precio = parseFloat(prompt("Ingrese el precio del producto (o escriba 'total' para finalizar):"));
    }
    
    return total;
  }
  
  let totalCompra = calcularTotalCompra();
  console.log("El total de la compra es: " + totalCompra);