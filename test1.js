// ==========================================
// TEST I - PYTHON REVIEWER
// ==========================================

const QUESTIONS_PER_TEST = 10;


// ==========================================
// QUESTION BANK
// ==========================================

const questionBank = [

    {
        question: "Which programming language are we learning?",
        options: [
            "Java",
            "Python",
            "HTML",
            "C++"
        ],
        answer: 1,
        topic: "Python Basics",
        explanation:
            "Python is the programming language used in this course."
    },

    {
        question:
            "Which symbol is used to assign a value to a variable in Python?",
        options: [
            "==",
            "=",
            ":",
            "=>"
        ],
        answer: 1,
        topic: "Variables",
        explanation:
            "The equal sign = is used to assign a value to a variable."
    },

    {
        question:
            "Which of the following is an integer?",
        options: [
            "\"15\"",
            "15",
            "15.5",
            "\"Python\""
        ],
        answer: 1,
        topic: "Data Types",
        explanation:
            "An integer is a whole number without a decimal part."
    },

    {
        question:
            "Which function displays output on the screen?",
        options: [
            "input()",
            "print()",
            "output()",
            "display()"
        ],
        answer: 1,
        topic: "print()",
        explanation:
            "The print() function displays information on the screen."
    },

    {
        question:
            "Which function is used to receive information from the user?",
        options: [
            "print()",
            "input()",
            "get()",
            "read()"
        ],
        answer: 1,
        topic: "input()",
        explanation:
            "The input() function allows a program to receive information from the user."
    },

    {
        question:
            "Which keyword begins a conditional statement in Python?",
        options: [
            "when",
            "check",
            "if",
            "condition"
        ],
        answer: 2,
        topic: "if Statement",
        explanation:
            "The if keyword is used to begin a conditional statement."
    },

    {
        question:
            "What does elif mean in Python?",
        options: [
            "End if",
            "Else if",
            "Exit loop",
            "Extra loop"
        ],
        answer: 1,
        topic: "elif",
        explanation:
            "elif means 'else if' and is used to check another condition."
    },

    {
        question:
            "Which keyword provides an alternative when an if condition is false?",
        options: [
            "otherwise",
            "else",
            "elif",
            "alternative"
        ],
        answer: 1,
        topic: "if-else",
        explanation:
            "The else block runs when the preceding if condition is false."
    },

    {
        question:
            "What is a nested if statement?",
        options: [
            "An if statement inside another if statement",
            "An if statement without a condition",
            "Two unrelated if statements",
            "An if statement inside a comment"
        ],
        answer: 0,
        topic: "Nested if",
        explanation:
            "A nested if is an if statement placed inside another conditional block."
    },

    {
        question:
            "Which keyword creates a for loop?",
        options: [
            "repeat",
            "for",
            "loop",
            "iterate"
        ],
        answer: 1,
        topic: "for Loop",
        explanation:
            "The for keyword is used to create a for loop."
    },

    {
        question:
            "What is the main purpose of a while loop?",
        options: [
            "Create a list",
            "Repeat while a condition is true",
            "Define a function",
            "Display text"
        ],
        answer: 1,
        topic: "while Loop",
        explanation:
            "A while loop repeats its instructions while its condition is true."
    },

    {
        question:
            "Which brackets are used to create a Python list?",
        options: [
            "()",
            "{}",
            "[]",
            "<>"
        ],
        answer: 2,
        topic: "Lists",
        explanation:
            "Python lists are created using square brackets []."
    },

    {
        question:
            "What does a Python dictionary store?",
        options: [
            "Key-value pairs",
            "Only numbers",
            "Only strings",
            "Only functions"
        ],
        answer: 0,
        topic: "Dictionaries",
        explanation:
            "A dictionary stores information as key-value pairs."
    },

    {
        question:
            "Which keyword is used to define a function?",
        options: [
            "function",
            "func",
            "def",
            "define"
        ],
        answer: 2,
        topic: "Functions",
        explanation:
            "The def keyword is used to define a function in Python."
    },

    {
        question:
            "Which function is commonly used to open a file in Python?",
        options: [
            "file()",
            "open()",
            "readfile()",
            "save()"
        ],
        answer: 1,
        topic: "File Handling",
        explanation:
            "The open() function is used to open a file."
    }

];


// ==========================================
// TEST VARIABLES
// ==========================================

let selectedQuestions = [];

let studentAnswers = [];

let testSubmitted = false;

let retakeUsed = false;


// ==========================================
// SHUFFLE
// ==========================================

function shuffleArray(array) {

    for (let i = array.length - 1; i > 0; i--) {

        const j =
            Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] =
            [array[j], array[i]];
    }

    return array;
}


// ==========================================
// START TEST
// ==========================================

