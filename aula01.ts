//Atividade 1

// let pelopidasriodoce: string = "Av. Brasil";
// pelopidasriodoce = "Nelson"

//if (pelopidasriodoce == "Av. Brasil") {
//  console.log("Chegaremos cedo")
//} else {
//  console.log("Andaremos muito")
//}


//Atividade 2

type Nara = {
    pos: string;
    temPaciencia: boolean;
    facul: string;
    fap: string;
    aws: string;
}
const perfil: Nara = {
    pos: "Engenharia de Qualidade de Software",
    temPaciencia: false,
    facul: "IFPE",
    fap: "Cansativo",
    aws: "Em conclusão"
}

function descreverPerfil(perfil: Nara) {
    return `Ela faz pós em ${perfil.pos}, Ela tem paciência? ${perfil.temPaciencia}, Faz faculdade no ${perfil.facul}, Acha o FAP ${perfil.fap}, Está no curso da AWS e ${perfil.aws}`
}
console.log(descreverPerfil(perfil))

// atividade 3


let valor1: number = 7
let valor2: number = 0

while (valor2 <= 500) {
    console.log(`${valor1} x ${valor2} = ${valor1 * valor2}`)
    valor2++

}


