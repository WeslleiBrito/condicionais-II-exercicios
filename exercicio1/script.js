function verificaDivisivel2E3() {
    const numero = Number(prompt('Digite um número qualquer:'))

    if (numero % 2 === 0 || numero % 3 === 0) {
        if (numero % 2 === 0) {
            console.log(`O número ${numero} é divisível por 2.`)
        }

        if (numero % 3 === 0) {
            console.log(`O número ${numero} é divisível por 3.`)
        }
    }
}

verificaDivisivel2E3()