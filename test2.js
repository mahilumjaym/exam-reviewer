// =====================================================
// TEST II - PYTHON CODE COMPLETION
// 5 PROGRAMS
// 1 RANDOM PROGRAM
// 10 BLANKS PER PROGRAM
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
// CODE PART BUILDERS
// =====================================================

// Normal Python code
function text(value) {

    return {
        type: "text",
        value: value
    };

}


// Python keyword
function keyword(value) {

    return {
        type: "keyword",
        value: value
    };

}


// Python string
function string(value) {

    return {
        type: "string",
        value: value
    };

}


// Python number
function number(value) {

    return {
        type: "number",
        value: value
    };

}


// Python comment
function comment(value) {

    return {
        type: "comment",
        value: value
    };

}


// New line
function newline() {

    return {
        type: "newline"
    };

}


// Fixed-answer blank
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


// Student-defined identifier
function identifierBlank(
    kind,
    name,
    explanation
) {

    return {

        type: "blank",

        kind: kind,

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
    // =================================================

    {

        parts: [

            comment(
                "# Define the function"
            ),

            newline(),

            fixedBlank(
                "def",
                "def begins a Python function definition."
            ),

            text(" "),

            identifierBlank(
                "functionDef",
                "functionName",
                "Choose a valid function name. The same name must be used when the function is called."
            ),

            text("("),

            identifierBlank(
                "parameterDef",
                "parameterName",
                "Choose a valid parameter name. The same parameter must be used inside the function."
            ),

            text("):"),

            newline(),


            comment(
                "# Check the score"
            ),

            newline(),

            text("    "),

            fixedBlank(
                "if",
                "if begins the conditional statement."
            ),

            text(" "),

            identifierBlank(
                "identifierUse",
                "parameterName",
                "Use the parameter name defined in the function header."
            ),

            text(" "),

            fixedBlank(
                ">=",
                ">= means greater than or equal to."
            ),

            text(" 75:"),

            newline(),


            comment(
                "# Return the result"
            ),

            newline(),

            text("        "),

            fixedBlank(
                "return",
                "return sends a value back from the function."
            ),

            text(' "Ready"'),

            newline(),


            comment(
                "# Repeat the rounds"
            ),

            newline(),

            fixedBlank(
                "for",
                "for begins a loop that goes through a sequence."
            ),

            text(" round_number in "),

            fixedBlank(
                "range",
                "range() creates a sequence of numbers."
            ),

            text("(1, 4):"),

            newline(),

            text(
                '    print("Round:", round_number)'
            ),

            newline(),


            comment(
                "# Call the function"
            ),

            newline(),

            text("result = "),

            identifierBlank(
                "identifierUse",
                "functionName",
                "Use the same function name that you created earlier."
            ),

            text("(85)"),

            newline(),

            text(
                'print("Result:", result)'
            )

        ]

    },


    // =================================================
    // PROGRAM 2
    // =================================================

    {

        parts: [

            comment(
                "# Define the function"
            ),

            newline(),

            fixedBlank(
                "def",
                "def begins a Python function definition."
            ),

            text(" "),

            identifierBlank(
                "functionDef",
                "functionName",
                "Choose a valid function name. The same name must be used when the function is called."
            ),

            text("("),

            identifierBlank(
                "parameterDef",
                "parameterName",
                "Choose a valid parameter name."
            ),

            text("):"),

            newline(),


            comment(
                "# Check the balance"
            ),

            newline(),

            text("    "),

            fixedBlank(
                "if",
                "if begins the conditional statement."
            ),

            text(" "),

            identifierBlank(
                "identifierUse",
                "parameterName",
                "Use the parameter name you defined above."
            ),

            text(" "),

            fixedBlank(
                "==",
                "== checks whether two values are equal."
            ),

            text(" 0:"),

            newline(),


            comment(
                "# Give the result"
            ),

            newline(),

            text("        return "),

            string(
                '"Empty"'
            ),

            newline(),


            comment(
                "# Set the number of attempts"
            ),

            newline(),

            text(""),

            identifierBlank(
                "variableDef",
                "counterName",
                "Choose a valid variable name for the counter."
            ),

            text(" = 3"),

            newline(),


            comment(
                "# Repeat while attempts remain"
            ),

            newline(),

            fixedBlank(
                "while",
                "while repeats code while its condition is true."
            ),

            text(" "),

            identifierBlank(
                "identifierUse",
                "counterName",
                "Use the same counter variable that you defined above."
            ),

            text(" > 0:"),

            newline(),

            text(
                '    print("Checking")'
            ),

            newline(),

            text(
                "    "
            ),

            identifierBlank(
                "identifierUse",
                "counterName",
                "Use the same counter variable consistently."
            ),

            text(" = "),

            identifierBlank(
                "identifierUse",
                "counterName",
                "Use the same counter variable consistently."
            ),

            text(" - 1"),

            newline(),


            comment(
                "# Call the function"
            ),

            newline(),

            text("message = "),

            identifierBlank(
                "identifierUse",
                "functionName",
                "Use the function name that you defined earlier."
            ),

            text("(0)")

        ]

    },


    // =================================================
    // PROGRAM 3
    // =================================================

    {

        parts: [

            comment(
                "# Define the function"
            ),

            newline(),

            fixedBlank(
                "def",
                "def begins a Python function definition."
            ),

            text(" "),

            identifierBlank(
                "functionDef",
                "functionName",
                "Choose a valid function name."
            ),

            text("("),

            identifierBlank(
                "parameterDef",
                "parameterName",
                "Choose a valid parameter name."
            ),

            text("):"),

            newline(),


            comment(
                "# Check the quantity"
            ),

            newline(),

            text("    "),

            fixedBlank(
                "if",
                "if begins the conditional statement."
            ),

            text(" "),

            identifierBlank(
                "identifierUse",
                "parameterName",
                "Use the parameter name you defined above."
            ),

            text(" "),

            fixedBlank(
                ">",
                "> means greater than."
            ),

            text(" 0:"),

            newline(),


            comment(
                "# Open the CSV file"
            ),

            newline(),

            text(
                '        file = '
            ),

            fixedBlank(
                "open",
                "open() opens or creates a file."
            ),

            text(
                '("attendance.csv", "a")'
            ),

            newline(),


            comment(
                "# Save the record"
            ),

            newline(),

            text(
                '        file.write(name + ",Present\\n")'
            ),

            newline(),


            comment(
                "# Close the file"
            ),

            newline(),

            text(
                "        file.close()"
            ),

            newline(),


            comment(
                "# Repeat the records"
            ),

            newline(),

            fixedBlank(
                "for",
                "for begins a loop."
            ),

            text(" record in "),

            fixedBlank(
                "range",
                "range() creates the sequence of record numbers."
            ),

            text("(1, 4):"),

            newline(),

            text(
                '    print("Record:", record)'
            ),

            newline(),


            comment(
                "# Call the function"
            ),

            newline(),

            text("result = "),

            identifierBlank(
                "identifierUse",
                "functionName",
                "Use the function name you created earlier."
            ),

            text('("Ana")'),

            newline(),

            text(
                'print("Saved:", result)'
            )

        ]

    },


    // =================================================
    // PROGRAM 4
    // =================================================

    {

        parts: [

            comment(
                "# Define the function"
            ),

            newline(),

            fixedBlank(
                "def",
                "def begins a Python function definition."
            ),

            text(" "),

            identifierBlank(
                "functionDef",
                "functionName",
                "Choose a valid function name."
            ),

            text("("),

            identifierBlank(
                "parameterDef",
                "parameterName",
                "Choose a valid parameter name."
            ),

            text("):"),

            newline(),


            comment(
                "# Check the activity time"
            ),

            newline(),

            text("    "),

            fixedBlank(
                "if",
                "if begins the conditional statement."
            ),

            text(" "),

            identifierBlank(
                "identifierUse",
                "parameterName",
                "Use the parameter name you defined above."
            ),

            text(" "),

            fixedBlank(
                "<=",
                "<= means less than or equal to."
            ),

            text(" 15:"),

            newline(),


            comment(
                "# Give the result"
            ),

            newline(),

            text(
                '        return "Short Session"'
            ),

            newline(),


            comment(
                "# Set the number of checks"
            ),

            newline(),

            identifierBlank(
                "variableDef",
                "checkCount",
                "Choose a valid variable name."
            ),

            text(" = 3"),

            newline(),


            comment(
                "# Repeat while checks remain"
            ),

            newline(),

            fixedBlank(
                "while",
                "while repeats code while its condition is true."
            ),

            text(" "),

            identifierBlank(
                "identifierUse",
                "checkCount",
                "Use the same variable you defined above."
            ),

            text(" > 0:"),

            newline(),

            text(
                '    print("Checking activity")'
            ),

            newline(),

            text("    "),

            identifierBlank(
                "identifierUse",
                "checkCount",
                "Use the same counter variable consistently."
            ),

            text(" = "),

            identifierBlank(
                "identifierUse",
                "checkCount",
                "Use the same counter variable consistently."
            ),

            text(" - 1"),

            newline(),


            comment(
                "# Call the function"
            ),

            newline(),

            text("result = "),

            identifierBlank(
                "identifierUse",
                "functionName",
                "Use the function name you created earlier."
            ),

            text("(10)"),

            newline(),

            text(
                'print("Result:", result)'
            )

        ]

    },


    // =================================================
    // PROGRAM 5
    // =================================================

    {

        parts: [

            comment(
                "# Define the function"
            ),

            newline(),

            fixedBlank(
                "def",
                "def begins a Python function definition."
            ),

            text(" "),

            identifierBlank(
                "functionDef",
                "functionName",
                "Choose a valid function name."
            ),

            text("("),

            identifierBlank(
                "parameterDef",
                "parameterName",
                "Choose a valid parameter name."
            ),

            text("):"),

            newline(),


            comment(
                "# Check the points"
            ),

            newline(),

            text("    "),

            fixedBlank(
                "if",
                "if begins the conditional statement."
            ),

            text(" "),

            identifierBlank(
                "identifierUse",
                "parameterName",
                "Use the parameter name you defined above."
            ),

            text(" "),

            fixedBlank(
                "!=",
                "!= means not equal to."
            ),

            text(" 0:"),

            newline(),


            comment(
                "# Return the status"
            ),

            newline(),

            text("        "),

            fixedBlank(
                "return",
                "return sends a value back from the function."
            ),

            text(' "Active"'),

            newline(),


            comment(
                "# Save the progress"
            ),

            newline(),

            text(
                'file = open("progress.txt", "w")'
            ),

            newline(),

            text(
                'file.write("Progress recorded\\n")'
            ),

            newline(),

            text(
                "file.close()"
            ),

            newline(),


            comment(
                "# Repeat the days"
            ),

            newline(),

            fixedBlank(
                "for",
                "for begins a loop."
            ),

            text(" day in "),

            fixedBlank(
                "range",
                "range() creates a sequence of numbers."
            ),

            text("(1, 4):"),

            newline(),

            text(
                '    print("Day:", day)'
            ),

            newline(),


            comment(
                "# Call the function"
            ),

            newline(),

            text("result = "),

            identifierBlank(
                "identifierUse",
                "functionName",
                "Use the function name you created earlier."
            ),

            text("(20)"),

            newline(),

            text(
                'print("Status:", result)'
            )

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

function countBlanks(code) {

    return code.parts.filter(
        part =>
            part.type === "blank"
    ).length;

}


// =====================================================
// VALIDATE QUESTION BANK
// =====================================================

function validateQuestionBank() {

    let valid = true;


    codeBank.forEach(
        (
            code,
            index
        ) => {

            const count =
                countBlanks(code);


            console.log(
                "Program " +
                (index + 1) +
                ": " +
                count +
                " blanks"
            );


            if (
                count !== 10
            ) {

                console.error(
                    "Program " +
                    (index + 1) +
                    " does not have exactly 10 blanks."
                );


                valid = false;

            }

        }
    );


    return valid;

}


// =====================================================
// START TEST II
// =====================================================

function startTest2() {

    validateQuestionBank();


    selectedCode =
        shuffle(
            [...codeBank]
        )[0];


    console.log(
        "Test II program selected."
    );


    console.log(
        "Blanks:",
        countBlanks(
            selectedCode
        )
    );


    studentAnswers = [];

    symbolTable = {};

    testSubmitted = false;


    displayQuestions();

}


// =====================================================
// CREATE CODE SPAN
// =====================================================

function createCodeSpan(
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
            "py-text";

    }


    span.textContent =
        value;


    return span;

}


// =====================================================
// CREATE BLANK
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


    input.autocomplete =
        "off";


    input.dataset.blank =
        index;


    input.dataset.kind =
        part.kind;


    if (
        part.name
    ) {

        input.dataset.name =
            part.name;

    }


    // Set width based on answer type.

    if (
        part.kind ===
        "functionDef" ||
        part.kind ===
        "parameterDef" ||
        part.kind ===
        "variableDef"
    ) {

        input.classList.add(
            "identifier-blank"
        );

    }

    else if (
        part.kind ===
        "identifierUse"
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

            // New line

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
                    createBlankInput(
                        part,
                        blankIndex
                    );


                codeArea.appendChild(
                    input
                );


                blankIndex++;


                return;

            }


            // Normal code

            codeArea.appendChild(
                createCodeSpan(
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


    addStyles();

}


// =====================================================
// VALIDATE IDENTIFIER
// =====================================================

function isValidIdentifier(
    value
) {

    // Python identifier pattern.

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
// CHECK ANSWERS
// =====================================================

function evaluateAnswers() {

    symbolTable = {};

    const results = [];

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
                studentAnswers[
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
            // FUNCTION NAME
            // -----------------------------------------

            else if (
                part.kind ===
                "functionDef"
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
                        "Your function name is valid.";

                }

                else {

                    correct =
                        false;

                    feedback =
                        "Use a valid Python identifier for the function name.";

                }

            }


            // -----------------------------------------
            // PARAMETER NAME
            // -----------------------------------------

            else if (
                part.kind ===
                "parameterDef"
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
                        "Your parameter name is valid.";

                }

                else {

                    correct =
                        false;

                    feedback =
                        "Use a valid Python identifier for the parameter.";

                }

            }


            // -----------------------------------------
            // VARIABLE NAME
            // -----------------------------------------

            else if (
                part.kind ===
                "variableDef"
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
                        "Your variable name is valid.";

                }

                else {

                    correct =
                        false;

                    feedback =
                        "Use a valid Python identifier for the variable.";

                }

            }


            // -----------------------------------------
            // IDENTIFIER USE
            // -----------------------------------------

            else if (
                part.kind ===
                "identifierUse"
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
                            "You defined this identifier earlier as \"" +
                            expected +
                            "\". Use that same name here.";

                    }

                    else {

                        feedback =
                            "Use the identifier you defined earlier in the code.";

                    }

                }

            }


            results.push({

                answer:
                    studentAnswer,

                correct:
                    correct,

                correctAnswer:
                    part.answer ||
                    (
                        part.name
                            ? symbolTable[
                                part.name
                            ]
                            : ""
                    ),

                kind:
                    part.kind,

                explanation:
                    feedback

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

    const inputs =
        document.querySelectorAll(
            ".code-blank"
        );


    // Make sure there are 10.

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


    studentAnswers = [];


    inputs.forEach(
        input => {

            studentAnswers.push(
                input.value.trim()
            );

        }
    );


    // Check empty answers.

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


    const confirmed =
        confirm(
            "Are you sure you want to submit Test II?"
        );


    if (!confirmed) {

        return;

    }


    // Evaluate the code.

    const results =
        evaluateAnswers();


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


    const scoreArea =
        document.getElementById(
            "scoreArea"
        );


    if (scoreArea) {

        scoreArea.scrollIntoView({
            behavior:
                "smooth"
        });

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


    const finalScore =
        document.getElementById(
            "finalScore"
        );


    if (finalScore) {

        finalScore.textContent =
            score +
            " / 10";

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
            "Excellent! Your code was fully consistent.";

    }

    else if (
        score >= 8
    ) {

        message.textContent =
            "Very good. Review the parts that need correction.";

    }

    else if (
        score >= 5
    ) {

        message.textContent =
            "Good effort. Study the feedback on the incorrect parts.";

    }

    else {

        message.textContent =
            "Keep practicing. Review each correction carefully.";

    }

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
        "Correct answers are green. Click a red answer to review it.";


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
                        "Click to review";


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
                createCodeSpan(
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
// SHOW FEEDBACK
// =====================================================

function showExplanation(
    result,
    index
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


    close.addEventListener(
        "click",
        closeExplanation
    );


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
        result.correctAnswer
    ) {

        const correct =
            document.createElement(
                "p"
            );


        correct.innerHTML =
            "<strong>Expected here:</strong> " +
            escapeHTML(
                result.correctAnswer
            );


        box.appendChild(
            correct
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


    if (box) {

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
// STYLES
// =====================================================

function addStyles() {

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

        .python-editor {

            background: #1e1e1e;

            border-radius: 12px;

            overflow: hidden;

            margin-top: 20px;

            border: 1px solid #333;

            box-shadow:
                0 5px 20px rgba(0,0,0,0.15);

        }


        .python-editor-header {

            background: #252526;

            color: #aaa;

            padding: 8px 15px;

            font-family:
                Consolas,
                "Courier New",
                monospace;

            font-size: 12px;

            letter-spacing: 1px;

        }


        .python-code {

            padding: 22px;

            color: #d4d4d4;

            font-family:
                Consolas,
                "Courier New",
                monospace;

            font-size: 16px;

            line-height: 1.85;

            white-space: pre-wrap;

            overflow-x: auto;

        }


        .py-keyword {

            color: #569cd6;

        }


        .py-string {

            color: #ce9178;

        }


        .py-number {

            color: #b5cea8;

        }


        .py-comment {

            color: #6a9955;

        }


        .py-text {

            color: #d4d4d4;

        }


        .code-blank {

            height: 28px;

            margin:
                0 3px;

            padding:
                2px 6px;

            border-radius: 5px;

            border:
                2px solid #777;

            background: #ffffff;

            color: #111;

            font-family:
                Consolas,
                "Courier New",
                monospace;

            font-size: 14px;

            text-align: center;

            vertical-align: middle;

            outline: none;

        }


        .identifier-blank {

            width: 125px;

        }


        .short-blank {

            width: 58px;

        }


        .code-blank:focus {

            border-color: #4da3ff;

            box-shadow:
                0 0 0 2px
                rgba(77,163,255,0.2);

        }


        .submitted-answer {

            display: inline-block;

            padding:
                1px 6px;

            margin:
                0 2px;

            border-radius: 4px;

            font-weight: bold;

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

            max-width: calc(100vw - 40px);

            background: white;

            color: #222;

            padding: 20px;

            border-radius: 12px;

            box-shadow:
                0 8px 30px
                rgba(0,0,0,0.25);

            z-index: 9999;

        }


        .close-explanation {

            position: absolute;

            right: 10px;

            top: 8px;

            border: none;

            background: transparent;

            font-size: 22px;

            cursor: pointer;

        }


        .code-explanation h3 {

            margin-top: 0;

        }


        .explanation-text {

            margin-top: 12px;

            padding: 12px;

            background: #eef4ff;

            border-radius: 8px;

            line-height: 1.5;

        }


        @media (
            max-width: 600px
        ) {

            .python-code {

                font-size: 13px;

                padding: 14px;

            }


            .identifier-blank {

                width: 100px;

            }


            .short-blank {

                width: 50px;

            }


            .code-explanation {

                left: 15px;

                right: 15px;

                bottom: 15px;

                width: auto;

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

        // Add the code-editor styles.
        addStyles();


        // Get student information.
        const studentName =
            localStorage.getItem(
                "studentName"
            );


        const studentSection =
            localStorage.getItem(
                "studentSection"
            );


        // Display student name.
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


        // Display student section.
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


        // Connect submit button.
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
