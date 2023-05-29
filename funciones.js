 //Act1
function esMayorEdad(edad) {
    if (edad >= 18 ) {
      return true;
    } else {
      return false;
    }
    }
    console.log(esMayorEdad(12))
    console.log(esMayorEdad(18))
   
//Act2
function calcularAreaRectangulo(base, altura) {
    let area = base * altura;
    return area;
  }
  
  // Llamada a la función
  let resultado = calcularAreaRectangulo(5, 8);
  console.log("El área del rectángulo es:", resultado);

  //Act3
  function esPalindromo(cadena) {
    let cadenaReversa = cadena.split("").reverse().join("");
    return cadena === cadenaReversa;
  }
  let cadena1 = "Auto";
  let cadena2 = "radar";
  console.log(esPalindromo(cadena1)); // Imprimirá true
  console.log(esPalindromo(cadena2)); // Imprimirá false