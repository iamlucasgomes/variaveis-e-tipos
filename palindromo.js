function ehPalindromo(palavra) { // criei uma função para verificarmos se uma palavra é palindromo
    let palindromo = ''; // criei a variável palindromo e atribui uma string vazia
    for (let index = palavra.length - 1; index >= 0; index--) { // com a estrutura de repetição começando na ultima letra de palavra, colocamos a condição de enquanto ela for maior ou igual a zero, ela vai iterar a palavra através do index--
        palindromo += palavra[index] // a cada repetição iremos adicionar a variável palindromo o indice da palavra
        if (palavra === palindromo) { // com a estrutura condicional iremos verificar se a palavra é igual a palindromo, se o resultado for true
            return 'é um palindromo'; // retornamos a string 'é um palindromo'
        }
    }
    return 'Infelizmente, não é um palindromo' // caso o contrário retornamos a string 'Infelizmente, não é um palindromo'
}

console.log(ehPalindromo('ovo'));