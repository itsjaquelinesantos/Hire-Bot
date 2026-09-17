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
        text: "What are your main strengths?",

        options: [

            {
                text: "My main strengths are teamwork, empathy, and learning quickly.",
                reaction: "Ahh, how nice!",
                points: {
                    humanas: 2,
                    administracao: 2
                }
            },

            {
                text: "I'm really good at solving problems and understanding how things work.",
                reaction: "Slaaaayy! You seem to enjoy a challenge.",
                points: {
                    tecnologia: 2
                }
            },

            {
                text: "I'm careful, patient, and I like helping people.",
                reaction: "You're absolutely slaying!!",
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
        text: "How do you work in a group?",

        options: [

            {
                text: "Very badly. I prefer working alone.",
                reaction: "Easy there, Jacob. Lone wolf!",
                points: {
                    tecnologia: 2
                }
            },

            {
                text: "Well, but only when necessary!",
                reaction: "Okay, smart one! 😎",
                points: {
                    administracao: 2
                }
            },

            {
                text: "Very well! I love brainstorming and working with a team.",
                reaction: "Nice! Teamwork is always a good idea.",
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
        text: "What would you take to a deserted island?",

        options: [

            {
                text: "Flashlights, batteries, and a portable stove.",
                reaction: "As if a flashlight could feed you... but hey, that was smart.",
                points: {
                    tecnologia: 2
                }
            },

            {
                text: "Drinking water, a first-aid kit, and a good book.",
                reaction: "Wow! Bear Grylls!",
                points: {
                    saude: 2
                }
            },

            {
                text: "A magnifying glass, books, and chocolate.",
                reaction: "What is this? Someone's got a sweet tooth.",
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
        text: "In a zombie apocalypse, who would you be in the survivor group?",

        options: [

            {
                text: "The person who gathers food for the community.",
                reaction: "What a caring person!",
                points: {
                    humanas: 2
                }
            },

            {
                text: "The person who protects the camp.",
                reaction: "Slaaaay!",
                points: {
                    saude: 2
                }
            },

            {
                text: "The person who creates survival strategies.",
                reaction: "Thanks, mastermind! Kkkkk.",
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
        text: "If you were the beaver in charge of building a dam, would you let a clownfish pass through to feed its family?",

        options: [

            {
                text: "Yes, because I'm a good person.",
                reaction: "How kind. How adorable.",
                points: {
                    humanas: 2
                }
            },

            {
                text: "No. I do everything for the company and to make my boss more money.",
                reaction: "Very good. This one really knows how to wear the company jersey.",
                points: {
                    administracao: 2
                }
            },

            {
                text: "I'd create an alternative design so the dam could be built while giving the fish a safe passage.",
                reaction: "Wow! An engineer from MIT!",
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
        text: "Who are you in a team?",

        options: [

            {
                text: "I take the leadership role. I like organizing everyone's responsibilities.",
                reaction: "Hmm... We have a leader!",
                points: {
                    administracao: 2
                }
            },

            {
                text: "I'm more strategic and analytical. I'm usually pretty methodical.",
                reaction: "Interesting...",
                points: {
                    tecnologia: 2,
                    saude: 1
                }
            },

            {
                text: "I like getting my hands dirty and handling the physical part.",
                reaction: "AH, nice! Someone's got an Art Attack childhood.",
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
        text: "What did you like to play when you were a kid?",

        options: [

            {
                text: "I used to play doctor a lot.",
                reaction: "A future doctor!!",
                points: {
                    saude: 2
                }
            },

            {
                text: "I pretended I worked in an office.",
                reaction: "Sometimes I wonder if that's why you're in therapy today.",
                points: {
                    administracao: 1,
                    tecnologia: 1
                }
            },

            {
                text: "I used to make up lots of stories and adventures.",
                reaction: "What an adventurer!",
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
        text: "What's the best way to lead a group?",

        options: [

            {
                text: "Build a team with people who have different personalities, so they can see things from different perspectives and bring balance to the team.",
                reaction: "Good answer! But putting that into practice takes a LOT of patience.",
                points: {
                    administracao: 2,
                    humanas: 1
                }
            },

            {
                text: "Discipline and constant training.",
                reaction: "Fair enough. That's definitely essential.",
                points: {
                    administracao: 2
                }
            },

            {
                text: "The leader also needs to listen to the team so everyone can work together in harmony.",
                reaction: "Very good, but that answer was suspiciously brief.",
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

        humanas: "📚 Humanities",

        tecnologia: "💻 Technology",

        administracao: "📊 Business & Management",

        saude: "🩺 Healthcare"

    };


    // ========================================
    // RESULT MESSAGES
    // ========================================

    const messages = {

        humanas:
            "Your profile seems to match areas involving communication, people, creativity, education, and society. Maybe you have an interesting future in Humanities! 👀",

        tecnologia:
            "You seem to enjoy solving problems, thinking strategically, and figuring out how things work. Technology might be the perfect place for your questionable genius! 💻",

        administracao:
            "Organization, leadership, and planning seem to be some of your strongest skills. Maybe Business & Management is your calling! 📊",

        saude:
            "Your profile shows attention to people and an interest in solving problems. Who knows? Maybe Healthcare is your thing! 🩺"

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

