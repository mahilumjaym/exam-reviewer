// ==========================================
// TEST II - CODE COMPLETION
// ==========================================

const QUESTIONS_PER_TEST = 2;


// ==========================================
// CODE BANK
// ==========================================

const codeBank = [

    {
        title: "Age Checker",

        topic: "Input, Numbers and Conditions",

        parts: [
            { text: 'name = ' },

            {
                blank: true,
                answer: 'input',
                explanation:
                    'The input() function allows the program to receive information from the user.'
            },

            { text: '("Enter your name: ")' },

            { newline: true },

            { text: 'age = ' },

            {
                blank: true,
                answer: 'int',
                explanation:
                    'The int() function converts input into a whole number.'
            },

            { text: '(input("Enter your age: "))' },

            { newline: true },

            { text: 'if age ' },

            {
                blank: true,
                answer: '>=',
                explanation:
                    'The >= operator means greater than or equal to.'
            },

            { text: ' 18:' },

            { newline: true },

            { text: '    print(name, "is an adult")' },

            { newline: true },

            {
                blank: true,
                answer: 'else',
                explanation:
                    'The else block runs when the if condition is false.'
            },

            { text: ':' },

            { newline: true },

            { text: '    print(name, "is a minor")' }
        ]
    },


    {
        title: "Name Repeater",

        topic: "Input, Strings and Loops",

        parts: [

            { text: 'name = ' },

            {
                blank: true,
                answer: 'input',
                explanation:
                    'The input() function gets information from the user.'
            },

            { text: '("Enter your name: ")' },

            { newline: true },

            { text: 'for i in ' },

            {
                blank: true,
                answer: 'range',
                explanation:
                    'The range() function generates a sequence of numbers that can be used by a loop.'
            },

            { text: '(3):' },

            { newline: true },

            { text: '    ' },

            {
                blank: true,
                answer: 'print',
                explanation:
                    'The print() function displays information on the screen.'
            },

            { text: '(name)' }
        ]
    }

];


// ==========================================
// VARIABLES
// ==========================================

let selectedCodes = [];

let studentAnswers = [];

let submitted = false;


// ==========================================
// SHUFFLE
// ==========================================

function shuffle(array) {

    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            array[i],
            array[j]
        ] =
        [
            array[j],
            array[i]
        ];
    }

    return array;
}


// ==========================================
// START TEST
// ==========================================

function startTest2() {

    const shuffled =
        shuffle([...codeBank]);

    selectedCodes =
        shuffled.slice(
            0,
            QUESTIONS_PER_TEST
        );

    studentAnswers = [];


    selectedCodes.forEach(code => {

        const answers =
            code.parts
                .filter(part => part.blank)
                .map(() => "");

        studentAnswers.push(answers);

    });


    displayQuestions();

}


// ==========================================
// DISPLAY QUESTIONS
// ==========================================

function displayQuestions() {

    const container =
        document.getElementById(
            "codeQuestionsContainer"
        );

    container.innerHTML = "";


    selectedCodes.forEach(
        (code, codeIndex) => {

            const card =
                document.createElement("div");

            card.className =
                "code-question-card";


            const title =
                document.createElement("h3");

            title.textContent =
                "Code " +
                (codeIndex + 1) +
                " — " +
                code.title;

            card.appendChild(title);


            const topic =
                document.createElement("div");

            topic.className =
                "question-topic";

            topic.textContent =
                code.topic;

            card.appendChild(topic);


            const codeBox =
                document.createElement("div");

            codeBox.className =
                "code-box";


            let blankIndex = 0;


            code.parts.forEach(part => {

                if (part.newline) {

                    codeBox.appendChild(
                        document.createElement("br")
                    );

                    return;
                }


                if (part.text) {

                    codeBox.appendChild(
                        document.createTextNode(
                            part.text
                        )
                    );

                    return;
                }


                if (part.blank) {

                    const input =
                        document.createElement("input");

                    input.type = "text";

                    input.className =
                        "code-blank";

                    input.dataset.code =
                        codeIndex;

                    input.dataset.blank =
                        blankIndex;


                    input.addEventListener(
                        "input",
                        function() {

                            studentAnswers[
                                codeIndex
                            ][
                                blankIndex
                            ] =
                                input.value.trim();

                        }
                    );


                    codeBox.appendChild(input);

                    blankIndex++;

                }

            });


            card.appendChild(codeBox);

            container.appendChild(card);

        }
    );

}


// ==========================================
// SUBMIT
// ==========================================

