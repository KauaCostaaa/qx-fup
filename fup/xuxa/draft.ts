let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

function inverterString(frase: string): string {
    return frase.split('').reverse().join('');
}

function main() {
    const frase: string = input()
    
    if (frase.length > 100) {
        write("1");
        return;
    }

    const fraseInvertida = inverterString(frase);
    write(fraseInvertida);
}

// Executar a função principal
main();
