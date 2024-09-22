let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let c1 = +input();
let l1 = +input();
let c2 = +input();
let l2 = +input();
let area1 = c1 * l1;
let area2 = c2 * l2;

if (area1 > area2){
  write(area1);
} else {
  write(area2);
}

