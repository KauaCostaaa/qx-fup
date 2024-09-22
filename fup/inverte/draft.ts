let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function trocarletra(caractere: string): string {
    if (caractere.length !== 1) {
        return caractere;
    }

    if (caractere >= 'a' && caractere <= 'z') {
        return caractere.toUpperCase();
    } else if (caractere >= 'A' && caractere <= 'Z') {
        return caractere.toLowerCase(); 
    }

    return caractere; 
}

function main() {
    const caractere: string = input()
    const resultado = trocarletra(caractere);
    console.log(resultado);
}

main();
