let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let p = +input()
let s = +input()
let e = +input()

if (s <= e) {
    write("salto");
} else {
    let alturaAtual = 0;

    while (alturaAtual < p) {
        
        alturaAtual += s;
        write(alturaAtual); 

        if (alturaAtual >= p) {
            break; 
        }

        alturaAtual -= e;
    }
}