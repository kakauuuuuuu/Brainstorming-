const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que mais te motiva a praticar esportes?",
        alternativas: [
            {
                texto: "Melhorar a saúde física e mental",
                afirmacao: "O sedentarismo é a falta de prática regular de atividades físicas."
            },
            {
                texto: "Falta de interesse ou motivação",
                afirmacao: "Ele aumenta o risco de doenças como obesidade, hipertensão e diabetes."
            }
        ]
    },
    {
        enunciado: "Quando pensa em qualidade de vida, qual fator é mais importante?",
        alternativas: [
            {
                texto: "Manter energia e disposição no dia a dia",
                afirmacao: "Também afeta a saúde mental, elevando o estresse e a ansiedade."
            },
            {
                texto: "Sentir-se constantemente cansado e sem ânimo",
                afirmacao: "Praticar esportes fortalece músculos, ossos e melhora a postura."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a prOnde você prefere praticar atividades físicas?",
        alternativas: [
            {
                texto: "Ao ar livre, em contato com a natureza",
                afirmacao: "Ajuda no controle do peso e na prevenção de doenças crônicas."
            },
            {
                texto: "Evitar qualquer atividade física",
                afirmacao: "Estimula a liberação de endorfina, que promove bem-estar."
            }
        ]
    },
    {
        enunciado: "Qual benefício do esporte mais te atrai?",
        alternativas: [
            {
                texto: "Redução do estresse e da ansiedade",
                afirmacao: "Melhora o humor, a autoestima e a qualidade do sono."
            },
            {
                texto: "Conviver diariamente com altos níveis de estresse",
                afirmacao: "Aumenta a disposição e a capacidade de concentração."
            }
        ]
    },
    {
        enunciado: "Como você mantém a motivação para se exercitar?",
        alternativas: [
            {
                texto: "Seguindo uma rotina e metas claras",
                afirmacao: "Pequenas mudanças, como caminhar ou pedalar, já trazem benefícios."
            },
            {
                texto: "Abandonando o treino ao primeiro sinal de dificuldade",
                afirmacao: "Movimente-se sempre: cuidar do corpo é cuidar da mente."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "A chave para uma vida saudável!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
