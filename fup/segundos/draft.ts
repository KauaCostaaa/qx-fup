let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

var tempo = parseInt(input());
var horas = parseInt(tempo/3600);
var minutos = parseInt((tempo%3600)/60);
var segundos = ((tempo%3600)%60);
console.log(horas+":"+minutos+":"+segundos);