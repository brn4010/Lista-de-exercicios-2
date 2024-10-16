function multiplicarMatrizes(matrizA, matrizB) {
    const linhasA = matrizA.length;
    const colunasA = matrizA[0].length;
    const linhasB = matrizB.length;
    const colunasB = matrizB[0].length;

    if (colunasA !== linhasB) {
        return null;
    }

    const resultado = [];
    for (let i = 0; i < linhasA; i++) {
        resultado[i] = [];
        for (let j = 0; j < colunasB; j++) {
            resultado[i][j] = 0;
        }
    }

    for (let i = 0; i < linhasA; i++) {
        for (let j = 0; j < colunasB; j++) {
            for (let k = 0; k < colunasA; k++) {
                resultado[i][j] += matrizA[i][k] * matrizB[k][j];
            }
        }
    }

    return resultado;
}

//Exemplo que usei para testar:

const matrizA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const matrizB = [
    [10, 11],
    [12, 13],
    [14, 15]
];

const resultado = multiplicarMatrizes(matrizA, matrizB);
console.log(resultado); // [ [ 76, 82 ], [ 184, 199 ], [ 292, 316 ] ]
