// replace. Usa el método replace, y también split, para conseguir que se muestre por consola el resultado. 
//NO SE PUEDE MODIFICAR la variable 'nombres'. Tampoco tienes que escribir de nuevo todos los nombres. 
//Piensa en qué orden y cómo utilizar los métodos 'replace' y 'split'

let nombres = "pedro-maría_mario";

var resultado;


console.log("Resultado: ['pedro, maría, mario']", resultado);

 resultado = console.log(nombres.replace( '_', ',' ));

console.log(resultado);