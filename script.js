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

    //mostra a barra de progresso
    document.getElementById('progress-bar').style.display = 'block';

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
        updateProgressBar();
    }else {
        //se não tiver mais perguntas, calcula o resultado
        calcularResultado();
        document.getElementById('progress-bar').style.display = 'none';
    }
}

function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const progress = ((indicePerguntasAtual + 1) / perguntas.length) * 100;
    progressBar.style.width = `${progress}%`;
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
        textoResultado =`           
           <div class="f0">
            <h2 style ="color: #fb050d;">O Colérico</h2>
            <img src="diver-colerico.png" width="150">
            <h3>Clique na seta &gt; para</h3>
            <h4>Descubrir as principais características do Colérico</h4>
    <button class="btn1" style="border: none; cursor: pointer; border-radius: 5px; font-size: 30px; color: white; background-color: #fb050d; margin-top: 15px;">
        &gt;
    </button>
</div>
        <div class="f1" style="display: none;">
            <p><strong>Características principais:</strong></p>
            <ul>
                <li>Decidido e independente</li>
                <li>Proativo e orientado para resultados</li>
                <li>Consegue motivar e liderar equipes</li>
                <li>Tende a ser assertivo e direto na comunicação;</li>
                <li>Gosta de assumir o controle e resolver problemas rapidamente.</li>
            </ul>
<button class="btn2" style="border: none; cursor: pointer; border-radius: 5px; font-size: 30px; color: white; background-color: rgba(251, 5, 13, 0.5); margin-top: 15px; margin-right: 5px;">
        &lt;
    </button>
    <button class="btn3" style="border: none; cursor: pointer; border-radius: 5px; font-size: 30px; color: white; background-color: #fb050d; margin-top: 15px;">
        &gt;
    </button>
</div>
        <div class="f2" style="display: none;">
            <p><strong>Pontos Positivos:</strong></p>
            <ul>
                <li>Alta capacidade de liderança</li>
                <li>Confiante e determinado</li>
                <li>Grande energia e entusiasmo</li>
                <li>Rápida tomada de decisões;</li>
                <li>Excelente para enfrentar desafios.</li>
            </ul>
            <button class="btn4" style="border: none; cursor: pointer; border-radius: 5px; font-size: 30px; color: white; background-color: rgba(251, 5, 13, 0.5); margin-top: 15px; margin-right: 5px;">
        &lt;
    </button>
    <button class="btn5" style="border: none; cursor: pointer; border-radius: 5px; font-size: 30px; color: white; background-color: #fb050d; margin-top: 15px;">
        &gt;
    </button>
</div>
        <div class="f3" style="display: none;">
            <p><strong>Pontos Negativos:</strong></p>
            <ul>
                <li>Propenso a irritabilidade e impaciência</li>
                <li>Pode ser dominante e autoritário</li>
                <li>Tendência a agir impulsivamente;</li>
                <li>Pode ignorar os sentimentos dos outros.</li>
            </ul>
            <button class="btn6" style="border: none; cursor: pointer; border-radius: 5px; font-size: 30px; color: white; background-color: rgba(251, 5, 13, 0.5); margin-top: 15px; margin-right: 5px;">
        &lt;
    </button>
    <button class="btn7" style="border: none; cursor: pointer; border-radius: 5px; font-size: 30px; color: white; background-color: #fb050d; margin-top: 15px;">
        &gt;
    </button>
</div>
        <div class="f4" style="display: none;">
            <p><strong>Dicas para melhoria:</strong></p>
            <ul>
                <li>Praticar a paciência e a escuta ativa</li>
                <li>Reconhecer e valorizar as contribuições dos outros</li>
                <li>Desenvolver empatia e habilidades interpessoais</li>
                <li>Aprender a controlar impulsos e reações;</li>
                <li>Buscar feedback e trabalhar na gestão da raiva.</li>
            </ul>
    <button class="btn8" style="border: none; cursor: pointer; border-radius: 5px; font-size: 30px; color: white; background-color: rgba(251, 5, 13, 0.5); margin-top: 15px;">
        &lt;
    </button>
</div>
        `; 
        document.getElementById('titulo').innerHTML = `<h1 class="result" style = "background-color: 
#fb050d;color: white;padding: 10px;font-size: 20px;">Você tem um temperamento Colerico.</h1><img src="colerico.png" alt="fleumatico.png" width="100px" style = "margin-top: 10px; margin-bottom: -30px;">`
        document.body.classList.toggle('colerico')
        break;
    case 'b':
        textoResultado = `
            <div class="f0">
            <h2 style ="color: #069c07;">O Melancólico</h2>
            <img src="diver-melancolico.png" width="150">
            <h3>Clique na seta &gt; para</h3>
            <h4>Descubrir as principais características do Melancólico</h4>
            <button class="btn1" style="border: none; cursor: pointer; border-radius: 5px; font-size: 30px; color: white; background-color: #069c07; margin-top: 15px;">
        &gt;
    </button>
</div>
             <div class="f1" style="display: none;">
            <p><strong>Características principais:</strong></p>
            <ul>
                <li>Analítico e perfeccionista</li>
                <li>Leal e confiável</li>
                <li>Altamente criativo e artístico</li>
                <li>Sensível e introspectivo;</li>
                <li>Gosta de planejamento e organização detalhada;</li>
            </ul>
<button class="btn2" style="border: none; cursor: pointer; border-radius: 5px; font-size: 30px; color: white; background-color: rgba(6, 156, 7, 0.5); margin-top: 15px; margin-right: 5px;">
        &lt;
    </button>
    <button class="btn3" style="border: none; cursor: pointer; border-radius: 5px; font-size: 30px; color: white; background-color: #069c07; margin-top: 15px;">
        &gt;
    </button>
</div>
 <div class="f2" style="display: none;">
            <p><strong>Pontos Positivos:</strong></p>
            <ul>
                <li>Capacidade de análise profunda</li>
                <li>Lealdade e comprometimento</li>
                <li>Sensibilidade artística e criatividade</li>
                <li>Grande empatia e compaixão;</li>
                <li>Habilidade para resolver problemas complexos;</li>
                <li>Forte senso de responsabilidade;</li>
            </ul>
<button class="btn4" style="border: none; cursor: pointer; border-radius: 5px; font-size: 30px; color: white; background-color: rgba(6, 156, 7, 0.5); margin-top: 15px; margin-right: 5px;">
        &lt;
    </button>
    <button class="btn5" style="border: none; cursor: pointer; border-radius: 5px; font-size: 30px; color: white; background-color: #069c07; margin-top: 15px;">
        &gt;
    </button>
</div>
             <div class="f3" style="display: none;">
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
<button class="btn6" style="border: none; cursor: pointer; border-radius: 5px; font-size: 30px; color: white; background-color: rgba(6, 156, 7, 0.5); margin-top: 15px; margin-right: 5px;">
        &lt;
    </button>
    <button class="btn7" style="border: none; cursor: pointer; border-radius: 5px; font-size: 30px; color: white; background-color: #069c07; margin-top: 15px;">
        &gt;
    </button>
</div>
<div class="f4" style="display: none;">
    <ul>
        <li>Praticar a autoaceitação e cultivar pensamentos positivos</li>
        <li>Estabelecer metas realistas e focar nos aspectos positivos</li>
        <li>Aprender a delegar tarefas e confiar nos outros</li>
        <li>Buscar atividades que promovam o relaxamento e o bem-estar;</li>
        <li>Trabalhar na flexibilidade e adaptabilidade em situações inesperadas;</li>
        <li>Envolver-se em atividades sociais para reduzir o isolamento;</li>
    </ul>
    <button class="btn8" style="border: none; cursor: pointer; border-radius: 5px; font-size: 30px; color: white; background-color: rgba(6, 156, 7, 0.5); margin-top: 15px;">
        &lt;
    </button>
</div>
        `;
        document.getElementById('titulo').innerHTML = `<h1 class="result" style = "background-color: 
#069c07;color: white;padding: 10px;font-size: 20px;">Você tem um temperamento Melancólico.</h1><img src="melancolico.png" alt="fleumatico.png" width="100px" style = "margin-top: 10px; margin-bottom: -30px;">`
        document.body.classList.toggle('melancolico')
        break;
    case 'c':
        textoResultado = `
    <div class="f0">
        <h2 style ="color: #8b572a;"> O Sanguíneo </h2>
        <img src="diver-sanguineo.png" width="150">
        <h3>Clique na seta &gt; para</h3>
        <h4>Descubrir as principais características do Sanguíneo</h4>
        <button class="btn1" style="border: none; cursor: pointer; border-radius: 5px; font-size: 30px; color: white; background-color: #f7b96a; margin-top: 15px;">
        &gt;
    </button>
</div>
            </div>
            <div class="f1" style="display: none;">
            <p><strong>Características principais:</strong></p>
            <ul>
                <li>Extrovertido e comunicativo</li>
                <li>Entusiasta e energético</li>
                <li>Sociável e amigável</li>
                <li>Alegre e otimista;</li>
                <li>Adapta-se facilmente a novas situações.</li>
            </ul>
<button class="btn2" style="border: none; cursor: pointer; border-radius: 5px; font-size: 30px; color: white; background-color: rgba(247, 185, 106, 0.7); margin-top: 15px; margin-right: 5px;">
        &lt;
    </button>
    <button class="btn3" style="border: none; cursor: pointer; border-radius: 5px; font-size: 30px; color: white; background-color: #f7b96a; margin-top: 15px;">
        &gt;
    </button>
</div>
           <div class="f2" style="display: none;"> 
            <p><strong>Pontos Positivos:</strong></p>
            <ul>
                <li>Capacidade de adaptação e flexibilidade</li>
                <li>Carisma e habilidades sociais</li>
                <li>Capacidade de inspirar e motivar os outros</li>
                <li>Capacidade de inspirar e motivar os outros;</li>
                <li>Facilidade em fazer novas amizades.</li>
            </ul>
<button class="btn4" style="border: none; cursor: pointer; border-radius: 5px; font-size: 30px; color: white; background-color: rgba(247, 185, 106, 0.7); margin-top: 15px; margin-right: 5px;">
        &lt;
    </button>
    <button class="btn5" style="border: none; cursor: pointer; border-radius: 5px; font-size: 30px; color: white; background-color: #f7b96a; margin-top: 15px;">
        &gt;
    </button>
</div>
            <div class="f3" style="display: none;">
            <p><strong>Pontos Negativos:</strong></p>
            <ul>
                <li>Propenso a distrações e falta de foco</li>
                <li>Pode evitar confrontos e responsabilidades</li>
                <li>Tendência a agir impulsivamente;</li>
                <li>Pode ser visto como superficial ou pouco confiável.</li>
            </ul>
<button class="btn6" style="border: none; cursor: pointer; border-radius: 5px; font-size: 30px; color: white; background-color: rgba(247, 185, 106, 0.7); margin-top: 15px; margin-right: 5px;">
        &lt;
    </button>
    <button class="btn7" style="border: none; cursor: pointer; border-radius: 5px; font-size: 30px; color: white; background-color: #f7b96a; margin-top: 15px;">
        &gt;
    </button>
</div>
           <div class="f4" style="display: none;"> 
            <p><strong>Dicas para melhoria:</strong></p>
            <ul>
                <li>Praticar o foco e a disciplina</li>
                <li>Estabelecer prioridades e metas claras</li>
                <li>Aprender a dizer não e assumir responsabilidades</li>
                <li>Desenvolver habilidades de organização e planejamento;</li>
                <li>Buscar equilíbrio entre socialização e responsabilidades.</li>
            </ul>
            <button class="btn8" style="border: none; cursor: pointer; border-radius: 5px; font-size: 30px; color: white; background-color: rgba(247, 185, 106, 0.7); margin-top: 15px;">
        &lt;
    </button>
</div>
        `;
        document.getElementById('titulo').innerHTML = `<h1 class="result" style = "background-color: 
#f7b96a;color: white;padding: 10px;font-size: 20px;">Você tem um temperamento Sanguíneo.</h1><img src="sanguineo.png" alt="fleumatico.png" width="100px" style = "margin-top: 10px; margin-bottom: -30px;">`
        document.body.classList.toggle('sanguineo')
        break;
    case 'd':
        textoResultado = `
            <div class="f0">
    <h2 style="color: #0765e2;">O Fleumático</h2>
    <img src="diver-fleuma.png" width="150">
    <h3>Clique na seta &gt; para</h3>
    <h4>Descubrir as principais características do Fleumático</h4>
    <button class="btn1" style="border: none; cursor: pointer; border-radius: 5px; font-size: 30px; color: white; background-color: #0765e2; margin-top: 15px;">
        &gt;
    </button>
</div>
<div class="f1" style="display: none;">
    <p><strong>Características principais:</strong></p>
    <ul>
        <li>Tranquilo e relaxado</li>
        <li>Tolerante e compreensivo</li>
        <li>Estável e consistente</li>
        <li>Reservado e introspectivo;</li>
        <li>Aversão a conflitos e confrontos.</li>
    </ul>
    <button class="btn2" style="border: none; cursor: pointer; border-radius: 5px; font-size: 30px; color: white; background-color: rgba(7, 101, 226, 0.5); margin-top: 15px; margin-right: 5px;">
        &lt;
    </button>
    <button class="btn3" style="border: none; cursor: pointer; border-radius: 5px; font-size: 30px; color: white; background-color: #0765e2; margin-top: 15px;">
        &gt;
    </button>
</div>
<div class="f2" style="display: none;">
    <p><strong>Pontos Positivos:</strong></p>
    <ul>
        <li>Capacidade de manter a calma em situações estressantes</li>
        <li>Habilidade para ouvir e oferecer apoio aos outros</li>
        <li>Equilíbrio emocional e capacidade de resolver conflitos</li>
        <li>Senso de ponderação e análise antes de agir;</li>
        <li>Facilidade em aceitar mudanças e adaptar-se.</li>
    </ul>
    <button class="btn4" style="border: none; cursor: pointer; border-radius: 5px; font-size: 30px; color: white; background-color: rgba(7, 101, 226, 0.5); margin-top: 15px; margin-right: 5px;">
        &lt;
    </button>
    <button class="btn5" style="border: none; cursor: pointer; border-radius: 5px; font-size: 30px; color: white; background-color: #0765e2; margin-top: 15px;">
        &gt;
    </button>
</div>
<div class="f3" style="display: none;">
    <p><strong>Pontos Negativos:</strong></p>
    <ul>
        <li>Tendência à complacência e falta de iniciativa</li>
        <li>Pode evitar confrontos e evitar tomar decisões difíceis</li>
        <li>Pode ser visto como passivo ou indeciso;</li>
        <li>Resistência a sair da zona de conforto.</li>
    </ul>
    <button class="btn6" style="border: none; cursor: pointer; border-radius: 5px; font-size: 30px; color: white; background-color: rgba(7, 101, 226, 0.5); margin-top: 15px; margin-right: 5px;">
        &lt;
    </button>
    <button class="btn7" style="border: none; cursor: pointer; border-radius: 5px; font-size: 30px; color: white; background-color: #0765e2; margin-top: 15px;">
        &gt;
    </button>
</div>
<div class="f4" style="display: none;">
    <p><strong>Dicas para melhoria:</strong></p>
    <ul>
        <li>Definir metas claras e buscar desafios</li>
        <li>Praticar a assertividade e a expressão de opiniões</li>
        <li>Desenvolver habilidades de liderança e iniciativa</li>
        <li>Buscar oportunidades para sair da zona de conforto;</li>
        <li>Buscar feedback e aprender a lidar com críticas construtivas.</li>
    </ul>
    <button class="btn8" style="border: none; cursor: pointer; border-radius: 5px; font-size: 30px; color: white; background-color: rgba(7, 101, 226, 0.5); margin-top: 15px;">
        &lt;
    </button>
</div>

        `;

        document.getElementById('titulo').innerHTML = `<h1 class="result" style = "background-color: 
        #0765e2;color: white;padding: 10px;font-size: 20px;">Você tem um temperamento fleumático.</h1><img src="fleumatico.png" alt="fleumatico.png" width="100px" style = "margin-top: 10px; margin-bottom: -30px;">`
        document.body.classList.toggle('fleuma')
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
document.getElementById('titulo').style.visibility = 'initial';
//mostrar botão feedback
document.getElementById('chamarforms').style.display = 'block';

