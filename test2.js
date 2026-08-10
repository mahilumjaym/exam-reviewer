// =====================================================
// TEST II - PYTHON CODE COMPLETION REVIEWER
// 5 CODE SETS
// 1 RANDOM SET
// EXACTLY 10 ANSWER BLANKS PER SET
// =====================================================


// =====================================================
// PYTHON KEYWORDS
// =====================================================

const pythonKeywords = new Set([
    "and", "as", "assert", "break", "class", "continue",
    "def", "del", "elif", "else", "except", "False",
    "finally", "for", "from", "global", "if", "import",
    "in", "is", "lambda", "None", "nonlocal", "not",
    "or", "pass", "raise", "return", "True", "try",
    "while", "with", "yield"
]);


// =====================================================
// PART HELPERS
// =====================================================

function txt(value) {
    return {
        type: "text",
        value: value
    };
}


function note(value) {
    return {
        type: "comment",
        value: value
    };
}


function line() {
    return {
        type: "newline"
    };
}


function blank(answer, explanation, width = "short") {
    return {
        type: "blank",
        kind: "fixed",
        answer: answer,
        explanation: explanation,
        width: width
    };
}


function defineName(name, explanation) {
    return {
        type: "blank",
        kind: "define",
        name: name,
        explanation: explanation,
        width: "name"
    };
}


function reference(name, defaultText) {
    return {
        type: "reference",
        name: name,
        defaultText: defaultText
    };
}


// =====================================================
// CODE BANK
// =====================================================

