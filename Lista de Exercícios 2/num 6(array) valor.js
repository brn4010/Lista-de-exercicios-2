function substituirElemento(array, valorAntigo, novoValor) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === valorAntigo) {
            array[i] = novoValor;
        }
    }
    return array;
}

//Exemplo que usei para testar:

const numeros = [1, 2, 3, 2, 5, 2, 7 ];
const resultado = substituirElemento(numeros, 2, 100);
console.log(resultado); // [  1, 100, 3, 100,  5, 100, 7]