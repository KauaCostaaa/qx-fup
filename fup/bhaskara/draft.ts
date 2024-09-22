let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function calcularRaizes(a, b, c) {
  const delta = Math.pow(b, 2) - 4 * a * c;

  if (delta > 0) {
      const raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
      const raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
      console.log(raiz1.toFixed(2));
      console.log(raiz2.toFixed(2));
  } else if (delta === 0) {
      const raiz = -b / (2 * a);
      console.log(raiz.toFixed(2));
  } else {
      console.log("nao ha raiz real");
  }
}

const a = parseFloat(input());
const b = parseFloat(input());
const c = parseFloat(input());

calcularRaizes(a,b,c);