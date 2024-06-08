//Array contendo as perguntas e a opção de resposta
const perguntas = [
    {
        texto: "Quando você enfrenta um problema, você tende a:",

        opcoes: [
            {texto: "Atacar o problema diretamente e tomar medidas imediatas.", valor: "a"},
            {texto: "Pensar profundamente sobre o problema e tentar entendê-lo completamente antes de agir.", valor: "b"},
            {texto: "Procurar ajuda de amigos e discutir o problema em grupo.", valor: "c"},
            {texto: "Permanecer calmo e esperar que a situação se resolva por si mesma.", valor: "d"}
        ]
    },

    {
        texto: "Em uma festa, você geralmente:",

        opcoes: [
            {texto: "É o centro das atenções, organizando atividades e animando a todos.", valor: "a"},
            {texto: "Fica em um canto, observando e analisando o comportamento das pessoas.", valor: "b"},
            {texto: "Conversa com muitas pessoas e faz novas amizades facilmente.", valor: "c"},
            {texto: "Fica com seu grupo de amigos próximos e prefere conversas mais tranquilas.", valor: "d"}
        ]
    },

    {
        texto: "Como você lida com críticas?",

        opcoes: [
            {texto: "Pode ficar irritado e defender seu ponto de vista vigorosamente.", valor: "a"},
            {texto: "Tende a ficar magoado e pensar muito sobre o que foi dito.", valor: "b"},
            {texto: "Leva na esportiva e tenta aprender com a crítica.", valor: "c"},
            {texto: "Aceita a crítica com calma e reflete sobre ela com serenidade.", valor: "d"}
        ]
    },

    {
        texto: "Quando você está trabalhando em um projeto, você:",

        opcoes: [
            {texto: "Assume a liderança e direciona os outros.", valor: "a"},
            {texto: "Foca nos detalhes e busca a perfeição.", valor: "b"},
            {texto: "Gosta de trabalhar em equipe e compartilhar ideias.", valor: "c"},
            {texto: "Prefere um ambiente estável e tranquilo para trabalhar.", valor: "d"}
        ]
    },

    {
    texto: "Em situações de estresse, você:",

        opcoes: [
            {texto: "Pode se tornar irritado e impaciente.", valor: "a"},
            {texto: "Pode se sentir sobrecarregado e melancólico.", valor: "b"},
            {texto: "Tenta se distrair e pensar positivamente.", valor: "c"},
            {texto: "Fica calmo e tenta resolver as coisas pacificamente.", valor: "d"}
        ]
    },

    {
    texto: "Como você prefere passar seu tempo livre?",
        opcoes: [
            { texto: "Praticando esportes ou atividades físicas intensas.", valor: "a" },
            { texto: "Lendo um livro ou assistindo a um filme tranquilo.", valor: "b" },
            { texto: "Saindo com amigos e conhecendo lugares novos.", valor: "c" },
            { texto: "Relaxando em casa, sem fazer muitas atividades.", valor: "d" }
        ]
    },

    {
        texto: "Quando você tem que tomar uma decisão importante, você:",
        opcoes: [
            { texto: "Toma a decisão rapidamente com base na sua intuição.", valor: "a" },
            { texto: "Analisa todos os detalhes e possíveis consequências antes de decidir.", valor: "b" },
            { texto: "Consulta várias pessoas para ouvir diferentes opiniões.", valor: "c" },
            { texto: "Prefere esperar e ver se a decisão pode ser adiada.", valor: "d" }
        ]
    },

    {
        texto: "No trabalho em equipe, você geralmente:",
        opcoes: [
            { texto: "Gosta de assumir o papel de líder e coordenar as atividades.", valor: "a" },
            { texto: "Prefere trabalhar sozinho e contribuir com suas próprias ideias.", valor: "b" },
            { texto: "Se sente à vontade colaborando e trocando ideias constantemente.", valor: "c" },
            { texto: "Gosta de manter a paz e resolver conflitos entre os membros da equipe.", valor: "d" }
        ]
    },

    {
        texto: "Como você lida com mudanças inesperadas?",
        opcoes: [
            { texto: "Adapta-se rapidamente e vê as mudanças como oportunidades.", valor: "a" },
            { texto: "Sente-se desconfortável e precisa de tempo para se ajustar.", valor: "b" },
            { texto: "Aceita as mudanças, mas busca apoio de amigos e colegas.", valor: "c" },
            { texto: "Mantém a calma e tenta encontrar soluções práticas.", valor: "d" }
        ]
    },
];

