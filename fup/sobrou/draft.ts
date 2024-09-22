let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

var quant1 = parseFloat(input());
var quant2 = parseFloat(input());
var quant3 = parseFloat(input());
var valor1 = parseFloat(input());
var valor2 = parseFloat(input());
var valor3 = parseFloat(input());
var dinheiro = parseFloat(input());

var sobra = dinheiro - (quant1*valor1 + quant2*valor2 + quant3*valor3);
console.log(sobra.toFixed(2));