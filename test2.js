// =====================================================
// TEST II - PYTHON CODE COMPLETION REVIEWER
// =====================================================
// 5 programs
// 10 blanks per program
// 1 program is randomly selected
// =====================================================


// =====================================================
// CODE BUILDERS
// =====================================================

// Normal code text
function t(value) {
    return {
        type: "text",
        value: value
    };
}


// Python keyword
function k(value) {
    return {
        type: "keyword",
        value: value
    };
}


// Python string
function s(value) {
    return {
        type: "string",
        value: value
    };
}


// Python number
function n(value) {
    return {
        type: "number",
        value: value
    };
}


// Python comment
function c(value) {
    return {
        type: "comment",
        value: value
    };
}


// Python function name
function f(value) {
    return {
        type: "function",
        value: value
    };
}


// Blank
function b(answer, explanation) {
    return {
        type: "blank",
        answer: answer,
        explanation: explanation
    };
}


// New line
function nl() {
    return {
        type: "newline"
    };
}


// =====================================================
// QUESTION BANK
// =====================================================

const codeBank = [

    // =================================================
    // PROGRAM 1
    // GRADE CHECKER
    // =================================================

    {
        title: "Grade Checker",

        topic: "Functions and Conditionals",

        parts: [

            c("# Define the function"),
            nl(),

            b(
                "def",
                "def is the keyword used to define a function."
            ),

            t(" "),

            b(
                "grade_status",
                "grade_status is the name of the function."
            ),

            t("("),

            b(
                "score",
                "score is the parameter that receives the student's score."
            ),

            t("):"),

            nl(),


            c("# Check the score"),
            nl(),

            t("    "),

            b(
                "if",
                "if begins a conditional statement."
            ),

            t(" score "),

            b(
                ">=",
                ">= means greater than or equal to."
            ),

            t(" "),

            n("75"),

            t(":"),

            nl(),


            c("# Give the passing result"),
            nl(),

            t("        "),

            b(
                "return",
                "return sends a value back from the function."
            ),

            t(" "),

            s("\"Passed\""),

            nl(),


            c("# Give the other result"),
            nl(),

            t("    else:"),

            nl(),

            t("        "),

            k("return"),

            t(" "),

            s("\"Needs Practice\""),

            nl(),


            c("# Check three sample scores"),
            nl(),

            b(
                "for",
                "for begins a loop that goes through a sequence."
            ),

            t(" score_number in "),

            b(
                "range",
                "range() creates a sequence of numbers."
            ),

            t("(1, 4):"),

            nl(),

            t("    print("),

            s("\"Score:\""),

            t(", score_number)"),

            nl(),


            c("# Count remaining attempts"),
            nl(),

            t("attempts = "),

            n("3"),

            nl(),

            b(
                "while",
                "while repeats code while its condition is true."
            ),

            t(" attempts > 0:"),

            nl(),

            t("    print("),

            s("\"Checking\""),

            t(")"),

            nl(),

            t("    attempts = attempts - 1"),

            nl(),


            c("# Call the function"),
            nl(),

            t("result = "),

            b(
                "grade_status",
                "grade_status(85) calls the function and passes 85 to score."
            ),

            t("("),

            n("85"),

            t(")"),

            nl(),

            t("print("),

            s("\"Result:\""),

            t(", result)")

        ]
    },


    // =================================================
    // PROGRAM 2
    // CANTEEN ORDER
    // =================================================

    {
        title: "Canteen Order Checker",

        topic: "Functions, Conditions and Loops",

        parts: [

            c("# Define the function"),
            nl(),

            b(
                "def",
                "def begins a function definition."
            ),

            t(" "),

            b(
                "order_status",
                "order_status is the function name."
            ),

            t("("),

            b(
                "total",
                "total is the parameter that receives the order amount."
            ),

            t("):"),

            nl(),


            c("# Check the order amount"),
            nl(),

            t("    "),

            b(
                "if",
                "if begins the decision."
            ),

            t(" total "),

            b(
                ">=",
                ">= means greater than or equal to."
            ),

            t(" "),

            n("100"),

            t(":"),

            nl(),


            c("# Give the delivery result"),
            nl(),

            t("        "),

            b(
                "return",
                "return sends the result back to the caller."
            ),

            t(" "),

            s("\"Free Delivery\""),

            nl(),


            c("# Give the regular result"),
            nl(),

            t("    else:"),

            nl(),

            t("        "),

            k("return"),

            t(" "),

            s("\"Regular Delivery\""),

            nl(),


            c("# Check three orders"),
            nl(),

            b(
                "for",
                "for repeats the code for each number in the sequence."
            ),

            t(" order in "),

            b(
                "range",
                "range() creates the order numbers."
            ),

            t("(1, 4):"),

            nl(),

            t("    print("),

            s("\"Order:\""),

            t(", order)"),

            nl(),


            c("# Process remaining orders"),
            nl(),

            t("orders = "),

            n("2"),

            nl(),

            b(
                "while",
                "while repeats while orders remain."
            ),

            t(" orders > 0:"),

            nl(),

            t("    print("),

            s("\"Processing\""),

            t(")"),

            nl(),

            t("    orders = orders - 1"),

            nl(),


            c("# Call the function"),
            nl(),

            t("message = "),

            b(
                "order_status",
                "order_status(150) calls the function and passes 150 to total."
            ),

            t("("),

            n("150"),

            t(")"),

            nl(),

            t("print("),

            s("\"Message:\""),

            t(", message)")

        ]
    },


    // =================================================
    // PROGRAM 3
    // ATTENDANCE CSV SAVER
    // =================================================

    {
        title: "Attendance CSV Saver",

        topic: "Functions, File Handling and Loops",

        parts: [

            c("# Define the function"),
            nl(),

            b(
                "def",
                "def begins the function definition."
            ),

            t(" "),

            b(
                "save_record",
                "save_record is the function name."
            ),

            t("("),

            b(
                "name",
                "name is the parameter that receives the student's name."
            ),

            t("):"),

            nl(),


            c("# Check the name"),
            nl(),

            t("    "),

            b(
                "if",
                "if begins the condition."
            ),

            t(" name "),

            b(
                "==",
                "== checks whether two values are equal."
            ),

            t(" "),

            s("\"\""),

            t(":"),

            nl(),


            c("# Stop if the name is empty"),
            nl(),

            t("        "),

            b(
                "return",
                "return sends a result back from the function."
            ),

            t(" "),

            s("\"No name\""),

            nl(),


            c("# Open the CSV file"),
            nl(),

            t("    file = open("),

            s("\"attendance.csv\""),

            t(", "),

            s("\"w\""),

            t(")"),

            nl(),


            c("# Save the student name"),
            nl(),

            t("    file.write(name + "),

            s("\",Present\\n\""),

            t(")"),

            nl(),


            c("# Close the file"),
            nl(),

            t("    file.close()"),

            nl(),


            c("# Check three records"),
            nl(),

            b(
                "for",
                "for begins the loop."
            ),

            t(" record in "),

            b(
                "range",
                "range() creates the record numbers."
            ),

            t("(1, 4):"),

            nl(),

            t("    print("),

            s("\"Record:\""),

            t(", record)"),

            nl(),


            c("# Process remaining records"),
            nl(),

            t("records = "),

            n("2"),

            nl(),

            b(
                "while",
                "while repeats while records remain."
            ),

            t(" records > 0:"),

            nl(),

            t("    print("),

            s("\"Ready\""),

            t(")"),

            nl(),

            t("    records = records - 1"),

            nl(),


            c("# Call the function"),
            nl(),

            t("result = "),

            b(
                "save_record",
                "save_record(\"Ana\") calls the function and passes Ana to name."
            ),

            t("("),

            s("\"Ana\""),

            t(")"),

            nl(),

            t("print("),

            s("\"Result:\""),

            t(", result)")

        ]
    },


    // =================================================
    // PROGRAM 4
    // STUDY LOG
    // =================================================

    {
        title: "Study Log",

        topic: "Functions, File Handling and Conditions",

        parts: [

            c("# Define the function"),
            nl(),

            b(
                "def",
                "def begins the function definition."
            ),

            t(" "),

            b(
                "save_study",
                "save_study is the function name."
            ),

            t("("),

            b(
                "subject",
                "subject is the parameter that receives the subject name."
            ),

            t("):"),

            nl(),


            c("# Check the subject"),
            nl(),

            t("    "),

            b(
                "if",
                "if begins the condition."
            ),

            t(" subject "),

            b(
                "==",
                "== checks whether the subject is equal to an empty string."
            ),

            t(" "),

            s("\"\""),

            t(":"),

            nl(),


            c("# Stop if no subject was entered"),
            nl(),

            t("        "),

            b(
                "return",
                "return sends a result back from the function."
            ),

            t(" "),

            s("\"No Subject\""),

            nl(),


            c("# Open the study file"),
            nl(),

            t("    file = open("),

            s("\"study_log.txt\""),

            t(", "),

            s("\"a\""),

            t(")"),

            nl(),


            c("# Save the subject"),
            nl(),

            t("    file.write(subject + "),

            s("\"\\n\""),

            t(")"),

            nl(),


            c("# Close the file"),
            nl(),

            t("    file.close()"),

            nl(),


            c("# Check three study sessions"),
            nl(),

            b(
                "for",
                "for begins a loop."
            ),

            t(" session in "),

            b(
                "range",
                "range() creates the session numbers."
            ),

            t("(1, 4):"),

            nl(),

            t("    print("),

            s("\"Session:\""),

            t(", session)"),

            nl(),


            c("# Count study sessions"),
            nl(),

            t("sessions = "),

            n("2"),

            nl(),

            b(
                "while",
                "while repeats while sessions remain."
            ),

            t(" sessions > 0:"),

            nl(),

            t("    print("),

            s("\"Study\""),

            t(")"),

            nl(),

            t("    sessions = sessions - 1"),

            nl(),


            c("# Call the function"),
            nl(),

            t("result = "),

            b(
                "save_study",
                "save_study(\"Python\") calls the function and passes Python to subject."
            ),

            t("("),

            s("\"Python\""),

            t(")"),

            nl(),

            t("print("),

            s("\"Result:\""),

            t(", result)")

        ]
    },


    // =================================================
    // PROGRAM 5
    // FITNESS TRACKER
    // =================================================

    {
        title: "Fitness Tracker",

        topic: "Functions, Lists, Conditions and Loops",

        parts: [

            c("# Define the function"),
            nl(),

            b(
                "def",
                "def begins a function definition."
            ),

            t(" "),

            b(
                "activity_status",
                "activity_status is the function name."
            ),

            t("("),

            b(
                "minutes",
                "minutes is the parameter that receives the activity time."
            ),

            t("):"),

            nl(),


            c("# Check the activity time"),
            nl(),

            t("    "),

            b(
                "if",
                "if begins the condition."
            ),

            t(" minutes "),

            b(
                ">=",
                ">= means greater than or equal to."
            ),

            t(" "),

            n("30"),

            t(":"),

            nl(),


            c("# Give the active result"),
            nl(),

            t("        "),

            b(
                "return",
                "return sends the result back to the caller."
            ),

            t(" "),

            s("\"Active\""),

            nl(),


            c("# Give the other result"),
            nl(),

            t("    else:"),

            nl(),

            t("        "),

            k("return"),

            t(" "),

            s("\"Keep Moving\""),

            nl(),


            c("# Store activity minutes"),
            nl(),

            t("minutes_list = ["),

            n("20"),

            t(", "),

            n("30"),

            t(", "),

            n("40"),

            t("]"),

            nl(),


            c("# Check each activity"),
            nl(),

            b(
                "for",
                "for begins a loop through the list."
            ),

            t(" minute in minutes_list:"),

            nl(),

            t("    print("),

            s("\"Minutes:\""),

            t(", minute)"),

            nl(),


            c("# Count remaining activities"),
            nl(),

            t("activities = "),

            n("2"),

            nl(),

            b(
                "while",
                "while repeats while activities remain."
            ),

            t(" activities > 0:"),

            nl(),

            t("    print("),

            s("\"Tracking\""),

            t(")"),

            nl(),

            t("    activities = activities - 1"),

            nl(),


            c("# Call the function"),
            nl(),

            t("result = "),

            b(
                "activity_status",
                "activity_status(45) calls the function and passes 45 to minutes."
            ),

            t("("),

            n("45"),

            t(")"),

            nl(),

            t("print("),

            s("\"Status:\""),

            t(", result)")

        ]
    }

];


