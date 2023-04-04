// Crear un símbolo con una descripción
const simbolo = Symbol('Mi símbolo');
console.log(simbolo); // Salida: Symbol(Mi símbolo)
// Crear un objeto con una propiedad que utiliza el símbolo como clave
const objeto = {
  [simbolo]: 'Valor de mi propiedad'
};

// Acceder al valor de la propiedad utilizando el símbolo como clave
console.log(objeto[simbolo]); // Salida: Valor de mi propiedad