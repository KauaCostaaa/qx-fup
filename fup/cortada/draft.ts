let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let B = +input()
let T = +input()


let largura = 160;
let altura = 70;
let areaTotal = largura * altura; 
let metadeArea = areaTotal / 2; 


let A1 = B * altura; 
let A2 = (largura - T) * altura;


if (A1 > metadeArea) {
    write(1);
} else if (A2 > metadeArea) {
    write(2); 
} else if (A1 == A2 ) {
    write(0); 
} else {
    write(0);
}