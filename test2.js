// =====================================================
// TEST II - CODE COMPLETION REVIEWER
// 5 COMPLETE PROGRAMS
// 1 RANDOM PROGRAM PER SESSION
// EXACTLY 10 BLANKS PER PROGRAM
// SCORE: 10 POINTS
// =====================================================


// =====================================================
// QUESTION BANK
// =====================================================
//
// Every program contains the Test II competencies:
//
// 1. Function definition
// 2. Function name
// 3. Parameter
// 4. Function body
// 5. return statement
// 6. Function call
// 7. Conditional statement
// 8. Comparison operator
// 9. for loop
// 10. range()
// 11. while loop
//
// There are exactly 10 blanks per program.
//
// The contexts are intentionally different from
// the quarterly examination.
// =====================================================

const codeBank = [

    // =================================================
    // CODE 1
    // MOVIE TICKET BOOTH
    // =================================================

    {
        title: "Movie Ticket Booth",

        topic:
            "Functions, Parameters, Conditionals and Loops",

        parts: [

            // BLANK 1
            {
                blank: true,
                answer: "def",
                explanation:
                    "The def keyword begins a function definition in Python."
            },

            { text: " " },

            // BLANK 2
            {
                blank: true,
                answer: "ticket_price",
                explanation:
                    "ticket_price is the name of the function. A function name should describe the task performed by the function."
            },

            { text: "(age):" },
            { newline: true },


            { text: "    " },

            // BLANK 3
            {
                blank: true,
                answer: "if",
                explanation:
                    "The if keyword begins a conditional statement. It allows the program to make a decision based on age."
            },

            { text: " age " },

            // BLANK 4
            {
                blank: true,
                answer: "<",
                explanation:
                    "The < operator checks whether age is less than 13."
            },

            { text: " 13:" },
            { newline: true },


            { text: "        " },

            // BLANK 5
            {
                blank: true,
                answer: "return",
                explanation:
                    "The return statement sends a value back to the part of the program that called the function."
            },

            { text: " 120" },
            { newline: true },


            { text: "    return 180" },
            { newline: true },


            { text: "tickets = 3" },
            { newline: true },


            { text: "for show in " },

            // BLANK 6
            {
                blank: true,
                answer: "range",
                explanation:
                    "range() produces a sequence of numbers that can be used by a for loop."
            },

            { text: "(1, 4):" },
            { newline: true },


            { text: "    print(\"Show\", show)" },
            { newline: true },


            { text: "remaining = 2" },
            { newline: true },


            { text: "while remaining > 0:" },
            { newline: true },


            { text: "    print(\"Remaining tickets:\", remaining)" },
            { newline: true },


            { text: "    remaining = remaining - 1" },
            { newline: true },


            { text: "price = " },

            // BLANK 7
            {
                blank: true,
                answer: "ticket_price",
                explanation:
                    "Writing ticket_price(15) is a function call. The value 15 is passed to the function's age parameter."
            },

            { text: "(15)" },
            { newline: true },


            { text: "print(\"Ticket price:\", price)" }

        ]
    },


    // =================================================
    // CODE 2
    // GARDEN WATERING SCHEDULER
    // =================================================

    {
        title: "Garden Watering Scheduler",

        topic:
            "Functions, Parameters, Conditionals and Loops",

        parts: [

            // BLANK 1
            {
                blank: true,
                answer: "def",
                explanation:
                    "The def keyword begins the definition of a function."
            },

            { text: " " },

            // BLANK 2
            {
                blank: true,
                answer: "water_needed",
                explanation:
                    "water_needed is the function name. It identifies the task performed by the function."
            },

            { text: "(moisture):" },
            { newline: true },


            { text: "    " },

            // BLANK 3
            {
                blank: true,
                answer: "if",
                explanation:
                    "The if statement allows the program to check whether the soil moisture is low."
            },

            { text: " moisture " },

            // BLANK 4
            {
                blank: true,
                answer: "<=",
                explanation:
                    "The <= operator means less than or equal to. The condition is true when moisture is 30 or lower."
            },

            { text: " 30:" },
            { newline: true },


            { text: "        " },

            // BLANK 5
            {
                blank: true,
                answer: "return",
                explanation:
                    "return sends the value 5 back to the code that calls the function."
            },

            { text: " 5" },
            { newline: true },


            { text: "    return 0" },
            { newline: true },


            { text: "for zone in " },

            // BLANK 6
            {
                blank: true,
                answer: "range",
                explanation:
                    "range(1, 5) creates the sequence 1, 2, 3, and 4 for the for loop."
            },

            { text: "(1, 5):" },
            { newline: true },


            { text: "    print(\"Checking garden zone\", zone)" },
            { newline: true },


            { text: "water = 3" },
            { newline: true },


            { text: "while water > 0:" },
            { newline: true },


            { text: "    print(\"Watering...\")" },
            { newline: true },


            { text: "    water = water - 1" },
            { newline: true },


            { text: "amount = " },

            // BLANK 7
            {
                blank: true,
                answer: "water_needed",
                explanation:
                    "water_needed(25) is a function call. The value 25 is passed to the moisture parameter."
            },

            { text: "(25)" },
            { newline: true },


            { text: "print(\"Water needed:\", amount)" }

        ]
    },


    // =================================================
    // CODE 3
    // ARCADE PRIZE COUNTER
    // =================================================

    {
        title: "Arcade Prize Counter",

        topic:
            "Functions, Parameters, Conditionals and Loops",

        parts: [

            // BLANK 1
            {
                blank: true,
                answer: "def",
                explanation:
                    "The def keyword is required to define a function."
            },

            { text: " " },

            // BLANK 2
            {
                blank: true,
                answer: "prize_level",
                explanation:
                    "prize_level is the name of the function that determines the prize level."
            },

            { text: "(points):" },
            { newline: true },


            { text: "    " },

            // BLANK 3
            {
                blank: true,
                answer: "if",
                explanation:
                    "The if keyword begins the decision that checks the player's points."
            },

            { text: " points " },

            // BLANK 4
            {
                blank: true,
                answer: ">=",
                explanation:
                    "The >= operator checks whether points are greater than or equal to 100."
            },

            { text: " 100:" },
            { newline: true },


            { text: "        " },

            // BLANK 5
            {
                blank: true,
                answer: "return",
                explanation:
                    "The return statement sends the text 'Gold' back to the caller."
            },

            { text: " \"Gold\"" },
            { newline: true },


            { text: "    return \"Silver\"" },
            { newline: true },


            { text: "for round_number in " },

            // BLANK 6
            {
                blank: true,
                answer: "range",
                explanation:
                    "range() creates the sequence used to repeat the loop for several rounds."
            },

            { text: "(1, 4):" },
            { newline: true },


            { text: "    print(\"Round\", round_number)" },
            { newline: true },


            { text: "tokens = 3" },
            { newline: true },


            { text: "while tokens > 0:" },
            { newline: true },


            { text: "    print(\"Token used\")" },
            { newline: true },


            { text: "    tokens = tokens - 1" },
            { newline: true },


            { text: "prize = " },

            // BLANK 7
            {
                blank: true,
                answer: "prize_level",
                explanation:
                    "prize_level(120) is a function call. The value 120 is passed to the points parameter."
            },

            { text: "(120)" },
            { newline: true },


            { text: "print(\"Prize:\", prize)" }

        ]
    },


    // =================================================
    // CODE 4
    // LIBRARY LATE FEE CALCULATOR
    // =================================================

    {
        title: "Library Late Fee Calculator",

        topic:
            "Functions, Parameters, Conditionals and Loops",

        parts: [

            // BLANK 1
            {
                blank: true,
                answer: "def",
                explanation:
                    "The def keyword begins a function definition."
            },

            { text: " " },

            // BLANK 2
            {
                blank: true,
                answer: "late_fee",
                explanation:
                    "late_fee is the function name. It describes what the function calculates."
            },

            { text: "(days):" },
            { newline: true },


            { text: "    " },

            // BLANK 3
            {
                blank: true,
                answer: "if",
                explanation:
                    "The if keyword begins the condition that checks whether a book is overdue."
            },

            { text: " days " },

            // BLANK 4
            {
                blank: true,
                answer: ">",
                explanation:
                    "The > operator checks whether the number of overdue days is greater than 7."
            },

            { text: " 7:" },
            { newline: true },


            { text: "        " },

            // BLANK 5
            {
                blank: true,
                answer: "return",
                explanation:
                    "The return statement sends the calculated fee back to the calling code."
            },

            { text: " 50" },
            { newline: true },


            { text: "    return 0" },
            { newline: true },


            { text: "for shelf in " },

            // BLANK 6
            {
                blank: true,
                answer: "range",
                explanation:
                    "range() creates the sequence of shelf numbers processed by the for loop."
            },

            { text: "(1, 4):" },
            { newline: true },


            { text: "    print(\"Checking shelf\", shelf)" },
            { newline: true },


            { text: "books = 3" },
            { newline: true },


            { text: "while books > 0:" },
            { newline: true },


            { text: "    print(\"Processing book\")" },
            { newline: true },


            { text: "    books = books - 1" },
            { newline: true },


            { text: "fee = " },

            // BLANK 7
            {
                blank: true,
                answer: "late_fee",
                explanation:
                    "late_fee(10) is a function call. The value 10 is passed to the days parameter."
            },

            { text: "(10)" },
            { newline: true },


            { text: "print(\"Late fee:\", fee)" }

        ]
    },


    // =================================================
    // CODE 5
    // HIKING GEAR CHECK
    // =================================================

    {
        title: "Hiking Gear Check",

        topic:
            "Functions, Parameters, Conditionals and Loops",

        parts: [

            // BLANK 1
            {
                blank: true,
                answer: "def",
                explanation:
                    "The def keyword is used to define a function."
            },

            { text: " " },

            // BLANK 2
            {
                blank: true,
                answer: "gear_status",
                explanation:
                    "gear_status is the function name. It describes the purpose of the function."
            },

            { text: "(temperature):" },
            { newline: true },


            { text: "    " },

            // BLANK 3
            {
                blank: true,
                answer: "if",
                explanation:
                    "The if keyword begins the conditional check."
            },

            { text: " temperature " },

            // BLANK 4
            {
                blank: true,
                answer: "<=",
                explanation:
                    "The <= operator checks whether the temperature is 10 or lower."
            },

            { text: " 10:" },
            { newline: true },


            { text: "        " },

            // BLANK 5
            {
                blank: true,
                answer: "return",
                explanation:
                    "return sends the result of the function back to the calling code."
            },

            { text: " \"Bring a jacket\"" },
            { newline: true },


            { text: "    return \"Light gear is enough\"" },
            { newline: true },


            { text: "for item in " },

            // BLANK 6
            {
                blank: true,
                answer: "range",
                explanation:
                    "range() produces the sequence of item numbers used by the for loop."
            },

            { text: "(1, 6):" },
            { newline: true },


            { text: "    print(\"Checking item\", item)" },
            { newline: true },


            { text: "miles = 3" },
            { newline: true },


            { text: "while miles > 0:" },
            { newline: true },


            { text: "    print(\"Miles remaining:\", miles)" },
            { newline: true },


            { text: "    miles = miles - 1" },
            { newline: true },


            { text: "advice = " },

            // BLANK 7
            {
                blank: true,
                answer: "gear_status",
                explanation:
                    "gear_status(8) is a function call. The value 8 is passed to the temperature parameter."
            },

            { text: "(8)" },
            { newline: true },


            { text: "print(\"Gear advice:\", advice)" }

        ]
    }

];