//da funcioanlidade para o botão chamar forms
document.getElementById('chamarformsbtn').onclick = () => {
    mostrarforms()
}
document.getElementsByClassName("btn1")[0].addEventListener("click", function() {
    document.getElementsByClassName('f0')[0].style.display = 'none';
    document.getElementsByClassName('f1')[0].style.display = 'block';

    switch (temperamento){
        case ('a'):
            document.getElementById('titulo').innerHTML = `<h1 class="result" style = "color: #fb050d; padding: 10px;font-size: 25px;">O Colérico</h1><img src="diver-colerico.png" alt="raiva divertidamente" width="200px" style = "margin-top: 10px; margin-bottom: -30px;">`
        break;

        case ('b'):
            document.getElementById('titulo').innerHTML = `<h1 class="result" style = "
            color: #069c07; padding: 10px;font-size: 25px;">O Melancólico</h1><img src="diver-melancolico.png" alt="tristeza divertidamente" width="200px" style = "margin-top: 10px; margin-bottom: -30px;">`
        break;

        case ('c'):
            document.getElementById('titulo').innerHTML = `<h1 class="result" style = ": 
            color: #f7b96a; padding: 10px;font-size: 25px;">O Sanguíneo</h1><img src="diver-sanguineo.png" alt="alegria divertidamente" width="200px" style = "margin-top: 10px; margin-bottom: -30px;">`
        break;

        case ('d'):
            document.getElementById('titulo').innerHTML = `<h1 class="result" style = "color: #0765e2; padding: 10px;font-size: 20px;"> O Fleumático.</h1><img src="diver-fleuma.png" alt="medo divertidamente" width="150px" style = "margin-top: 10px; margin-bottom: -30px;">`
        break;
    }
});

