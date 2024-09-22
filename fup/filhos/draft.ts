let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

 let f1 = +input()
 let qtd = +input()

 if (qtd <= 0) {
   write("invalido")
} else {
    for (let i = 0; i < qtd; i++) {
        const idade = f1 + i * 2;
        console.log(idade);
    }
}