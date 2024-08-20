const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola, você se depara com uma nova tecnologia: uma IA capaz de gerar imagens hiper-realistas em questão de segundos. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é impressionante!",
                afirmacao: "Ficou fascinado com a rapidez e qualidade com que a IA pode gerar imagens."
            },
            {
                texto: "Isso é preocupante!",
                afirmacao: "Sentiu uma preocupação com o impacto que essa tecnologia pode ter na criatividade humana."
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia de geração de imagens, uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre a evolução das IAs de imagem. No fim de uma aula, ela pede que você escreva um trabalho sobre como as IAs de imagem evoluíram nos últimos anos. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que usa IA para encontrar informações atualizadas e relevantes sobre a evolução das IAs de imagem.",
                afirmacao: "Conseguiu utilizar a IA para encontrar e compreender dados recentes sobre o desenvolvimento dessa tecnologia."
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: "Sentiu mais confiança ao usar seus próprios recursos para explorar e explicar a evolução das IAs de imagem."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma sobre a evolução das IAs de imagem e seus impactos futuros. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Defende a ideia de que a evolução das IAs de imagem pode criar novas oportunidades criativas e melhorar o design gráfico.",
                afirmacao: "Acredita que o avanço das IAs de imagem pode abrir novas possibilidades no campo da criatividade e do design."
            },
            {
                texto: "Me preocupo com o impacto das IAs de imagem na indústria criativa e na originalidade das obras.",
                afirmacao: "Sua preocupação com a originalidade motivou a discutir como as IAs de imagem podem ser usadas de forma ética e inovadora."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse sua visão sobre a evolução das IAs de imagem. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design tradicional, como o Paint.",
                afirmacao: "Percebeu a importância de dominar ferramentas tradicionais e decidiu compartilhar seus conhecimentos sobre design manual."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Utilizou a IA para criar imagens rapidamente e agora consegue mostrar aos outros como essas ferramentas podem facilitar o processo criativo."
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, e uma pessoa do seu grupo decidiu usar uma IA para gerar as imagens necessárias. O problema é que as imagens geradas são muito parecidas com outras já existentes. O que você faz?",
        alternativas: [
            {
                texto: "Utiliza as imagens geradas pela IA sem questionar, considerando que são resultado de uma tecnologia avançada.",
                afirmacao: "Sentiu que confiar cegamente na IA para todas as tarefas pode levar a resultados repetitivos e sem originalidade."
            },
            {
                texto: "Revisa as imagens geradas pela IA e contribui com suas próprias ideias para garantir que o trabalho tenha um toque pessoal e original.",
                afirmacao: "Reconheceu que, apesar da utilidade da IA, a intervenção humana é essencial para garantir a autenticidade e a originalidade das produções."
            }
        ]
    }
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
