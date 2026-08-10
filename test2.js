// =====================================================
// TEST II - PYTHON CODE COMPLETION REVIEWER
// 5 PROGRAMS
// 1 RANDOM PROGRAM
// EXACTLY 10 BLANKS PER PROGRAM
// =====================================================


// =====================================================
// PYTHON KEYWORDS
// =====================================================

const pythonKeywords = new Set([
    "and", "as", "assert", "break", "class",
    "continue", "def", "del", "elif", "else",
    "except", "False", "finally", "for",
    "from", "global", "if", "import", "in",
    "is", "lambda", "None", "nonlocal",
    "not", "or", "pass", "raise", "return",
    "True", "try", "while", "with", "yield"
]);


// =====================================================
// CODE PARTS
// =====================================================

function code(value) {
    return {
        type: "code",
        value: value
    };
}


function comment(value) {
    return {
        type: "comment",
        value: value
    };
}


function newline() {
    return {
        type: "newline"
    };
}


// Fixed Python syntax answer
function fixedBlank(answer, explanation) {
    return {
        type: "blank",
        kind: "fixed",
        answer: answer,
        explanation: explanation
    };
}


// Student creates a name
function defineBlank(name, explanation) {
    return {
        type: "blank",
        kind: "define",
        name: name,
        explanation: explanation
    };
}


// Student reuses a previously created name
function useBlank(name, explanation) {
    return {
        type: "blank",
        kind: "use",
        name: name,
        explanation: explanation
    };
}


// =====================================================
// PROGRAM BANK
// =====================================================

