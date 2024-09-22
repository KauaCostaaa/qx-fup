let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let salario = +input()

let salarionovo: Number

if (salario <= 1000) {
    salarionovo = salario * 1.20;
} else if (salario <= 1500) {
    salarionovo = salario * 1.15;
} else if (salario <= 2000) {
    salarionovo = salario * 1.10;
} else if (salario > 2000) {
    salarionovo = salario * 1.05;
}

write(salarionovo.toFixed(2))