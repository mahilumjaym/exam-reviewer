// =====================================================
// TEST II - PYTHON CODE COMPLETION REVIEWER
// 5 PROGRAMS
// 1 RANDOM PROGRAM
// EXACTLY 10 BLANKS
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

function code(text) {

    return {
        type: "code",
        value: text
    };

}


function keyword(text) {

    return {
        type: "keyword",
        value: text
    };

}


function string(text) {

    return {
        type: "string",
        value: text
    };

}


function number(text) {

    return {
        type: "number",
        value: text
    };

}


function comment(text) {

    return {
        type: "comment",
        value: text
    };

}


function newline() {

    return {
        type: "newline"
    };

}


// Fixed Python answer

function fixed(
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

function defineName(
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

function useName(
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
// QUESTION BANK
// =====================================================

const codeBank = [

    // =================================================
    // PROGRAM 1
    // FITNESS LOG
    // =================================================

    {

        parts: [

            comment(
                "# Define the function"
            ),

            newline(),

            fixed(
                "def",
                "def begins a function definition."
            ),

            code(" "),

            defineName(
                "functionName",
                "Choose a valid name for the function."
            ),

            code("("),

            defineName(
                "parameterName",
                "Choose a valid parameter name."
            ),

            code("):"),

            newline(),


            comment(
                "# Check the minutes"
            ),

            newline(),

            code("    "),

            keyword("if"),

            code(" "),

            useName(
                "parameterName",
                "Use the parameter name you defined in the function header."
            ),

            code(" "),

            fixed(
                ">=",
                ">= means greater than or equal to."
            ),

            code(" 30:"),

            newline(),


            comment(
                "# Return the message"
            ),

            newline(),

            code("        "),

            fixed(
                "return",
                "return sends a value back from the function."
            ),

            code(' "Active"'),

            newline(),


            comment(
                "# Count the sessions"
            ),

            newline(),

            code("sessions = 3"),

            newline(),


            comment(
                "# Repeat the sessions"
            ),

            newline(),

            keyword("for"),

            code(" session in "),

            fixed(
                "range",
                "range() creates a sequence of numbers."
            ),

            code("(1, 4):"),

            newline(),

            code('    print("Session:", session)'),

            newline(),


            comment(
                "# Check remaining sessions"
            ),

            newline(),

            keyword("while"),

            code(" sessions > 0:"),

            newline(),

            code('    print("Training")'),

            newline(),

            code("    sessions = sessions - 1"),

            newline(),


            comment(
                "# Save the workout"
            ),

            newline(),

            code(
                'file = open("fitness_log.txt", "a")'
            ),

            newline(),

            code(
                'file.write("Workout completed\\n")'
            ),

            newline(),

            code("file.close()"),

            newline(),


            comment(
                "# Call the function"
            ),

            newline(),

            code("result = "),

            useName(
                "functionName",
                "Use the same function name you created above."
            ),

            code("(45)"),

            newline(),

            code('print("Result:", result)')

        ]

    },


    // =================================================
    // PROGRAM 2
    // BOOKSTORE ORDER
    // =================================================

    {

        parts: [

            comment(
                "# Define the function"
            ),

            newline(),

            fixed(
                "def",
                "def begins a function definition."
            ),

            code(" "),

            defineName(
                "functionName",
                "Choose a valid name for the function."
            ),

            code("("),

            defineName(
                "parameterName",
                "Choose a valid parameter name."
            ),

            code("):"),

            newline(),


            comment(
                "# Check the order"
            ),

            newline(),

            code("    "),

            keyword("if"),

            code(" "),

            useName(
                "parameterName",
                "Use the parameter name you defined earlier."
            ),

            code(" "),

            fixed(
                ">",
                "> means greater than."
            ),

            code(" 0:"),

            newline(),


            comment(
                "# Return the result"
            ),

            newline(),

            code("        "),

            fixed(
                "return",
                "return sends a value back from the function."
            ),

            code(' "Order accepted"'),

            newline(),


            comment(
                "# Count the orders"
            ),

            newline(),

            code("orders = 3"),

            newline(),


            comment(
                "# Repeat each order"
            ),

            newline(),

            keyword("for"),

            code(" order_number in "),

            fixed(
                "range",
                "range() creates a sequence used by the loop."
            ),

            code("(1, 4):"),

            newline(),

            code(
                '    print("Order:", order_number)'
            ),

            newline(),


            comment(
                "# Check remaining orders"
            ),

            newline(),

            keyword("while"),

            code(" orders > 0:"),

            newline(),

            code('    print("Processing")'),

            newline(),

            code("    orders = orders - 1"),

            newline(),


            comment(
                "# Save the order"
            ),

            newline(),

            code(
                'file = open("orders.txt", "a")'
            ),

            newline(),

            code(
                'file.write("Order processed\\n")'
            ),

            newline(),

            code("file.close()"),

            newline(),


            comment(
                "# Call the function"
            ),

            newline(),

            code("message = "),

            useName(
                "functionName",
                "Use the same function name you created above."
            ),

            code("(2)"),

            newline(),

            code("print(message)")

        ]

    },


    // =================================================
    // PROGRAM 3
    // PLANT CARE
    // =================================================

    {

        parts: [

            comment(
                "# Define the function"
            ),

            newline(),

            fixed(
                "def",
                "def begins a function definition."
            ),

            code(" "),

            defineName(
                "functionName",
                "Choose a valid function name."
            ),

            code("("),

            defineName(
                "parameterName",
                "Choose a valid parameter name."
            ),

            code("):"),

            newline(),


            comment(
                "# Check the water level"
            ),

            newline(),

            code("    "),

            keyword("if"),

            code(" "),

            useName(
                "parameterName",
                "Use the parameter name defined above."
            ),

            code(" "),

            fixed(
                "<",
                "< means less than."
            ),

            code(" 20:"),

            newline(),


            comment(
                "# Return the message"
            ),

            newline(),

            code("        "),

            fixed(
                "return",
                "return sends a value back from the function."
            ),

            code(' "Water needed"'),

            newline(),


            comment(
                "# Count the plants"
            ),

            newline(),

            code("plants = 3"),

            newline(),


            comment(
                "# Visit each plant"
            ),

            newline(),

            keyword("for"),

            code(" plant in "),

            fixed(
                "range",
                "range() creates a sequence of numbers."
            ),

            code("(1, 4):"),

            newline(),

            code(
                '    print("Plant:", plant)'
            ),

            newline(),


            comment(
                "# Check remaining plants"
            ),

            newline(),

            keyword("while"),

            code(" plants > 0:"),

            newline(),

            code('    print("Checking")'),

            newline(),

            code("    plants = plants - 1"),

            newline(),


            comment(
                "# Save the plant record"
            ),

            newline(),

            code(
                'file = open("plant_log.txt", "a")'
            ),

            newline(),

            code(
                'file.write("Plant checked\\n")'
            ),

            newline(),

            code("file.close()"),

            newline(),


            comment(
                "# Call the function"
            ),

            newline(),

            code("status = "),

            useName(
                "functionName",
                "Use the function name you created above."
            ),

            code("(15)"),

            newline(),

            code('print("Status:", status)')

        ]

    },


    // =================================================
    // PROGRAM 4
    // TRAVEL BUDGET
    // =================================================

    {

        parts: [

            comment(
                "# Define the function"
            ),

            newline(),

            fixed(
                "def",
                "def begins a function definition."
            ),

            code(" "),

            defineName(
                "functionName",
                "Choose a valid name for the function."
            ),

            code("("),

            defineName(
                "parameterName",
                "Choose a valid parameter name."
            ),

            code("):"),

            newline(),


            comment(
                "# Check the budget"
            ),

            newline(),

            code("    "),

            keyword("if"),

            code(" "),

            useName(
                "parameterName",
                "Use the parameter name defined above."
            ),

            code(" "),

            fixed(
                ">=",
                ">= means greater than or equal to."
            ),

            code(" 1000:"),

            newline(),


            comment(
                "# Return the result"
            ),

            newline(),

            code("        "),

            fixed(
                "return",
                "return sends a result back from the function."
            ),

            code(' "Trip approved"'),

            newline(),


            comment(
                "# Count the travel days"
            ),

            newline(),

            code("days = 3"),

            newline(),


            comment(
                "# Display each day"
            ),

            newline(),

            keyword("for"),

            code(" day in "),

            fixed(
                "range",
                "range() creates a sequence for the loop."
            ),

            code("(1, 4):"),

            newline(),

            code('    print("Day:", day)'),

            newline(),


            comment(
                "# Check remaining days"
            ),

            newline(),

            keyword("while"),

            code(" days > 0:"),

            newline(),

            code('    print("Planning")'),

            newline(),

            code("    days = days - 1"),

            newline(),


            comment(
                "# Save the travel plan"
            ),

            newline(),

            code(
                'file = open("travel_plan.txt", "a")'
            ),

            newline(),

            code(
                'file.write("Trip planned\\n")'
            ),

            newline(),

            code("file.close()"),

            newline(),


            comment(
                "# Call the function"
            ),

            newline(),

            code("decision = "),

            useName(
                "functionName",
                "Use the same function name you defined above."
            ),

            code("(1500)"),

            newline(),

            code('print("Decision:", decision)')

        ]

    },


    // =================================================
    // PROGRAM 5
    // SCHOOL EVENT
    // =================================================

    {

        parts: [

            comment(
                "# Define the function"
            ),

            newline(),

            fixed(
                "def",
                "def begins a function definition."
            ),

            code(" "),

            defineName(
                "functionName",
                "Choose a valid function name."
            ),

            code("("),

            defineName(
                "parameterName",
                "Choose a valid parameter name."
            ),

            code("):"),

            newline(),


            comment(
                "# Check the number of guests"
            ),

            newline(),

            code("    "),

            keyword("if"),

            code(" "),

            useName(
                "parameterName",
                "Use the parameter name defined in the function header."
            ),

            code(" "),

            fixed(
                ">",
                "> means greater than."
            ),

            code(" 50:"),

            newline(),


            comment(
                "# Return the result"
            ),

            newline(),

            code("        "),

            fixed(
                "return",
                "return sends a value back from the function."
            ),

            code(' "Large Event"'),

            newline(),


            comment(
                "# Count the activities"
            ),

            newline(),

            code("activities = 3"),

            newline(),


            comment(
                "# Repeat the activities"
            ),

            newline(),

            keyword("for"),

            code(" activity in "),

            fixed(
                "range",
                "range() creates a sequence of numbers."
            ),

            code("(1, 4):"),

            newline(),

            code(
                '    print("Activity:", activity)'
            ),

            newline(),


            comment(
                "# Check remaining activities"
            ),

            newline(),

            keyword("while"),

            code(" activities > 0:"),

            newline(),

            code('    print("Preparing")'),

            newline(),

            code("    activities = activities - 1"),

            newline(),


            comment(
                "# Save the event record"
            ),

            newline(),

            code(
                'file = open("event_log.txt", "a")'
            ),

            newline(),

            code(
                'file.write("Event prepared\\n")'
            ),

            newline(),

            code("file.close()"),

            newline(),


            comment(
                "# Call the function"
            ),

            newline(),

            code("result = "),

            useName(
                "functionName",
                "Use the same function name you created above."
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
                Math.random() *
                (i + 1)
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

function countBlanks(program) {

    return program.parts.filter(
        part =>
            part.type === "blank"
    ).length;

}


// =====================================================
// CHECK ALL PROGRAMS
// =====================================================

function validatePrograms() {

    let valid = true;


    codeBank.forEach(
        (
            program,
            index
        ) => {

            const count =
                countBlanks(
                    program
                );


            console.log(
                "Program " +
                (index + 1) +
                " blanks:",
                count
            );


            if (
                count !== 10
            ) {

                console.error(
                    "Program " +
                    (index + 1) +
                    " must contain exactly 10 blanks."
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

    validatePrograms();


    selectedCode =
        shuffle(
            [...codeBank]
        )[0];


    studentAnswers = [];

    symbolTable = {};

    testSubmitted = false;


    console.log(
        "Selected Test II program."
    );


    console.log(
        "Number of blanks:",
        countBlanks(
            selectedCode
        )
    );


    displayQuestions();

}


// =====================================================
// VALID IDENTIFIER
// =====================================================

function isValidIdentifier(
    value
) {

    const pattern =
        /^[A-Za-z_][A-Za-z0-9_]*$/;


    if (
        !pattern.test(
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
// CREATE PYTHON SPAN
// =====================================================

function createPythonSpan(
    type,
    value
) {

    const span =
        document.createElement(
            "span"
        );


    if (
        type === "keyword"
    ) {

        span.className =
            "py-keyword";

    }

    else if (
        type === "string"
    ) {

        span.className =
            "py-string";

    }

    else if (
        type === "number"
    ) {

        span.className =
            "py-number";

    }

    else if (
        type === "comment"
    ) {

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
// CREATE BLANK
// =====================================================

function createBlank(
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
            "syntax-blank"
        );

    }


    return input;

}


// =====================================================
// DISPLAY PROGRAM
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

                const input =
                    createBlank(
                        part,
                        blankIndex
                    );


                codeArea.appendChild(
                    input
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

        alert(
            "There is a problem with this reviewer. Please inform your teacher."
        );


        console.error(
            "Expected 10 blanks. Found:",
            inputs.length
        );


        return null;

    }


    const answers = [];


    inputs.forEach(
        input => {

            answers.push(
                input.value.trim()
            );

        }
    );


    return answers;

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


            let feedback =
                part.explanation;


            // -----------------------------------------
            // FIXED ANSWER
            // -----------------------------------------

            if (
                part.kind ===
                "fixed"
            ) {

                correct =
                    normalize(
                        studentAnswer
                    ) ===
                    normalize(
                        part.answer
                    );


                if (!correct) {

                    feedback =
                        part.explanation;

                }

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


                    correct =
                        true;


                    feedback =
                        "This is a valid Python identifier.";

                }

                else {

                    correct =
                        false;


                    feedback =
                        "Use a valid Python identifier: no spaces, no hyphens, and do not begin with a number.";

                }

            }


            // -----------------------------------------
            // USE NAME
            // -----------------------------------------

            else if (
                part.kind ===
                "use"
            ) {

                const expected =
                    symbolTable[
                        part.name
                    ];


                if (
                    expected &&
                    normalize(
                        studentAnswer
                    ) ===
                    normalize(
                        expected
                    )
                ) {

                    correct =
                        true;


                    feedback =
                        "The name matches the identifier you defined earlier.";

                }

                else {

                    correct =
                        false;


                    if (
                        expected
                    ) {

                        feedback =
                            'You defined this name earlier as "' +
                            expected +
                            '". Use the same name here.';

                    }

                    else {

                        feedback =
                            "Use the identifier you defined earlier.";

                    }

                }

            }


            results.push({

                answer:
                    studentAnswer,

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


            blankIndex++;

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


    const unanswered =
        answers.filter(
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


    const submitButton =
        document.getElementById(
            "submitBtn"
        );


    if (
        submitButton
    ) {

        submitButton.disabled =
            true;


        submitButton.textContent =
            "TEST SUBMITTED";

    }

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


    document.getElementById(
        "finalScore"
    ).textContent =
        score +
        " / 10";


    const message =
        document.getElementById(
            "scoreMessage"
        );


    if (
        score === 10
    ) {

        message.textContent =
            "Excellent! Your code was fully consistent.";

    }

    else if (
        score >= 8
    ) {

        message.textContent =
            "Very good. Review the parts you missed.";

    }

    else if (
        score >= 5
    ) {

        message.textContent =
            "Good effort. Study the feedback carefully.";

    }

    else {

        message.textContent =
            "Keep practicing. Review each correction carefully.";

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


    const instruction =
        document.createElement(
            "div"
        );


    instruction.className =
        "review-instruction";


    instruction.textContent =
        "Correct answers are shown in green. Click a red answer to review it.";


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
                                result,
                                blankIndex
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
    result,
    index
) {

    const old =
        document.getElementById(
            "codeExplanation"
        );


    if (
        old
    ) {

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
        closeExplanation;


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
        "<strong>Your answer:</strong> " +
        escapeHTML(
            result.answer
        );


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
            "<strong>Expected here:</strong> " +
            escapeHTML(
                result.expected
            );


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
// CLOSE FEEDBACK
// =====================================================

function closeExplanation() {

    const box =
        document.getElementById(
            "codeExplanation"
        );


    if (
        box
    ) {

        box.remove();

    }

}


// =====================================================
// SAVE RESULT
// =====================================================

function saveTest2Result(
    score,
    results
) {

    const studentName =
        localStorage.getItem(
            "studentName"
        ) || "";


    const studentSection =
        localStorage.getItem(
            "studentSection"
        ) || "";


    const attemptId =
        localStorage.getItem(
            "attemptId"
        ) || "";


    const result = {

        date:
            new Date()
                .toLocaleString(),

        studentName:
            studentName,

        studentSection:
            studentSection,

        attemptId:
            attemptId,

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
// PYTHON IDE STYLES
// =====================================================

function addTest2Styles() {

    if (
        document.getElementById(
            "test2IdeStyles"
        )
    ) {

        return;

    }


    const style =
        document.createElement(
            "style"
        );


    style.id =
        "test2IdeStyles";


    style.textContent = `

        .python-editor {

            margin-top: 20px;

            background:
                #1e1e1e;

            border-radius:
                12px;

            overflow:
                hidden;

            box-shadow:
                0 6px 20px
                rgba(0,0,0,0.18);

        }


        .python-editor-header {

            padding:
                8px 16px;

            background:
                #252526;

            color:
                #aaaaaa;

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


        .py-keyword {

            color:
                #569cd6;

        }


        .py-string {

            color:
                #ce9178;

        }


        .py-number {

            color:
                #b5cea8;

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
                #888888;

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


        .syntax-blank {

            width:
                52px;

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
                #222222;

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


            .syntax-blank {

                width:
                    45px;

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


        // Load student information.

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


        // Start the reviewer.

        startTest2();


        // Connect submit button.

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