const codeBank = [

    // =================================================
    // PROGRAM 1
    // WORKOUT SESSION CHECKER
    // =================================================

    {
        title: "Workout Session Checker",

        parts: [

            // Blank 1
            comment("# Define the function"),
            newline(),
            code("def "),
            defineBlank(
                "functionName",
                "Choose a valid function name."
            ),
            code("(minutes):"),
            newline(),

            // Blank 2
            comment("# Check the activity time"),
            newline(),
            code("    if minutes "),
            fixedBlank(
                ">=",
                "The operator checks whether the value is at least 30."
            ),
            code(" 30:"),
            newline(),

            comment("# Return the result"),
            newline(),
            code('        return "Active"'),
            newline(),

            // Blank 3
            comment("# Set the number of sessions"),
            newline(),
            code("sessions = "),
            fixedBlank(
                "3",
                "The number of sessions is 3."
            ),
            newline(),

            // Blank 4
            comment("# Repeat the sessions"),
            newline(),
            code("for session in range("),
            fixedBlank(
                "1",
                "The loop begins with 1."
            ),
            code(", 4):"),
            newline(),

            code('    print("Session:", session)'),
            newline(),

            // Blank 5
            comment("# Check remaining sessions"),
            newline(),
            code("while sessions "),
            fixedBlank(
                ">",
                "The loop continues while sessions is greater than 0."
            ),
            code(" 0:"),
            newline(),

            code('    print("Training")'),
            newline(),

            code("    sessions = sessions - 1"),
            newline(),

            // Blank 6
            comment("# Open the study record"),
            newline(),
            code('file = open("workout_log.txt", '),
            fixedBlank(
                '"a"',
                "The append mode adds new information to the file."
            ),
            code(")"),
            newline(),

            code('file.write("Workout completed\\n")'),
            newline(),
            code("file.close()"),
            newline(),

            // Blank 7
            comment("# Call the function"),
            newline(),
            code("result = "),
            useBlank(
                "functionName",
                "Use the function name you created earlier."
            ),
            code("(45)"),
            newline(),

            code('print("Result:", result)')

        ]
    },


    // =================================================
    // PROGRAM 2
    // BOOKSTORE ORDER CHECKER
    // =================================================

    {
        title: "Bookstore Order Checker",

        parts: [

            // Blank 1
            comment("# Define the function"),
            newline(),
            code("def "),
            defineBlank(
                "functionName",
                "Choose a valid function name."
            ),
            code("(quantity):"),
            newline(),

            // Blank 2
            comment("# Check the order quantity"),
            newline(),
            code("    if quantity "),
            fixedBlank(
                ">",
                "The operator checks whether the quantity is greater than 0."
            ),
            code(" 0:"),
            newline(),

            code('        return "Order accepted"'),
            newline(),

            // Blank 3
            comment("# Set the number of orders"),
            newline(),
            code("orders = "),
            fixedBlank(
                "3",
                "There are three orders to process."
            ),
            newline(),

            // Blank 4
            comment("# Repeat the orders"),
            newline(),
            code("for order_number in range("),
            fixedBlank(
                "1",
                "The first order is numbered 1."
            ),
            code(", 4):"),
            newline(),

            code('    print("Order:", order_number)'),
            newline(),

            // Blank 5
            comment("# Check remaining orders"),
            newline(),
            code("while orders "),
            fixedBlank(
                ">",
                "The loop continues while orders is greater than 0."
            ),
            code(" 0:"),
            newline(),

            code('    print("Processing")'),
            newline(),
            code("    orders = orders - 1"),
            newline(),

            // Blank 6
            comment("# Open the order file"),
            newline(),
            code('file = open("orders.txt", '),
            fixedBlank(
                '"a"',
                "Append mode keeps previous records."
            ),
            code(")"),
            newline(),

            code('file.write("Order processed\\n")'),
            newline(),
            code("file.close()"),
            newline(),

            // Blank 7
            comment("# Call the function"),
            newline(),
            code("message = "),
            useBlank(
                "functionName",
                "Use the function name you created earlier."
            ),
            code("(2)"),
            newline(),

            code("print(message)")

        ]
    },


    // =================================================
    // PROGRAM 3
    // PLANT WATERING CHECKER
    // =================================================

    {
        title: "Plant Watering Checker",

        parts: [

            // Blank 1
            comment("# Define the function"),
            newline(),
            code("def "),
            defineBlank(
                "functionName",
                "Choose a valid function name."
            ),
            code("(level):"),
            newline(),

            // Blank 2
            comment("# Check the water level"),
            newline(),
            code("    if level "),
            fixedBlank(
                "<",
                "The operator checks whether the level is below 20."
            ),
            code(" 20:"),
            newline(),

            code('        return "Water needed"'),
            newline(),

            // Blank 3
            comment("# Set the number of plants"),
            newline(),
            code("plants = "),
            fixedBlank(
                "3",
                "There are three plants to check."
            ),
            newline(),

            // Blank 4
            comment("# Visit each plant"),
            newline(),
            code("for plant in range("),
            fixedBlank(
                "1",
                "The first plant is numbered 1."
            ),
            code(", 4):"),
            newline(),

            code('    print("Plant:", plant)'),
            newline(),

            // Blank 5
            comment("# Check remaining plants"),
            newline(),
            code("while plants "),
            fixedBlank(
                ">",
                "The loop continues while plants is greater than 0."
            ),
            code(" 0:"),
            newline(),

            code('    print("Checking")'),
            newline(),
            code("    plants = plants - 1"),
            newline(),

            // Blank 6
            comment("# Open the plant record"),
            newline(),
            code('file = open("plant_log.txt", '),
            fixedBlank(
                '"a"',
                "Append mode adds a new record."
            ),
            code(")"),
            newline(),

            code('file.write("Plant checked\\n")'),
            newline(),
            code("file.close()"),
            newline(),

            // Blank 7
            comment("# Call the function"),
            newline(),
            code("status = "),
            useBlank(
                "functionName",
                "Use the function name you created earlier."
            ),
            code("(15)"),
            newline(),

            code('print("Status:", status)')

        ]
    },


    // =================================================
    // PROGRAM 4
    // TRAVEL BUDGET CHECKER
    // =================================================

    {
        title: "Travel Budget Checker",

        parts: [

            // Blank 1
            comment("# Define the function"),
            newline(),
            code("def "),
            defineBlank(
                "functionName",
                "Choose a valid function name."
            ),
            code("(budget):"),
            newline(),

            // Blank 2
            comment("# Check the budget"),
            newline(),
            code("    if budget "),
            fixedBlank(
                ">=",
                "The operator checks whether the budget is at least 1000."
            ),
            code(" 1000:"),
            newline(),

            code('        return "Trip approved"'),
            newline(),

            // Blank 3
            comment("# Set the travel days"),
            newline(),
            code("days = "),
            fixedBlank(
                "3",
                "The trip has three days."
            ),
            newline(),

            // Blank 4
            comment("# Display each day"),
            newline(),
            code("for day in range("),
            fixedBlank(
                "1",
                "The first day is numbered 1."
            ),
            code(", 4):"),
            newline(),

            code('    print("Day:", day)'),
            newline(),

            // Blank 5
            comment("# Check remaining days"),
            newline(),
            code("while days "),
            fixedBlank(
                ">",
                "The loop continues while days is greater than 0."
            ),
            code(" 0:"),
            newline(),

            code('    print("Planning")'),
            newline(),
            code("    days = days - 1"),
            newline(),

            // Blank 6
            comment("# Open the travel record"),
            newline(),
            code('file = open("travel_plan.txt", '),
            fixedBlank(
                '"a"',
                "Append mode adds the new travel record."
            ),
            code(")"),
            newline(),

            code('file.write("Trip planned\\n")'),
            newline(),
            code("file.close()"),
            newline(),

            // Blank 7
            comment("# Call the function"),
            newline(),
            code("decision = "),
            useBlank(
                "functionName",
                "Use the function name you created earlier."
            ),
            code("(1500)"),
            newline(),

            code('print("Decision:", decision)')

        ]
    },


    // =================================================
    // PROGRAM 5
    // EVENT SIZE CHECKER
    // =================================================

    {
        title: "Event Size Checker",

        parts: [

            // Blank 1
            comment("# Define the function"),
            newline(),
            code("def "),
            defineBlank(
                "functionName",
                "Choose a valid function name."
            ),
            code("(guests):"),
            newline(),

            // Blank 2
            comment("# Check the number of guests"),
            newline(),
            code("    if guests "),
            fixedBlank(
                ">",
                "The operator checks whether the number is greater than 50."
            ),
            code(" 50:"),
            newline(),

            code('        return "Large Event"'),
            newline(),

            // Blank 3
            comment("# Set the number of activities"),
            newline(),
            code("activities = "),
            fixedBlank(
                "3",
                "There are three activities."
            ),
            newline(),

            // Blank 4
            comment("# Repeat the activities"),
            newline(),
            code("for activity in range("),
            fixedBlank(
                "1",
                "The first activity is numbered 1."
            ),
            code(", 4):"),
            newline(),

            code('    print("Activity:", activity)'),
            newline(),

            // Blank 5
            comment("# Check remaining activities"),
            newline(),
            code("while activities "),
            fixedBlank(
                ">",
                "The loop continues while activities is greater than 0."
            ),
            code(" 0:"),
            newline(),

            code('    print("Preparing")'),
            newline(),
            code("    activities = activities - 1"),
            newline(),

            // Blank 6
            comment("# Open the event record"),
            newline(),
            code('file = open("event_log.txt", '),
            fixedBlank(
                '"a"',
                "Append mode adds the new event record."
            ),
            code(")"),
            newline(),

            code('file.write("Event prepared\\n")'),
            newline(),
            code("file.close()"),
            newline(),

            // Blank 7
            comment("# Call the function"),
            newline(),
            code("result = "),
            useBlank(
                "functionName",
                "Use the function name you created earlier."
            ),
            code("(65)"),
            newline(),

            code('print("Result:", result)')

        ]
    }

];


