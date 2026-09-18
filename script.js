// ========================================
// HIRE BOT
// ========================================


// ========================================
// SCORES BY AREA
// ========================================

let scores = {
    humanas: 0,
    tecnologia: 0,
    administracao: 0,
    saude: 0
};


// ========================================
// CURRENT ROUND
// ========================================

let round = 1;


// ========================================
// HTML ELEMENTS
// ========================================

const question = document.getElementById("question");
const answers = document.getElementById("answers");
const questionContainer = document.getElementById("question-container");
const result = document.getElementById("result");


// ========================================
// QUESTIONS
// ========================================

const questions = {

    // ========================================
    // QUESTION 1
    // ========================================

    1: {
        text: "Quais são seus principais pontos fortes?",

        options: [

            {
                text: "Meus principais pontos fortes são trabalho em equipe, empatia e facilidade para aprender.",
                reaction: "Aaaah, que bonitinho!",
                points: {
                    humanas: 2,
                    administracao: 2
                }
            },

            {
                text: "Sou muito bom em resolver problemas e entender como as coisas funcionam.",
                reaction: "Slaaaay! Você parece gostar de um desafio.",
                points: {
                    tecnologia: 2
                }
            },

            {
                text: "Sou cuidadoso, paciente e gosto de ajudar as pessoas.",
                reaction: "Você está simplesmente arrasando!!",
                points: {
                    saude: 2
                }
            }

        ]
    },


    // ========================================
    // QUESTION 2
    // ========================================

    2: {
        text: "Como você trabalha em grupo?",

        options: [

            {
                text: "Muito mal. Prefiro trabalhar sozinho.",
                reaction: "Calma aí, Jacob. Lobo solitário!",
                points: {
                    tecnologia: 2
                }
            },

            {
                text: "Bem, mas só quando é necessário!",
                reaction: "Ok, espertinho! 😎",
                points: {
                    administracao: 2
                }
            },

            {
                text: "Muito bem! Adoro fazer brainstorm e trabalhar em equipe.",
                reaction: "Boa! Trabalho em equipe é sempre uma boa ideia.",
                points: {
                    humanas: 2,
                    saude: 1
                }
            }

        ]
    },


    // ========================================
    // QUESTION 3
    // ========================================

    3: {
        text: "O que você levaria para uma ilha deserta?",

        options: [

            {
                text: "Lanternas, pilhas e um fogareiro portátil.",
                reaction: "Como se uma lanterna fosse te alimentar... mas ok, foi inteligente.",
                points: {
                    tecnologia: 2
                }
            },

            {
                text: "Água potável, um kit de primeiros socorros e um bom livro.",
                reaction: "Uau! Bear Grylls!",
                points: {
                    saude: 2
                }
            },

            {
                text: "Uma lupa, livros e chocolate.",
                reaction: "O que é isso? Alguém aqui tem um pezinho na formiga doce.",
                points: {
                    humanas: 2
                }
            }

        ]
    },


    // ========================================
    // QUESTION 4
    // ========================================

    4: {
        text: "Em um apocalipse zumbi, quem você seria no grupo de sobreviventes?",

        options: [

            {
                text: "A pessoa que coleta comida para a comunidade.",
                reaction: "Que pessoa cuidadosa!",
                points: {
                    humanas: 2
                }
            },

            {
                text: "A pessoa que protege o acampamento.",
                reaction: "Slaaaay!",
                points: {
                    saude: 2
                }
            },

            {
                text: "A pessoa que cria estratégias de sobrevivência.",
                reaction: "Valeu, gênio! Kkkkk.",
                points: {
                    administracao: 2,
                    tecnologia: 1
                }
            }

        ]
    },


    // ========================================
    // QUESTION 5
    // ========================================

    5: {
        text: "Se você fosse o castor responsável por construir uma represa, deixaria um peixe-palhaço passar para alimentar sua família?",

        options: [

            {
                text: "Sim, porque sou uma pessoa boa.",
                reaction: "Que gentil. Que adorável.",
                points: {
                    humanas: 2
                }
            },

            {
                text: "Não. Faço tudo pela empresa e para deixar meu chefe mais rico.",
                reaction: "Muito bom. Esse aqui sabe mesmo vestir a camisa da empresa.",
                points: {
                    administracao: 2
                }
            },

            {
                text: "Eu criaria um projeto alternativo para construir a represa e, ao mesmo tempo, garantir uma passagem segura para os peixes.",
                reaction: "Uau! Um engenheiro formado no MIT!",
                points: {
                    tecnologia: 2
                }
            }

        ]
    },


    // ========================================
    // QUESTION 6
    // ========================================

    6: {
        text: "Quem é você em uma equipe?",

        options: [

            {
                text: "Eu assumo a liderança. Gosto de organizar as responsabilidades de todo mundo.",
                reaction: "Hmm... Temos um líder!",
                points: {
                    administracao: 2
                }
            },

            {
                text: "Sou mais estratégico e analítico. Geralmente sou bem metódico.",
                reaction: "Interessante...",
                points: {
                    tecnologia: 2,
                    saude: 1
                }
            },

            {
                text: "Gosto de colocar a mão na massa e cuidar da parte física.",
                reaction: "Ah, boa! Alguém teve uma infância regada a Art Attack.",
                points: {
                    humanas: 2
                }
            }

        ]
    },


    // ========================================
    // QUESTION 7
    // ========================================

    7: {
        text: "Do que você gostava de brincar quando era criança?",

        options: [

            {
                text: "Eu brincava muito de médico.",
                reaction: "Um futuro médico!!",
                points: {
                    saude: 2
                }
            },

            {
                text: "Eu fingia que trabalhava em um escritório.",
                reaction: "Às vezes eu me pergunto se é por isso que você está na terapia hoje.",
                points: {
                    administracao: 1,
                    tecnologia: 1
                }
            },

            {
                text: "Eu inventava várias histórias e aventuras.",
                reaction: "Que aventureiro!",
                points: {
                    humanas: 2
                }
            }

        ]
    },


    // ========================================
    // QUESTION 8
    // ========================================

    8: {
        text: "Qual é a melhor maneira de liderar um grupo?",

        options: [

            {
                text: "Montar uma equipe com pessoas de personalidades diferentes, para que elas possam enxergar as coisas de perspectivas diferentes e trazer equilíbrio para o grupo.",
                reaction: "Boa resposta! Mas colocar isso em prática exige MUITA paciência.",
                points: {
                    administracao: 2,
                    humanas: 1
                }
            },

            {
                text: "Disciplina e treinamento constante.",
                reaction: "Justo. Isso é definitivamente essencial.",
                points: {
                    administracao: 2
                }
            },

            {
                text: "O líder também precisa ouvir a equipe para que todos possam trabalhar juntos em harmonia.",
                reaction: "Muito bom, mas essa resposta foi suspeitamente curta.",
                points: {
                    humanas: 2
                }
            }

        ]
    }

};


