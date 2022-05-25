function substituiPares(array) {
    // criei uma função onde determinei um array como parâmetro
    let resultado = []; // criei uma variável com um array vazio, onde irei enviar o resultado da nossa estrutura de repetição e estrutura condicional
    if (!array.length) { return console.log(-1); } // coloquei essa estrutura condicional para validar se o array esta vazio, caso estiver ele vai retornar o valor -1
    for (let index = 0; index < array.length; index++) {
        // aqui coloquei a estrutura de repetição, com o limite maximo definido pelo tamanho do array
        if (array[index] % 2 === 0) {
            // a nossa estrutura condicional determina se os numeros do array tiver resto 0
            resultado.push((array[index] = 0)); // adicionaremos ao array resultado com o método push
        } else if (array[index] !== 0) {
            // se os numeros do array forem diferentes de zero
            resultado.push(array[index]); // adicionaremos ao array resultado novamente com o método push
        }
    }
    console.log(resultado); // usei o console.log para imprimir o resultado
}

substituiPares([1, 3, 4, 6, 80, 33, 23, 90]);