// =====================================================
// VARIABLES
// =====================================================

let selectedCode = null;
let studentAnswers = [];
let symbolTable = {};
let testSubmitted = false;


// =====================================================
// COUNT BLANKS
// =====================================================

function countBlanks(program) {

    return program.parts.filter(
        part => part.type === "blank"
    ).length;

}


// =====================================================
// VALIDATE PROGRAMS
// =====================================================

function validatePrograms() {

    let valid = true;

    codeBank.forEach(
        (program, index) => {

            const count =
                countBlanks(program);

            console.log(
                `${program.title}: ${count} blanks`
            );

            if (count !== 10) {

                console.error(
                    `${program.title} has ${count} blanks. Expected exactly 10.`
                );

                valid = false;

            }

        }
    );

    return valid;

}


// =====================================================
// START TEST
// =====================================================

function startTest2() {

    if (!validatePrograms()) {

        alert(
            "There is a problem with this reviewer. Please inform your teacher."
        );

        return;

    }


    selectedCode =
        codeBank[
            Math.floor(
                Math.random() *
                codeBank.length
            )
        ];


    studentAnswers = [];
    symbolTable = {};
    testSubmitted = false;


    displayProgram();

}


// =====================================================
// PYTHON DISPLAY
// =====================================================

function createPythonSpan(
    type,
    value
) {

    const span =
        document.createElement(
            "span"
        );


    if (type === "comment") {

        span.className =
            "py-comment";

    }

    else {

        span.className =
            "py-code";

    }


    span.textContent =
        value;


    return span;

}


