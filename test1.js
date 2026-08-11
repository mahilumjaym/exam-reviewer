// ==========================================
// TEST I - PYTHON REVIEWER
// ==========================================

const QUESTIONS_PER_TEST = 10;


// ==========================================
// QUESTION BANK
// ==========================================

const questionBank = [

    {
        question:
            "A program stores the word Zamboanga in a variable called city. Which line correctly displays the value stored in city?",
        options: [
            'print("city")',
            "print(city)",
            'display("city")',
            "show(city)"
        ],
        answer: 1,
        explanation:
            "Using city without quotation marks displays the value stored in the variable."
    },


    {
        question:
            "A teacher wants a variable called total to begin with the value 45. Which line correctly gives total that value?",
        options: [
            "total == 45",
            "45 = total",
            "total = 45",
            "total : 45"
        ],
        answer: 2,
        explanation:
            "The assignment operator = places the value 45 into total."
    },


    {
        question:
            "Which variable name could be used to store the number of students in a class?",
        options: [
            "student-count",
            "2nd_count",
            "student_count",
            "student count"
        ],
        answer: 2,
        explanation:
            "student_count uses letters and an underscore and does not begin with a number."
    },


    {
        question:
            "Consider this code: city = \"Zamboanga\". Which statement displays the text Zamboanga?",
        options: [
            'print("city")',
            "print(city)",
            "display(city)",
            "show(\"city\")"
        ],
        answer: 1,
        explanation:
            "city refers to the variable, whose stored value is Zamboanga."
    },


    {
        question:
            "Which line stores the text Python Programming in a variable named subject?",
        options: [
            'subject = Python Programming',
            'subject == "Python Programming"',
            'subject = "Python Programming"',
            'subject : "Python Programming"'
        ],
        answer: 2,
        explanation:
            "Text must be enclosed in quotation marks when assigned to a variable."
    },


    {
        question:
            "A program contains score = 90. What value will be displayed by print(score)?",
        options: [
            "score",
            "90",
            '"score"',
            "None"
        ],
        answer: 1,
        explanation:
            "print(score) displays the value stored in score, which is 90."
    },


    {
        question:
            "Which statement would store the number 25 rather than the text 25?",
        options: [
            'number = "25"',
            "number = 25",
            "number == 25",
            'number = "twenty-five"'
        ],
        answer: 1,
        explanation:
            "Without quotation marks, 25 is treated as a number."
    },


    {
        question:
            "A student wants a variable for a final grade. Which name follows Python's identifier rules?",
        options: [
            "final grade",
            "final-grade",
            "final_grade",
            "1final_grade"
        ],
        answer: 2,
        explanation:
            "final_grade is valid because it contains letters and an underscore and does not begin with a number."
    },


    {
        question:
            "What will the following code display?\n\nitems = 8\nprint(items)",
        options: [
            "items",
            '"items"',
            "8",
            "print(items)"
        ],
        answer: 2,
        explanation:
            "The variable items contains 8, so print(items) displays 8."
    },


    {
        question:
            "A program should display the word Welcome exactly as text. Which statement is appropriate?",
        options: [
            "print(Welcome)",
            'print("Welcome")',
            "display(Welcome)",
            'show("Welcome")'
        ],
        answer: 1,
        explanation:
            "Text written directly in a print statement should be enclosed in quotation marks."
    },


    {
        question:
            "A school system should allow registration when age is 12 or older. Which condition expresses that requirement?",
        options: [
            "age > 12",
            "age >= 12",
            "age < 12",
            "age == 12"
        ],
        answer: 1,
        explanation:
            ">= includes both 12 and values greater than 12."
    },


    {
        question:
            "A game should display Winner only when points are greater than 100. Which condition is appropriate?",
        options: [
            "points >= 100",
            "points < 100",
            "points > 100",
            "points == 100"
        ],
        answer: 2,
        explanation:
            "The > operator requires points to be greater than 100."
    },


    {
        question:
            "Which line correctly completes this conditional statement?\n\nif temperature > 30 ___",
        options: [
            ";",
            ".",
            ":",
            ","
        ],
        answer: 2,
        explanation:
            "A colon marks the beginning of the indented block after an if condition."
    },


    {
        question:
            "A program should display Hot when temperature is 35 and Cool for lower values. Which structure is most appropriate?",
        options: [
            "if only",
            "if-else",
            "for loop",
            "while loop"
        ],
        answer: 1,
        explanation:
            "if-else provides one path when the condition is true and another when it is false."
    },


    {
        question:
            "A grading program needs to check three possible results: Excellent, Passed, or Needs Improvement. Which structure is most suitable?",
        options: [
            "if only",
            "if-else",
            "if-elif-else",
            "while"
        ],
        answer: 2,
        explanation:
            "if-elif-else allows a program to test multiple conditions and provide a final alternative."
    },


    {
        question:
            "What happens when the first if condition is false and the elif condition is true?",
        options: [
            "The elif block can execute.",
            "The program automatically stops.",
            "The else block must execute first.",
            "The if block executes again."
        ],
        answer: 0,
        explanation:
            "An elif condition is checked when the preceding if condition is false."
    },


    {
        question:
            "Which condition means that a student's score is exactly 100?",
        options: [
            "score = 100",
            "score == 100",
            "score >= 100",
            "score != 100"
        ],
        answer: 1,
        explanation:
            "The == operator checks whether two values are equal."
    },


    {
        question:
            "A program should give a message only when attempts are less than 3. Which condition should be used?",
        options: [
            "attempts > 3",
            "attempts >= 3",
            "attempts < 3",
            "attempts == 3"
        ],
        answer: 2,
        explanation:
            "The < operator checks whether attempts is less than 3."
    },


    {
        question:
            "Which statement describes iteration in a program?",
        options: [
            "Giving a variable its first value",
            "Repeating instructions according to a condition or sequence",
            "Storing information in a dictionary",
            "Displaying one message"
        ],
        answer: 1,
        explanation:
            "Iteration means repeating instructions."
    },


    {
        question:
            "A program needs to display the numbers 1 through 5. Which loop structure is appropriate?",
        options: [
            "if",
            "for",
            "else",
            "def"
        ],
        answer: 1,
        explanation:
            "A for loop is commonly used when processing a known sequence of values."
    },


    {
        question:
            "Which line correctly repeats a block using the numbers 0 through 4?",
        options: [
            "for x in range(5):",
            "for x from 1 to 5:",
            "for(x = 0; x < 5; x++):",
            "repeat x in 5:"
        ],
        answer: 0,
        explanation:
            "range(5) produces 0, 1, 2, 3, and 4."
    },


    {
        question:
            "A program keeps checking a condition until it becomes false. Which loop is designed for this situation?",
        options: [
            "for",
            "while",
            "if",
            "elif"
        ],
        answer: 1,
        explanation:
            "A while loop continues as long as its condition remains true."
    },


    {
        question:
            "Consider the code below:\n\ncount = 3\nwhile count > 0:\n    count = count - 1\n\nWhat value does count have when the loop ends?",
        options: [
            "3",
            "2",
            "1",
            "0"
        ],
        answer: 3,
        explanation:
            "The loop decreases count until the condition count > 0 becomes false, leaving 0."
    },


    {
        question:
            "Which statement creates a list containing three fruit names?",
        options: [
            'fruits = ("Apple", "Mango", "Banana")',
            'fruits = ["Apple", "Mango", "Banana"]',
            'fruits = {"Apple", "Mango", "Banana"}',
            'fruits = "Apple", "Mango", "Banana"'
        ],
        answer: 1,
        explanation:
            "Square brackets are used to create a Python list."
    },


    {
        question:
            "Consider this list:\n\ncolors = [\"red\", \"blue\", \"green\"]\n\nWhich expression retrieves blue?",
        options: [
            'colors[0]',
            'colors[1]',
            'colors[2]',
            'colors["blue"]'
        ],
        answer: 1,
        explanation:
            "Python list indexing starts at 0, so blue is at index 1."
    },


    {
        question:
            "A list contains [10, 20, 30, 40]. Which expression retrieves the first value?",
        options: [
            "numbers[0]",
            "numbers[1]",
            "numbers[first]",
            "numbers[-0]"
        ],
        answer: 0,
        explanation:
            "The first item in a Python list is stored at index 0."
    },


    {
        question:
            "Which structure is most suitable when each piece of information needs a label?",
        options: [
            "List",
            "Dictionary",
            "String",
            "Integer"
        ],
        answer: 1,
        explanation:
            "A dictionary stores information using key-value pairs."
    },


    {
        question:
            "Consider this dictionary:\n\nstudent = {\"name\": \"Ana\", \"grade\": 90}\n\nWhich expression retrieves Ana?",
        options: [
            'student[0]',
            'student["name"]',
            "student[name]",
            'student["Ana"]'
        ],
        answer: 1,
        explanation:
            "The value Ana is associated with the key name."
    },


    {
        question:
            "A dictionary contains {\"Math\": 90, \"Science\": 88}. What is Math in this dictionary?",
        options: [
            "A list index",
            "A value",
            "A key",
            "A variable"
        ],
        answer: 2,
        explanation:
            "Math is a key that identifies the value 90."
    },


    {
        question:
            "Which statement correctly accesses the value associated with the key city?",
        options: [
            "data.city",
            "data[city]",
            'data["city"]',
            "data( city )"
        ],
        answer: 2,
        explanation:
            "Dictionary keys written as strings are accessed using quotation marks inside square brackets."
    }

];


