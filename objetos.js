// Act 1
let producto = {
    nombre: "Producto 1",
    precio: 100,
    cantidad: 3
  };
  
  function calcularTotal(producto) {
    return producto.precio * producto.cantidad;
  }
  
  let total = calcularTotal(producto);
  console.log(total + " $"); // Imprimirá el total a pagar
  // Act 2

  let persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Ingeniero"
  };
  
  function presentarPersona(persona) {
    console.log("Nombre: " + persona.nombre);
    console.log("Edad: " + persona.edad);
    console.log("Profesión: " + persona.profesion);
  }
  
  presentarPersona(persona);
  //Act 3
  function esMayorEdad(persona) {
    return persona.edad >= 18;
  }
  let persona1 = {
    nombre: "Axel",
    edad: 50,
    profesion: "Abogado"
  };
  
  let persona2 = {
    nombre: "Oriana",
    edad: 15,
    profesion: "Estudiante"
  };
  
  console.log(esMayorEdad(persona1) ); // Imprimirá true
  console.log(esMayorEdad(persona2)); // Imprimirá false