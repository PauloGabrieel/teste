function fibonacci(num) {
    let soma = 0;
    let anterior = 0;
    let proximo = 1

    for( let i = 0 ; i <= num; i ++) {
        if(anterior === num) return "o número informado pertence a sequência fibonacci"
        soma = anterior + proximo;
        anterior = proximo;
        proximo = soma

    }
    return "O número informado não pertence a sequência de fibonacci"
}


// O parâmetro da função pode ser alterado para efetuar os testes.

console.log(fibonacci(22))