//variavel que mantém o índece da pergunta atual
let indicePerguntasAtual = 0;
//objeto que amarmazena a pontuação de cada temperamento
let pontuacoes = {a: 0, b: 0, c: 0, d: 0};

//função que mostra apergunta atual
function mostrarpergunta(){
    //obtem a pergunta atual do array
    const perguntaAtual =   perguntas[indicePerguntasAtual];
    //obtem o elemento do testo e da pergunta e do conteiner de opções
    const perguntaTexto = document.getElementById('perguntatexto');
    const opcoesConteiner = document.getElementById('opcoesconteiner');

    //atualizar o texto de perguntas 
    perguntaTexto.innerText = perguntaAtual.texto;
    //limpa as opções anteriores
    opcoesConteiner.innerHTML = '';

    //criar um botao para cada opção
    perguntaAtual.opcoes.forEach(opcao => {
        const botaoOpcao = document.createElement ('button');
        botaoOpcao.innerText = opcao.texto;
        //adicionar um evento ao click para cada botão
        botaoOpcao.onclick = () => {
            //incrementa a pontuacao  opção selecinada
            pontuacoes [opcao.valor]++;
            proximaPergunta()
        }; 
        //adiciona o botão ao conteiner de opções
        opcoesConteiner.appendChild(botaoOpcao);
    });

    document.getElementById('img').innerHTML = '<img src ="imgteste.png" width = "300px" style = "display: block;margin-bottom: -15px;width: 100%;">';
    document.getElementById('titulo').innerText = 'Teste de temperamento';
    //chama a primeira pergunta
}

//funcao para mostrar a proxima pergunta
function proximaPergunta() {
    //incrementa indece da pergunta atual
    indicePerguntasAtual++;
    //se houver mais perguntas mostrar a proxima pergunta
    if (indicePerguntasAtual < perguntas.length){
        mostrarpergunta();
    }else {
        //se não tiver mais perguntas, calcula o resultado
        calcularResultado();
    }
}

