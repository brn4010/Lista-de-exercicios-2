function somaMatriz(matriz) {
    let soma = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j];
        }
    }

    return soma;
}

//Exemplo que usei para testar:

const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
];
const resultado = somaMatriz(matriz);
console.log(resultado); // 78