// =====================================================
// CREATE BLANK INPUT
// =====================================================

function createBlankInput(
    part,
    index
) {

    const input =
        document.createElement(
            "input"
        );


    input.type =
        "text";


    input.className =
        "code-blank";


    input.dataset.index =
        index;


    input.autocomplete =
        "off";


    if (
        part.kind === "define" ||
        part.kind === "use"
    ) {

        input.classList.add(
            "identifier-blank"
        );

    }

    else {

        input.classList.add(
            "short-blank"
        );

    }


    return input;

}


// =====================================================
// DISPLAY PROGRAM
// =====================================================

function displayProgram() {

    const container =
        document.getElementById(
            "codeQuestionsContainer"
        );


    if (!container) {

        console.error(
            "codeQuestionsContainer not found."
        );

        return;

    }


    container.innerHTML = "";


    // -----------------------------------------------
    // PROGRAM TITLE
    // -----------------------------------------------

    const title =
        document.createElement(
            "h2"
        );


    title.className =
        "program-title";


    title.textContent =
        selectedCode.title;


    container.appendChild(
        title
    );


    // -----------------------------------------------
    // IDE
    // -----------------------------------------------

    const editor =
        document.createElement(
            "div"
        );


    editor.className =
        "python-editor";


    const header =
        document.createElement(
            "div"
        );


    header.className =
        "python-editor-header";


    header.textContent =
        "PYTHON";


    editor.appendChild(
        header
    );


    const codeArea =
        document.createElement(
            "div"
        );


    codeArea.className =
        "python-code";


    let blankIndex = 0;


    selectedCode.parts.forEach(
        part => {

            if (
                part.type ===
                "newline"
            ) {

                codeArea.appendChild(
                    document.createElement(
                        "br"
                    )
                );

                return;

            }


            if (
                part.type ===
                "blank"
            ) {

                codeArea.appendChild(
                    createBlankInput(
                        part,
                        blankIndex
                    )
                );

                blankIndex++;

                return;

            }


            codeArea.appendChild(
                createPythonSpan(
                    part.type,
                    part.value
                )
            );

        }
    );


    editor.appendChild(
        codeArea
    );


    container.appendChild(
        editor
    );

}


// =====================================================
// VALID IDENTIFIER
// =====================================================

function isValidIdentifier(
    value
) {

    if (
        !/^[A-Za-z_][A-Za-z0-9_]*$/.test(
            value
        )
    ) {

        return false;

    }


    if (
        pythonKeywords.has(
            value
        )
    ) {

        return false;

    }


    return true;

}


// =====================================================
// NORMALIZE
// =====================================================

function normalize(
    value
) {

    return String(
        value
    )
        .trim()
        .toLowerCase();

}


// =====================================================
// READ ANSWERS
// =====================================================

