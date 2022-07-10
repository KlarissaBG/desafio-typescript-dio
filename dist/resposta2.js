/* Como podemos melhorar o esse código usando TS?

var pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

var pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

var pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

var pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
} */
var Trabalho;
(function (Trabalho) {
    Trabalho[Trabalho["Atriz"] = 0] = "Atriz";
    Trabalho[Trabalho["Padeiro"] = 1] = "Padeiro";
})(Trabalho || (Trabalho = {}));
let pessoa1 = {
    nome: 'maria',
    idade: 29,
    profissao: Trabalho.Atriz
};
let pessoa2 = {
    nome: 'roberto',
    idade: 19,
    profissao: Trabalho.Padeiro
};
let pessoa3 = {
    nome: 'laura',
    idade: 32,
    profissao: Trabalho.Atriz
};
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Trabalho.Padeiro
};
//# sourceMappingURL=resposta2.js.map