// =====================================================
// VARIABLES
// =====================================================

let selectedCode = null;

let studentAnswers = [];

let testSubmitted = false;


// =====================================================
// CHECK QUESTION BANK
// =====================================================

function validateQuestionBank() {

    let valid = true;

    codeBank.forEach(
        code => {

            const count =
                code.parts.filter(
                    part =>
                        part.type === "blank"
                ).length;

            console.log(
                code.title +
                ": " +
                count +
                " blanks"
            );

            if (
                count !== 10
            ) {

                console.error(
                    code.title +
                    " does not have exactly 10 blanks."
                );

                valid = false;

            }

        }
    );

    return valid;

}


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
// START TEST II
// =====================================================

function startTest2() {

    // Check the question bank.
    validateQuestionBank();


    // Select one random program.
    selectedCode =
        shuffle(
            [...codeBank]
        )[0];


    console.log(
        "Selected:",
        selectedCode.title
    );


    // Clear old answers.
    studentAnswers = [];


    // Reset submission status.
    testSubmitted = false;


    // Display the program.
    displayQuestions();

}


// =====================================================
// CREATE CODE ELEMENT
// =====================================================

function createCodeElement(part) {

    // Create a span for the code part.
    const span =
        document.createElement(
            "span"
        );


    // Apply the correct syntax class.
    if (
        part.type === "keyword"
    ) {

        span.className =
            "py-keyword";

    }

    else if (
        part.type === "string"
    ) {

        span.className =
            "py-string";

    }

    else if (
        part.type === "number"
    ) {

        span.className =
            "py-number";

    }

    else if (
        part.type === "comment"
    ) {

        span.className =
            "py-comment";

    }

    else if (
        part.type === "function"
    ) {

        span.className =
            "py-function";

    }

    else {

        span.className =
            "py-text";

    }


    // Add the text.
    span.textContent =
        part.value;


    return span;

}