document.getElementsByClassName("btn2")[0].addEventListener("click", function() {
    document.getElementsByClassName('f1')[0].style.display = 'none';
    document.getElementsByClassName('f0')[0].style.display = 'block';

    switch (temperamento){
        case ('a'):
            document.getElementById('titulo').innerHTML = `<h1 class="result" style = "background-color: 
            #fb050d;color: white;padding: 10px;font-size: 20px;">Você tem um temperamento Colerico.</h1><img src="colerico.png" alt="raiva divertidamente" width="100px" style = "margin-top: 10px; margin-bottom: -30px;">`
        break;

        case ('b'):
            document.getElementById('titulo').innerHTML = `<h1 class="result" style = "background-color: 
            #069c07;color: white;padding: 10px;font-size: 20px;">Você tem um temperamento Melancólico.</h1><img src="melancolico.png" alt="tristeza divertidamente" width="100px" style = "margin-top: 10px; margin-bottom: -30px;">`
        break;

        case ('c'):
            document.getElementById('titulo').innerHTML = `<h1 class="result" style = "background-color: 
            #f7b96a;color: white;padding: 10px;font-size: 20px;">Você tem um temperamento Sanguíneo.</h1><img src="sanguineo.png" alt="alegria divertidamente" width="100px" style = "margin-top: 10px; margin-bottom: -30px;">`
        break;

        case ('d'):
            document.getElementById('titulo').innerHTML = `<h1 class="result" style = "background-color: 
            #0765e2;color: white;padding: 10px;font-size: 20px;">Você tem um temperamento fleumático.</h1><img src="fleumatico.png" alt="fleumatico.png" width="100px" style = "margin-top: 10px; margin-bottom: -30px;">`
        break;
    }
});

