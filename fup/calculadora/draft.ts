let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function calcular(numero1, numero2, operador) {
  let resultado;
  switch (operador) {
      case '+':
          resultado = numero1 + numero2;
          break;
      case '-':
          resultado = numero1 - numero2;
          break;
      case '*':
          resultado = numero1 * numero2;
          break;
      case '/':
          resultado = Math.floor(numero1 / numero2);
          break;
  }
  console.log(resultado);
}
calcular(parseFloat(input()),parseFloat(input()),input());