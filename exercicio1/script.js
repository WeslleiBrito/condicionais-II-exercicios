function verificaDivisivelIfAninhado(){
    const valor = Number(prompt('Informe um número a ser verificado!'))

    if(valor % 2 === 0){
        if(valor % 3 === 0){
            return `O número ${valor} é divisivel por 2 e 3.`
        }else{
            return `O número ${valor} é divisivel apenas por 2.`
        }
    }else{
        if(valor % 3 === 0){
            return `O número ${valor} é divisivel apenas por 3.`
        }else{
            return `O número ${valor} NÃO é divisivel por 2 e nem por 3.`
        }
    }
}

// console.log(verificaDivisivelIfAninhado())

const verificaDivisivelOperadores = () =>{
    const valor = Number(prompt('Informe um número a ser verificado!'))

    if(valor % 2 === 0 && valor % 3 === 0){
        return `O número ${valor} é divisivel por 2 e 3.`
    }else if(valor % 2 === 0 || valor % 3 === 0){
        if(valor % 2 === 0){
            return `O número ${valor} é divisivel apenas por 2.`
        }else{
            return `O número ${valor} é divisivel apenas por 3.`
        }
    }else{
        return `O número ${valor} NÃO é divisivel por 2 e nem por 3.`
    }

}

console.log(verificaDivisivelOperadores())