document.getElementsByClassName("btn3")[0].addEventListener("click", function() {
    document.getElementsByClassName('f1')[0].style.display = 'none';
    document.getElementsByClassName('f2')[0].style.display = 'block';
});

document.getElementsByClassName("btn4")[0].addEventListener("click", function() {
    document.getElementsByClassName('f2')[0].style.display = 'none';
    document.getElementsByClassName('f1')[0].style.display = 'block';
});

document.getElementsByClassName("btn5")[0].addEventListener("click", function() {
    document.getElementsByClassName('f2')[0].style.display = 'none';
    document.getElementsByClassName('f3')[0].style.display = 'block';
});

document.getElementsByClassName("btn6")[0].addEventListener("click", function() {
    document.getElementsByClassName('f3')[0].style.display = 'none';
    document.getElementsByClassName('f2')[0].style.display = 'block';
});

document.getElementsByClassName("btn7")[0].addEventListener("click", function() {
    document.getElementsByClassName('f3')[0].style.display = 'none';
    document.getElementsByClassName('f4')[0].style.display = 'block';
});

document.getElementsByClassName("btn8")[0].addEventListener("click", function() {
    document.getElementsByClassName('f4')[0].style.display = 'none';
    document.getElementsByClassName('f3')[0].style.display = 'block';
});
}

function mostrarforms(){
    document.getElementById('forms').style.display = 'block';
    document.getElementById('resultado').style.display = 'none';
    document.getElementById('chamarforms').style.display = 'none';
    document.getElementById('titulo').style.display = 'none';
}

document.getElementById('iniciartestebtn').onclick = () => {
    //esconde a introdução
    document.getElementById('introducaoconteiner').style.display = 'none';
    //mostrar conteiner de perguntas
    document.getElementById('perguntasconteiner').style.display = 'block';
    //tira a imagem da introdução
    document.getElementById('imgIntrod').style.display = 'none'
    
    //chama a primeira pergunta
    mostrarpergunta();
    updateProgressBar();
};