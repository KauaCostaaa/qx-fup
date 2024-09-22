let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let cesta = +input()
let banana = +input()
let goiaba = +input()
let manga = +input()

let soma = banana + goiaba + manga 
let tempo = Math.ceil(soma / cesta)

write(tempo)