// ==========================================
// TEST VARIABLES
// ==========================================

let selectedQuestions = [];

let studentAnswers = [];

let testSubmitted = false;


// ==========================================
// SHUFFLE
// ==========================================

function shuffleArray(array) {

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


// ==========================================
// START TEST
// ==========================================

function startTest() {

    let shuffledQuestions =
        [...questionBank];


    shuffleArray(
        shuffledQuestions
    );


    selectedQuestions =
        shuffledQuestions.slice(
            0,
            QUESTIONS_PER_TEST
        );


    studentAnswers =
        new Array(
            QUESTIONS_PER_TEST
        ).fill(null);


    testSubmitted =
        false;


    displayAllQuestions();

}


// ==========================================
// DISPLAY QUESTIONS
// ==========================================

function displayAllQuestions() {

    const container =
        document.getElementById(
            "questionsContainer"
        );


    if (!container) {

        console.error(
            "questionsContainer was not found."
        );

        return;

    }


    container.innerHTML = "";


    selectedQuestions.forEach(
        (
            question,
            questionIndex
        ) => {


            const questionCard =
                document.createElement(
                    "div"
                );


            questionCard.className =
                "question-card";


            // QUESTION NUMBER

            const number =
                document.createElement(
                    "div"
                );


            number.className =
                "question-number";


            number.textContent =
                "Question " +
                (questionIndex + 1);


            // QUESTION TEXT

            const questionText =
                document.createElement(
                    "h3"
                );


            questionText.textContent =
                question.question;


            // ANSWERS

            const answers =
                document.createElement(
                    "div"
                );


            answers.className =
                "answers-grid";


            question.options.forEach(
                (
                    option,
                    optionIndex
                ) => {


                    const label =
                        document.createElement(
                            "label"
                        );


                    label.className =
                        "answer-option";


                    const radio =
                        document.createElement(
                            "input"
                        );


                    radio.type =
                        "radio";


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
                        document.createElement(
                            "span"
                        );


                    text.textContent =
                        String.fromCharCode(
                            65 +
                            optionIndex
                        ) +
                        ". " +
                        option;


                    label.appendChild(
                        radio
                    );


                    label.appendChild(
                        text
                    );


                    answers.appendChild(
                        label
                    );

                }
            );


            questionCard.appendChild(
                number
            );


            questionCard.appendChild(
                questionText
            );


            questionCard.appendChild(
                answers
            );


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
            answer =>
                answer === null
        ).length;


    if (
        unanswered > 0
    ) {

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
        (
            question,
            index
        ) => {

            if (
                studentAnswers[index] ===
                question.answer
            ) {

                score++;

            }

        }
    );


    testSubmitted =
        true;


    saveTestResult(
        score
    );


    const scoreArea =
        document.getElementById(
            "scoreArea"
        );


    scoreArea.style.display =
        "block";


    document.getElementById(
        "finalScore"
    ).textContent =
        score +
        " / " +
        QUESTIONS_PER_TEST;


    let message;


    if (
        score === 10
    ) {

        message =
            "Excellent! Perfect score.";

    }

    else if (
        score >= 8
    ) {

        message =
            "Very good work! Review the items you missed.";

    }

    else if (
        score >= 5
    ) {

        message =
            "Good effort. Review the items you missed.";

    }

    else {

        message =
            "Keep practicing and review the feedback carefully.";

    }


    document.getElementById(
        "scoreMessage"
    ).textContent =
        message;


    displayReviewMode();


    const submitButton =
        document.getElementById(
            "submitBtn"
        );


    submitButton.disabled =
        true;


    submitButton.textContent =
        "TEST SUBMITTED";


    scoreArea.scrollIntoView({
        behavior:
            "smooth"
    });

}


// ==========================================
// REVIEW MODE
// ==========================================

function displayReviewMode() {

    const container =
        document.getElementById(
            "questionsContainer"
        );


    container.innerHTML = "";


    // Review instruction

    const instruction =
        document.createElement(
            "div"
        );


    instruction.className =
        "review-instruction";


    instruction.textContent =
        "Click the red items to review your mistakes.";


    container.appendChild(
        instruction
    );


    selectedQuestions.forEach(
        (
            question,
            questionIndex
        ) => {


            const studentAnswer =
                studentAnswers[
                    questionIndex
                ];


            const isCorrect =
                studentAnswer ===
                question.answer;


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "review-question";


            if (isCorrect) {

                card.classList.add(
                    "correct-question"
                );

            }

            else {

                card.classList.add(
                    "wrong-question"
                );

            }


            // QUESTION HEADER

            const header =
                document.createElement(
                    "button"
                );


            header.className =
                "review-question-header";


            const status =
                isCorrect
                    ? "✓"
                    : "✗";


            header.innerHTML = `

                <span class="review-status">
                    ${status}
                </span>

                <span>
                    Question ${questionIndex + 1}
                </span>

                <span class="review-arrow">
                    ${isCorrect ? "" : "›"}
                </span>

            `;


            card.appendChild(
                header
            );


            // WRONG ANSWER DETAILS

            if (!isCorrect) {

                const details =
                    document.createElement(
                        "div"
                    );


                details.className =
                    "review-details";


                const studentAnswerText =
                    document.createElement(
                        "p"
                    );


                studentAnswerText.innerHTML = `

                    <strong>Your answer:</strong>
                    ${String.fromCharCode(
                        65 + studentAnswer
                    )}.
                    ${escapeHTML(
                        question.options[
                            studentAnswer
                        ]
                    )}

                `;


                const correctAnswerText =
                    document.createElement(
                        "p"
                    );


                correctAnswerText.innerHTML = `

                    <strong>Correct answer:</strong>
                    ${String.fromCharCode(
                        65 + question.answer
                    )}.
                    ${escapeHTML(
                        question.options[
                            question.answer
                        ]
                    )}

                `;


                const explanation =
                    document.createElement(
                        "div"
                    );


                explanation.className =
                    "review-explanation";


                explanation.innerHTML = `

                    <strong>Quick Review</strong>

                    <p>
                        ${escapeHTML(
                            question.explanation
                        )}
                    </p>

                `;


                details.appendChild(
                    studentAnswerText
                );


                details.appendChild(
                    correctAnswerText
                );


                details.appendChild(
                    explanation
                );


                card.appendChild(
                    details
                );


                header.addEventListener(
                    "click",
                    function() {

                        card.classList.toggle(
                            "open"
                        );

                    }
                );

            }


            container.appendChild(
                card
            );

        }
    );


    // Add the Test II button AFTER review

    createTest2Button();

}


// ==========================================
// PROCEED TO TEST II
// ==========================================

function createTest2Button() {

    const oldButton =
        document.getElementById(
            "proceedTest2"
        );


    if (oldButton) {

        oldButton.remove();

    }


    const button =
        document.createElement(
            "button"
        );


    button.id =
        "proceedTest2";


    button.className =
        "submit-btn";


    button.textContent =
        "PROCEED TO TEST II";


    button.addEventListener(
        "click",
        function() {

            localStorage.setItem(
                "test1Completed",
                "true"
            );


            window.location.href =
                "test2.html";

        }
    );


    const submitArea =
        document.querySelector(
            ".submit-area"
        );


    if (submitArea) {

        submitArea.appendChild(
            button
        );

    }

}


// ==========================================
// SAVE RESULT
// ==========================================

function saveTestResult(score) {

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
            QUESTIONS_PER_TEST,

        questions:
            selectedQuestions.map(
                (
                    question,
                    index
                ) => ({

                    question:
                        question.question,

                    selectedAnswer:
                        studentAnswers[
                            index
                        ],

                    correctAnswer:
                        question.answer,

                    explanation:
                        question.explanation

                })
            )

    };


    localStorage.setItem(
        "test1Result",
        JSON.stringify(
            result
        )
    );

}


// ==========================================
// ESCAPE HTML
// ==========================================

function escapeHTML(value) {

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


// ==========================================
// START WHEN PAGE LOADS
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        startTest();

    }
);
