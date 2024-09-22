let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let qtd = +input();
let c = input();
let l = input();
let m = input();
let t = input();

for (let i = 0; i < qtd; i++){
  let [sabor, turno] = input().split(" ");
  write(sabor + " " + turno);
} if (c == c && l == l && m == m && t == t){
  write("empate")
} else if (c == m && c == t){
  write("c")
}