// =====================================================
// CREATE BLANK INPUT
// =====================================================

function createBlankInput(
    part,
    blankIndex
) {

    // Create the input field.
    const input =
        document.createElement(
            "input"
        );


    // Set the input type.
    input.type =
        "text";


    // Apply the blank style.
    input.className =
        "code-blank";


    // Prevent autocomplete.
    input.autocomplete =
        "off";


    // Store the blank number.
    input.dataset.blank =
        blankIndex;


    // Add accessibility information.
    input.setAttribute(
        "aria-label",
        "Code blank " +
        (blankIndex + 1)
    );


    return input;

}


// =====================================================
// DISPLAY QUESTIONS
// =====================================================

function displayQuestions() {

    // Find the code container.
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


    // Clear the container.
    container.innerHTML = "";


    // Create the card.
    const card =
        document.createElement(
            "div"
        );


    card.className =
        "code-question-card";


    // Create the title.
    const title =
        document.createElement(
            "h3"
        );


    title.textContent =
        selectedCode.title;


    card.appendChild(
        title
    );


    // Create the topic.
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


    // Create the code editor.
    const editor =
        document.createElement(
            "div"
        );


    editor.className =
        "python-editor";


    // Add a small editor header.
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


    // Create the actual code area.
    const codeArea =
        document.createElement(
            "div"
        );


    codeArea.className =
        "python-code";


    let blankIndex = 0;


    // Build every code part.
    selectedCode.parts.forEach(
        part => {

            // New line
            if (
                part.type === "newline"
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
                part.type === "blank"
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


            // Normal highlighted code.
            codeArea.appendChild(
                createCodeElement(
                    part
                )
            );

        }
    );


    // Add the code to the editor.
    editor.appendChild(
        codeArea
    );


    // Add the editor to the card.
    card.appendChild(
        editor
    );


    // Add the card to the page.
    container.appendChild(
        card
    );


    // Add syntax styling.
    addEditorStyles();

}


// =====================================================
// EDITOR STYLES
// =====================================================

function addEditorStyles() {

    // Prevent duplicate style elements.
    if (
        document.getElementById(
            "test2SyntaxStyles"
        )
    ) {

        return;

    }


    // Create the style element.
    const style =
        document.createElement(
            "style"
        );


    style.id =
        "test2SyntaxStyles";


    style.textContent = `

        .python-editor {

            background: #1e1e1e;

            border-radius: 12px;

            overflow: hidden;

            margin-top: 18px;

            border: 1px solid #333;

            box-shadow:
                0 4px 12px rgba(0,0,0,0.18);

        }


        .python-editor-header {

            background: #252526;

            color: #aaa;

            padding: 8px 14px;

            font-family:
                Consolas,
                "Courier New",
                monospace;

            font-size: 12px;

            letter-spacing: 1px;

        }


        .python-code {

            padding: 20px;

            font-family:
                Consolas,
                "Courier New",
                monospace;

            font-size: 15px;

            line-height: 1.8;

            color: #d4d4d4;

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


        .py-function {

            color: #dcdcaa;

        }


        .py-text {

            color: #d4d4d4;

        }


        .code-blank {

            width: 82px;

            min-width: 82px;

            height: 27px;

            padding: 2px 6px;

            margin: 0 3px;

            border-radius: 5px;

            border: 2px solid #777;

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


        .code-blank:focus {

            border-color: #4da3ff;

            box-shadow:
                0 0 0 2px rgba(77,163,255,0.2);

        }


        .submitted-answer {

            display: inline-block;

            padding: 1px 5px;

            margin: 0 2px;

            border-radius: 4px;

            font-weight: bold;

        }


        .answer-correct {

            color: #9be9a8;

            background: rgba(46,160,67,0.25);

        }


        .answer-wrong {

            color: #ff8f8f;

            background: rgba(248,81,73,0.25);

            cursor: pointer;

            text-decoration:
                underline;

        }


        .answer-wrong:hover {

            background:
                rgba(248,81,73,0.4);

        }


        .code-explanation {

            position: fixed;

            right: 25px;

            bottom: 25px;

            max-width: 380px;

            background: #ffffff;

            color: #222;

            padding: 20px;

            border-radius: 12px;

            box-shadow:
                0 8px 30px rgba(0,0,0,0.25);

            z-index: 9999;

        }


        .code-explanation h3 {

            margin-top: 0;

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


        @media (max-width: 600px) {

            .python-code {

                font-size: 13px;

                padding: 14px;

            }


            .code-blank {

                width: 65px;

                min-width: 65px;

                font-size: 12px;

            }


            .code-explanation {

                left: 15px;

                right: 15px;

                bottom: 15px;

            }

        }

    `;


    // Add the styles to the page.
    document.head.appendChild(
        style
    );

}


// =====================================================
// SUBMIT TEST II
// =====================================================

function submitTest2() {

    // Find all blanks.
    const inputs =
        document.querySelectorAll(
            ".code-blank"
        );


    // Make sure there are exactly 10.
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


        return;

    }


    // Collect student answers.
    studentAnswers = [];


    inputs.forEach(
        input => {

            studentAnswers.push(
                input.value.trim()
            );

        }
    );


    // Check for empty answers.
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


    // Confirm submission.
    const confirmed =
        confirm(
            "Are you sure you want to submit Test II?"
        );


    if (!confirmed) {

        return;

    }


    // Start the score.
    let score = 0;


    // Track the blank.
    let blankIndex = 0;


    // Check every blank.
    selectedCode.parts.forEach(
        part => {

            if (
                part.type !== "blank"
            ) {

                return;

            }


            // Compare answers.
            if (
                normalize(
                    studentAnswers[
                        blankIndex
                    ]
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


    // Mark the test as submitted.
    testSubmitted = true;


    // Save the result.
    saveTest2Result(
        score
    );


    // Show the score.
    showScore(
        score
    );


    // Show feedback.
    displayResults();


    // Disable the submit button.
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


    // Scroll to the score.
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

function showScore(score) {

    // Find the score area.
    const scoreArea =
        document.getElementById(
            "scoreArea"
        );


    if (!scoreArea) {

        return;

    }


    // Show the score area.
    scoreArea.style.display =
        "block";


    // Find the score text.
    const finalScore =
        document.getElementById(
            "finalScore"
        );


    if (finalScore) {

        finalScore.textContent =
            score +
            " / 10";

    }


    // Find the message.
    const message =
        document.getElementById(
            "scoreMessage"
        );


    if (!message) {

        return;

    }


    // Choose the appropriate message.
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
            "Very good! Review the items you missed.";

    }

    else if (
        score >= 5
    ) {

        message.textContent =
            "Good effort. Review the red answers.";

    }

    else {

        message.textContent =
            "Keep practicing. Study the feedback carefully.";

    }

}


// =====================================================
// SAVE TEST II RESULT
// =====================================================

function saveTest2Result(score) {

    // Get the student's name.
    const studentName =
        localStorage.getItem(
            "studentName"
        ) || "";


    // Get the student's section.
    const studentSection =
        localStorage.getItem(
            "studentSection"
        ) || "";


    // Get the attempt ID.
    const attemptId =
        localStorage.getItem(
            "attemptId"
        ) || "";


    // Create the result.
    const result = {

        date:
            new Date().toLocaleString(),

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

        program:
            selectedCode.title,

        answers:
            studentAnswers.map(
                (
                    answer,
                    index
                ) => {

                    const blankParts =
                        selectedCode.parts.filter(
                            part =>
                                part.type ===
                                "blank"
                        );


                    return {

                        studentAnswer:
                            answer,

                        correctAnswer:
                            blankParts[
                                index
                            ].answer,

                        explanation:
                            blankParts[
                                index
                            ].explanation

                    };

                }
            )

    };


    // Save the result locally.
    localStorage.setItem(
        "test2Result",
        JSON.stringify(
            result
        )
    );

}


// =====================================================
// NORMALIZE ANSWERS
// =====================================================

function normalize(value) {

    return String(
        value
    )
        .trim()
        .toLowerCase();

}


// =====================================================
// DISPLAY RESULTS
// =====================================================

function displayResults() {

    // Find the code container.
    const container =
        document.getElementById(
            "codeQuestionsContainer"
        );


    if (!container) {

        return;

    }


    // Clear the original code.
    container.innerHTML = "";


    // Create the review message.
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


    // Create the card.
    const card =
        document.createElement(
            "div"
        );


    card.className =
        "code-question-card";


    // Add title.
    const title =
        document.createElement(
            "h3"
        );


    title.textContent =
        selectedCode.title;


    card.appendChild(
        title
    );


    // Add topic.
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


    // Create the editor.
    const editor =
        document.createElement(
            "div"
        );


    editor.className =
        "python-editor";


    // Add editor header.
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


    // Create the code area.
    const codeArea =
        document.createElement(
            "div"
        );


    codeArea.className =
        "python-code";


    // Track blank number.
    let blankIndex = 0;


    // Rebuild the code.
    selectedCode.parts.forEach(
        part => {

            // New line
            if (
                part.type === "newline"
            ) {

                codeArea.appendChild(
                    document.createElement(
                        "br"
                    )
                );

                return;

            }


            // Blank answer
            if (
                part.type === "blank"
            ) {

                const answer =
                    studentAnswers[
                        blankIndex
                    ];


                const correct =
                    normalize(
                        answer
                    ) ===
                    normalize(
                        part.answer
                    );


                const span =
                    document.createElement(
                        "span"
                    );


                span.className =
                    "submitted-answer";


                span.textContent =
                    answer;


                // Correct answer.
                if (correct) {

                    span.classList.add(
                        "answer-correct"
                    );

                }

                // Wrong answer.
                else {

                    span.classList.add(
                        "answer-wrong"
                    );


                    span.title =
                        "Click to review";


                    span.addEventListener(
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


                codeArea.appendChild(
                    span
                );


                blankIndex++;

                return;

            }


            // Normal highlighted code.
            codeArea.appendChild(
                createCodeElement(
                    part
                )
            );

        }
    );


    // Add code area.
    editor.appendChild(
        codeArea
    );


    // Add editor to card.
    card.appendChild(
        editor
    );


    // Add card to page.
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

    // Remove an old explanation.
    const old =
        document.getElementById(
            "codeExplanation"
        );


    if (old) {

        old.remove();

    }


    // Create explanation box.
    const box =
        document.createElement(
            "div"
        );


    box.id =
        "codeExplanation";


    box.className =
        "code-explanation";


    // Create close button.
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


    // Add heading.
    const heading =
        document.createElement(
            "h3"
        );


    heading.textContent =
        "Quick Review";


    box.appendChild(
        heading
    );


    // Add student's answer.
    const yourAnswer =
        document.createElement(
            "p"
        );


    yourAnswer.innerHTML =
        "<strong>Your answer:</strong> " +
        escapeHTML(
            studentAnswer
        );


    box.appendChild(
        yourAnswer
    );


    // Add correct answer.
    const correctAnswerText =
        document.createElement(
            "p"
        );


    correctAnswerText.innerHTML =
        "<strong>Correct answer:</strong> " +
        escapeHTML(
            correctAnswer
        );


    box.appendChild(
        correctAnswerText
    );


    // Add explanation.
    const explanationText =
        document.createElement(
            "div"
        );


    explanationText.className =
        "explanation-text";


    explanationText.textContent =
        explanation;


    box.appendChild(
        explanationText
    );


    // Display the explanation.
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

    return String(
        text
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
// PAGE LOAD
// =====================================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        // Get the student's name.
        const studentName =
            localStorage.getItem(
                "studentName"
            );


        // Get the student's section.
        const studentSection =
            localStorage.getItem(
                "studentSection"
            );


        // Display the name.
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


        // Display the section.
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
