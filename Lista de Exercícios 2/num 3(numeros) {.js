function separarParesImpares(numeros) {
    const resultado = {
        pares: [],
        impares: []
    };

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            resultado.pares.push(numeros[i]);
        } else {
            resultado.impares.push(numeros[i]);
        }
    }

    return resultado;
}

//Exemplo que usei para testar:

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultado = separarParesImpares(numeros);
console.log(resultado);
