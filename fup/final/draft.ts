let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let nota1 = +input();
let nota2 = +input();
let notafinal= +input();

function verificar_aprovacao(nota1: number, nota2: number, notafinal: number): string{
let media = (nota1 + nota2) / 2;
if (media >= 7) {
  return("aprovado");
} 
if (media < 4) {
  return("reprovado");
}
let novamedia = (media + notafinal) / 2;;
if (novamedia >= 5) {
  return("aprovado na final");
}
return("reprovado na final");
}

write(verificar_aprovacao(nota1, nota2, notafinal));