let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let n1 = +input()
let n2 = +input()

if (n1 > n2) {
    write("invalido")
} else {
    let soma = 0

    for (let i = n1; i <= n2; i++) {
        if (i % 2 === 0) {
            soma += i;
        }
    }

    write(soma);
}