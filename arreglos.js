//Act 1
function obtenerSuma(arreglo) {
    let suma = 0;
      for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
      }
      return suma;
    }
    let arreglo = [6, 9, 10, 20, 60];
    let suma = obtenerSuma(arreglo);
    console.log(suma); // Imprimirá la suma de los elementos del arreglo
  // Act 2
  
  function obtenerPares(numeros) {
    let pares = [];
  
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] % 2 === 0) {
        pares.push(numeros[i]);
      }
    }
  
    return pares;
  }
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 25, 30];
  let pares = obtenerPares(numeros);
  console.log(pares);  // Imprimirá [2, 4, 6, 8, 10, 12, 30]
  
  // Act 3
  function obtenerPromedioPonderado(notas, pesos) {
    if (notas.length !== pesos.length) {
      throw new Error("Los arreglos deben tener la misma longitud");
    }
  
    let sumaNotas = 0;
    let sumaPesos = 0;
  
    for (let i = 0; i < notas.length; i++) {
      sumaNotas += notas[i] * pesos[i];
      sumaPesos += pesos[i];
    }
  
    let promedioPonderado = sumaNotas / sumaPesos;
    return promedioPonderado;
  }
  
  let notas = [80, 90, 75, 85];
  let pesos = [0.3, 0.4, 0.2, 0.1];
  let promedio = obtenerPromedioPonderado(notas, pesos);
  console.log(promedio); // Imprimirá el promedio ponderado
  
  
  
  //Act 4
  function obtenerMaximo(numeross) {
    if (numeross.length === 0) {
      throw new Error("El arreglo está vacío");
    }
  
    let maximo = numeross[0];
  
    for (let i = 1; i < numeros.length; i++) {
      if (numeross[i] > maximo) {
        maximo = numeros[i];
      }
    }
  
    return maximo;
  }
  
  let numeross = [5, 10, 2, 8, 3, 90, 500];
  let maximo = obtenerMaximo(numeross);
  console.log(maximo); // Imprimirá el número máximo encontrado en el arreglo
  
  