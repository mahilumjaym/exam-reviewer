// ==========================================
// TEST II - CODE COMPLETION
// ==========================================

const CODES_PER_TEST = 2;


// ==========================================
// CODE BANK
// ==========================================

const codeBank = [

    // --------------------------------------
    // CODE 1
    // Input + Numbers + Condition
    // --------------------------------------

    {
        title: "Age Checker",

        topic: "Input, Numbers and Conditions",

        lines: [
            {
                type: "text",
                text: 'name = '
            },
            {
                type: "blank",
                answer: "input",
                explanation:
                    "The input() function allows the program to receive information from the user."
            },
            {
                type: "text",
                text: '("Enter your name: ")'
            },
            {
                type: "newline"
            },

            {
                type: "text",
                text: 'age = '
            },
            {
                type: "blank",
                answer: "int",
                explanation:
                    "The int() function converts the input into a whole number."
            },
            {
                type: "text",
                text: '(input("Enter your age: "))'
            },
            {
                type: "newline"
            },

            {
                type: "text",
                text: "if age "
            },
            {
                type: "blank",
                answer: ">=",
                explanation:
                    "The >= operator means greater than or equal to."
            },
            {
                type: "text",
                text: " 18:"
            },
            {
                type: "newline"
            },

            {
                type: "text",
                text: '    print(name, "is an adult")'
            },
            {
                type: "newline"
            },

            {
                type: "blank",
                answer: "else",
                explanation:
                    "The else block runs when the if condition is false."
            },
            {
                type: "text",
                text: ":"
            },
            {
                type: "newline"
            },

            {
                type: "text",
                text: '    print(name, "is a minor")'
            }
        ]
    },


    // --------------------------------------
    // CODE 2
    // Loop + String + Input
    // --------------------------------------

    {
        title: "Name Repeater",

        topic: "Input, Strings and Loops",

        lines: [

            {
                type: "text",
                text: "name = "
            },

            {
                type: "blank",
                answer: "input",
                explanation:
                    "The input() function gets information from the user."
            },

            {
                type: "text",
                text: '("Enter your name: ")'
            },

            {
                type: "newline"
            },


            {
                type: "text",
                text: "for i in "
            },

            {
                type: "blank",
                answer: "range",
                explanation:
                    "The range() function generates a sequence of numbers that can be used by a loop."
            },

            {
                type: "text",
                text: "(3):"
            },

            {
                type: "newline"
            },


            {
                type: "text",
                text: "    "
            },

            {
                type: "blank",
                answer: "print",
                explanation:
                    "The print() function displays information on the screen."
            },

            {
                type: "text",
                text: "(name)"
            },

            {
                type: "newline"
            },


            {
                type: "text",
                text: "    "
            },

            {
                type: "blank",
                answer: "+",
                explanation:
                    "The + operator can be used to join strings together."
            },

            {
                type: "text",
                text: ' "!"'
            }

        ]
    }

];


// ==========================================
// TEST VARIABLES
// ==========================================

let selectedCodes = [];

let studentAnswers = [];

let test2Submitted = false;


// ==========================================
// SHUFFLE
// ==========================================

function shuffleArray(array) {

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
// START TEST II
// ==========================================

function startTest2() {

    let shuffled =
        [...codeBank];

    shuffleArray(shuffled);


    selectedCodes =
        shuffled.slice(
            0,
            CODES_PER_TEST
        );


    studentAnswers = [];


    selectedCodes.forEach(
        code => {

            const answers =
                code.lines
                    .filter(
                        item =>
                            item.type === "blank"
                    )
                    .map(
                        () => ""
                    );

            studentAnswers.push(
                answers
            );

        }
    );


    test2Submitted = false;


    displayCodeQuestions();

}


// ==========================================
// DISPLAY CODE QUESTIONS
// ==========================================

function displayCodeQuestions() {

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


            // TITLE

            const title =
                document.createElement("h3");

            title.textContent =
                "Code " +
                (codeIndex + 1) +
                " — " +
                code.title;


            card.appendChild(title);


            // TOPIC

            const topic =
                document.createElement("div");

            topic.className =
                "question-topic";

            topic.textContent =
                code.topic;


            card.appendChild(topic);


            // CODE BOX

            const codeBox =
                document.createElement("div");

            codeBox.className =
                "code-box";


            let blankIndex = 0;


            code.lines.forEach(
                item => {

                    if (
                        item.type ===
                        "newline"
                    ) {

                        codeBox.appendChild(
                            document.createElement(
                                "br"
                            )
                        );

                        return;

                    }


                    if (
                        item.type ===
                        "text"
                    ) {

                        codeBox.appendChild(
                            document.createTextNode(
                                item.text
                            )
                        );

                        return;

                    }


                    if (
                        item.type ===
                        "blank"
                    ) {

                        const input =
                            document.createElement(
                                "input"
                            );


                        input.type =
                            "text";


                        input.className =
                            "code-blank";


                        input.dataset.code =
                            codeIndex;


                        input.dataset.blank =
                            blankIndex;


                        input.autocomplete =
                            "off";


                        input.addEventListener(
                            "input",
                            function() {

                                studentAnswers[
                                    codeIndex
                                ][
                                    blankIndex
                                ] =
                                    this.value.trim();

                            }
                        );


                        codeBox.appendChild(
                            input
                        );


                        blankIndex++;

                    }

                }
            );


            card.appendChild(
                codeBox
            );


            container.appendChild(
                card
            );

        }
    );

}


