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
    pergunta     : "Gostou do estilo dos desafios?",
    alternativaA : "Sim",
    alternativaB : "Não",
    alternativaC : "Poderia melhorar",
    alternativaD : "Outro",
}
const q2 = {
    numQuestao   : 2,
    pergunta     : "Escolha a palavra que melhor identifica nossos desafios",
    alternativaA : "Divertidos",
    alternativaB : "Chatos",
    alternativaC : "Dinâmicos",
    alternativaD : "Cansativos",

}
const q3 = {
    numQuestao   : 3,
    pergunta     : "Ter realizado os desafios ajudou a melhorar sua timidez?",
    alternativaA : "Sim",
    alternativaB : "Não",
    alternativaC : "Um pouco",
    alternativaD : "Outro",
}
const q4 = {
    numQuestao   : 4,
    pergunta     : "De 1 a 10, qual seria a nota que você daria aos desafios?",
    alternativaA : "1 a 3",
    alternativaB : "4 a 6",
    alternativaC : "7 a 10",
    alternativaD : "Outro",
}
const q5 = {
    numQuestao   : 5,
    pergunta     : "De 1 a 10 quais as chances de você continuar seguir os desafios?",
    alternativaA : "1 a 3",
    alternativaB : "4 a 6",
    alternativaC : "7 a 10",
    alternativaD : "Outro",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : " Com que frequência você realiza os desafios?",
    alternativaA : "Todos os dias",
    alternativaB : "Quase nunca",
    alternativaC : "Quando me lembro",
    alternativaD : "Algumas vezes na semana",
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "Teve experiencias ruins com os desafios?",
    alternativaA : "Sim",
    alternativaB : "Não",
    alternativaC : "Nem tanto",
    alternativaD : "Outro",
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "Se você pudesse melhorar alguma coisa dos desafios, o que seria?",
    alternativaA : "Modelo",
    alternativaB : "Quantidade",
    alternativaC : "Lugar",
    alternativaD : "Outro",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "Os desafios são objetivos?",
    alternativaA : "Sim",
    alternativaB : "Não",
    alternativaC : "Um pouco",
    alternativaD : "Outro",
}
const q10 = {
    numQuestao   : 10,
    pergunta     : " Quanto tempo foi necessário para realizar todos desafios?",
    alternativaA : "Muito menos do que o esperado",
    alternativaB : "Menos do que o esperado",
    alternativaC : "Mais do que o esperado",
    alternativaD : "Muito mais do que o esperado",
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