const codeBank = [

    // =================================================
    // SET 1 - WORKOUT SESSION CHECKER
    // =================================================

    {
        title: "Workout Session Checker",

        parts: [

            note("# Define the function"),
            line(),

            txt("def "),

            defineName(
                "functionName",
                "Enter any valid Python function name."
            ),

            txt("("),

            defineName(
                "parameterName",
                "Enter any valid parameter name."
            ),

            txt("):"),
            line(),


            note("# Check the activity time"),
            line(),

            txt("    if "),

            reference(
                "parameterName",
                "minutes"
            ),

            txt(" "),

            blank(
                ">=",
                "The >= operator checks for a value that is at least the given number."
            ),

            txt(" 30:"),
            line(),


            note("# Give the result"),
            line(),

            txt("        "),

            blank(
                "return",
                "return sends a value back from the function."
            ),

            txt(' "Active"'),
            line(),


            note("# Set the number of sessions"),
            line(),

            txt("sessions = 3"),
            line(),


            note("# Repeat the sessions"),
            line(),

            txt("for session in range("),

            blank(
                "1",
                "The range begins with 1."
            ),

            txt(", 4):"),
            line(),

            txt('    print("Session:", session)'),
            line(),


            note("# Check remaining sessions"),
            line(),

            txt("while sessions "),

            blank(
                ">",
                "The loop continues while sessions is greater than zero."
            ),

            txt(" 0:"),
            line(),

            txt('    print("Training")'),
            line(),

            txt("    sessions = sessions - 1"),
            line(),


            note("# Open the workout file"),
            line(),

            txt('file = open("workout_log.txt", '),

            blank(
                '"a"',
                "The a mode adds new information without removing the existing contents."
            ),

            txt(")"),
            line(),


            note("# Save the workout"),
            line(),

            txt("file."),

            blank(
                "write",
                "write() places text into the file."
            ),

            txt('("Workout completed\\n")'),
            line(),


            note("# Close the file"),
            line(),

            txt("file."),

            blank(
                "close",
                "close() closes the file after saving."
            ),

            txt("()"),
            line(),


            note("# Store the result"),
            line(),

            txt("result = "),

            reference(
                "functionName",
                "check_workout"
            ),

            txt("("),

            blank(
                "45",
                "The function receives a numeric argument."
            ),

            txt(")"),
            line(),


            note("# Display the result"),
            line(),

            txt("print(result)")

        ]
    },


    // =================================================
    // SET 2 - BOOKSTORE ORDER CHECKER
    // =================================================

    {
        title: "Bookstore Order Checker",

        parts: [

            note("# Define the function"),
            line(),

            txt("def "),

            defineName(
                "functionName",
                "Enter any valid Python function name."
            ),

            txt("("),

            defineName(
                "parameterName",
                "Enter any valid parameter name."
            ),

            txt("):"),
            line(),


            note("# Check the order"),
            line(),

            txt("    if "),

            reference(
                "parameterName",
                "quantity"
            ),

            txt(" "),

            blank(
                ">",
                "The > operator checks whether the quantity is greater than zero."
            ),

            txt(" 0:"),
            line(),


            note("# Accept the order"),
            line(),

            txt("        "),

            blank(
                "return",
                "return sends the result back to the function call."
            ),

            txt(' "Order accepted"'),
            line(),


            note("# Set the number of orders"),
            line(),

            txt("orders = 3"),
            line(),


            note("# Repeat the orders"),
            line(),

            txt("for order_number in range("),

            blank(
                "1",
                "The first order is numbered 1."
            ),

            txt(", 4):"),
            line(),

            txt('    print("Order:", order_number)'),
            line(),


            note("# Check remaining orders"),
            line(),

            txt("while orders "),

            blank(
                ">",
                "The loop continues while orders is greater than zero."
            ),

            txt(" 0:"),
            line(),

            txt('    print("Processing")'),
            line(),

            txt("    orders = orders - 1"),
            line(),


            note("# Open the order file"),
            line(),

            txt('file = open("orders.csv", '),

            blank(
                '"a"',
                "The a mode adds a new record to the existing file."
            ),

            txt(")"),
            line(),


            note("# Save the order"),
            line(),

            txt("file."),

            blank(
                "write",
                "write() places the order record into the file."
            ),

            txt('("Order processed\\n")'),
            line(),


            note("# Close the file"),
            line(),

            txt("file."),

            blank(
                "close",
                "close() closes the file after saving."
            ),

            txt("()"),
            line(),


            note("# Call the function"),
            line(),

            txt("message = "),

            reference(
                "functionName",
                "check_order"
            ),

            txt("("),

            blank(
                "2",
                "The function receives the order quantity."
            ),

            txt(")"),
            line(),


            note("# Display the result"),
            line(),

            txt("print(message)")

        ]
    },


    // =================================================
    // SET 3 - PLANT WATERING CHECKER
    // =================================================

    {
        title: "Plant Watering Checker",

        parts: [

            note("# Define the function"),
            line(),

            txt("def "),

            defineName(
                "functionName",
                "Enter any valid Python function name."
            ),

            txt("("),

            defineName(
                "parameterName",
                "Enter any valid parameter name."
            ),

            txt("):"),
            line(),


            note("# Check the water level"),
            line(),

            txt("    if "),

            reference(
                "parameterName",
                "level"
            ),

            txt(" "),

            blank(
                "<",
                "The < operator checks whether the value is below the given level."
            ),

            txt(" 20:"),
            line(),


            note("# Give the warning"),
            line(),

            txt("        "),

            blank(
                "return",
                "return sends the warning back from the function."
            ),

            txt(' "Water needed"'),
            line(),


            note("# Set the number of plants"),
            line(),

            txt("plants = 3"),
            line(),


            note("# Visit each plant"),
            line(),

            txt("for plant in range("),

            blank(
                "1",
                "The first plant is numbered 1."
            ),

            txt(", 4):"),
            line(),

            txt('    print("Plant:", plant)'),
            line(),


            note("# Check remaining plants"),
            line(),

            txt("while plants "),

            blank(
                ">",
                "The loop continues while plants is greater than zero."
            ),

            txt(" 0:"),
            line(),

            txt('    print("Checking")'),
            line(),

            txt("    plants = plants - 1"),
            line(),


            note("# Open the plant file"),
            line(),

            txt('file = open("plant_log.txt", '),

            blank(
                '"a"',
                "The a mode adds the new record to the file."
            ),

            txt(")"),
            line(),


            note("# Save the record"),
            line(),

            txt("file."),

            blank(
                "write",
                "write() saves text into the opened file."
            ),

            txt('("Plant checked\\n")'),
            line(),


            note("# Close the file"),
            line(),

            txt("file."),

            blank(
                "close",
                "close() closes the file after saving."
            ),

            txt("()"),
            line(),


            note("# Call the function"),
            line(),

            txt("status = "),

            reference(
                "functionName",
                "check_water"
            ),

            txt("("),

            blank(
                "15",
                "The function receives the water-level value."
            ),

            txt(")"),
            line(),


            note("# Display the result"),
            line(),

            txt("print(status)")

        ]
    },


    // =================================================
    // SET 4 - TRAVEL BUDGET CHECKER
    // =================================================

    {
        title: "Travel Budget Checker",

        parts: [

            note("# Define the function"),
            line(),

            txt("def "),

            defineName(
                "functionName",
                "Enter any valid Python function name."
            ),

            txt("("),

            defineName(
                "parameterName",
                "Enter any valid parameter name."
            ),

            txt("):"),
            line(),


            note("# Check the budget"),
            line(),

            txt("    if "),

            reference(
                "parameterName",
                "budget"
            ),

            txt(" "),

            blank(
                ">=",
                "The >= operator checks whether the budget reaches the required amount."
            ),

            txt(" 1000:"),
            line(),


            note("# Approve the trip"),
            line(),

            txt("        "),

            blank(
                "return",
                "return sends the decision back from the function."
            ),

            txt(' "Trip approved"'),
            line(),


            note("# Set the travel days"),
            line(),

            txt("days = 3"),
            line(),


            note("# Display each day"),
            line(),

            txt("for day in range("),

            blank(
                "1",
                "The first day is numbered 1."
            ),

            txt(", 4):"),
            line(),

            txt('    print("Day:", day)'),
            line(),


            note("# Check remaining days"),
            line(),

            txt("while days "),

            blank(
                ">",
                "The loop continues while days is greater than zero."
            ),

            txt(" 0:"),
            line(),

            txt('    print("Planning")'),
            line(),

            txt("    days = days - 1"),
            line(),


            note("# Open the travel file"),
            line(),

            txt('file = open("travel_plan.csv", '),

            blank(
                '"a"',
                "The a mode adds another record to the CSV file."
            ),

            txt(")"),
            line(),


            note("# Save the travel plan"),
            line(),

            txt("file."),

            blank(
                "write",
                "write() saves text into the file."
            ),

            txt('("Trip planned\\n")'),
            line(),


            note("# Close the file"),
            line(),

            txt("file."),

            blank(
                "close",
                "close() closes the file after saving."
            ),

            txt("()"),
            line(),


            note("# Call the function"),
            line(),

            txt("decision = "),

            reference(
                "functionName",
                "check_budget"
            ),

            txt("("),

            blank(
                "1500",
                "The function receives the travel budget."
            ),

            txt(")"),
            line(),


            note("# Display the result"),
            line(),

            txt("print(decision)")

        ]
    },


    // =================================================
    // SET 5 - EVENT SIZE CHECKER
    // =================================================

    {
        title: "Event Size Checker",

        parts: [

            note("# Define the function"),
            line(),

            txt("def "),

            defineName(
                "functionName",
                "Enter any valid Python function name."
            ),

            txt("("),

            defineName(
                "parameterName",
                "Enter any valid parameter name."
            ),

            txt("):"),
            line(),


            note("# Check the number of guests"),
            line(),

            txt("    if "),

            reference(
                "parameterName",
                "guests"
            ),

            txt(" "),

            blank(
                ">",
                "The > operator checks whether the number of guests is greater than 50."
            ),

            txt(" 50:"),
            line(),


            note("# Identify the event"),
            line(),

            txt("        "),

            blank(
                "return",
                "return sends the result back from the function."
            ),

            txt(' "Large Event"'),
            line(),


            note("# Set the number of activities"),
            line(),

            txt("activities = 3"),
            line(),


            note("# Repeat the activities"),
            line(),

            txt("for activity in range("),

            blank(
                "1",
                "The first activity is numbered 1."
            ),

            txt(", 4):"),
            line(),

            txt('    print("Activity:", activity)'),
            line(),


            note("# Check remaining activities"),
            line(),

            txt("while activities "),

            blank(
                ">",
                "The loop continues while activities is greater than zero."
            ),

            txt(" 0:"),
            line(),

            txt('    print("Preparing")'),
            line(),

            txt("    activities = activities - 1"),
            line(),


            note("# Open the event file"),
            line(),

            txt('file = open("event_log.csv", '),

            blank(
                '"a"',
                "The a mode adds another record to the CSV file."
            ),

            txt(")"),
            line(),


            note("# Save the event"),
            line(),

            txt("file."),

            blank(
                "write",
                "write() places the event record into the file."
            ),

            txt('("Event prepared\\n")'),
            line(),


            note("# Close the file"),
            line(),

            txt("file."),

            blank(
                "close",
                "close() closes the file after saving."
            ),

            txt("()"),
            line(),


            note("# Call the function"),
            line(),

            txt("result = "),

            reference(
                "functionName",
                "check_event"
            ),

            txt("("),

            blank(
                "65",
                "The function receives the number of guests."
            ),

            txt(")"),
            line(),


            note("# Display the result"),
            line(),

            txt("print(result)")

        ]
    }

];


