let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let lista = input().split(" ");
let helic = +lista[0];
let poli = +lista[1];
let fugit = +lista[2];
let direc = +lista[3];

while (true) {
  fugit += direc;
}
