// =====================================================
// VARIABLES
// =====================================================

let selectedProgram = null;

let studentAnswers = [];

let testSubmitted = false;

let test3Score = 0;


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
// START TEST III
// =====================================================

function startTest3() {

    const programs =
        shuffle(
            [...codeBank]
        );


    selectedProgram =
        programs[0];


    studentAnswers =
        new Array(
            selectedProgram.questions.length
        ).fill("");


    testSubmitted =
        false;


    test3Score =
        0;


    displayProgram();

}


// =====================================================
// PYTHON TEXT RENDERER
// SAME SYSTEM USED BY TEST II
// =====================================================

function renderPythonText(
    value
) {

    const fragment =
        document.createDocumentFragment();


    const pattern =
        /(#.*$)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|\b(def|if|elif|else|for|while|in|range|return|open|print|input|int|float|str|len|write|close|append)\b|\b(True|False|None)\b|\b(\d+(?:\.\d+)?)\b/g;


    let lastIndex =
        0;

    let match;


    while (
        (
            match =
            pattern.exec(
                value
            )
        ) !== null
    ) {


        // Text before token

        if (
            match.index >
            lastIndex
        ) {

            const normal =
                document.createElement(
                    "span"
                );


            normal.className =
                "py-normal";


            normal.textContent =
                value.slice(
                    lastIndex,
                    match.index
                );


            fragment.appendChild(
                normal
            );

        }


        const token =
            document.createElement(
                "span"
            );


        // Comment

        if (
            match[1]
        ) {

            token.className =
                "py-comment";

        }


        // String

        else if (
            match[2]
        ) {

            token.className =
                "py-string";

        }


        // Python keyword

        else if (
            match[3]
        ) {

            token.className =
                "py-keyword";

        }


        // Boolean / None

        else if (
            match[4]
        ) {

            token.className =
                "py-constant";

        }


        // Number

        else {

            token.className =
                "py-number";

        }


        token.textContent =
            match[0];


        fragment.appendChild(
            token
        );


        lastIndex =
            pattern.lastIndex;

    }


    // Remaining text

    if (
        lastIndex <
        value.length
    ) {

        const remaining =
            document.createElement(
                "span"
            );


        remaining.className =
            "py-normal";


        remaining.textContent =
            value.slice(
                lastIndex
            );


        fragment.appendChild(
            remaining
        );

    }


    return fragment;

}


// =====================================================
// DISPLAY PYTHON IDE
// SAME VISUAL SYSTEM AS TEST II
// =====================================================

function createPythonIDE(
    codeLines
) {

    const codeBox =
        document.createElement(
            "div"
        );


    codeBox.className =
        "code-box test3-code-box";


    codeLines.forEach(
        line => {

            const lineElement =
                document.createElement(
                    "div"
                );


            lineElement.className =
                "python-line";


            lineElement.appendChild(
                renderPythonText(
                    line
                )
            );


            codeBox.appendChild(
                lineElement
            );

        }
    );


    return codeBox;

}


// =====================================================
// DISPLAY PROGRAM
// =====================================================

function displayProgram() {

    const container =
        document.getElementById(
            "codeTracingContainer"
        );


    if (
        !container
    ) {

        console.error(
            "codeTracingContainer was not found."
        );

        return;

    }


    container.innerHTML =
        "";


    // ---------------------------------------------
    // PROGRAM CARD
    // ---------------------------------------------

    const card =
        document.createElement(
            "div"
        );


    card.className =
        "tracing-card";


    // ---------------------------------------------
    // PROGRAM TITLE
    // ---------------------------------------------

    const title =
        document.createElement(
            "h3"
        );


    title.textContent =
        selectedProgram.title;


    card.appendChild(
        title
    );


    // ---------------------------------------------
    // PYTHON IDE
    // ---------------------------------------------

    const ide =
        createPythonIDE(
            selectedProgram.code
        );


    card.appendChild(
        ide
    );


    // ---------------------------------------------
    // QUESTIONS TITLE
    // ---------------------------------------------

    const questionTitle =
        document.createElement(
            "h3"
        );


    questionTitle.className =
        "tracing-question-title";


    questionTitle.textContent =
        "Trace the Program";


    card.appendChild(
        questionTitle
    );


    // ---------------------------------------------
    // QUESTIONS
    // ---------------------------------------------

    selectedProgram.questions.forEach(
        (
            question,
            index
        ) => {


            const questionCard =
                document.createElement(
                    "div"
                );


            questionCard.className =
                "tracing-question";


            // Question number

            const number =
                document.createElement(
                    "div"
                );


            number.className =
                "tracing-number";


            number.textContent =
                "Question " +
                (index + 1);


            // Question

            const questionText =
                document.createElement(
                    "p"
                );


            questionText.textContent =
                question.question;


            // Answer box

            const input =
                document.createElement(
                    "input"
                );


            input.type =
                "text";


            input.className =
                "tracing-answer";


            input.placeholder =
                "Enter your answer";


            input.autocomplete =
                "off";


            input.dataset.index =
                index;


            input.addEventListener(
                "input",
                function() {

                    studentAnswers[index] =
                        input.value.trim();

                }
            );


            questionCard.appendChild(
                number
            );


            questionCard.appendChild(
                questionText
            );


            questionCard.appendChild(
                input
            );


            card.appendChild(
                questionCard
            );

        }
    );


    container.appendChild(
        card
    );

}


// =====================================================
// SUBMIT TEST III
// =====================================================

function submitTest3() {

    if (
        testSubmitted
    ) {

        return;

    }


    const inputs =
        document.querySelectorAll(
            ".tracing-answer"
        );


    const unanswered =
        Array.from(
            inputs
        ).filter(
            input =>
                input.value.trim() === ""
        );


    if (
        unanswered.length > 0
    ) {

        alert(
            "Please answer all 10 questions before submitting."
        );

        return;

    }


    const confirmed =
        confirm(
            "Submit your tracing answers for review?"
        );


    if (
        !confirmed
    ) {

        return;

    }


    // ---------------------------------------------
    // GET STUDENT ANSWERS
    // ---------------------------------------------

    studentAnswers =
        Array.from(
            inputs
        ).map(
            input =>
                input.value.trim()
        );


    // ---------------------------------------------
    // CALCULATE INTERNAL REVIEW SCORE
    // ---------------------------------------------

    test3Score =
        calculateTraceScore();


    testSubmitted =
        true;


    // ---------------------------------------------
    // SAVE RESULT
    // ---------------------------------------------

    saveTest3Result();


    // ---------------------------------------------
    // SHOW REVIEW
    // ---------------------------------------------

    displayReview();


    // ---------------------------------------------
    // DISABLE SUBMIT BUTTON
    // ---------------------------------------------

    const button =
        document.getElementById(
            "submitBtn"
        );


    if (
        button
    ) {

        button.disabled =
            true;


        button.textContent =
            "REVIEW COMPLETE";

    }

}


// =====================================================
// CALCULATE INTERNAL TRACE SCORE
// =====================================================

function calculateTraceScore() {

    let score =
        0;


    selectedProgram.questions.forEach(
        (
            question,
            index
        ) => {

            const student =
                normalizeAnswer(
                    studentAnswers[index]
                );


            const correct =
                normalizeAnswer(
                    question.answer
                );


            if (
                student ===
                correct
            ) {

                score++;

            }

        }
    );


    return score;

}


// =====================================================
// NORMALIZE ANSWERS
// =====================================================

function normalizeAnswer(
    value
) {

    return String(
        value
    )
        .trim()
        .toLowerCase()
        .replace(
            /\s+/g,
            " "
        );

}


// =====================================================
// DISPLAY REVIEW
// =====================================================

function displayReview() {

    const container =
        document.getElementById(
            "codeTracingContainer"
        );


    if (
        !container
    ) {

        return;

    }


    container.innerHTML =
        "";


    // ---------------------------------------------
    // REVIEW MESSAGE
    // ---------------------------------------------

    const message =
        document.createElement(
            "div"
        );


    message.className =
        "tracing-review-message";


    message.innerHTML =
        "<strong>Tracing Review</strong><br>" +
        "This activity is for analysis. " +
        "Compare your answers with the suggested answers and explanations.";


    container.appendChild(
        message
    );


    // ---------------------------------------------
    // PROGRAM CARD
    // ---------------------------------------------

    const card =
        document.createElement(
            "div"
        );


    card.className =
        "tracing-card";


    // Title

    const title =
        document.createElement(
            "h3"
        );


    title.textContent =
        selectedProgram.title;


    card.appendChild(
        title
    );


    // ---------------------------------------------
    // PYTHON IDE
    // ---------------------------------------------

    const ide =
        createPythonIDE(
            selectedProgram.code
        );


    card.appendChild(
        ide
    );


    // ---------------------------------------------
    // ANSWER REVIEW
    // ---------------------------------------------

    selectedProgram.questions.forEach(
        (
            question,
            index
        ) => {


            const review =
                document.createElement(
                    "div"
                );


            review.className =
                "tracing-review-question";


            const header =
                document.createElement(
                    "h4"
                );


            header.textContent =
                "Question " +
                (index + 1);


            const yourAnswer =
                document.createElement(
                    "p"
                );


            yourAnswer.innerHTML =
                "<strong>Your answer:</strong> " +
                escapeHTML(
                    studentAnswers[index]
                );


            const suggested =
                document.createElement(
                    "p"
                );


            suggested.innerHTML =
                "<strong>Suggested answer:</strong> " +
                escapeHTML(
                    question.answer
                );


            const explanation =
                document.createElement(
                    "div"
                );


            explanation.className =
                "tracing-explanation";


            const explanationTitle =
                document.createElement(
                    "strong"
                );


            explanationTitle.textContent =
                "Why:";


            const explanationText =
                document.createElement(
                    "span"
                );


            explanationText.textContent =
                " " +
                question.explanation;


            explanation.appendChild(
                explanationTitle
            );


            explanation.appendChild(
                explanationText
            );


            review.appendChild(
                header
            );


            review.appendChild(
                yourAnswer
            );


            review.appendChild(
                suggested
            );


            review.appendChild(
                explanation
            );


            card.appendChild(
                review
            );

        }
    );


    container.appendChild(
        card
    );


    // ---------------------------------------------
    // EXIT AREA
    // ---------------------------------------------

    const exitArea =
        document.createElement(
            "div"
        );


    exitArea.className =
        "test3-exit-area";


    const exitButton =
        document.createElement(
            "button"
        );


    exitButton.type =
        "button";


    exitButton.className =
        "test3-exit-button";


    exitButton.textContent =
        "EXIT REVIEWER";


    exitButton.addEventListener(
        "click",
        exitReviewer
    );


    exitArea.appendChild(
        exitButton
    );


    container.appendChild(
        exitArea
    );


    container.scrollIntoView({
        behavior:
            "smooth"
    });

}


// =====================================================
// EXIT REVIEWER
// =====================================================

function exitReviewer() {

    const confirmed =
        confirm(
            "Are you sure you want to exit the reviewer?"
        );


    if (
        !confirmed
    ) {

        return;

    }


    localStorage.setItem(
        "reviewerCompleted",
        "true"
    );


    window.location.href =
        "index.html";

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
// SAVE TEST III RESULT
// =====================================================

function saveTest3Result() {

    const result = {

        date:
            new Date()
                .toLocaleString(),

        studentName:
            localStorage.getItem(
                "studentName"
            ) || "",

        studentSection:
            localStorage.getItem(
                "studentSection"
            ) || "",

        test:
            "Test III",

        program:
            selectedProgram.title,

        score:
            test3Score,

        total:
            selectedProgram.questions.length,

        answers:
            studentAnswers,

        suggestedAnswers:
            selectedProgram.questions.map(
                question =>
                    question.answer
            ),

        explanations:
            selectedProgram.questions.map(
                question =>
                    question.explanation
            )

    };


    // ---------------------------------------------
    // LOCAL STORAGE
    // ---------------------------------------------

    localStorage.setItem(
        "test3Result",
        JSON.stringify(
            result
        )
    );


    // ---------------------------------------------
    // ALSO STORE THE SCORE SEPARATELY
    // ---------------------------------------------

    localStorage.setItem(
        "test3Score",
        String(
            test3Score
        )
    );


    console.log(
        "Test III result saved:",
        result
    );

}


// =====================================================
// ADD TEST III STYLES
// SAME CODE STYLE AS TEST II
// =====================================================

function addTest3Styles() {

    if (
        document.getElementById(
            "test3ExtraStyles"
        )
    ) {

        return;

    }


    const style =
        document.createElement(
            "style"
        );


    style.id =
        "test3ExtraStyles";


    style.textContent = `

        /* ==========================================
           TEST III CARD
           ========================================== */

        .tracing-card {

            background:
                #ffffff;

            margin-top:
                20px;

            padding:
                28px;

            border-radius:
                15px;

            box-shadow:
                0 5px 20px
                rgba(0,0,0,0.07);

            border-left:
                5px solid
                #2856a3;

        }


        .tracing-card h3 {

            color:
                #183b70;

            margin-top:
                0;

            margin-bottom:
                20px;

        }


        /* ==========================================
           PYTHON CODE
           SAME RENDERING AS TEST II
           ========================================== */

        .test3-code-box {

            background:
                #1e1e1e;

            color:
                #d4d4d4;

            font-family:
                Consolas,
                "Courier New",
                monospace;

            font-size:
                16px;

            line-height:
                1.9;

            white-space:
                pre-wrap;

            overflow-x:
                auto;

            padding:
                24px;

            border-radius:
                10px;

            text-align:
                left;

            margin:
                0;

        }


        .python-line {

            display:
                block;

            min-height:
                30px;

            white-space:
                pre;

        }


        .python-line:hover {

            background:
                #252526;

        }


        .py-normal {

            color:
                #d4d4d4;

        }


        .py-comment {

            color:
                #6a9955;

        }


        .py-keyword {

            color:
                #569cd6;

            font-weight:
                600;

        }


        .py-string {

            color:
                #ce9178;

        }


        .py-number {

            color:
                #b5cea8;

        }


        .py-constant {

            color:
                #569cd6;

        }


        /* ==========================================
           QUESTIONS
           ========================================== */

        .tracing-question-title {

            margin-top:
                30px !important;

        }


        .tracing-question {

            background:
                #f8fafc;

            border:
                1px solid
                #e2e8f0;

            border-radius:
                10px;

            padding:
                18px;

            margin-top:
                14px;

        }


        .tracing-number {

            color:
                #2856a3;

            font-weight:
                700;

            margin-bottom:
                6px;

        }


        .tracing-question p {

            margin:
                6px 0 12px;

            line-height:
                1.5;

        }


        .tracing-answer {

            width:
                100%;

            box-sizing:
                border-box;

            padding:
                11px 13px;

            border:
                1px solid
                #cbd5e1;

            border-radius:
                7px;

            font-size:
                15px;

            outline:
                none;

        }


        .tracing-answer:focus {

            border-color:
                #2856a3;

            box-shadow:
                0 0 0 2px
                rgba(
                    40,
                    86,
                    163,
                    0.12
                );

        }


        /* ==========================================
           REVIEW
           ========================================== */

        .tracing-review-message {

            background:
                #eef4ff;

            padding:
                18px 22px;

            border-radius:
                10px;

            margin-top:
                20px;

            line-height:
                1.6;

        }


        .tracing-review-question {

            background:
                #ffffff;

            border:
                1px solid
                #e2e8f0;

            border-radius:
                10px;

            padding:
                18px;

            margin-top:
                14px;

        }


        .tracing-review-question h4 {

            color:
                #183b70;

            margin:
                0 0 10px;

        }


        .tracing-review-question p {

            margin:
                8px 0;

        }


        .tracing-explanation {

            margin-top:
                12px;

            padding:
                12px 14px;

            background:
                #f1f5f9;

            border-radius:
                8px;

            line-height:
                1.5;

        }


        /* ==========================================
           EXIT
           ========================================== */

        .test3-exit-area {

            text-align:
                center;

            margin-top:
                35px;

            padding:
                25px;

        }


        .test3-exit-button {

            background:
                #64748b;

            color:
                #ffffff;

            border:
                none;

            padding:
                14px 35px;

            border-radius:
                8px;

            font-size:
                15px;

            font-weight:
                700;

            cursor:
                pointer;

            letter-spacing:
                0.5px;

        }


        .test3-exit-button:hover {

            background:
                #475569;

        }


        /* ==========================================
           MOBILE
           ========================================== */

        @media (
            max-width: 650px
        ) {

            .tracing-card {

                padding:
                    18px;

            }


            .test3-code-box {

                font-size:
                    13px;

                padding:
                    16px;

            }


            .python-line {

                min-height:
                    25px;

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

        // Add IDE styles

        addTest3Styles();


        // ---------------------------------------------
        // LOAD STUDENT CREDENTIALS
        // ---------------------------------------------

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


        // ---------------------------------------------
        // START TEST
        // ---------------------------------------------

        startTest3();


        // ---------------------------------------------
        // SUBMIT BUTTON
        // ---------------------------------------------

        const submitButton =
            document.getElementById(
                "submitBtn"
            );


        if (
            submitButton
        ) {

            submitButton.addEventListener(
                "click",
                submitTest3
            );

        }
        else {

            console.error(
                "submitBtn was not found."
            );

        }

    }
);
