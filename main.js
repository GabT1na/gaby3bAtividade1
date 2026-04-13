//let name ="Gabrielly Cristina, ";
 //alert(name);

//let nome =prompt("Digite o seu nome: ")
//let idade =prompt("Digite a sua idade: ")
//alert(nome  +  idade)

let n1 =prompt("DIgite um nº:")
let n2 =prompt("DIgite um nº:")
let n3 =prompt("DIgite um nº:")

function calcularTresVariaveis(n1, n2, n3) {
    console.log(` Resultados para: ${n1}, ${n2}, ${n3} `);

    // Soma
    const soma = n1 + n2 + n3;
    console.log(`Soma: ${n1} + ${n2} + ${n3} = ${soma}`);

    // Subtração
    const subtracao = n1 - n2 - n3;
    console.log(`Subtração: ${n1} - ${n2} - ${n3} = ${subtracao}`);

    // Multiplicação
    const multiplicacao = n1 * n2 * n3;
    console.log(`Multiplicação: ${n1} * ${n2} * ${n3} = ${multiplicacao}`);

    // Divisão (com verificação para evitar divisão por zero)
    if (n2 !== 0 && n3 !== 0) {
        const divisao = n1 / n2 / n3;
        console.log(`Divisão: ${n1} / ${n2} / ${n3} = ${divisao.toFixed(2)}`);
    } else {
        console.log("Divisão: Não é possível dividir por zero.");
    }
}