// ========================================
// SHOW QUESTION
// ========================================

function showQuestion() {

    const currentQuestion = questions[round];

    question.innerHTML = currentQuestion.text;

    answers.innerHTML = "";


    currentQuestion.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.innerHTML = option.text;

        button.onclick = function () {
            chooseAnswer(index);
        };

        answers.appendChild(button);

    });

}


// ========================================
// CHOOSE ANSWER
// ========================================

function chooseAnswer(index) {

    const currentQuestion = questions[round];

    const selectedOption = currentQuestion.options[index];


    // ========================================
    // ADD POINTS
    // ========================================

    for (let area in selectedOption.points) {

        scores[area] += selectedOption.points[area];

    }


    // ========================================
    // SHOW BOT REACTION
    // ========================================

    question.innerHTML = selectedOption.reaction;


    // ========================================
    // DISABLE BUTTONS
    // ========================================

    const buttons = answers.querySelectorAll("button");

    buttons.forEach(button => {

        button.disabled = true;
        button.style.opacity = "0.5";
        button.style.cursor = "default";

    });


    // ========================================
    // WAIT BEFORE NEXT QUESTION
    // ========================================

    setTimeout(() => {

        if (round < Object.keys(questions).length) {

            round++;

            showQuestion();

        } else {

            showResult();

        }

    }, 1500);

}


// ========================================
// RESULT
// ========================================

function showResult() {

    questionContainer.classList.add("hidden");

    result.classList.remove("hidden");


    // ========================================
    // FIND HIGHEST SCORE
    // ========================================

    let highestScore = 0;

    let winningArea = "";


    for (let area in scores) {

        if (scores[area] > highestScore) {

            highestScore = scores[area];

            winningArea = area;

        }

    }


    // ========================================
    // AREA NAMES
    // ========================================

    const areaNames = {

        humanas: "📚 Humanas",

        tecnologia: "💻 Tecnologia",

        administracao: "📊 Administração e Negócios",

        saude: "🩺 Saúde"

    };


    // ========================================
    // RESULT MESSAGES
    // ========================================

    const messages = {

        humanas:
            "Seu perfil parece combinar com áreas que envolvem comunicação, pessoas, criatividade, educação e sociedade. Talvez você tenha um futuro interessante em Humanas! 👀",

        tecnologia:
            "Você parece gostar de resolver problemas, pensar estrategicamente e descobrir como as coisas funcionam. Tecnologia pode ser o lugar perfeito para o seu questionável gênio! 💻",

        administracao:
            "Organização, liderança e planejamento parecem ser algumas das suas maiores habilidades. Talvez Administração e Negócios sejam a sua praia! 📊",

        saude:
            "Seu perfil demonstra atenção às pessoas e interesse em resolver problemas. Quem sabe Saúde seja a sua praia! 🩺"

    };


    // ========================================
    // SHOW RESULT
    // ========================================

    document.getElementById("result-text").innerHTML =

        `<strong>${areaNames[winningArea]}</strong><br><br>
        ${messages[winningArea]}`;


    // ========================================
    // SHOW SCORES
    // ========================================

    const scoresContainer = document.getElementById("scores");

    scoresContainer.innerHTML = "";


    for (let area in scores) {

        // Maximum expected score is 10 points
        const percentage = Math.min(scores[area] * 10, 100);

        const scoreDiv = document.createElement("div");

        scoreDiv.classList.add("score");


        scoreDiv.innerHTML = `

            <div class="score-name">

                <span>${areaNames[area]}</span>

                <span>${scores[area]} pts</span>

            </div>


            <div class="progress">

                <div
                    class="progress-bar"
                    style="width: ${percentage}%"
                ></div>

            </div>

        `;


        scoresContainer.appendChild(scoreDiv);

    }

}


// ========================================
// RESTART
// ========================================

function restart() {

    scores = {

        humanas: 0,
        tecnologia: 0,
        administracao: 0,
        saude: 0

    };


    round = 1;


    result.classList.add("hidden");

    questionContainer.classList.remove("hidden");


    showQuestion();

}


// ========================================
// START BOT
// ========================================

showQuestion();