function readAnswers() {

    const inputs =
        document.querySelectorAll(
            ".code-blank"
        );


    if (
        inputs.length !== 10
    ) {

        console.error(
            "Expected 10 blanks but found:",
            inputs.length
        );


        alert(
            "There is a problem with this reviewer. Please inform your teacher."
        );


        return null;

    }


    return Array.from(
        inputs
    ).map(
        input =>
            input.value.trim()
    );

}


// =====================================================
// EVALUATE
// =====================================================

function evaluateAnswers(
    answers
) {

    const results = [];

    symbolTable = {};

    let index = 0;


    selectedCode.parts.forEach(
        part => {

            if (
                part.type !==
                "blank"
            ) {

                return;

            }


            const answer =
                answers[index];


            let correct =
                false;


            let feedback =
                part.explanation;


            // ---------------------------------------
            // FIXED ANSWER
            // ---------------------------------------

            if (
                part.kind ===
                "fixed"
            ) {

                correct =
                    normalize(
                        answer
                    ) ===
                    normalize(
                        part.answer
                    );

            }


            // ---------------------------------------
            // DEFINE NAME
            // ---------------------------------------

            else if (
                part.kind ===
                "define"
            ) {

                if (
                    isValidIdentifier(
                        answer
                    )
                ) {

                    symbolTable[
                        part.name
                    ] =
                        answer;


                    correct =
                        true;

                    feedback =
                        "Valid Python identifier.";

                }

                else {

                    correct =
                        false;

                    feedback =
                        "Use a valid Python identifier. Do not use spaces, hyphens, or a number at the beginning.";

                }

            }


            // ---------------------------------------
            // USE PREVIOUS NAME
            // ---------------------------------------

            else if (
                part.kind ===
                "use"
            ) {

                const expected =
                    symbolTable[
                        part.name
                    ];


                correct =
                    expected &&
                    normalize(
                        answer
                    ) ===
                    normalize(
                        expected
                    );


                if (
                    correct
                ) {

                    feedback =
                        "The name matches the one you defined earlier.";

                }

                else if (
                    expected
                ) {

                    feedback =
                        `You defined this name earlier as "${expected}". Use the same name here.`;

                }

            }


            results.push({

                answer:
                    answer,

                correct:
                    correct,

                expected:
                    part.kind === "fixed"
                        ? part.answer
                        : symbolTable[
                            part.name
                        ] || "",

                explanation:
                    feedback

            });


            index++;

        }
    );


    return results;

}


// =====================================================
// SUBMIT
// =====================================================

function submitTest2() {

    const answers =
        readAnswers();


    if (
        answers === null
    ) {

        return;

    }


    if (
        answers.some(
            answer =>
                answer === ""
        )
    ) {

        alert(
            "Please complete all 10 blanks before submitting."
        );

        return;

    }


    if (
        !confirm(
            "Are you sure you want to submit Test II?"
        )
    ) {

        return;

    }


    studentAnswers =
        answers;


    const results =
        evaluateAnswers(
            answers
        );


    let score = 0;


    results.forEach(
        result => {

            if (
                result.correct
            ) {

                score++;

            }

        }
    );


    testSubmitted =
        true;


    saveTest2Result(
        score,
        results
    );


    showScore(
        score
    );


    displayResults(
        results
    );


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

}


// =====================================================
// SCORE
// =====================================================

function showScore(
    score
) {

    const scoreArea =
        document.getElementById(
            "scoreArea"
        );


    if (!scoreArea) {

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
            `${score} / 10`;

    }


    const message =
        document.getElementById(
            "scoreMessage"
        );


    if (!message) {

        return;

    }


    if (score === 10) {

        message.textContent =
            "Excellent! Your code was fully consistent.";

    }

    else if (score >= 8) {

        message.textContent =
            "Very good. Review the items you missed.";

    }

    else if (score >= 5) {

        message.textContent =
            "Good effort. Review the feedback carefully.";

    }

    else {

        message.textContent =
            "Keep practicing and review each correction.";

    }


    scoreArea.scrollIntoView({
        behavior: "smooth"
    });

}


// =====================================================
// DISPLAY RESULTS
// =====================================================

