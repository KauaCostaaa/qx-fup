let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let p = +input();
let d1 = +input();
let d2 = +input();

let soma = d1 + d2

if ((p === 0 && soma % 2 === 0) || (p === 1 && soma % 2 !== 0)) {
    write(0)
} else {
    write(1)
}