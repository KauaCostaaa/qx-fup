let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let tipo = input();
let n = +input();


if (tipo == "r") {
    write(Math.round(n));
} else if (tipo == "f") {
    write(Math.floor(n)); 
} else if (tipo == "c") {
    write(Math.ceil(n))
} else {
    write("não funciona")
}