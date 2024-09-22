let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let M = +input();
let A = +input();
let B = +input();

let C = M - (A + B)
let velho: Number

if (A > B && A > C) {
    velho = A
} else if (B > A && B > C) {
    velho = B
} else {
    velho = C
}

write(velho)