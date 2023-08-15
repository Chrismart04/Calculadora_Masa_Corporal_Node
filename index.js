const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("Bienvenido, Calculare tu indice de masa corporal.");

rl.question(
  "Ingresa tu altura en metros (separa los valores con punto): ",
  function (altura) {
    rl.question("Ingresa tu peso en kilogramos: ", function (peso) {
      const imc = peso / altura ** 2;
      console.log(`Tu indice de masa corporal es: ${imc.toFixed(2)}`);

      if (imc < 18.5) {
        console.log("Estás por debajo del peso normal.");
      } else if (imc >= 18.5 && imc < 25) {
        console.log("Estás en el rango de peso normal.");
      } else if (imc >= 25 && imc < 30) {
        console.log("Estás en el rango de sobrepeso.");
      } else {
        console.log("Estás en el rango de obesidad");
      }

      rl.close();
    });
  }
);
