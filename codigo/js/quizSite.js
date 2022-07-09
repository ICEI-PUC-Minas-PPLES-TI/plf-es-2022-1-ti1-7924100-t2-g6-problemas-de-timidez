/* Quiz */
let titulo     = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso      = document.querySelector('#aviso')
let progresso  = document.querySelector('#progresso')

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}
const q1 = {
    numQuestao   : 1,
    pergunta     : "O site foi prestativo?",
    alternativaA : "Sim",
    alternativaB : "Não",
    alternativaC : "Poderia melhorar",
    alternativaD : "Outro",
    correta      : "Norte",
}
const q2 = {
    numQuestao   : 2,
    pergunta     : "Contribuimos para que você perdesse a timidez?",
    alternativaA : "Sim",
    alternativaB : "Não",
    alternativaC : "Um pouco",
    alternativaD : "Outro",
    correta      : "Brasília",
}
const q3 = {
    numQuestao   : 3,
    pergunta     : " O quanto você está satisfeito com o atendimento do nosso site?",
    alternativaA : "Muito satisfeito",
    alternativaB : "Satisfeito",
    alternativaC : "Indiferente",
    alternativaD : "Pouco satisfeito",
    correta      : "Muito satisfeito",
}
const q4 = {
    numQuestao   : 4,
    pergunta     : "Em sua opinião, o site entrega o que promete?",
    alternativaA : "Sim",
    alternativaB : "Não",
    alternativaC : "Um pouco",
    alternativaD : "Outro",
    correta      : "Outro",
}
const q5 = {
    numQuestao   : 5,
    pergunta     : "Você recomendaria o site para amigos/familiares?",
    alternativaA : "Sim",
    alternativaB : "Não",
    alternativaC : "Talvez",
    alternativaD : "Outro",
    correta      : "Outro",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "Há quanto tempo está usando o site?",
    alternativaA : "Menos de 1 mês",
    alternativaB : "2 meses",
    alternativaC : "3 meses",
    alternativaD : "Mais de 4 meses",
    correta      : "2 meses",
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "Encontrou pessoas com interesses similares?",
    alternativaA : "Sim",
    alternativaB : "Não",
    alternativaC : "Nem tanto",
    alternativaD : "Outro",
    correta      : "Lado onde o sol se põe",
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "O que achou dos desafios?",
    alternativaA : "Bons",
    alternativaB : "Ruins",
    alternativaC : "Podem melhorar",
    alternativaD : "Outro",
    correta      : "Bons",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "Teve dificuldade para realizar os desafios fora de casa?",
    alternativaA : "Sim",
    alternativaB : "Não",
    alternativaC : "Um pouco",
    alternativaD : "Outro",
    correta      : "Outro",
}
const q10 = {
    numQuestao   : 10,
    pergunta     : "Conseguiu se enturmar no nosso site?",
    alternativaA : "Sim",
    alternativaB : "Não",
    alternativaC : "Um pouco",
    alternativaD : "Outro",
    correta      : "5º maior",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    progresso.value = parseInt(progresso.value) + 1
    //console.log(progresso.value)
}


function bloquearAlternativas() {
    alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    alternativas.classList.remove('bloqueado')
}

function piscarNoAcerto() {
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}

function piscarNoErro() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {

        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim da pesquisa!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 150)
    desbloquearAlternativas()
}

function fimDoJogo() {

    somAplausos.play()

    instrucoes.textContent = "Obrigado por participar!"

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

}