// =====================================================
// TEST VARIABLES
// =====================================================

let selectedCode = null;
let studentAnswers = [];
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
// VALIDATE ALL CODE SETS
// =====================================================

function validateCodeBank() {

    let valid = true;

    codeBank.forEach(
        (program, index) => {

            const count = countBlanks(program);

            console.log(
                "Set " +
                (index + 1) +
                ": " +
                program.title +
                " = " +
                count +
                " blanks"
            );

            if (count !== 10) {

                console.error(
                    program.title +
                    " has " +
                    count +
                    " blanks. Expected exactly 10."
                );

                valid = false;
            }

        }
    );

    return valid;

}


// =====================================================
// VALID PYTHON NAME
// =====================================================

function isValidPythonName(value) {

    if (
        !/^[A-Za-z_][A-Za-z0-9_]*$/.test(value)
    ) {
        return false;
    }

    if (
        pythonKeywords.has(value)
    ) {
        return false;
    }

    return true;

}


// =====================================================
// NORMALIZE ANSWER
// =====================================================

function normalize(value) {

    return String(value)
        .trim()
        .toLowerCase();

}


// =====================================================
// ESCAPE HTML
// =====================================================

function escapeHTML(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


// =====================================================
// RENDER PYTHON TEXT
// =====================================================

function renderPythonText(value) {

    const fragment =
        document.createDocumentFragment();

    const pattern =
        /(#.*$)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|\b(def|if|elif|else|for|while|in|range|return|open|print|input|int|float|write|close)\b|\b(\d+(?:\.\d+)?)\b/g;

    let lastIndex = 0;
    let match;

    while (
        (match = pattern.exec(value)) !== null
    ) {

        if (match.index > lastIndex) {

            const normal =
                document.createElement("span");

            normal.className =
                "py-normal";

            normal.textContent =
                value.slice(
                    lastIndex,
                    match.index
                );

            fragment.appendChild(normal);

        }

        const token =
            document.createElement("span");

        if (match[1]) {

            token.className =
                "py-comment";

        }
        else if (match[2]) {

            token.className =
                "py-string";

        }
        else if (match[3]) {

            token.className =
                "py-keyword";

        }
        else {

            token.className =
                "py-number";

        }

        token.textContent =
            match[0];

        fragment.appendChild(token);

        lastIndex =
            pattern.lastIndex;

    }

    if (lastIndex < value.length) {

        const remaining =
            document.createElement("span");

        remaining.className =
            "py-normal";

        remaining.textContent =
            value.slice(lastIndex);

        fragment.appendChild(remaining);

    }

    return fragment;

}


// =====================================================
// START TEST II
// =====================================================

function startTest2() {

    console.log(
        "Checking Test II code bank..."
    );

    if (!validateCodeBank()) {

        alert(
            "There is a problem with this reviewer. Please inform your teacher."
        );

        return;

    }

    const randomIndex =
        Math.floor(
            Math.random() * codeBank.length
        );

    selectedCode =
        codeBank[randomIndex];

    studentAnswers =
        new Array(10).fill("");

    testSubmitted = false;

    console.log(
        "Selected set:",
        selectedCode.title
    );

    console.log(
        "Number of blanks:",
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
            "codeQuestionsContainer was not found."
        );

        return;

    }

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

    const codeBox =
        document.createElement("div");

    codeBox.className =
        "code-box";

    let blankIndex = 0;

    selectedCode.parts.forEach(
        part => {

            if (
                part.type === "newline"
            ) {

                codeBox.appendChild(
                    document.createElement("br")
                );

                return;
            }


            if (
                part.type === "text" ||
                part.type === "comment"
            ) {

                codeBox.appendChild(
                    renderPythonText(part.value)
                );

                return;
            }


            if (
                part.type === "blank"
            ) {

                const input =
                    document.createElement("input");

                input.type =
                    "text";

                input.className =
                    "code-blank";

                input.autocomplete =
                    "off";

                input.spellcheck =
                    false;

                input.dataset.blankIndex =
                    blankIndex;


                if (
                    part.width === "name"
                ) {

                    input.classList.add(
                        "name-blank"
                    );

                }
                else {

                    input.classList.add(
                        "short-blank"
                    );

                }


                if (
                    part.kind === "define"
                ) {

                    input.dataset.role =
                        part.name;

                    input.addEventListener(
                        "input",
                        function() {

                            updateReferences(
                                part.name,
                                input.value.trim()
                            );

                        }
                    );

                }


                codeBox.appendChild(input);

                blankIndex++;

                return;
            }


            if (
                part.type === "reference"
            ) {

                const referenceSpan =
                    document.createElement("span");

                referenceSpan.className =
                    "code-reference";

                referenceSpan.dataset.reference =
                    part.name;

                referenceSpan.dataset.default =
                    part.defaultText;

                referenceSpan.textContent =
                    part.defaultText;

                codeBox.appendChild(
                    referenceSpan
                );

            }

        }
    );


    card.appendChild(codeBox);

    container.appendChild(card);

    console.log(
        "Displayed answer blanks:",
        blankIndex
    );

}


// =====================================================
// UPDATE LINKED NAMES
// =====================================================

function updateReferences(name, value) {

    const references =
        document.querySelectorAll(
            '[data-reference="' +
            name +
            '"]'
        );

    references.forEach(
        reference => {

            reference.textContent =
                value || reference.dataset.default;

        }
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
        "Answer boxes found:",
        inputs.length
    );

    if (
        inputs.length !== 10
    ) {

        alert(
            "There is a problem with this reviewer. Please inform your teacher."
        );

        console.error(
            "Expected 10 blanks but found " +
            inputs.length
        );

        return null;

    }

    studentAnswers =
        Array.from(inputs).map(
            input => input.value.trim()
        );

    return studentAnswers;

}


// =====================================================
// EVALUATE ANSWERS
// =====================================================

function evaluateAnswers(answers) {

    const results = [];

    let blankIndex = 0;

    selectedCode.parts.forEach(
        part => {

            if (
                part.type !== "blank"
            ) {
                return;
            }

            const studentAnswer =
                answers[blankIndex];

            let correct = false;
            let correctAnswer = "";
            let explanation =
                part.explanation;


            // Student-created names
            if (
                part.kind === "define"
            ) {

                correct =
                    isValidPythonName(
                        studentAnswer
                    );

                if (correct) {

                    correctAnswer =
                        studentAnswer;

                    explanation =
                        "Valid Python identifier.";

                }
                else {

                    correctAnswer =
                        "Any valid Python identifier";

                    explanation =
                        "Use a valid Python name. It may contain letters, numbers, and underscores, but it cannot begin with a number or be a Python keyword.";

                }

            }


            // Fixed answers
            else {

                correctAnswer =
                    part.answer;

                correct =
                    normalize(studentAnswer) ===
                    normalize(correctAnswer);

            }


            results.push({

                studentAnswer:
                    studentAnswer,

                correctAnswer:
                    correctAnswer,

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

    if (testSubmitted) {
        return;
    }

    const answers =
        readAnswers();

    if (answers === null) {
        return;
    }

    const unanswered =
        answers.filter(
            answer => answer === ""
        ).length;

    if (unanswered > 0) {

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

    const results =
        evaluateAnswers(answers);

    let score = 0;

    results.forEach(
        result => {

            if (result.correct) {
                score++;
            }

        }
    );

    testSubmitted = true;

    saveTest2Result(
        score,
        results
    );


    // Score
    const scoreArea =
        document.getElementById(
            "scoreArea"
        );

    if (scoreArea) {
        scoreArea.style.display =
            "block";
    }


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
                "Excellent! All 10 code completions are correct.";

        }
        else if (score >= 8) {

            scoreMessage.textContent =
                "Very good work. Review the items you missed.";

        }
        else if (score >= 5) {

            scoreMessage.textContent =
                "Good effort. Study the feedback on the incorrect items.";

        }
        else {

            scoreMessage.textContent =
                "Keep practicing. Review each correction carefully.";

        }

    }


    displayResults(results);


    const submitButton =
        document.getElementById(
            "submitBtn"
        );

    if (submitButton) {

        submitButton.disabled =
            true;

        submitButton.textContent =
            "TEST SUBMITTED";

    }


    if (scoreArea) {

        scoreArea.scrollIntoView({
            behavior: "smooth"
        });

    }

}


// =====================================================
// DISPLAY RESULTS
// =====================================================

function displayResults(results) {

    const container =
        document.getElementById(
            "codeQuestionsContainer"
        );

    if (!container) {
        return;
    }

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


    const instruction =
        document.createElement("div");

    instruction.className =
        "review-instruction";

    instruction.textContent =
        "Correct answers are shown in green. Click a red answer to review it.";

    card.appendChild(instruction);


    const codeBox =
        document.createElement("div");

    codeBox.className =
        "code-box submitted-code";

    let blankIndex = 0;


    selectedCode.parts.forEach(
        part => {

            if (
                part.type === "newline"
            ) {

                codeBox.appendChild(
                    document.createElement("br")
                );

                return;
            }


            if (
                part.type === "text" ||
                part.type === "comment"
            ) {

                codeBox.appendChild(
                    renderPythonText(part.value)
                );

                return;
            }


            if (
                part.type === "reference"
            ) {

                const referenceSpan =
                    document.createElement("span");

                referenceSpan.className =
                    "code-reference";

                referenceSpan.textContent =
                    getReferenceValue(part.name);

                codeBox.appendChild(
                    referenceSpan
                );

                return;
            }


            if (
                part.type === "blank"
            ) {

                const result =
                    results[blankIndex];

                const answerSpan =
                    document.createElement("span");

                answerSpan.className =
                    "submitted-answer";

                answerSpan.textContent =
                    result.studentAnswer;


                if (
                    result.correct
                ) {

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
                                result
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


    card.appendChild(codeBox);

    container.appendChild(card);

}

// ---------------------------------------------
// PROCEED TO TEST III BUTTON
// ---------------------------------------------

const nextArea =
    document.createElement(
        "div"
    );

nextArea.className =
    "next-test-area";


const nextButton =
    document.createElement(
        "button"
    );

nextButton.className =
    "next-test-btn";

nextButton.textContent =
    "PROCEED TO TEST III";

nextButton.onclick =
    proceedToTest3;


nextArea.appendChild(
    nextButton
);


container.appendChild(
    nextArea
);
// =====================================================
// GET LINKED VALUE
// =====================================================

function getReferenceValue(name) {

    const input =
        document.querySelector(
            '.code-blank[data-role="' +
            name +
            '"]'
        );

    if (input) {
        return input.value.trim();
    }


    const reference =
        document.querySelector(
            '[data-reference="' +
            name +
            '"]'
        );

    if (reference) {
        return reference.textContent;
    }


    return "";

}


// =====================================================
// FEEDBACK
// =====================================================

function showExplanation(result) {

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


    const close =
        document.createElement("button");

    close.className =
        "close-explanation";

    close.textContent =
        "×";

    close.onclick =
        function() {
            box.remove();
        };

    box.appendChild(close);


    const heading =
        document.createElement("h3");

    heading.textContent =
        "Quick Review";

    box.appendChild(heading);


    const yourAnswer =
        document.createElement("p");

    yourAnswer.innerHTML =
        "<strong>Your answer:</strong> " +
        escapeHTML(
            result.studentAnswer
        );

    box.appendChild(yourAnswer);


    const correctAnswer =
        document.createElement("p");

    correctAnswer.innerHTML =
        "<strong>Expected answer:</strong> " +
        escapeHTML(
            result.correctAnswer
        );

    box.appendChild(correctAnswer);


    const explanation =
        document.createElement("div");

    explanation.className =
        "explanation-text";

    explanation.textContent =
        result.explanation;

    box.appendChild(explanation);


    document.body.appendChild(box);

}


// =====================================================
// SAVE TEST II RESULT
// =====================================================

function saveTest2Result(score, results) {

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

        score:
            score,

        total:
            10,

        program:
            selectedCode.title,

        answers:
            results

    };


    localStorage.setItem(
        "test2Result",
        JSON.stringify(result)
    );

}


// =====================================================
// ADD TEST II STYLES
// =====================================================

function addTest2Styles() {

    if (
        document.getElementById(
            "test2ExtraStyles"
        )
    ) {
        return;
    }


    const style =
        document.createElement("style");

    style.id =
        "test2ExtraStyles";


    style.textContent = `

        .code-question-card h3 {
            margin-bottom: 18px;
        }

        .code-box {
            background: #1e1e1e;
            color: #d4d4d4;
            font-family:
                Consolas,
                "Courier New",
                monospace;
            font-size: 16px;
            line-height: 1.9;
            white-space: pre-wrap;
            overflow-x: auto;
        }

        .py-normal {
            color: #d4d4d4;
        }

        .py-comment {
            color: #6a9955;
        }

        .py-keyword {
            color: #569cd6;
            font-weight: 600;
        }

        .py-string {
            color: #ce9178;
        }

        .py-number {
            color: #b5cea8;
        }

        .code-reference {
            color: #9cdcfe;
            font-weight: 600;
        }

        .code-blank {
            display: inline-block;
            width: 58px;
            height: 30px;
            padding: 2px 7px;
            margin: 0 3px;
            vertical-align: middle;
            border: 2px solid #93c5fd;
            border-radius: 5px;
            background: #334155;
            color: #ffffff;
            font-family:
                Consolas,
                "Courier New",
                monospace;
            font-size: 14px;
            text-align: center;
            outline: none;
        }

        .code-blank.name-blank {
            width: 125px;
        }

        .code-blank:focus {
            border-color: #ffffff;
            background: #475569;
            box-shadow:
                0 0 0 2px
                rgba(147,197,253,0.25);
        }

        .submitted-answer {
            display: inline-block;
            padding: 1px 7px;
            margin: 0 3px;
            border-radius: 4px;
            font-weight: 700;
        }

        .answer-correct {
            background: #166534;
            color: #dcfce7;
        }

        .answer-wrong {
            background: #991b1b;
            color: #fee2e2;
            cursor: pointer;
        }

        .answer-wrong:hover {
            background: #dc2626;
        }

        .code-explanation {
            position: fixed;
            right: 25px;
            bottom: 25px;
            width: 360px;
            max-width:
                calc(100vw - 40px);
            padding: 20px;
            background: #ffffff;
            color: #222222;
            border-radius: 12px;
            box-shadow:
                0 8px 30px
                rgba(0,0,0,0.25);
            z-index: 9999;
        }

        .close-explanation {
            float: right;
            border: none;
            background: transparent;
            font-size: 24px;
            cursor: pointer;
        }

        .explanation-text {
            margin-top: 12px;
            padding: 12px;
            background: #eef4ff;
            border-radius: 8px;
            line-height: 1.5;
        }

        @media (max-width: 650px) {

            .code-box {
                font-size: 13px;
                padding: 16px;
            }

            .code-blank.name-blank {
                width: 95px;
            }

            .code-blank {
                width: 48px;
            }

        }
        .next-test-area {

    text-align:
        center;

    margin-top:
        35px;

    padding:
        20px;

}


.next-test-btn {

    background:
        #1f4b87;

    color:
        white;

    border:
        none;

    padding:
        15px 32px;

    border-radius:
        8px;

    font-size:
        16px;

    font-weight:
        700;

    cursor:
        pointer;

    letter-spacing:
        0.5px;

}


.next-test-btn:hover {

    background:
        #163b6d;

}

    `;


    document.head.appendChild(style);

}

// =====================================================
// PROCEED TO TEST III
// =====================================================

function proceedToTest3() {

    // Save that the student completed Test II
    localStorage.setItem(
        "test2Completed",
        "true"
    );

    // Go to Test III
    window.location.href =
        "test3.html";

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