function displayResults(
    results
) {

    const container =
        document.getElementById(
            "codeQuestionsContainer"
        );


    container.innerHTML = "";


    const title =
        document.createElement(
            "h2"
        );


    title.className =
        "program-title";


    title.textContent =
        selectedCode.title;


    container.appendChild(
        title
    );


    const instruction =
        document.createElement(
            "p"
        );


    instruction.className =
        "review-instruction";


    instruction.textContent =
        "Click a red answer to view its feedback.";


    container.appendChild(
        instruction
    );


    const editor =
        document.createElement(
            "div"
        );


    editor.className =
        "python-editor";


    const header =
        document.createElement(
            "div"
        );


    header.className =
        "python-editor-header";


    header.textContent =
        "PYTHON • REVIEW";


    editor.appendChild(
        header
    );


    const codeArea =
        document.createElement(
            "div"
        );


    codeArea.className =
        "python-code";


    let index = 0;


    selectedCode.parts.forEach(
        part => {

            if (
                part.type ===
                "newline"
            ) {

                codeArea.appendChild(
                    document.createElement(
                        "br"
                    )
                );

                return;

            }


            if (
                part.type ===
                "blank"
            ) {

                const result =
                    results[index];


                const answer =
                    document.createElement(
                        "span"
                    );


                answer.className =
                    "submitted-answer";


                answer.textContent =
                    studentAnswers[index];


                if (
                    result.correct
                ) {

                    answer.classList.add(
                        "answer-correct"
                    );

                }

                else {

                    answer.classList.add(
                        "answer-wrong"
                    );


                    answer.addEventListener(
                        "click",
                        () => {

                            showExplanation(
                                result
                            );

                        }
                    );

                }


                codeArea.appendChild(
                    answer
                );


                index++;

                return;

            }


            codeArea.appendChild(
                createPythonSpan(
                    part.type,
                    part.value
                )
            );

        }
    );


    editor.appendChild(
        codeArea
    );


    container.appendChild(
        editor
    );

}


// =====================================================
// FEEDBACK
// =====================================================

function showExplanation(
    result
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


    const close =
        document.createElement(
            "button"
        );


    close.textContent =
        "×";


    close.className =
        "close-explanation";


    close.onclick =
        () => box.remove();


    box.appendChild(
        close
    );


    const title =
        document.createElement(
            "h3"
        );


    title.textContent =
        "Quick Review";


    box.appendChild(
        title
    );


    const yourAnswer =
        document.createElement(
            "p"
        );


    yourAnswer.innerHTML =
        `<strong>Your answer:</strong> ${escapeHTML(result.answer)}`;


    box.appendChild(
        yourAnswer
    );


    if (
        result.expected
    ) {

        const expected =
            document.createElement(
                "p"
            );


        expected.innerHTML =
            `<strong>Expected here:</strong> ${escapeHTML(result.expected)}`;


        box.appendChild(
            expected
        );

    }


    const explanation =
        document.createElement(
            "div"
        );


    explanation.className =
        "explanation-text";


    explanation.textContent =
        result.explanation;


    box.appendChild(
        explanation
    );


    document.body.appendChild(
        box
    );

}


// =====================================================
// SAVE RESULT
// =====================================================

function saveTest2Result(
    score,
    results
) {

    const result = {

        date:
            new Date().toLocaleString(),

        studentName:
            localStorage.getItem(
                "studentName"
            ) || "",

        studentSection:
            localStorage.getItem(
                "studentSection"
            ) || "",

        attemptId:
            localStorage.getItem(
                "attemptId"
            ) || "",

        score:
            score,

        total:
            10,

        answers:
            results

    };


    localStorage.setItem(
        "test2Result",
        JSON.stringify(result)
    );

}


// =====================================================
// ESCAPE HTML
// =====================================================

