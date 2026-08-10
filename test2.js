// =====================================================
// TEST II - PYTHON CODE COMPLETION REVIEWER
// 5 CODE SETS
// 1 RANDOM SET
// EXACTLY 10 BLANKS PER SET
// =====================================================


// =====================================================
// PYTHON KEYWORDS
// =====================================================

const pythonKeywords = new Set([

    "and",
    "as",
    "assert",
    "break",
    "class",
    "continue",
    "def",
    "del",
    "elif",
    "else",
    "except",
    "False",
    "finally",
    "for",
    "from",
    "global",
    "if",
    "import",
    "in",
    "is",
    "lambda",
    "None",
    "nonlocal",
    "not",
    "or",
    "pass",
    "raise",
    "return",
    "True",
    "try",
    "while",
    "with",
    "yield"

]);


// =====================================================
// CODE PART HELPERS
// =====================================================

function text(value) {

    return {
        type: "text",
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


// Fixed answer

function fixedBlank(
    answer,
    explanation
) {

    return {

        type: "blank",
        kind: "fixed",

        answer: answer,

        explanation: explanation

    };

}


// Student creates a name

function defineBlank(
    name,
    explanation
) {

    return {

        type: "blank",
        kind: "define",

        name: name,

        explanation: explanation

    };

}


// Student reuses a name

function useBlank(
    name,
    explanation
) {

    return {

        type: "blank",
        kind: "use",

        name: name,

        explanation: explanation

    };

}


// =====================================================
// CODE SETS
// =====================================================

const codeBank = [

    // =================================================
    // SET 1
    // WORKOUT SESSION CHECKER
    // =================================================

    {

        title: "Workout Session Checker",

        parts: [

            // Blank 1
            comment("# Define the function"),
            newline(),

            text("def "),

            defineBlank(
                "functionName",
                "Choose a valid name for the function."
            ),

            text("(minutes):"),
            newline(),


            // Blank 2
            comment("# Check the activity time"),
            newline(),

            text("    if "),

            useBlank(
                "parameterName",
                "Use the parameter name defined in the function header."
            ),

            text(" "),

            fixedBlank(
                ">=",
                "The >= operator means greater than or equal to."
            ),

            text(" 30:"),
            newline(),


            // Blank 3
            comment("# Give the result"),
            newline(),

            text("        "),

            fixedBlank(
                "return",
                "return sends a value back from the function."
            ),

            text(' "Active"'),
            newline(),


            comment("# Set the number of sessions"),
            newline(),

            text("sessions = 3"),
            newline(),


            // Blank 4
            comment("# Repeat the sessions"),
            newline(),

            text("for session in range("),

            fixedBlank(
                "1",
                "The loop starts with session number 1."
            ),

            text(", 4):"),
            newline(),

            text('    print("Session:", session)'),
            newline(),


            // Blank 5
            comment("# Check remaining sessions"),
            newline(),

            text("while sessions "),

            fixedBlank(
                ">",
                "The loop continues while sessions is greater than zero."
            ),

            text(" 0:"),
            newline(),

            text('    print("Training")'),
            newline(),

            text("    sessions = sessions - 1"),
            newline(),


            // Blank 6
            comment("# Open the workout record"),
            newline(),

            text('file = open("workout_log.txt", '),

            fixedBlank(
                '"a"',
                "The a mode adds new information to the existing file."
            ),

            text(")"),
            newline(),


            // Blank 7
            comment("# Save the workout"),
            newline(),

            text("file."),

            fixedBlank(
                "write",
                "write() places text into the file."
            ),

            text('("Workout completed\\n")'),
            newline(),

            text("file.close()"),
            newline(),


            comment("# Prepare another check"),
            newline(),

            text("message = "),
            
            // Blank 8
            fixedBlank(
                '"Done"',
                "Done is a string value."
            ),

            newline(),


            // Blank 9
            comment("# Call the function"),
            newline(),

            text("result = "),

            useBlank(
                "functionName",
                "Use the same function name defined earlier."
            ),

            text("(45)"),
            newline(),


            // Blank 10
            comment("# Display the result"),
            newline(),

            text("print("),

            useBlank(
                "functionResult",
                "Use the variable that stores the function result."
            ),

            text(")")

        ]

    },


    // =================================================
    // SET 2
    // BOOKSTORE ORDER CHECKER
    // =================================================

    {

        title: "Bookstore Order Checker",

        parts: [

            // Blank 1
            comment("# Define the function"),
            newline(),

            text("def "),

            defineBlank(
                "functionName",
                "Choose a valid function name."
            ),

            text("(quantity):"),
            newline(),


            // Blank 2
            comment("# Check the order"),
            newline(),

            text("    if "),

            useBlank(
                "parameterName",
                "Use the parameter name defined above."
            ),

            text(" "),

            fixedBlank(
                ">",
                "The > operator means greater than."
            ),

            text(" 0:"),
            newline(),


            // Blank 3
            comment("# Return the result"),
            newline(),

            text("        "),

            fixedBlank(
                "return",
                "return sends a result back from the function."
            ),

            text(' "Order accepted"'),
            newline(),


            comment("# Set the number of orders"),
            newline(),

            text("orders = 3"),
            newline(),


            // Blank 4
            comment("# Repeat the orders"),
            newline(),

            text("for order_number in range("),

            fixedBlank(
                "1",
                "The first order is numbered 1."
            ),

            text(", 4):"),
            newline(),

            text('    print("Order:", order_number)'),
            newline(),


            // Blank 5
            comment("# Check remaining orders"),
            newline(),

            text("while orders "),

            fixedBlank(
                ">",
                "The loop continues while orders is greater than zero."
            ),

            text(" 0:"),
            newline(),

            text('    print("Processing")'),
            newline(),

            text("    orders = orders - 1"),
            newline(),


            // Blank 6
            comment("# Open the order record"),
            newline(),

            text('file = open("orders.csv", '),

            fixedBlank(
                '"a"',
                "The a mode adds a new record without removing old records."
            ),

            text(")"),
            newline(),


            // Blank 7
            comment("# Save the order"),
            newline(),

            text("file."),

            fixedBlank(
                "write",
                "write() saves text into the file."
            ),

            text('("Order processed\\n")'),
            newline(),

            text("file.close()"),
            newline(),


            comment("# Store a message"),
            newline(),

            text("status = "),

            // Blank 8
            fixedBlank(
                '"Ready"',
                "Ready is a string value."
            ),

            newline(),


            // Blank 9
            comment("# Call the function"),
            newline(),

            text("message = "),

            useBlank(
                "functionName",
                "Use the same function name defined earlier."
            ),

            text("(2)"),
            newline(),


            // Blank 10
            comment("# Display the result"),
            newline(),

            text("print("),

            useBlank(
                "functionResult",
                "Use the variable that stores the function result."
            ),

            text(")")

        ]

    },


    // =================================================
    // SET 3
    // PLANT WATERING CHECKER
    // =================================================

    {

        title: "Plant Watering Checker",

        parts: [

            // Blank 1
            comment("# Define the function"),
            newline(),

            text("def "),

            defineBlank(
                "functionName",
                "Choose a valid function name."
            ),

            text("(level):"),
            newline(),


            // Blank 2
            comment("# Check the water level"),
            newline(),

            text("    if "),

            useBlank(
                "parameterName",
                "Use the parameter name defined above."
            ),

            text(" "),

            fixedBlank(
                "<",
                "The < operator means less than."
            ),

            text(" 20:"),
            newline(),


            // Blank 3
            comment("# Return the warning"),
            newline(),

            text("        "),

            fixedBlank(
                "return",
                "return sends a value back from the function."
            ),

            text(' "Water needed"'),
            newline(),


            comment("# Set the number of plants"),
            newline(),

            text("plants = 3"),
            newline(),


            // Blank 4
            comment("# Visit each plant"),
            newline(),

            text("for plant in range("),

            fixedBlank(
                "1",
                "The first plant is numbered 1."
            ),

            text(", 4):"),
            newline(),

            text('    print("Plant:", plant)'),
            newline(),


            // Blank 5
            comment("# Check remaining plants"),
            newline(),

            text("while plants "),

            fixedBlank(
                ">",
                "The loop continues while plants is greater than zero."
            ),

            text(" 0:"),
            newline(),

            text('    print("Checking")'),
            newline(),

            text("    plants = plants - 1"),
            newline(),


            // Blank 6
            comment("# Open the plant record"),
            newline(),

            text('file = open("plant_log.txt", '),

            fixedBlank(
                '"a"',
                "The a mode adds a new record to the file."
            ),

            text(")"),
            newline(),


            // Blank 7
            comment("# Save the record"),
            newline(),

            text("file."),

            fixedBlank(
                "write",
                "write() places the record into the file."
            ),

            text('("Plant checked\\n")'),
            newline(),

            text("file.close()"),
            newline(),


            comment("# Store the status"),
            newline(),

            text("status = "),

            // Blank 8
            fixedBlank(
                '"Done"',
                "Done is a string value."
            ),

            newline(),


            // Blank 9
            comment("# Call the function"),
            newline(),

            text("result = "),

            useBlank(
                "functionName",
                "Use the function name defined earlier."
            ),

            text("(15)"),
            newline(),


            // Blank 10
            comment("# Display the result"),
            newline(),

            text("print("),

            useBlank(
                "functionResult",
                "Use the variable that stores the function result."
            ),

            text(")")

        ]

    },


    // =================================================
    // SET 4
    // TRAVEL BUDGET CHECKER
    // =================================================

    {

        title: "Travel Budget Checker",

        parts: [

            // Blank 1
            comment("# Define the function"),
            newline(),

            text("def "),

            defineBlank(
                "functionName",
                "Choose a valid function name."
            ),

            text("(budget):"),
            newline(),


            // Blank 2
            comment("# Check the budget"),
            newline(),

            text("    if "),

            useBlank(
                "parameterName",
                "Use the parameter name defined above."
            ),

            text(" "),

            fixedBlank(
                ">=",
                "The >= operator means greater than or equal to."
            ),

            text(" 1000:"),
            newline(),


            // Blank 3
            comment("# Return the decision"),
            newline(),

            text("        "),

            fixedBlank(
                "return",
                "return sends a result back from the function."
            ),

            text(' "Trip approved"'),
            newline(),


            comment("# Set the travel days"),
            newline(),

            text("days = 3"),
            newline(),


            // Blank 4
            comment("# Display each day"),
            newline(),

            text("for day in range("),

            fixedBlank(
                "1",
                "The first day is numbered 1."
            ),

            text(", 4):"),
            newline(),

            text('    print("Day:", day)'),
            newline(),


            // Blank 5
            comment("# Check remaining days"),
            newline(),

            text("while days "),

            fixedBlank(
                ">",
                "The loop continues while days is greater than zero."
            ),

            text(" 0:"),
            newline(),

            text('    print("Planning")'),
            newline(),

            text("    days = days - 1"),
            newline(),


            // Blank 6
            comment("# Open the travel record"),
            newline(),

            text('file = open("travel_plan.csv", '),

            fixedBlank(
                '"a"',
                "The a mode adds new information to the CSV file."
            ),

            text(")"),
            newline(),


            // Blank 7
            comment("# Save the travel plan"),
            newline(),

            text("file."),

            fixedBlank(
                "write",
                "write() places text into the file."
            ),

            text('("Trip planned\\n")'),
            newline(),

            text("file.close()"),
            newline(),


            comment("# Store a note"),
            newline(),

            text("note = "),

            // Blank 8
            fixedBlank(
                '"Ready"',
                "Ready is a string value."
            ),

            newline(),


            // Blank 9
            comment("# Call the function"),
            newline(),

            text("decision = "),

            useBlank(
                "functionName",
                "Use the function name defined earlier."
            ),

            text("(1500)"),
            newline(),


            // Blank 10
            comment("# Display the result"),
            newline(),

            text("print("),

            useBlank(
                "functionResult",
                "Use the variable that stores the function result."
            ),

            text(")")

        ]

    },


    // =================================================
    // SET 5
    // EVENT SIZE CHECKER
    // =================================================

    {

        title: "Event Size Checker",

        parts: [

            // Blank 1
            comment("# Define the function"),
            newline(),

            text("def "),

            defineBlank(
                "functionName",
                "Choose a valid function name."
            ),

            text("(guests):"),
            newline(),


            // Blank 2
            comment("# Check the number of guests"),
            newline(),

            text("    if "),

            useBlank(
                "parameterName",
                "Use the parameter name defined above."
            ),

            text(" "),

            fixedBlank(
                ">",
                "The > operator means greater than."
            ),

            text(" 50:"),
            newline(),


            // Blank 3
            comment("# Return the result"),
            newline(),

            text("        "),

            fixedBlank(
                "return",
                "return sends the result back from the function."
            ),

            text(' "Large Event"'),
            newline(),


            comment("# Set the number of activities"),
            newline(),

            text("activities = 3"),
            newline(),


            // Blank 4
            comment("# Repeat the activities"),
            newline(),

            text("for activity in range("),

            fixedBlank(
                "1",
                "The first activity is numbered 1."
            ),

            text(", 4):"),
            newline(),

            text('    print("Activity:", activity)'),
            newline(),


            // Blank 5
            comment("# Check remaining activities"),
            newline(),

            text("while activities "),

            fixedBlank(
                ">",
                "The loop continues while activities is greater than zero."
            ),

            text(" 0:"),
            newline(),

            text('    print("Preparing")'),
            newline(),

            text("    activities = activities - 1"),
            newline(),


            // Blank 6
            comment("# Open the event record"),
            newline(),

            text('file = open("event_log.csv", '),

            fixedBlank(
                '"a"',
                "The a mode adds another record to the CSV file."
            ),

            text(")"),
            newline(),


            // Blank 7
            comment("# Save the event"),
            newline(),

            text("file."),

            fixedBlank(
                "write",
                "write() saves text into the file."
            ),

            text('("Event prepared\\n")'),
            newline(),

            text("file.close()"),
            newline(),


            comment("# Store a message"),
            newline(),

            text("message = "),

            // Blank 8
            fixedBlank(
                '"Ready"',
                "Ready is a string value."
            ),

            newline(),


            // Blank 9
            comment("# Call the function"),
            newline(),

            text("result = "),

            useBlank(
                "functionName",
                "Use the function name defined earlier."
            ),

            text("(65)"),
            newline(),


            // Blank 10
            comment("# Display the result"),
            newline(),

            text("print("),

            useBlank(
                "functionResult",
                "Use the variable that stores the function result."
            ),

            text(")")

        ]

    }

];


// =====================================================
// VARIABLES
// =====================================================

let selectedCode = null;

let studentAnswers = [];

let testSubmitted = false;

let symbolTable = {};


// =====================================================
// COUNT BLANKS
// =====================================================

function countBlanks(program) {

    return program.parts.filter(
        part => part.type === "blank"
    ).length;

}


// =====================================================
// VALIDATE ALL SETS
// =====================================================

function validateCodeBank() {

    let valid = true;


    codeBank.forEach(
        (program, index) => {

            const count =
                countBlanks(program);


            console.log(
                `Set ${index + 1}: ${program.title} = ${count} blanks`
            );


            if (
                count !== 10
            ) {

                console.error(
                    `ERROR: ${program.title} has ${count} blanks.`
                );


                valid = false;

            }

        }
    );


    return valid;

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
// START TEST II
// =====================================================

function startTest2() {

    console.log(
        "Checking Test II code bank..."
    );


    if (
        !validateCodeBank()
    ) {

        alert(
            "There is a problem with this reviewer. Please inform your teacher."
        );


        return;

    }


    const randomIndex =
        Math.floor(
            Math.random() *
            codeBank.length
        );


    selectedCode =
        codeBank[randomIndex];


    studentAnswers = [];

    symbolTable = {};

    testSubmitted = false;


    console.log(
        "Selected:",
        selectedCode.title
    );


    console.log(
        "Blanks:",
        countBlanks(selectedCode)
    );


    displayProgram();

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


    // ---------------------------------------------
    // PROGRAM TITLE
    // ---------------------------------------------

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


    // ---------------------------------------------
    // IDE
    // ---------------------------------------------

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

            // Line break

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


            // Blank

            if (
                part.type ===
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


                input.dataset.index =
                    blankIndex;


                input.autocomplete =
                    "off";


                if (
                    part.kind ===
                    "define" ||
                    part.kind ===
                    "use"
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


                codeArea.appendChild(
                    input
                );


                blankIndex++;


                return;

            }


            // Comment

            const span =
                document.createElement(
                    "span"
                );


            if (
                part.type ===
                "comment"
            ) {

                span.className =
                    "py-comment";

            }

            else {

                span.className =
                    "py-code";

            }


            span.textContent =
                part.value;


            codeArea.appendChild(
                span
            );

        }
    );


    editor.appendChild(
        codeArea
    );


    container.appendChild(
        editor
    );


    console.log(
        "Displayed blanks:",
        blankIndex
    );

}


// =====================================================
// READ ANSWERS
// =====================================================

function readAnswers() {

    const inputs =
        document.querySelectorAll(
            ".code-blank"
        );


    console.log(
        "Input boxes found:",
        inputs.length
    );


    if (
        inputs.length !== 10
    ) {

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
// EVALUATE ANSWERS
// =====================================================

function evaluateAnswers(
    answers
) {

    const results = [];

    symbolTable = {};


    let blankIndex = 0;


    selectedCode.parts.forEach(
        part => {

            if (
                part.type !==
                "blank"
            ) {

                return;

            }


            const studentAnswer =
                answers[
                    blankIndex
                ];


            let correct =
                false;


            let expected =
                "";


            let explanation =
                part.explanation;


            // -----------------------------------------
            // FIXED ANSWER
            // -----------------------------------------

            if (
                part.kind ===
                "fixed"
            ) {

                expected =
                    part.answer;


                correct =
                    normalize(
                        studentAnswer
                    ) ===
                    normalize(
                        expected
                    );

            }


            // -----------------------------------------
            // DEFINE NAME
            // -----------------------------------------

            else if (
                part.kind ===
                "define"
            ) {

                if (
                    isValidIdentifier(
                        studentAnswer
                    )
                ) {

                    symbolTable[
                        part.name
                    ] =
                        studentAnswer;


                    expected =
                        studentAnswer;


                    correct =
                        true;


                    explanation =
                        "Valid Python identifier.";

                }

                else {

                    correct =
                        false;


                    explanation =
                        "Use a valid Python identifier. It may contain letters, numbers, and underscores, but it cannot begin with a number or be a Python keyword.";

                }

            }


            // -----------------------------------------
            // USE NAME
            // -----------------------------------------

            else if (
                part.kind ===
                "use"
            ) {

                expected =
                    symbolTable[
                        part.name
                    ] || "";


                correct =
                    expected !== "" &&
                    normalize(
                        studentAnswer
                    ) ===
                    normalize(
                        expected
                    );


                if (
                    correct
                ) {

                    explanation =
                        "The name matches the one you defined earlier.";

                }

                else if (
                    expected !== ""
                ) {

                    explanation =
                        `You defined this name earlier as "${expected}". Use that same name here.`;

                }

            }


            results.push({

                answer:
                    studentAnswer,

                expected:
                    expected,

                correct:
                    correct,

                explanation:
                    explanation

            });


            blankIndex++;

        }
    );


    return results;

}


// =====================================================
// SUBMIT TEST II
// =====================================================

function submitTest2() {

    const answers =
        readAnswers();


    if (
        answers === null
    ) {

        return;

    }


    const unanswered =
        answers.filter(
            answer =>
                answer === ""
        );


    if (
        unanswered.length > 0
    ) {

        alert(
            "Please complete all 10 blanks before submitting."
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
        JSON.stringify(
            result
        )
    );

}


// =====================================================
// SHOW SCORE
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


    if (
        score === 10
    ) {

        message.textContent =
            "Excellent! Perfect code completion.";

    }

    else if (
        score >= 8
    ) {

        message.textContent =
            "Very good. Review the items you missed.";

    }

    else if (
        score >= 5
    ) {

        message.textContent =
            "Good effort. Review the feedback carefully.";

    }

    else {

        message.textContent =
            "Keep practicing. Review each correction.";

    }


    scoreArea.scrollIntoView({
        behavior:
            "smooth"
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


    // ---------------------------------------------
    // TITLE
    // ---------------------------------------------

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


    // ---------------------------------------------
    // INSTRUCTION
    // ---------------------------------------------

    const instruction =
        document.createElement(
            "p"
        );


    instruction.className =
        "review-instruction";


    instruction.textContent =
        "Correct answers are shown in green. Click a red answer to review it.";


    container.appendChild(
        instruction
    );


    // ---------------------------------------------
    // IDE
    // ---------------------------------------------

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

                const result =
                    results[
                        blankIndex
                    ];


                const answer =
                    document.createElement(
                        "span"
                    );


                answer.className =
                    "submitted-answer";


                answer.textContent =
                    studentAnswers[
                        blankIndex
                    ];


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


                    answer.title =
                        "Click for feedback";


                    answer.addEventListener(
                        "click",
                        function() {

                            showExplanation(
                                result
                            );

                        }
                    );

                }


                codeArea.appendChild(
                    answer
                );


                blankIndex++;


                return;

            }


            const span =
                document.createElement(
                    "span"
                );


            span.className =
                part.type ===
                "comment"
                    ? "py-comment"
                    : "py-code";


            span.textContent =
                part.value;


            codeArea.appendChild(
                span
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
// FEEDBACK POPUP
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


    close.className =
        "close-explanation";


    close.textContent =
        "×";


    close.onclick =
        function() {

            box.remove();

        };


    box.appendChild(
        close
    );


    const heading =
        document.createElement(
            "h3"
        );


    heading.textContent =
        "Quick Review";


    box.appendChild(
        heading
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


    const correctAnswer =
        document.createElement(
            "p"
        );


    correctAnswer.innerHTML =
        `<strong>Correct answer:</strong> ${escapeHTML(result.expected)}`;


    box.appendChild(
        correctAnswer
    );


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
// ESCAPE HTML
// =====================================================

function escapeHTML(
    value
) {

    return String(
        value
    )

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
// TEST II CSS
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
                #183b70;

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
                #ffffff;

            color:
                #111111;

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


        // Display student information.

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


        // Start Test II.

        startTest2();


        // Connect the submit button.

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
