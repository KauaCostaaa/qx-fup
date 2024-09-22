let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function pega_nome(valor: number): string {
  if (valor == 1) {return "A"}
  if (valor == 11) {return "J"}
  if (valor == 12) {return "Q"}
  if (valor == 13) {return "K"}
  return String(valor)
}

let qtd = +input();
let valores = input().split(" ").map(x => +x);

let nomes: string[] = []
for (let elem of valores) {
  nomes.push(pega_nome(elem))
}

let saida = "";
for (let i = 0; i < valores.length; i++) {
  if (i != 0) {
    saida += ", "
  }
}

write(nomes)