// Função para calcular o resultado final
function calcularResultado() {
    // Variáveis para armazenar a pontuação máxima e o temperamento correspondente
    let pontuacaoMaxima = 0;
    let temperamento = '';
    // Itera sobre as pontuações para encontrar a maior
    for (let chave in pontuacoes) {
        if (pontuacoes[chave] > pontuacaoMaxima) {
            pontuacaoMaxima = pontuacoes[chave];
            temperamento = chave;
        }
    }

    // Determina o texto do resultado com base na pontuação
    let textoResultado = '';
    switch (temperamento) {
              case 'a':
        textoResultado = `
           <h1 class="result" style = "background-color:
#fb050d;color: white;padding: 10px;font-size: 20px;">Você tem um temperamento Colérico.</h1>
           <div>
           <img src="colerico.png" alt="colerico.png" width = "100px">
            <h2>O Colérico</h2>
            </div>
            <p><strong>Características principais:</strong></p>
            <ul>
                <li>Decidido e independente</li>
                <li>Proativo e orientado para resultados</li>
                <li>Consegue motivar e liderar equipes</li>
                <li>Tende a ser assertivo e direto na comunicação;</li>
                <li>Gosta de assumir o controle e resolver problemas rapidamente.</li>
            </ul>
            <p><strong>Pontos Positivos:</strong></p>
            <ul>
                <li>Alta capacidade de liderança</li>
                <li>Confiante e determinado</li>
                <li>Grande energia e entusiasmo</li>
                <li>Rápida tomada de decisões;</li>
                <li>Excelente para enfrentar desafios.</li>
            </ul>
            <p><strong>Pontos Negativos:</strong></p>
            <ul>
                <li>Propenso a irritabilidade e impaciência</li>
                <li>Pode ser dominante e autoritário</li>
                <li>Tendência a agir impulsivamente;</li>
                <li>Pode ignorar os sentimentos dos outros.</li>
            </ul>
            <p><strong>Dicas para melhoria:</strong></p>
            <ul>
                <li>Praticar a paciência e a escuta ativa</li>
                <li>Reconhecer e valorizar as contribuições dos outros</li>
                <li>Desenvolver empatia e habilidades interpessoais</li>
                <li>Aprender a controlar impulsos e reações;</li>
                <li>Buscar feedback e trabalhar na gestão da raiva.</li>
            </ul>
        `;
        break;
    case 'b':
        textoResultado = `
            <h1 class="result" style = "background-color: #069c07;color: white;padding: 10px;font-size: 20px;">Você tem um temperamento Melancólico.</h1>
            <div>
            <img src="melancolico.png" alt="melancolico.png" width="100px">
            <h2>O Melancólico</h2>
            </div>
            <p><strong>Características principais:</strong></p>
            <ul>
                <li>Analítico e perfeccionista</li>
                <li>Leal e confiável</li>
                <li>Altamente criativo e artístico</li>
                <li>Sensível e introspectivo;</li>
                <li>Gosta de planejamento e organização detalhada;</li>
            </ul>
            <p><strong>Pontos Positivos:</strong></p>
            <ul>
                <li>Capacidade de análise profunda</li>
                <li>Lealdade e comprometimento</li>
                <li>Sensibilidade artística e criatividade</li>
                <li>Grande empatia e compaixão;</li>
                <li>Habilidade para resolver problemas complexos;</li>
                <li>Forte senso de responsabilidade;</li>
            </ul>
            <p><strong>Pontos Negativos:</strong></p>
            <ul>
                <li>Tendência ao perfeccionismo excessivo</li>
                <li>Susceptível a preocupações e ansiedades</li>
                <li>Propenso a mudanças de humor e introspecção excessiva;</li>
                <li>Dificuldade em lidar com críticas;</li>
                <li>Facilidade em se sentir sobrecarregado por detalhes.</li>
            </ul>
            <p><strong>Dicas para melhoria:</strong></p>
            <ul>
                <li>Praticar a autoaceitação e cultivar pensamentos positivos</li>
                <li>Estabelecer metas realistas e focar nos aspectos positivos</li>
                <li>Aprender a delegar tarefas e confiar nos outros</li>
                <li>Buscar atividades que promovam o relaxamento e o bem-estar;</li>
                <li>Trabalhar na flexibilidade e adaptabilidade em situações inesperadas;</li>
                <li>Envolver-se em atividades sociais para reduzir o isolamento;</li>
            </ul>
        `;
        break;
    case 'c':
        textoResultado = `
            <h1 class="result" style = "background-color: 
#f7b96a;color: white;padding: 10px;font-size: 20px;">Você tem um temperamento Sanguíneo.</h1>
            <div>
            <img src="sanguineo.png" alt="sanguineo.png" width="100px">
            <h2> O Sanguíneo </h2>
            </div>
            <p><strong>Características principais:</strong></p>
            <ul>
                <li>Extrovertido e comunicativo</li>
                <li>Entusiasta e energético</li>
                <li>Sociável e amigável</li>
                <li>Alegre e otimista;</li>
                <li>Adapta-se facilmente a novas situações.</li>
            </ul>
            <p><strong>Pontos Positivos:</strong></p>
            <ul>
                <li>Capacidade de adaptação e flexibilidade</li>
                <li>Carisma e habilidades sociais</li>
                <li>Capacidade de inspirar e motivar os outros</li>
                <li>Capacidade de inspirar e motivar os outros;</li>
                <li>Facilidade em fazer novas amizades.</li>
            </ul>
            <p><strong>Pontos Negativos:</strong></p>
            <ul>
                <li>Propenso a distrações e falta de foco</li>
                <li>Pode evitar confrontos e responsabilidades</li>
                <li>Tendência a agir impulsivamente;</li>
                <li>Pode ser visto como superficial ou pouco confiável.</li>
            </ul>
            <p><strong>Dicas para melhoria:</strong></p>
            <ul>
                <li>Praticar o foco e a disciplina</li>
                <li>Estabelecer prioridades e metas claras</li>
                <li>Aprender a dizer não e assumir responsabilidades</li>
                <li>Desenvolver habilidades de organização e planejamento;</li>
                <li>Buscar equilíbrio entre socialização e responsabilidades.</li>
            </ul>
        `;
        break;
    case 'd':
        textoResultado = `
            <h1 class="result" style = "background-color: 
#0765e2;color: white;padding: 10px;font-size: 20px;">Você tem um temperamento fleumático.</h1>
            <div>
            <img src="fleumatico.png" alt="fleumatico.png" width="100px" style = "margin-top: 10px; margin-bottom: -30px;">
            <h2>O Fleumático</h2>
            </div>
            <p><strong>Características principais:</strong></p>
            <ul>
                <li>Tranquilo e relaxado</li>
                <li>Tolerante e compreensivo</li>
                <li>Estável e consistente</li>
                <li>Reservado e introspectivo;</li>
                <li>Aversão a conflitos e confrontos.</li>
            </ul>
            <p><strong>Pontos Positivos:</strong></p>
            <ul>
                <li>Capacidade de manter a calma em situações estressantes</li>
                <li>Habilidade para ouvir e oferecer apoio aos outros</li>
                <li>Equilíbrio emocional e capacidade de resolver conflitos</li>
                <li>Senso de ponderação e análise antes de agir;</li>
                <li>Facilidade em aceitar mudanças e adaptar-se.</li>
            </ul>
            <p><strong>Pontos Negativos:</strong></p>
            <ul>
                <li>Tendência à complacência e falta de iniciativa</li>
                <li>Pode evitar confrontos e evitar tomar decisões difíceis</li>
                <li>Pode ser visto como passivo ou indeciso;</li>
                <li>Resistência a sair da zona de conforto.</li>
            </ul>
            <p><strong>Dicas para melhoria:</strong></p>
            <ul>
                <li>Definir metas claras e buscar desafios</li>
                <li>Praticar a assertividade e a expressão de opiniões</li>
                <li>Desenvolver habilidades de liderança iniciativa</li>
                <li>Buscar oportunidades para sair da zona de conforto;</li>
                <li>Buscar feedback e aprender a lidar com críticas construtivas.</li>
            </ul>
        `;
        break;
        }
// Esconde o texto do teste
document.getElementById('perguntasconteiner').style.display = 'none';

// Exibe o texto do resultado na página
document.getElementById('resultado').innerHTML = textoResultado;
// Exibe o container do resultado
document.getElementById('resultado').style.display = 'block';
document.getElementById('resultado').style.visibility = 'initial';
document.getElementById('img').style.display = 'none';
    document.getElementById('titulo').style.visibility = 'hidden';
}

document.getElementById('iniciartestebtn').onclick = () => {
    //esconde a introdução
    document.getElementById('introducaoconteiner').style.display = 'none';
    //mostrar conteiner de perguntas
    document.getElementById('perguntasconteiner').style.display = 'block';
    //tira a imagem da introdução
    document.getElementById('imgIntrod').style.display = 'none'
    //muda a imagem e titulo
    
    //chama a primeira pergunta
    mostrarpergunta();
};