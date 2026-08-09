// =====================================================
// TEST II - CODE COMPLETION
// 5 PROGRAMS
// 1 RANDOM PROGRAM
// EXACTLY 10 BLANKS
// SCORE: 10 POINTS
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

            { text: "name = " },

            {
                blank: true,
                answer: "input",
                explanation:
                    "The input() function allows the user to enter information into the program."
            },

            { text: '("Enter your name: ")' },
            { newline: true },


            { text: "age = " },

            {
                blank: true,
                answer: "int",
                explanation:
                    "The int() function converts a value into a whole number."
            },

            { text: '(input("Enter your age: "))' },
            { newline: true },


            { text: "section = " },

            {
                blank: true,
                answer: "input",
                explanation:
                    "The input() function is used to receive information from the user."
            },

            { text: '("Enter your section: ")' },
            { newline: true },


            { text: "height = " },

            {
                blank: true,
                answer: "float",
                explanation:
                    "The float() function converts a value into a number that can contain decimal values."
            },

            { text: '(input("Enter your height: "))' },
            { newline: true },


            {
                blank: true,
                answer: "print",
                explanation:
                    "The print() function displays information on the screen."
            },

            { text: '("Name:", name)' },
            { newline: true },


            {
                blank: true,
                answer: "print",
                explanation:
                    "print() is used to display the student's age."
            },

            { text: '("Age:", age)' },
            { newline: true },


            {
                blank: true,
                answer: "print",
                explanation:
                    "The print() function can display variables and text together."
            },

            { text: '("Section:", section)' },
            { newline: true },


            {
                blank: true,
                answer: "print",
                explanation:
                    "print() can also display decimal values stored in a variable."
            },

            { text: '("Height:", height)' },
            { newline: true },


            { text: "next_year = age " },

            {
                blank: true,
                answer: "+",
                explanation:
                    "The + operator performs addition when used with numbers."
            },

            { text: " 1" },
            { newline: true },


            {
                blank: true,
                answer: "print",
                explanation:
                    "The final print() displays the calculated value."
            },

            { text: '("Age next year:", next_year)' }

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

            { text: "grade = " },

            {
                blank: true,
                answer: "float",
                explanation:
                    "The float() function converts input into a number that may contain decimal values."
            },

            { text: '(input("Enter your grade: "))' },
            { newline: true },


            { text: "if grade " },

            {
                blank: true,
                answer: ">=",
                explanation:
                    "The >= operator means greater than or equal to."
            },

            { text: " 90:" },
            { newline: true },


            { text: "    " },

            {
                blank: true,
                answer: "print",
                explanation:
                    "The print() function displays the result when the condition is true."
            },

            { text: '("Excellent")' },
            { newline: true },


            {
                blank: true,
                answer: "elif",
                explanation:
                    "elif allows Python to test another condition when the previous condition is false."
            },

            { text: " grade " },

            {
                blank: true,
                answer: ">=",
                explanation:
                    "The >= operator checks whether the grade is at least 75."
            },

            { text: " 75:" },
            { newline: true },


            { text: "    " },

            {
                blank: true,
                answer: "print",
                explanation:
                    "print() displays the result of the second condition."
            },

            { text: '("Passed")' },
            { newline: true },


            {
                blank: true,
                answer: "else",
                explanation:
                    "The else block runs when none of the previous conditions are true."
            },

            { text: ":" },
            { newline: true },


            { text: "    " },

            {
                blank: true,
                answer: "print",
                explanation:
                    "The print() function displays the message inside the else block."
            },

            { text: '("Needs improvement")' },
            { newline: true },


            { text: "if grade " },

            {
                blank: true,
                answer: "<",
                explanation:
                    "The < operator checks whether one value is less than another."
            },

            { text: " 75:" },
            { newline: true },


            { text: "    print(" },

            {
                blank: true,
                answer: '"Review the lessons."',
                explanation:
                    "Strings are written inside quotation marks and can be used as messages."
            },

            { text: ")" }

        ]
    },


    // =================================================
    // CODE 3
    // LOOPS / NUMBERS / STRINGS
    // =================================================

    {
        title: "Number Counter",
        topic: "for, while, range, Numbers and Strings",

        parts: [

            { text: 'print("Counting from 1 to 5")' },
            { newline: true },


            {
                blank: true,
                answer: "for",
                explanation:
                    "A for loop repeats a block of code for each value in a sequence."
            },

            { text: " number in " },

            {
                blank: true,
                answer: "range",
                explanation:
                    "range() creates a sequence of numbers that can be used by a loop."
            },

            { text: "(1, 6):" },
            { newline: true },


            { text: "    " },

            {
                blank: true,
                answer: "print",
                explanation:
                    "print() displays the current value of the loop variable."
            },

            { text: "(number)" },
            { newline: true },


            { text: "count = 5" },
            { newline: true },


            {
                blank: true,
                answer: "while",
                explanation:
                    "A while loop continues running as long as its condition is true."
            },

            { text: " count " },

            {
                blank: true,
                answer: ">",
                explanation:
                    "The > operator checks whether count is greater than zero."
            },

            { text: " 0:" },
            { newline: true },


            { text: "    " },

            {
                blank: true,
                answer: "print",
                explanation:
                    "print() displays the current value of count."
            },

            { text: '("Remaining:", count)' },
            { newline: true },


            { text: "    count = count " },

            {
                blank: true,
                answer: "-",
                explanation:
                    "The - operator subtracts a value from another number."
            },

            { text: " 1" },
            { newline: true },


            { text: 'message = "Done"' },
            { newline: true },


            {
                blank: true,
                answer: "print",
                explanation:
                    "print() displays the string stored in the message variable."
            },

            { text: "(message)" },
            { newline: true },


            { text: "total = 10 " },

            {
                blank: true,
                answer: "+",
                explanation:
                    "The + operator adds numeric values together."
            },

            { text: " 5" },
            { newline: true },


            {
                blank: true,
                answer: "print",
                explanation:
                    "print() displays the final value stored in total."
            },

            { text: '("Total:", total)' }

        ]
    },


    // =================================================
    // CODE 4
    // LISTS / DICTIONARIES / FUNCTIONS
    // =================================================

    {
        title: "Student Records",
        topic: "Lists, Dictionaries and Functions",

        parts: [

            { text: "students = " },

            {
                blank: true,
                answer: '["Ana", "Ben", "Carlo"]',
                explanation:
                    "A list stores multiple values in one variable. Lists use square brackets."
            },

            { newline: true },


            { text: "scores = " },

            {
                blank: true,
                answer: '{"Ana": 90, "Ben": 85, "Carlo": 88}',
                explanation:
                    "A dictionary stores information using key-value pairs and uses curly braces."
            },

            { newline: true },


            {
                blank: true,
                answer: "def",
                explanation:
                    "The def keyword is used to define a function in Python."
            },

            { text: " show_student(name):" },
            { newline: true },


            { text: "    " },

            {
                blank: true,
                answer: "print",
                explanation:
                    "The print() function displays information on the screen."
            },

            { text: '("Student:", name)' },
            { newline: true },


            { text: "    print(" },

            {
                blank: true,
                answer: "scores[name]",
                explanation:
                    "Dictionary values can be accessed using their keys inside square brackets."
            },

            { text: ")" },
            { newline: true },


            { text: "show_student(" },

            {
                blank: true,
                answer: '"Ana"',
                explanation:
                    "A value passed to a function is called an argument."
            },

            { text: ")" },
            { newline: true },


            { text: "show_student(" },

            {
                blank: true,
                answer: '"Ben"',
                explanation:
                    "A function can be called more than once with different arguments."
            },

            { text: ")" },
            { newline: true },


            { text: "first = students[" },

            {
                blank: true,
                answer: "0",
                explanation:
                    "Python list indexing starts at 0, so index 0 refers to the first item."
            },

            { text: "]" },
            { newline: true },


            { text: "count = " },

            {
                blank: true,
                answer: "len",
                explanation:
                    "The len() function returns the number of items in a list."
            },

            { text: "(students)" },
            { newline: true },


            {
                blank: true,
                answer: "print",
                explanation:
                    "The print() function displays the value stored in count."
            },

            { text: "(count)" }

        ]
    },


    // =================================================
    // CODE 5
    // FUNCTIONS / INPUT / FILE SAVING
    // =================================================

    {
        title: "Simple File Saver",
        topic: "Functions, Input, Strings and Saving to File",

        parts: [

            {
                blank: true,
                answer: "def",
                explanation:
                    "The def keyword is used to define a function."
            },

            { text: " save_note():" },
            { newline: true },


            { text: "    message = " },

            {
                blank: true,
                answer: "input",
                explanation:
                    "The input() function allows the user to enter the message."
            },

            { text: '("Enter a note: ")' },
            { newline: true },


            { text: "    file = " },

            {
                blank: true,
                answer: "open",
                explanation:
                    "The open() function is used to open or create a file."
            },

            { text: '("notes.txt", "w")' },
            { newline: true },


            { text: "    file." },

            {
                blank: true,
                answer: "write",
                explanation:
                    "The write() method places text into the opened file."
            },

            { text: "(message)" },
            { newline: true },


            { text: "    file." },

            {
                blank: true,
                answer: "close",
                explanation:
                    "The close() method closes the file after writing is finished."
            },

            { text: "()" },
            { newline: true },


            { text: "    " },

            {
                blank: true,
                answer: "print",
                explanation:
                    "The print() function displays a confirmation message."
            },

            { text: '("Note saved.")' },
            { newline: true },


            { text: "save_note()" },
            { newline: true },


            { text: "name = " },

            {
                blank: true,
                answer: "input",
                explanation:
                    "input() receives text from the user."
            },

            { text: '("Enter your name: ")' },
            { newline: true },


            { text: "print(" },

            {
                blank: true,
                answer: '"Hello"',
                explanation:
                    "Hello is a string value, so it is written inside quotation marks."
            },

            { text: ", name)" },
            { newline: true },


            { text: "number = " },

            {
                blank: true,
                answer: "int",
                explanation:
                    "The int() function converts input into a whole number."
            },

            { text: '(input("Enter a number: "))' },
            { newline: true },


            { text: "print(number + 1)" }

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

    const shuffled =
        shuffle([...codeBank]);

    selectedCode =
        shuffled[0];

    console.log(
        "Selected code:",
        selectedCode.title
    );

    console.log(
        "Number of blanks:",
        countBlanks(selectedCode)
    );

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
// DISPLAY QUESTION
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

                input.autocomplete =
                    "off";

                input.dataset.blank =
                    blankIndex;


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

    console.log("SUBMIT TEST II CLICKED");


    // =============================================
    // GET ALL VISIBLE BLANKS DIRECTLY FROM PAGE
    // =============================================

    const inputs =
        document.querySelectorAll(
            ".code-blank"
        );


    console.log(
        "Number of input boxes:",
        inputs.length
    );


    // =============================================
    // READ STUDENT ANSWERS
    // =============================================

    studentAnswers = [];


    inputs.forEach(
        input => {

            studentAnswers.push(
                input.value.trim()
            );

        }
    );


    console.log(
        "Student answers:",
        studentAnswers
    );


    // =============================================
    // CHECK NUMBER OF BLANKS
    // =============================================

    if (inputs.length !== 10) {

        alert(
            "There is a problem with this Test II question. Please inform your teacher."
        );

        console.error(
            "Expected 10 blanks but found:",
            inputs.length
        );

        return;
    }


    // =============================================
    // CHECK EMPTY ANSWERS
    // =============================================

    let unanswered = 0;


    studentAnswers.forEach(
        answer => {

            if (
                answer === ""
            ) {

                unanswered++;

            }

        }
    );


    console.log(
        "Unanswered:",
        unanswered
    );


    if (unanswered > 0) {

        alert(
            "Please complete all 10 blanks before submitting."
        );

        return;
    }


    // =============================================
    // CONFIRM SUBMISSION
    // =============================================

    const confirmed =
        confirm(
            "Are you sure you want to submit Test II?"
        );


    if (!confirmed) {

        return;
    }


    // =============================================
    // CALCULATE SCORE
    // =============================================

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


            console.log(
                "Checking:",
                studentAnswer,
                "| Correct:",
                correctAnswer
            );


            if (
                normalize(studentAnswer) ===
                normalize(correctAnswer)
            ) {

                score++;

            }


            blankIndex++;

        }
    );


    console.log(
        "FINAL SCORE:",
        score,
        "/ 10"
    );


    // =============================================
    // SHOW SCORE
    // =============================================

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

        scoreMessage.textContent =
            "Click the RED answers to review the concepts you missed.";

    }


    // =============================================
    // SHOW REVIEW
    // =============================================

    displayResults();


    // =============================================
    // DISABLE SUBMIT
    // =============================================

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


    // =============================================
    // MOVE TO SCORE
    // =============================================

    scoreArea.scrollIntoView({
        behavior: "smooth"
    });

}


    // Check unanswered

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


    // Confirm

    const confirmed =
        confirm(
            "Are you sure you want to submit Test II?"
        );


    if (!confirmed) {

        return;
    }


    // Calculate score

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


    console.log(
        "Score:",
        score,
        "/ 10"
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
        score + " / 10";


    document.getElementById(
        "scoreMessage"
    ).textContent =
        "Click the RED answers to review the concepts you missed.";


    // Display complete code

    displayResults();


    // Disable submit

    const button =
        document.getElementById(
            "submitBtn"
        );


    button.disabled =
        true;

    button.textContent =
        "TEST SUBMITTED";


    scoreArea.scrollIntoView({
        behavior: "smooth"
    });

}


// =====================================================
// NORMALIZE
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
// REVIEW POPUP
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
// CLOSE POPUP
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

    }
);