function submitTest2() {

    console.log("SUBMIT TEST II CLICKED");


    // Check blanks

    let unanswered = 0;


    studentAnswers.forEach(
        answers => {

            answers.forEach(
                answer => {

                    if (
                        answer.trim() === ""
                    ) {

                        unanswered++;

                    }

                }
            );

        }
    );


    if (unanswered > 0) {

        alert(
            "Please complete all blanks before submitting."
        );

        return;
    }


    const confirmed =
        confirm(
            "Are you sure you want to submit Test II?"
        );


    if (!confirmed) {

        return;
    }


    let score = 0;

    let total = 0;


    selectedCodes.forEach(
        (code, codeIndex) => {

            let blankIndex = 0;


            code.parts.forEach(part => {

                if (!part.blank) {
                    return;
                }


                total++;


                const studentAnswer =
                    studentAnswers[
                        codeIndex
                    ][
                        blankIndex
                    ];


                if (
                    normalize(studentAnswer) ===
                    normalize(part.answer)
                ) {

                    score++;

                }


                blankIndex++;

            });

        }
    );


    // Show score

    const scoreArea =
        document.getElementById(
            "scoreArea"
        );

    scoreArea.style.display =
        "block";


    document.getElementById(
        "finalScore"
    ).textContent =
        score + " / " + total;


    document.getElementById(
        "scoreMessage"
    ).textContent =
        "Review the RED answers to see the concepts you missed.";


    // Display completed code

    displayResults();


    submitted = true;


    // Disable button

    const button =
        document.getElementById(
            "submitBtn"
        );

    button.disabled = true;

    button.textContent =
        "TEST SUBMITTED";


    scoreArea.scrollIntoView({
        behavior: "smooth"
    });


    console.log(
        "Test II submitted:",
        score + " / " + total
    );

}


// ==========================================
// NORMALIZE
// ==========================================

function normalize(value) {

    return value
        .trim()
        .toLowerCase();

}


// ==========================================
// DISPLAY RESULTS
// ==========================================

function displayResults() {

    const container =
        document.getElementById(
            "codeQuestionsContainer"
        );

    container.innerHTML = "";


    const instruction =
        document.createElement("div");

    instruction.className =
        "review-instruction";

    instruction.textContent =
        "Click the RED answers to review the concepts you missed.";


    container.appendChild(instruction);


    selectedCodes.forEach(
        (code, codeIndex) => {

            const card =
                document.createElement("div");

            card.className =
                "code-question-card";


            const title =
                document.createElement("h3");

            title.textContent =
                "Code " +
                (codeIndex + 1) +
                " — " +
                code.title;

            card.appendChild(title);


            const topic =
                document.createElement("div");

            topic.className =
                "question-topic";

            topic.textContent =
                code.topic;

            card.appendChild(topic);


            const codeBox =
                document.createElement("div");

            codeBox.className =
                "code-box submitted-code";


            let blankIndex = 0;


            code.parts.forEach(part => {

                if (part.newline) {

                    codeBox.appendChild(
                        document.createElement("br")
                    );

                    return;
                }


                if (part.text) {

                    codeBox.appendChild(
                        document.createTextNode(
                            part.text
                        )
                    );

                    return;
                }


                if (part.blank) {

                    const answer =
                        studentAnswers[
                            codeIndex
                        ][
                            blankIndex
                        ];


                    const answerSpan =
                        document.createElement("span");

                    answerSpan.className =
                        "submitted-answer";


                    answerSpan.textContent =
                        answer;


                    const correct =
                        normalize(answer) ===
                        normalize(part.answer);


                    if (correct) {

                        answerSpan.classList.add(
                            "answer-correct"
                        );

                    }
                    else {

                        answerSpan.classList.add(
                            "answer-wrong"
                        );


                        answerSpan.addEventListener(
                            "click",
                            function() {

                                showExplanation(
                                    answer,
                                    part.answer,
                                    part.explanation
                                );

                            }
                        );

                    }


                    codeBox.appendChild(
                        answerSpan
                    );


                    blankIndex++;

                }

            });


            card.appendChild(codeBox);

            container.appendChild(card);

        }
    );

}


// ==========================================
// EXPLANATION
// ==========================================

function showExplanation(
    studentAnswer,
    correctAnswer,
    explanation
) {

    const old =
        document.getElementById(
            "codeExplanation"
        );


    if (old) {
        old.remove();
    }


    const box =
        document.createElement("div");

    box.id =
        "codeExplanation";

    box.className =
        "code-explanation";


    box.innerHTML = `

        <button
            class="close-explanation"
            onclick="closeExplanation()">

            ×

        </button>


        <h3>💡 Quick Review</h3>


        <p>

            <strong>Your answer:</strong>
            ${escapeHTML(studentAnswer)}

        </p>


        <p>

            <strong>Correct answer:</strong>
            ${escapeHTML(correctAnswer)}

        </p>


        <div class="explanation-text">

            ${escapeHTML(explanation)}

        </div>

    `;


    document.body.appendChild(box);

}


// ==========================================
// CLOSE EXPLANATION
// ==========================================

function closeExplanation() {

    const box =
        document.getElementById(
            "codeExplanation"
        );


    if (box) {

        box.remove();

    }

}


// ==========================================
// SECURITY
// ==========================================

function escapeHTML(text) {

    return text
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


// ==========================================
// PAGE LOAD
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        startTest2();


        document
            .getElementById("submitBtn")
            .addEventListener(
                "click",
                submitTest2
            );

    }
);
