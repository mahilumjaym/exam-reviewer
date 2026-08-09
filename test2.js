// =====================================================
// TEST II - CODE COMPLETION
// 5 CODE PROGRAMS
// 1 RANDOM PROGRAM
// 10 BLANKS = 10 POINTS
// =====================================================


// =====================================================
// QUESTION BANK
// =====================================================

const codeBank = [

    // =================================================
    // CODE 1
    // VARIABLES / INPUT / OUTPUT / DATA TYPES
    // =================================================

    {
        title: "Student Information",
        topic: "Variables, Input, Output and Data Types",

        parts: [

            { text: 'name = ' },

            {
                blank: true,
                answer: 'input',
                explanation:
                    'The input() function allows the user to enter information into the program.'
            },

            { text: '("Enter your name: ")' },

            { newline: true },


            { text: 'age = ' },

            {
                blank: true,
                answer: 'int',
                explanation:
                    'The int() function converts a value into a whole number.'
            },

            {
                text: '(input("Enter your age: "))'
            },

            { newline: true },


            { text: 'section = ' },

            {
                blank: true,
                answer: 'input',
                explanation:
                    'input() is used when the program needs to receive information from the user.'
            },

            { text: '("Enter your section: ")' },

            { newline: true },


            {
                text: 'print("Name:", name)'
            },

            { newline: true },


            {
                blank: true,
                answer: 'print',
                explanation:
                    'The print() function displays information on the screen.'
            },

            { text: '("Age:", age)' },

            { newline: true },


            {
                text: 'print("Section:", section)'
            },

            { newline: true },


            { text: 'next_year = age ' },

            {
                blank: true,
                answer: '+',
                explanation:
                    'The + operator performs addition when used with numbers.'
            },

            { text: ' 1' },

            { newline: true },


            {
                text: 'print("Next year:", next_year)'
            }

        ]
    },


    // =================================================
    // CODE 2
    // CONDITIONS
    // =================================================

    {
        title: "Grade Checker",
        topic: "if, elif, else and Comparison Operators",

        parts: [

            { text: 'grade = ' },

            {
                blank: true,
                answer: 'float',
                explanation:
                    'The float() function converts input into a number that can contain decimal values.'
            },

            {
                text: '(input("Enter your grade: "))'
            },

            { newline: true },


            { text: 'if grade ' },

            {
                blank: true,
                answer: '>=',
                explanation:
                    'The >= operator means greater than or equal to.'
            },

            { text: ' 90:' },

            { newline: true },


            { text: '    ' },

            {
                blank: true,
                answer: 'print',
                explanation:
                    'The print() function displays the result of the condition.'
            },

            { text: '("Excellent")' },

            { newline: true },


            {
                blank: true,
                answer: 'elif',
                explanation:
                    'elif allows the program to check another condition when the previous if condition is false.'
            },

            { text: ' grade >= 75:' },

            { newline: true },


            { text: '    print("Passed")' },

            { newline: true },


            {
                blank: true,
                answer: 'else',
                explanation:
                    'The else block runs when none of the previous conditions are true.'
            },

            { text: ':' },

            { newline: true },


            { text: '    print("Needs improvement")' },

            { newline: true },


            { text: 'if grade ' },

            {
                blank: true,
                answer: '<',
                explanation:
                    'The < operator checks whether one value is less than another.'
            },

            { text: ' 75:' },

            { newline: true },


            {
                text: '    print("Review the lessons.")'
            },

            { newline: true },


            { text: 'result = ' },

            {
                blank: true,
                answer: '"Passed"',
                explanation:
                    'Strings are written inside quotation marks and can be stored in variables.'
            }

        ]
    },


    // =================================================
    // CODE 3
    // LOOPS / STRINGS / NUMBERS
    // =================================================

    {
        title: "Number Counter",
        topic: "for, while, range, Numbers and Strings",

        parts: [

            { text: 'print("Counting from 1 to 5")' },

            { newline: true },


            {
                blank: true,
                answer: 'for',
                explanation:
                    'A for loop repeats a block of code for each value in a sequence.'
            },

            { text: ' number in ' },

            {
                blank: true,
                answer: 'range',
                explanation:
                    'range() generates a sequence of numbers that can be used by a loop.'
            },

            { text: '(1, 6):' },

            { newline: true },


            { text: '    ' },

            {
                blank: true,
                answer: 'print',
                explanation:
                    'print() displays the current value of number.'
            },

            { text: '(number)' },

            { newline: true },


            { text: 'count = 5' },

            { newline: true },


            {
                blank: true,
                answer: 'while',
                explanation:
                    'A while loop repeats code as long as its condition remains true.'
            },

            { text: ' count > 0:' },

            { newline: true },


            { text: '    print("Remaining:", count)' },

            { newline: true },


            { text: '    count = count ' },

            {
                blank: true,
                answer: '-',
                explanation:
                    'The - operator subtracts one value from another.'
            },

            { text: ' 1' },

            { newline: true },


            { text: 'message = "Done"' },

            { newline: true },


            {
                blank: true,
                answer: 'print',
                explanation:
                    'The print() function displays the string stored in message.'
            },

            { text: '(message)' },

            { newline: true },


            { text: 'total = 10 ' },

            {
                blank: true,
                answer: '+',
                explanation:
                    'The + operator adds numeric values together.'
            },

            { text: ' 5' },

            { newline: true },


            {
                text: 'print("Total:", total)'
            }

        ]
    },


    // =================================================
    // CODE 4
    // LISTS / DICTIONARIES / FUNCTIONS
    // =================================================

    {
        title: "Student Record",
        topic: "Lists, Dictionaries and Functions",

        parts: [

            {
                text: 'students = ["Ana", "Ben", "Carlo"]'
            },

            { newline: true },


            { text: 'scores = ' },

            {
                blank: true,
                answer: '{',
                explanation:
                    'A dictionary is written using curly braces and stores data as key-value pairs.'
            },

            {
                text: '"Ana": 90, "Ben": 85, "Carlo": 88}'
            },

            { newline: true },


            {
                blank: true,
                answer: 'def',
                explanation:
                    'The def keyword is used to create a function in Python.'
            },

            { text: ' show_student(name):' },

            { newline: true },


            { text: '    ' },

            {
                blank: true,
                answer: 'print',
                explanation:
                    'print() displays information produced by the function.'
            },

            { text: '("Student:", name)' },

            { newline: true },


            { text: '    print("Score:", scores[name])' },

            { newline: true },


            { text: 'show_student(' },

            {
                blank: true,
                answer: '"Ana"',
                explanation:
                    'A string value can be passed to a function as an argument.'
            },

            { text: ')' },

            { newline: true },


            { text: 'show_student(' },

            {
                blank: true,
                answer: '"Ben"',
                explanation:
                    'Functions can be called multiple times using different arguments.'
            },

            { text: ')' },

            { newline: true },


            { text: 'first = students[' },

            {
                blank: true,
                answer: '0',
                explanation:
                    'Python list indexing starts at 0, so the first item is at index 0.'
            },

            { text: ']' },

            { newline: true },


            { text: 'print(first)' },

            { newline: true },


            {
                text: 'print("Number of students:", len(students))'
            }

        ]
    },


    // =================================================
    // CODE 5
    // FUNCTIONS / INPUT / STRINGS / FILE
    // =================================================

    {
        title: "Simple File Saver",
        topic: "Functions, Input, Strings and Saving to File",

        parts: [

            {
                blank: true,
                answer: 'def',
                explanation:
                    'The def keyword is used to define a function.'
            },

            { text: ' save_note():' },

            { newline: true },


            { text: '    message = ' },

            {
                blank: true,
                answer: 'input',
                explanation:
                    'input() allows the user to enter the message that will be saved.'
            },

            { text: '("Enter a note: ")' },

            { newline: true },


            { text: '    file = ' },

            {
                blank: true,
                answer: 'open',
                explanation:
                    'The open() function is used to open or create a file.'
            },

            { text: '("notes.txt", "w")' },

            { newline: true },


            { text: '    file.' },

            {
                blank: true,
                answer: 'write',
                explanation:
                    'The write() method places text into the opened file.'
            },

            { text: '(message)' },

            { newline: true },


            { text: '    file.' },

            {
                blank: true,
                answer: 'close',
                explanation:
                    'The close() method closes the file after the program finishes using it.'
            },

            { text: '()' },

            { newline: true },


            {
                blank: true,
                answer: 'print',
                explanation:
                    'print() displays a confirmation message to the user.'
            },

            { text: '("Note saved.")' },

            { newline: true },


            { text: 'save_note()' },

            { newline: true },


            { text: 'name = ' },

            {
                blank: true,
                answer: 'input',
                explanation:
                    'input() is used to receive text from the user.'
            },

            { text: '("Enter your name: ")' },

            { newline: true },


            { text: 'print("Hello", name)' },

            { newline: true },


            { text: 'number = ' },

            {
                blank: true,
                answer: 'int',
                explanation:
                    'int() converts input into a whole number.'
            },

            { text: '(input("Enter a number: "))' },

            { newline: true },


            { text: 'print(number + 1)' }

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
// START TEST
// =====================================================

function startTest2() {

    const shuffled =
        shuffle([...codeBank]);


    selectedCode =
        shuffled[0];


    studentAnswers = [];


    selectedCode.parts.forEach(
        part => {

            if (part.blank) {

                studentAnswers.push("");

            }

        }
    );


    displayQuestions();

}


// =====================================================
// DISPLAY ONE CODE
// =====================================================

function displayQuestions() {

    const container =
        document.getElementById(
            "codeQuestionsContainer"
        );


    container.innerHTML = "";


    const card =
        document.createElement("div");


    card.className =
        "code-question-card";


    const title =
        document.createElement("h3");


    title.textContent =
        selectedCode.title;


    card.appendChild(title);


    const topic =
        document.createElement("div");


    topic.className =
        "question-topic";


    topic.textContent =
        selectedCode.topic;


    card.appendChild(topic);


    const codeBox =
        document.createElement("div");


    codeBox.className =
        "code-box";


    let blankIndex = 0;


    selectedCode.parts.forEach(
        part => {

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
                    document.createElement(
                        "input"
                    );


                input.type =
                    "text";


                input.className =
                    "code-blank";


                input.dataset.blank =
                    blankIndex;


                input.autocomplete =
                    "off";


                input.addEventListener(
                    "input",
                    function() {

                        studentAnswers[
                            blankIndex
                        ] =
                            input.value.trim();

                    }
                );


                codeBox.appendChild(
                    input
                );


                blankIndex++;

            }

        }
    );


    card.appendChild(codeBox);


    container.appendChild(card);

}


// =====================================================
// SUBMIT TEST II
// =====================================================

function submitTest2() {

    console.log(
        "SUBMIT TEST II CLICKED"
    );


    // ---------------------------------------------
    // CHECK ALL 10 BLANKS
    // ---------------------------------------------

    let unanswered = 0;


    studentAnswers.forEach(
        answer => {

            if (
                answer.trim() === ""
            ) {

                unanswered++;

            }

        }
    );


    if (unanswered > 0) {

        alert(
            "Please complete all 10 blanks before submitting."
        );

        return;

    }


    // ---------------------------------------------
    // CONFIRM
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


            if (
                normalize(
                    studentAnswers[blankIndex]
                ) ===
                normalize(
                    part.answer
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


    scoreArea.style.display =
        "block";


    document.getElementById(
        "finalScore"
    ).textContent =
        score + " / 10";


    document.getElementById(
        "scoreMessage"
    ).textContent =
        "Click the RED answers to review the concepts you missed.";


    // ---------------------------------------------
    // SHOW COMPLETED CODE
    // ---------------------------------------------

    displayResults();


    // ---------------------------------------------
    // DISABLE SUBMIT
    // ---------------------------------------------

    const button =
        document.getElementById(
            "submitBtn"
        );


    button.disabled =
        true;


    button.textContent =
        "TEST SUBMITTED";


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

    return value
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
        "Click the RED answers to review the concepts you missed.";


    container.appendChild(
        instruction
    );


    // ---------------------------------------------
    // CODE CARD
    // ---------------------------------------------

    const card =
        document.createElement(
            "div"
        );


    card.className =
        "code-question-card";


    const title =
        document.createElement(
            "h3"
        );


    title.textContent =
        selectedCode.title;


    card.appendChild(title);


    const topic =
        document.createElement(
            "div"
        );


    topic.className =
        "question-topic";


    topic.textContent =
        selectedCode.topic;


    card.appendChild(topic);


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
                    document.createElement("br")
                );

                return;

            }


            // NORMAL CODE

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

                const answer =
                    studentAnswers[
                        blankIndex
                    ];


                const answerSpan =
                    document.createElement(
                        "span"
                    );


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


                    answerSpan.title =
                        "Click to review";


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
// SHOW REVIEW POPUP
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


        <h3>Quick Review</h3>


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
// CLOSE REVIEW
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
// PROTECT DISPLAYED ANSWERS
// =====================================================

function escapeHTML(text) {

    return text
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


// =====================================================
// PAGE LOAD
// =====================================================

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
