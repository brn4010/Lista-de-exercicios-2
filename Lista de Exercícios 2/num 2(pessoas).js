function ordenarPorIdade(pessoas) {
    return pessoas.sort(function(a, b) {
        return a.idade - b.idade;
    });
}

//Exemplo que usei para testar:
const pessoas = [
    { nome: 'curry', idade: 36 },
    { nome: 'lamelo', idade: 23 },
    { nome: 'lebron', idade: 39 },
];

const pessoasOrdenadas = ordenarPorIdade(pessoas);
console.log(pessoasOrdenadas);