function startTest() {

    let shuffledQuestions =
        [...questionBank];

    shuffleArray(shuffledQuestions);


    selectedQuestions =
        shuffledQuestions.slice(
            0,
            QUESTIONS_PER_TEST
        );


    studentAnswers =
        new Array(QUESTIONS_PER_TEST)
            .fill(null);


    testSubmitted = false;


    displayAllQuestions();

}


// ==========================================
// DISPLAY ALL 10 QUESTIONS
// ==========================================

function displayAllQuestions() {

    const container =
        document.getElementById(
            "questionsContainer"
        );


    container.innerHTML = "";


    selectedQuestions.forEach(
        (question, questionIndex) => {


            const questionCard =
                document.createElement("div");

            questionCard.className =
                "question-card";


            // QUESTION NUMBER

            const number =
                document.createElement("div");

            number.className =
                "question-number";

            number.textContent =
                "Question " +
                (questionIndex + 1);


            // TOPIC

            const topic =
                document.createElement("div");

            topic.className =
                "question-topic";

            topic.textContent =
                question.topic;


            // QUESTION TEXT

            const questionText =
                document.createElement("h3");

            questionText.textContent =
                question.question;


            // ANSWERS

            const answers =
                document.createElement("div");

            answers.className =
                "answers-grid";


            question.options.forEach(
                (option, optionIndex) => {


                    const label =
                        document.createElement("label");

                    label.className =
                        "answer-option";


                    const radio =
                        document.createElement("input");

                    radio.type = "radio";

                    radio.name =
                        "question_" +
                        questionIndex;

                    radio.value =
                        optionIndex;


                    radio.addEventListener(
                        "change",
                        function() {

                            studentAnswers[
                                questionIndex
                            ] =
                                parseInt(
                                    this.value
                                );

                        }
                    );


                    const text =
                        document.createElement("span");

                    text.textContent =
                        String.fromCharCode(
                            65 + optionIndex
                        ) +
                        ". " +
                        option;


                    label.appendChild(radio);

                    label.appendChild(text);

                    answers.appendChild(label);

                }
            );


            questionCard.appendChild(number);

            questionCard.appendChild(topic);

            questionCard.appendChild(questionText);

            questionCard.appendChild(answers);


            container.appendChild(
                questionCard
            );

        }
    );

}


// ==========================================
// SUBMIT TEST
// ==========================================

function submitTest() {


    const unanswered =
        studentAnswers.filter(
            answer => answer === null
        ).length;


    if (unanswered > 0) {

        alert(
            "Please answer all 10 questions before submitting."
        );

        return;

    }


    const confirmed =
        confirm(
            "Are you sure you want to submit Test I?"
        );


    if (!confirmed) {

        return;

    }


    let score = 0;


    selectedQuestions.forEach(
        (question, index) => {

            if (
                studentAnswers[index] ===
                question.answer
            ) {

                score++;

            }

        }
    );


    testSubmitted = true;


    saveTestResult(score);


    document.getElementById(
        "scoreDisplay"
    ).textContent =
        score +
        " / " +
        QUESTIONS_PER_TEST;


    let message;


    if (score === 10) {

        message =
            "Excellent! You got a perfect score.";

    }

    else if (score >= 8) {

        message =
            "Very good! Keep reviewing the concepts.";

    }

    else if (score >= 5) {

        message =
            "Good effort. Review the lessons you missed.";

    }

    else {

        message =
            "Keep practicing. Review the concepts and try again.";

    }


    document.getElementById(
        "resultMessage"
    ).textContent =
        message;


    document.getElementById(
        "resultModal"
    ).style.display =
        "flex";

}


// ==========================================
// SAVE RESULT
// ==========================================

function saveTestResult(score) {


    const result = {

        date:
            new Date().toLocaleString(),

        score:
            score,

        total:
            QUESTIONS_PER_TEST,

        questions:
            selectedQuestions.map(
                (question, index) => ({

                    question:
                        question.question,

                    topic:
                        question.topic,

                    selectedAnswer:
                        studentAnswers[index],

                    correctAnswer:
                        question.answer,

                    explanation:
                        question.explanation

                })
            )

    };


    localStorage.setItem(
        "test1Result",
        JSON.stringify(result)
    );

}


// ==========================================
// REVIEW TEST
// ==========================================

function reviewTest() {

    localStorage.setItem(
        "test1ReviewMode",
        "true"
    );


    window.location.href =
        "review1.html";

}


// ==========================================
// RETAKE
// ==========================================

function retakeTest() {


    if (retakeUsed) {

        alert(
            "You have already used your one retake."
        );

        return;

    }


    retakeUsed = true;


    document.getElementById(
        "resultModal"
    ).style.display =
        "none";


    startTest();

}


// ==========================================
// START WHEN PAGE LOADS
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        startTest();

    }
);