// ==========================================
// SUBMIT TEST II
// ==========================================

function submitTest2() {

    // Check unanswered blanks

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


    test2Submitted = true;


    let score = 0;

    let total = 0;


    selectedCodes.forEach(
        (code, codeIndex) => {

            let blankIndex = 0;


            code.lines.forEach(
                item => {

                    if (
                        item.type !==
                        "blank"
                    ) {

                        return;

                    }


                    total++;


                    const studentAnswer =
                        studentAnswers[
                            codeIndex
                        ][
                            blankIndex
                        ];


                    const correctAnswer =
                        item.answer;


                    if (
                        normalizeAnswer(
                            studentAnswer
                        ) ===
                        normalizeAnswer(
                            correctAnswer
                        )
                    ) {

                        score++;

                    }


                    blankIndex++;

                }
            );

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
        score +
        " / " +
        total;


    let message;


    if (score === total) {

        message =
            "Excellent! Perfect score.";

    }
    else if (
        score >= total * 0.8
    ) {

        message =
            "Very good work!";

    }
    else if (
        score >= total * 0.5
    ) {

        message =
            "Good effort. Review the items you missed.";

    }
    else {

        message =
            "Keep practicing and review the concepts.";

    }


    document.getElementById(
        "scoreMessage"
    ).textContent =
        message;


    // Display completed code

    displaySubmittedCodes();


    // Disable submit

    const button =
        document.getElementById(
            "submitBtn"
        );


    button.disabled =
        true;


    button.textContent =
        "TEST SUBMITTED";


    // Scroll to score

    scoreArea.scrollIntoView({
        behavior: "smooth"
    });

}


// ==========================================
// NORMALIZE ANSWERS
// ==========================================

function normalizeAnswer(answer) {

    return answer
        .trim()
        .toLowerCase();

}


// ==========================================
// DISPLAY SUBMITTED CODES
// ==========================================

function displaySubmittedCodes() {

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
                "code-box submitted-code";


            let blankIndex = 0;


            code.lines.forEach(
                item => {

                    if (
                        item.type ===
                        "newline"
                    ) {

                        codeBox.appendChild(
                            document.createElement(
                                "br"
                            )
                        );

                        return;

                    }


                    if (
                        item.type ===
                        "text"
                    ) {

                        codeBox.appendChild(
                            document.createTextNode(
                                item.text
                            )
                        );

                        return;

                    }


                    if (
                        item.type ===
                        "blank"
                    ) {

                        const answer =
                            studentAnswers[
                                codeIndex
                            ][
                                blankIndex
                            ];


                        const correctAnswer =
                            item.answer;


                        const answerBox =
                            document.createElement(
                                "span"
                            );


                        answerBox.className =
                            "submitted-answer";


                        answerBox.textContent =
                            answer;


                        const isCorrect =
                            normalizeAnswer(
                                answer
                            ) ===
                            normalizeAnswer(
                                correctAnswer
                            );


                        if (isCorrect) {

                            answerBox.classList.add(
                                "answer-correct"
                            );

                        }
                        else {

                            answerBox.classList.add(
                                "answer-wrong"
                            );


                            answerBox.dataset.code =
                                codeIndex;


                            answerBox.dataset.blank =
                                blankIndex;


                            answerBox.addEventListener(
                                "click",
                                function() {

                                    showCodeExplanation(
                                        codeIndex,
                                        blankIndex,
                                        item
                                    );

                                }
                            );

                        }


                        codeBox.appendChild(
                            answerBox
                        );


                        blankIndex++;

                    }

                }
            );


            card.appendChild(
                codeBox
            );


            container.appendChild(
                card
            );

        }
    );


    // Add instruction

    const instruction =
        document.createElement(
            "p"
        );


    instruction.className =
        "review-instruction";


    instruction.textContent =
        "Click the RED answers to review the concepts you missed.";


    container.insertBefore(
        instruction,
        container.firstChild
    );

}


// ==========================================
// SHOW EXPLANATION
// ==========================================

function showCodeExplanation(
    codeIndex,
    blankIndex,
    item
) {

    const studentAnswer =
        studentAnswers[
            codeIndex
        ][
            blankIndex
        ];


    const existing =
        document.getElementById(
            "codeExplanation"
        );


    if (existing) {

        existing.remove();

    }


    const box =
        document.createElement(
            "div"
        );


    box.id =
        "codeExplanation";


    box.className =
        "code-explanation";


    box.innerHTML = `
        <button
            class="close-explanation"
            onclick="closeCodeExplanation()">
            ×
        </button>

        <h3>Quick Review</h3>

        <p>
            <strong>Your answer:</strong>
            ${escapeHTML(studentAnswer)}
        </p>

        <p>
            <strong>Correct answer:</strong>
            ${escapeHTML(item.answer)}
        </p>

        <div class="explanation-text">
            ${escapeHTML(item.explanation)}
        </div>
    `;


    document.body.appendChild(
        box
    );

}


// ==========================================
// CLOSE EXPLANATION
// ==========================================

function closeCodeExplanation() {

    const box =
        document.getElementById(
            "codeExplanation"
        );


    if (box) {

        box.remove();

    }

}


// ==========================================
// PREVENT HTML IN ANSWERS
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
// START
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        startTest2();

    }
);
