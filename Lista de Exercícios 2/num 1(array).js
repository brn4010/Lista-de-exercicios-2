function contarOcorrencias(array) {
    const frequencias = {};

    for (let i = 0; i < array.length; i++) {
        const num = array[i];

        if (frequencias[num]) {
            frequencias[num] += 1;
        } else {
            frequencias[num] = 1;
        }
    }

    return frequencias;
}

//Exemplo que usei para testar:

const numeros = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, ];
const resultado = contarOcorrencias(numeros);
console.log(resultado); // { '1': 1, '2': 2, '3': 3, '4': 4, '5': 5 }