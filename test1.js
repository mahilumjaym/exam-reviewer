// ==========================================
// TEST I - PYTHON REVIEWER
// ==========================================

const QUESTIONS_PER_TEST = 10;

// NEW SANITIZED QUESTION BANK (30 ITEMS) - TOS ALIGNED WITHOUT EXAM OVERLAP
const questionBank = [
    // --- TOPIC 1: INTRODUCTION TO PYTHON & SYNTAX WITH VARIABLES ---
    {
        id: 1,
        question: "A library system needs to display a welcome message 'Welcome to the Library System' when initialized. Which line of code will achieve this?",
        options: [
            "echo(\"Welcome to the Library System\")",
            "print(\"Welcome to the Library System\")",
            "System.out.println(\"Welcome to the Library System\")",
            "display(\"Welcome to the Library System\")"
        ],
        answer: 1,
        explanation: "In Python, the print() function is used to output text or data to the console."
    },
    {
        id: 2,
        question: "You want to record the total weight of a cargo shipment as 45.5 kilograms in a variable named total_weight. Which assignment statement is correct?",
        options: [
            "total_weight == 45.5",
            "total_weight := 45.5",
            "total_weight = 45.5",
            "45.5 = total_weight"
        ],
        answer: 2,
        explanation: "The single equals sign (=) is the assignment operator in Python."
    },
    {
        id: 3,
        question: "Which of the following identifier names complies with Python variable naming rules?",
        options: [
            "3rd_place",
            "user_item_count",
            "item-count",
            "global"
        ],
        answer: 1,
        explanation: "Valid identifiers can contain letters, numbers, and underscores, but cannot start with a digit or use reserved keywords/hyphens."
    },
    {
        id: 4,
        question: "Examine the following code segment:\n\ntotal_score = 95\nsubject = 'Python'\nprint('total_score')\n\nWhat will be displayed on the screen?",
        options: [
            "95",
            "total_score",
            "Python",
            "Error"
        ],
        answer: 1,
        explanation: "Enclosing a name in single quotes makes it a string literal, so Python prints the literal word 'total_score' instead of the variable's value."
    },
    {
        id: 5,
        question: "A bank system tracks an account balance. The developer wants to initialize the variable active_balance with a value of 2500. Which line is syntactically correct?",
        options: [
            "active_balance = 2500",
            "active_balance == 2500",
            "2500 -> active_balance",
            "set active_balance = 2500"
        ],
        answer: 0,
        explanation: "Variable assignment in Python follows the form: variable_name = value."
    },

    // --- TOPIC 2: CONTROL STRUCTURES (CONDITIONALS) ---
    {
        id: 6,
        question: "A security system grants entry only if the badge_status variable is set to 'Granted'. Which conditional statement is formatted correctly in Python?",
        options: [
            "if badge_status == 'Granted':",
            "if (badge_status == 'Granted') then",
            "if badge_status = 'Granted'",
            "if badge_status == 'Granted' then:"
        ],
        answer: 0,
        explanation: "Python conditional statements use the 'if' keyword, comparison operator '==', and end with a colon (:). Python does not use the 'then' keyword."
    },
    {
        id: 7,
        question: "What is required at the end of an 'elif' or 'else' statement header in Python syntax?",
        options: [
            "; (Semicolon)",
            "{ } (Curly braces)",
            ": (Colon)",
            "end (Keyword)"
        ],
        answer: 2,
        explanation: "In Python, header statements like if, elif, else, for, while, and def must end with a colon (:)."
    },
    {
        id: 8,
        question: "A system evaluates customer membership levels: 'Gold', 'Silver', or 'Standard'. Which structure is best suited for evaluating multiple specific conditions in sequence?",
        options: [
            "if",
            "if-else",
            "if-elif-else",
            "while"
        ],
        answer: 2,
        explanation: "An if-elif-else chain allows checking multiple conditions sequentially before falling back to a default case."
    },
    {
        id: 9,
        question: "A shipping module applies discounts based on weight. If package_weight exceeds 20, a discount is granted; otherwise, standard rates apply. Which code block demonstrates correct formatting?",
        options: [
            "if package_weight > 20:\n    print('Discount Applied')\nelse:\n    print('Standard Rate')",
            "if package_weight > 20 then\n    print('Discount Applied')\nelse\n    print('Standard Rate')",
            "if (package_weight > 20) { print('Discount Applied') }",
            "if package_weight > 20:\n    print('Discount Applied')\nelse-if:\n    print('Standard Rate')"
        ],
        answer: 0,
        explanation: "Python uses colon syntax and indentation to define code blocks inside if-else branches."
    },
    {
        id: 10,
        question: "Consider the code:\n\nstatus = 'Pending'\nif status == 'Active':\n    print('System Operational')\n\nWhat will happen when this code runs?",
        options: [
            "It prints 'System Operational'.",
            "It triggers a syntax error.",
            "It prints nothing and finishes execution.",
            "It prints 'Pending'."
        ],
        answer: 2,
        explanation: "Since 'Pending' == 'Active' evaluates to False and there is no else branch, the code skips the print statement and finishes without output."
    },

    // --- TOPIC 3: LOOPS AND ITERATION ---
    {
        id: 11,
        question: "Which term describes the repetition of a process or execution of a block of code multiple times in computer programming?",
        options: [
            "Encapsulation",
            "Iteration",
            "Instantiation",
            "Compilation"
        ],
        answer: 1,
        explanation: "Iteration is the process of repeatedly executing a block of statements until a specific condition is met."
    },
    {
        id: 12,
        question: "You need to display a batch process header exactly 5 times. Which line of code follows Python's for loop syntax using range?",
        options: [
            "for i in range(5):",
            "for (i = 0; i < 5; i++):",
            "for i = 1 to 5:",
            "foreach i in range(5)"
        ],
        answer: 0,
        explanation: "Python's for loop uses the 'for variable in range(limit):' syntax."
    },
    {
        id: 13,
        question: "A sensor loop must run as long as the temperature parameter remains under 100 degrees. Which line correctly initiates this loop?",
        options: [
            "while temperature < 100:",
            "while (temperature < 100) do:",
            "while temperature < 100 then",
            "until temperature >= 100:"
        ],
        answer: 0,
        explanation: "A while loop header consists of 'while', a conditional expression, and a colon."
    },
    {
        id: 14,
        question: "What values are generated by the expression range(1, 6)?",
        options: [
            "1, 2, 3, 4, 5, 6",
            "1, 2, 3, 4, 5",
            "0, 1, 2, 3, 4, 5",
            "1, 6"
        ],
        answer: 1,
        explanation: "range(start, stop) generates integers starting from 'start' up to, but NOT including, 'stop' (1 to 5)."
    },
    {
        id: 15,
        question: "What will be the output of the following loop?\n\ncount = 3\nwhile count > 0:\n    print(count)\n    count -= 1",
        options: [
            "3, 2, 1 (on separate lines)",
            "3, 2, 1, 0 (on separate lines)",
            "2, 1, 0 (on separate lines)",
            "3, 3, 3 (infinite loop)"
        ],
        answer: 0,
        explanation: "The loop starts at 3, prints, decrements by 1 each time, and stops when count reaches 0 (0 > 0 is False)."
    },

    // --- TOPIC 4: WORKING WITH LISTS AND DICTIONARIES ---
    {
        id: 16,
        question: "Which of the following correctly instantiates a list named hardware_inventory containing three strings?",
        options: [
            "hardware_inventory = ('CPU', 'RAM', 'SSD')",
            "hardware_inventory = {'CPU', 'RAM', 'SSD'}",
            "hardware_inventory = [\"CPU\", \"RAM\", \"SSD\"]",
            "hardware_inventory = \"CPU\", \"RAM\", \"SSD\""
        ],
        answer: 2,
        explanation: "Lists in Python are defined using square brackets []."
    },
    {
        id: 17,
        question: "Given the dictionary:\n\nserver_config = {\n    'host': '192.168.1.1',\n    'port': 8080,\n    'status': 'Online'\n}\n\nWhich code retrieves the value associated with the port?",
        options: [
            "server_config[1]",
            "server_config['port']",
            "server_config.port",
            "server_config.get(1)"
        ],
        answer: 1,
        explanation: "Dictionary values are accessed using key indexing with square brackets: dict_name[key]."
    },
    {
        id: 18,
        question: "What fundamental structural difference separates a Python List from a Python Dictionary?",
        options: [
            "Lists store only numbers, whereas dictionaries store only strings.",
            "Lists use zero-based integer index locations, whereas dictionaries use key-value pairs.",
            "Lists are enclosed in curly braces, whereas dictionaries use square brackets.",
            "Lists cannot be modified, whereas dictionaries can be modified."
        ],
        answer: 1,
        explanation: "Lists are ordered sequences indexed by position integers (0, 1, 2...), while dictionaries store data as key-value lookup pairs."
    },
    {
        id: 19,
        question: "You want to print every key-value pair stored in a dictionary called student_profile. Which method returns both keys and values during loop iteration?",
        options: [
            "student_profile.items()",
            "student_profile.elements()",
            "student_profile.all()",
            "student_profile.values_keys()"
        ],
        answer: 0,
        explanation: "The .items() method returns a sequence of (key, value) tuple pairs for dictionary iteration."
    },
    {
        id: 20,
        question: "Given the list:\n\nprojects = ['Alpha', 'Beta', 'Gamma']\n\nWhich statement accesses the element 'Alpha'?",
        options: [
            "projects[1]",
            "projects[0]",
            "projects['Alpha']",
            "projects.first()"
        ],
        answer: 1,
        explanation: "Python lists use zero-based indexing, so the first element is at index 0."
    },
    {
        id: 21,
        question: "Which method is used to add a new element to the end of an existing Python list?",
        options: [
            "list.add()",
            "list.insert_end()",
            "list.append()",
            "list.push()"
        ],
        answer: 2,
        explanation: "The .append() method attaches an item to the end of an existing list."
    },
    {
        id: 22,
        question: "An application needs to store student record data where each item has a unique field label (e.g., 'ID': 101, 'Name': 'Maria', 'GWA': 1.25). Which data structure is most appropriate?",
        options: [
            "List",
            "Tuple",
            "Dictionary",
            "Set"
        ],
        answer: 2,
        explanation: "Dictionaries allow mapping specific descriptive field labels (keys) directly to corresponding values."
    },

    // --- TOPIC 5: GRAPHICAL USER INTERFACE USING TKINTER ---
    {
        id: 23,
        question: "In a Tkinter application, which keyword argument connects a Button widget click event to a function named process_data?",
        options: [
            "action=process_data",
            "command=process_data",
            "click=process_data",
            "event=process_data"
        ],
        answer: 1,
        explanation: "The 'command' option in Tkinter binds a function/callback to a widget action like a button click."
    },
    {
        id: 24,
        question: "When attaching a function callback to a Tkinter Button command option, why must you pass the function name without parentheses (e.g., command=process_data)?",
        options: [
            "Including parentheses executes the function immediately when the GUI builds rather than when clicked.",
            "Parentheses trigger a syntax error in Python GUI modules.",
            "Tkinter automatically converts function names into text strings.",
            "Parentheses prevent the GUI window from rendering."
        ],
        answer: 0,
        explanation: "Passing function() calls and executes the function immediately upon creation; passing function passes the reference to be called on click."
    },
    {
        id: 25,
        question: "Which Tkinter layout management manager arranges user interface widgets in a table-like structure of rows and columns?",
        options: [
            "pack()",
            "place()",
            "grid()",
            "align()"
        ],
        answer: 2,
        explanation: "The grid() layout manager organizes widgets into a 2D table composed of rows and columns."
    },
    {
        id: 26,
        question: "Which Tkinter widget layout manager places elements by specifying absolute x and y pixel coordinates on the screen?",
        options: [
            "grid()",
            "place()",
            "pack()",
            "layer()"
        ],
        answer: 1,
        explanation: "The place() manager enables exact positioning using coordinate specifications like x and y parameters."
    },
    {
        id: 27,
        question: "In Tkinter, what is the purpose of calling the mainloop() method on the root window object?",
        options: [
            "It compiles the Python script into an executable file.",
            "It initializes default color themes.",
            "It runs the event listener loop so the application responds to user interactions.",
            "It destroys the window after execution completes."
        ],
        answer: 2,
        explanation: "mainloop() starts Tkinter's event loop, keeping the window active and listening for user actions like button clicks and typing."
    },
    {
        id: 28,
        question: "Which statement correctly imports all classes and functions from the Tkinter library into a Python script?",
        options: [
            "import tkinter.all",
            "from tkinter import *",
            "using tkinter",
            "include <tkinter>"
        ],
        answer: 1,
        explanation: "In Python, 'from tkinter import *' imports all items from the tkinter module into the script namespace."
    },
    {
        id: 29,
        question: "What Tkinter widget is primarily used to display text or images on the screen that users cannot directly edit?",
        options: [
            "Entry",
            "Button",
            "Label",
            "Text"
        ],
        answer: 2,
        explanation: "Label widgets are designed to display static text or graphic elements on user interface forms."
    },
    {
        id: 30,
        question: "Which method is used on a Tkinter Entry widget to retrieve the current text entered by the user?",
        options: [
            "Entry.fetch()",
            "Entry.get()",
            "Entry.read()",
            "Entry.text()"
        ],
        answer: 1,
        explanation: "The .get() method retrieves the current string contents typed into an Entry input box."
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
