const Pessoa = {
    nome: "Mariana",
    idade: 28,
    profissao: "Desenvolvedora"

}

const Andre: {nome: string,idade: number, profissao: string} = { 
    nome: 'Andre',
    idade: 29,
    profissao: "Mestre-cuca"
}

enum profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}

interface Pessoa{
    nome: string,
    idade: number,
    profissao: profissao
}

const Vanessa: Pessoa = {
    nome: "Vanessa",
    idade: 23,
    profissao: profissao.JogadoraDeFutebol
}