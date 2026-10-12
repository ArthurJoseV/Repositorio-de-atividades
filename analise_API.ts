/*
async function cafe(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Café pronto!");
        }, 19000);
    });
}

async function cafeExemplo() {
    const resultado = await cafe();
    console.log(resultado);
    const resultadoAguardado = await cafe();
    console.log(resultadoAguardado);
}

cafeExemplo();
/**
 * 
 */
type Cep = {
    cep: string;
    logradouro: string;
    complemento: string;
    unidade: string;
    bairro: string;
    localidade: string;
    uf: string;
    estado: string;
    regiao: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
}

async function buscarCep(): Promise<Cep> {
    const resposta = await fetch(`https://viacep.com.br/ws/01001000/json/`);
    const dados: Cep = await resposta.json();
    return dados;
}

async function exemploCep() {
    const resultado = await buscarCep();
    console.log(resultado);
}

exemploCep();

