//atividade 1

let nome: string = "Arthur"
let idade: number = 25
const sono: boolean = true
var qualquervalor: bigint = 1234567890123456789012345678901234567890n
let nulo: null = null
let indefinido: undefined = undefined
let qualquercoisa: any = "qualquercoisa"
let simbolouma: Symbol = Symbol("uma")

//atividade 2

let valor: number = "vinte"     //O tipo 'string' não pode ser atribuído ao tipo 'number'.
                                // 'valor' é declarado, mas seu valor nunca é lido.ts(6133)

//atividade 3
let age:number = 18

if (age >= 18){
    console.log("Maior de idade")
} else {
    console.log("menor de idade")
} 

//atividade 4


let nota: number = 5

if (nota >= 7){
    console.log("Aprovado")
} else if (nota >= 5 && nota < 7) {
    console.log("recuperação")
} else if (nota < 5) {
    console.log("reprovado")
}


//atividade 5 


let diaSemana: number = 0

switch (diaSemana) {
    case 1:
        console.log("Domingo")
        break
    case 2:
        console.log("Segunda")
        break
    case 3:
        console.log("Terça")
        break
    case 4:
        console.log("Quarta")
        break
    case 5:
        console.log("Quinta")
        break
    case 6:
        console.log("Sexta")
        break
    case 7:
        console.log("Sábado")
        break
    default:
        console.log("Dia inválido")
}


// atividade 6


for (let valor: number = 1; valor <= 10; valor++) {
    console.log(`Mariana conta ${valor}. Mariana conta ${valor}.`);
    console.log("Ana, viva Mariana! Viva Mariana!");
}

// atividade 7


let numero: number = 3

if (numero % 2 !== 0) {
    numero++
}
while (numero <= 20) {
    console.log(valor)
    valor += 2

}


// atividade 8 

let notas: number[] = [7.2, 6.9, 10, 8.1, 2.9]
let soma: number = 0

for (let calc of notas) {
    console.log(soma+=calc)
}


// atividade 9

for (let i: number = 1; i <= 15; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// atividade 10

let numeros: number[] = [2, 7, 10, 15, 20, 23];

for (let numero of numeros) {
    if (numero % 2 === 0) {
        console.log(`${numero} é par`);
    } else {
        console.log(`${numero} é ímpar`);
    }

}