function escapeHTML(
    value
) {

    return String(value)

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
// CSS
// =====================================================

function addTest2Styles() {

    if (
        document.getElementById(
            "test2Styles"
        )
    ) {

        return;

    }


    const style =
        document.createElement(
            "style"
        );


    style.id =
        "test2Styles";


    style.textContent = `

        .program-title {

            margin:
                10px 0 15px;

            color:
                #1f4078;

            font-size:
                24px;

            font-weight:
                700;

        }


        .review-instruction {

            color:
                #555;

            margin:
                10px 0 15px;

        }


        .python-editor {

            background:
                #1e1e1e;

            border-radius:
                12px;

            overflow:
                hidden;

            margin-top:
                15px;

            box-shadow:
                0 6px 20px
                rgba(0,0,0,0.18);

        }


        .python-editor-header {

            background:
                #252526;

            color:
                #aaaaaa;

            padding:
                8px 16px;

            font-family:
                Consolas,
                "Courier New",
                monospace;

            font-size:
                12px;

            letter-spacing:
                1px;

        }


        .python-code {

            padding:
                22px;

            color:
                #d4d4d4;

            font-family:
                Consolas,
                "Courier New",
                monospace;

            font-size:
                16px;

            line-height:
                1.8;

            white-space:
                pre-wrap;

            overflow-x:
                auto;

        }


        .py-comment {

            color:
                #6a9955;

        }


        .py-code {

            color:
                #d4d4d4;

        }


        .code-blank {

            height:
                29px;

            padding:
                2px 7px;

            margin:
                0 2px;

            vertical-align:
                middle;

            border:
                2px solid
                #888;

            border-radius:
                5px;

            background:
                #fff;

            color:
                #111;

            font-family:
                Consolas,
                "Courier New",
                monospace;

            font-size:
                14px;

            text-align:
                center;

            outline:
                none;

        }


        .identifier-blank {

            width:
                125px;

        }


        .short-blank {

            width:
                48px;

        }


        .code-blank:focus {

            border-color:
                #4da3ff;

            box-shadow:
                0 0 0 2px
                rgba(77,163,255,0.2);

        }


        .submitted-answer {

            display:
                inline-block;

            padding:
                1px 6px;

            margin:
                0 2px;

            border-radius:
                4px;

            font-weight:
                bold;

        }


        .answer-correct {

            background:
                #166534;

            color:
                #dcfce7;

        }


        .answer-wrong {

            background:
                #991b1b;

            color:
                #fee2e2;

            cursor:
                pointer;

        }


        .answer-wrong:hover {

            background:
                #dc2626;

        }


        .code-explanation {

            position:
                fixed;

            right:
                25px;

            bottom:
                25px;

            width:
                360px;

            max-width:
                calc(100vw - 40px);

            background:
                white;

            color:
                #222;

            padding:
                20px;

            border-radius:
                12px;

            box-shadow:
                0 8px 30px
                rgba(0,0,0,0.25);

            z-index:
                9999;

        }


        .close-explanation {

            float:
                right;

            border:
                none;

            background:
                transparent;

            font-size:
                22px;

            cursor:
                pointer;

        }


        .explanation-text {

            margin-top:
                12px;

            padding:
                12px;

            background:
                #eef4ff;

            border-radius:
                8px;

            line-height:
                1.5;

        }


        @media (
            max-width: 600px
        ) {

            .python-code {

                font-size:
                    13px;

                padding:
                    14px;

            }


            .identifier-blank {

                width:
                    100px;

            }


            .short-blank {

                width:
                    42px;

            }

        }

    `;


    document.head.appendChild(
        style
    );

}


// =====================================================
// PAGE LOAD
// =====================================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        addTest2Styles();


        const studentName =
            localStorage.getItem(
                "studentName"
            );


        const studentSection =
            localStorage.getItem(
                "studentSection"
            );


        const nameElement =
            document.getElementById(
                "studentName"
            );


        if (
            nameElement &&
            studentName
        ) {

            nameElement.textContent =
                studentName;

        }


        const sectionElement =
            document.getElementById(
                "studentSection"
            );


        if (
            sectionElement &&
            studentSection
        ) {

            sectionElement.textContent =
                studentSection;

        }


        startTest2();


        const submitButton =
            document.getElementById(
                "submitBtn"
            );


        if (
            submitButton
        ) {

            submitButton.addEventListener(
                "click",
                submitTest2
            );

        }

    }
);