// =====================================================
// VARIABLES
// =====================================================

let selectedCode = null;

let studentAnswers = [];


// =====================================================
// SHUFFLE
// =====================================================

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


// =====================================================
// COUNT BLANKS
// =====================================================

function countBlanks(code) {

    return code.parts.filter(
        part => part.blank
    ).length;

}


// =====================================================
// START TEST II
// =====================================================

function startTest2() {

    selectedCode =
        shuffle(
            [...codeBank]
        )[0];


    console.log(
        "Selected program:",
        selectedCode.title
    );


    console.log(
        "Number of blanks:",
        countBlanks(selectedCode)
    );


    studentAnswers = [];


    displayQuestions();

}


// =====================================================
// DISPLAY QUESTIONS
// =====================================================

function displayQuestions() {

    const container =
        document.getElementById(
            "codeQuestionsContainer"
        );


    if (!container) {

        console.error(
            "codeQuestionsContainer was not found."
        );

        return;
    }


    container.innerHTML = "";


    const card =
        document.createElement(
            "div"
        );


    card.className =
        "code-question-card";


    // ---------------------------------------------
    // TITLE
    // ---------------------------------------------

    const title =
        document.createElement(
            "h3"
        );


    title.textContent =
        selectedCode.title;


    card.appendChild(
        title
    );


    // ---------------------------------------------
    // TOPIC
    // ---------------------------------------------

    const topic =
        document.createElement(
            "div"
        );


    topic.className =
        "question-topic";


    topic.textContent =
        selectedCode.topic;


    card.appendChild(
        topic
    );


    // ---------------------------------------------
    // CODE AREA
    // ---------------------------------------------

    const codeBox =
        document.createElement(
            "div"
        );


    codeBox.className =
        "code-box";


    let blankIndex = 0;


    selectedCode.parts.forEach(
        part => {


            // NEW LINE

            if (part.newline) {

                codeBox.appendChild(
                    document.createElement(
                        "br"
                    )
                );

                return;
            }


            // NORMAL TEXT

            if (part.text) {

                codeBox.appendChild(
                    document.createTextNode(
                        part.text
                    )
                );

                return;
            }


            // BLANK

            if (part.blank) {

                const input =
                    document.createElement(
                        "input"
                    );


                input.type =
                    "text";


                input.className =
                    "code-blank";


                input.autocomplete =
                    "off";


                input.dataset.blank =
                    blankIndex;


                input.setAttribute(
                    "aria-label",
                    "Code blank " +
                    (blankIndex + 1)
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


// =====================================================
// SUBMIT TEST II
// =====================================================

function submitTest2() {

    const inputs =
        document.querySelectorAll(
            ".code-blank"
        );


    // ---------------------------------------------
    // VERIFY NUMBER OF BLANKS
    // ---------------------------------------------

    if (
        inputs.length !== 10
    ) {

        alert(
            "There is a problem with this reviewer. Please inform your teacher."
        );


        console.error(
            "Expected 10 blanks but found:",
            inputs.length
        );


        return;
    }


    // ---------------------------------------------
    // COLLECT ANSWERS
    // ---------------------------------------------

    studentAnswers = [];


    inputs.forEach(
        input => {

            studentAnswers.push(
                input.value.trim()
            );

        }
    );


    // ---------------------------------------------
    // CHECK EMPTY ANSWERS
    // ---------------------------------------------

    const unanswered =
        studentAnswers.filter(
            answer =>
                answer === ""
        ).length;


    if (
        unanswered > 0
    ) {

        alert(
            "Please complete all 10 blanks before submitting."
        );


        return;
    }


    // ---------------------------------------------
    // CONFIRM SUBMISSION
    // ---------------------------------------------

    const confirmed =
        confirm(
            "Are you sure you want to submit Test II?"
        );


    if (!confirmed) {

        return;
    }


    // ---------------------------------------------
    // CALCULATE SCORE
    // ---------------------------------------------

    let score = 0;

    let blankIndex = 0;


    selectedCode.parts.forEach(
        part => {

            if (!part.blank) {

                return;
            }


            const studentAnswer =
                studentAnswers[
                    blankIndex
                ];


            const correctAnswer =
                part.answer;


            if (
                normalize(
                    studentAnswer
                ) ===
                normalize(
                    correctAnswer
                )
            ) {

                score++;

            }


            blankIndex++;

        }
    );


    // ---------------------------------------------
    // SHOW SCORE
    // ---------------------------------------------

    const scoreArea =
        document.getElementById(
            "scoreArea"
        );


    if (!scoreArea) {

        console.error(
            "scoreArea was not found."
        );

        return;
    }


    scoreArea.style.display =
        "block";


    const finalScore =
        document.getElementById(
            "finalScore"
        );


    if (finalScore) {

        finalScore.textContent =
            score + " / 10";

    }


    const scoreMessage =
        document.getElementById(
            "scoreMessage"
        );


    if (scoreMessage) {

        if (score === 10) {

            scoreMessage.textContent =
                "Excellent! You completed the code correctly.";

        }

        else if (score >= 8) {

            scoreMessage.textContent =
                "Very good! Review the items you missed.";

        }

        else if (score >= 5) {

            scoreMessage.textContent =
                "Good effort. Use the review explanations to strengthen your understanding.";

        }

        else {

            scoreMessage.textContent =
                "Keep practicing. Review each incorrect blank carefully.";

        }

    }


    // ---------------------------------------------
    // SHOW REVIEW
    // ---------------------------------------------

    displayResults();


    // ---------------------------------------------
    // DISABLE SUBMIT
    // ---------------------------------------------

    const button =
        document.getElementById(
            "submitBtn"
        );


    if (button) {

        button.disabled =
            true;


        button.textContent =
            "TEST SUBMITTED";

    }


    // ---------------------------------------------
    // SCROLL TO SCORE
    // ---------------------------------------------

    scoreArea.scrollIntoView({
        behavior: "smooth"
    });

}


// =====================================================
// NORMALIZE ANSWERS
// =====================================================

function normalize(value) {

    return String(value)
        .trim()
        .toLowerCase();

}


// =====================================================
// DISPLAY RESULTS
// =====================================================

function displayResults() {

    const container =
        document.getElementById(
            "codeQuestionsContainer"
        );


    container.innerHTML = "";


    // ---------------------------------------------
    // REVIEW INSTRUCTION
    // ---------------------------------------------

    const instruction =
        document.createElement(
            "div"
        );


    instruction.className =
        "review-instruction";


    instruction.textContent =
        "Correct answers are shown in green. Click a RED answer to see the explanation.";


    container.appendChild(
        instruction
    );


    // ---------------------------------------------
    // CREATE CARD
    // ---------------------------------------------

    const card =
        document.createElement(
            "div"
        );


    card.className =
        "code-question-card";


    // ---------------------------------------------
    // TITLE
    // ---------------------------------------------

    const title =
        document.createElement(
            "h3"
        );


    title.textContent =
        selectedCode.title;


    card.appendChild(
        title
    );


    // ---------------------------------------------
    // TOPIC
    // ---------------------------------------------

    const topic =
        document.createElement(
            "div"
        );


    topic.className =
        "question-topic";


    topic.textContent =
        selectedCode.topic;


    card.appendChild(
        topic
    );


    // ---------------------------------------------
    // CODE
    // ---------------------------------------------

    const codeBox =
        document.createElement(
            "div"
        );


    codeBox.className =
        "code-box submitted-code";


    let blankIndex = 0;


    selectedCode.parts.forEach(
        part => {


            // NEW LINE

            if (part.newline) {

                codeBox.appendChild(
                    document.createElement(
                        "br"
                    )
                );

                return;
            }


            // NORMAL TEXT

            if (part.text) {

                codeBox.appendChild(
                    document.createTextNode(
                        part.text
                    )
                );

                return;
            }


            // ANSWER

            if (part.blank) {

                const studentAnswer =
                    studentAnswers[
                        blankIndex
                    ];


                const correctAnswer =
                    part.answer;


                const answerSpan =
                    document.createElement(
                        "span"
                    );


                answerSpan.className =
                    "submitted-answer";


                answerSpan.textContent =
                    studentAnswer;


                const correct =
                    normalize(
                        studentAnswer
                    ) ===
                    normalize(
                        correctAnswer
                    );


                // ---------------------------------
                // CORRECT
                // ---------------------------------

                if (correct) {

                    answerSpan.classList.add(
                        "answer-correct"
                    );

                }


                // ---------------------------------
                // WRONG
                // ---------------------------------

                else {

                    answerSpan.classList.add(
                        "answer-wrong"
                    );


                    answerSpan.title =
                        "Click to review";


                    answerSpan.addEventListener(
                        "click",
                        function() {

                            showExplanation(
                                studentAnswer,
                                correctAnswer,
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

        }
    );


    card.appendChild(
        codeBox
    );


    container.appendChild(
        card
    );

}


// =====================================================
// SHOW EXPLANATION
// =====================================================

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
            onclick="closeExplanation()">

            ×

        </button>


        <h3>
            Quick Review
        </h3>


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


    document.body.appendChild(
        box
    );

}


// =====================================================
// CLOSE EXPLANATION
// =====================================================

function closeExplanation() {

    const box =
        document.getElementById(
            "codeExplanation"
        );


    if (box) {

        box.remove();

    }

}


// =====================================================
// ESCAPE HTML
// =====================================================

function escapeHTML(text) {

    return String(text)

        .replaceAll(
            "&",
            "&amp;"
        )

        .replaceAll(
            "<",
            "&lt;"
        )

        .replaceAll(
            ">",
            "&gt;"
        )

        .replaceAll(
            '"',
            "&quot;"
        )

        .replaceAll(
            "'",
            "&#039;"
        );

}


// =====================================================
// PAGE LOAD
// =====================================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        startTest2();


        const submitButton =
            document.getElementById(
                "submitBtn"
            );


        if (submitButton) {

            submitButton.addEventListener(
                "click",
                submitTest2
            );

        }

        else {

            console.error(
                "submitBtn was not found."
            );

        }

    }
);
