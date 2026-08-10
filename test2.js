// =====================================================
// TEST II - CODE COMPLETION REVIEWER
// 5 COMPLETE PROGRAMS
// 1 RANDOM PROGRAM PER SESSION
// EXACTLY 10 BLANKS PER PROGRAM
// SCORE: 10 POINTS
// =====================================================


// =====================================================
// QUESTION BANK
// =====================================================
// Every program contains:
// • Lists
// • Dictionaries
// • Conditionals
// • for loops
// • Functions
// • Parameters
// • return
// • Function calls
// • File handling
// • open()
// • write()
// • close()
//
// The themes and program logic are intentionally
// different from the quarterly examination.
// =====================================================

const codeBank = [

    // =================================================
    // CODE 1
    // FESTIVAL PLANNER
    // =================================================

    {
        title: "Festival Planner",
        topic:
            "Lists, Dictionaries, Loops, Conditionals, Functions and File Handling",

        parts: [

            // 1
            {
                blank: true,
                answer: "append",
                explanation:
                    "The append() method adds a new item to the end of a list."
            },

            { text: "events = [\"Opening\", \"Workshop\", \"Closing\"]" },
            { newline: true },

            { text: "events." },

            {
                blank: true,
                answer: "append",
                explanation:
                    "append() adds one new value to the existing list."
            },

            { text: "(\"Games\")" },
            { newline: true },

            {
                text:
                    "times = {\"Opening\": 8, \"Workshop\": 10, \"Closing\": 15, \"Games\": 17}"
            },
            { newline: true },

            // 2
            {
                blank: true,
                answer: "def",
                explanation:
                    "The def keyword begins a function definition in Python."
            },

            { text: " show_event(name):" },
            { newline: true },

            { text: "    " },

            // 3
            {
                blank: true,
                answer: "print",
                explanation:
                    "The print() function displays information on the screen."
            },

            { text: "(\"Event:\", name)" },
            { newline: true },

            { text: "    " },

            // 4
            {
                blank: true,
                answer: "return",
                explanation:
                    "The return statement sends a value back from a function."
            },

            { text: " times[name]" },
            { newline: true },

            // 5
            {
                blank: true,
                answer: "for",
                explanation:
                    "A for loop processes each item in a sequence such as a list."
            },

            { text: " event in events:" },
            { newline: true },

            { text: "    " },

            // 6
            {
                blank: true,
                answer: "if",
                explanation:
                    "The if statement allows the program to perform an action only when a condition is true."
            },

            { text: " event in times:" },
            { newline: true },

            { text: "        print(event, times[event])" },
            { newline: true },

            // 7
            { text: "file = " },

            {
                blank: true,
                answer: "open",
                explanation:
                    "The open() function opens or creates a file."
            },

            { text: "(\"festival_plan.txt\", \"w\")" },
            { newline: true },

            // 8
            { text: "file." },

            {
                blank: true,
                answer: "write",
                explanation:
                    "The write() method places text into an opened file."
            },

            { text: "(event + \"\\n\")" },
            { newline: true },

            // 9
            { text: "file." },

            {
                blank: true,
                answer: "close",
                explanation:
                    "The close() method closes the file after the program finishes writing."
            },

            { text: "()" },
            { newline: true },

            // 10
            {
                blank: true,
                answer: "show_event",
                explanation:
                    "A function call uses the function name followed by parentheses and supplies the required argument."
            },

            { text: "(\"Opening\")" }

        ]
    },


    // =================================================
    // CODE 2
    // PET ADOPTION TRACKER
    // =================================================

    {
        title: "Pet Adoption Tracker",
        topic:
            "Lists, Dictionaries, Loops, Conditionals, Functions and File Handling",

        parts: [

            // 1
            { text: "pets = [\"Milo\", \"Luna\", \"Coco\"]" },
            { newline: true },

            { text: "pets." },

            {
                blank: true,
                answer: "append",
                explanation:
                    "append() adds another pet name to the list."
            },

            { text: "(\"Max\")" },
            { newline: true },

            {
                text:
                    "status = {\"Milo\": \"Ready\", \"Luna\": \"Pending\", \"Coco\": \"Ready\", \"Max\": \"Ready\"}"
            },
            { newline: true },

            // 2
            {
                blank: true,
                answer: "def",
                explanation:
                    "The def keyword is used to define a function."
            },

            { text: " check_pet(name):" },
            { newline: true },

            { text: "    " },

            // 3
            {
                blank: true,
                answer: "print",
                explanation:
                    "print() displays the result of checking the pet."
            },

            { text: "(\"Checking:\", name)" },
            { newline: true },

            { text: "    " },

            // 4
            {
                blank: true,
                answer: "return",
                explanation:
                    "return sends the dictionary value back to the calling code."
            },

            { text: " status[name]" },
            { newline: true },

            // 5
            {
                blank: true,
                answer: "for",
                explanation:
                    "The for loop goes through each pet stored in the list."
            },

            { text: " pet in pets:" },
            { newline: true },

            { text: "    " },

            // 6
            {
                blank: true,
                answer: "if",
                explanation:
                    "The if statement checks whether the pet is currently ready."
            },

            { text: " status[pet] == \"Ready\":" },
            { newline: true },

            { text: "        print(pet, \"is ready for adoption.\")" },
            { newline: true },

            // 7
            { text: "file = " },

            {
                blank: true,
                answer: "open",
                explanation:
                    "open() opens or creates the file where the adoption list will be stored."
            },

            { text: "(\"adoption_list.txt\", \"w\")" },
            { newline: true },

            // 8
            { text: "file." },

            {
                blank: true,
                answer: "write",
                explanation:
                    "write() stores text inside the opened file."
            },

            { text: "(pet + \"\\n\")" },
            { newline: true },

            // 9
            { text: "file." },

            {
                blank: true,
                answer: "close",
                explanation:
                    "close() finishes the file operation and closes the file."
            },

            { text: "()" },
            { newline: true },

            // 10
            {
                blank: true,
                answer: "check_pet",
                explanation:
                    "check_pet(\"Milo\") is a function call. It sends \"Milo\" as the argument for the name parameter."
            },

            { text: "(\"Milo\")" }

        ]
    },


    // =================================================
    // CODE 3
    // STUDY PLANNER
    // =================================================

    {
        title: "Study Planner",
        topic:
            "Lists, Dictionaries, Loops, Conditionals, Functions and File Handling",

        parts: [

            // 1
            { text: "subjects = [\"Math\", \"Science\", \"English\"]" },
            { newline: true },

            { text: "subjects." },

            {
                blank: true,
                answer: "append",
                explanation:
                    "append() places a new subject at the end of the list."
            },

            { text: "(\"Python\")" },
            { newline: true },

            {
                text:
                    "minutes = {\"Math\": 30, \"Science\": 45, \"English\": 20, \"Python\": 60}"
            },
            { newline: true },

            // 2
            {
                blank: true,
                answer: "def",
                explanation:
                    "The def keyword starts a function definition."
            },

            { text: " study_time(subject):" },
            { newline: true },

            { text: "    " },

            // 3
            {
                blank: true,
                answer: "print",
                explanation:
                    "print() displays the subject being processed."
            },

            { text: "(\"Subject:\", subject)" },
            { newline: true },

            { text: "    " },

            // 4
            {
                blank: true,
                answer: "return",
                explanation:
                    "The return statement sends the number of minutes back to the caller."
            },

            { text: " minutes[subject]" },
            { newline: true },

            // 5
            {
                blank: true,
                answer: "for",
                explanation:
                    "The for loop processes every subject in the list."
            },

            { text: " subject in subjects:" },
            { newline: true },

            { text: "    " },

            // 6
            {
                blank: true,
                answer: "if",
                explanation:
                    "The if statement checks whether the subject requires a long study session."
            },

            { text: " minutes[subject] >= 45:" },
            { newline: true },

            { text: "        print(\"Long study session\")" },
            { newline: true },

            // 7
            { text: "file = " },

            {
                blank: true,
                answer: "open",
                explanation:
                    "open() opens the study-plan file in write mode."
            },

            { text: "(\"study_plan.txt\", \"w\")" },
            { newline: true },

            // 8
            { text: "file." },

            {
                blank: true,
                answer: "write",
                explanation:
                    "write() places the study information into the file."
            },

            { text: "(subject + \"\\n\")" },
            { newline: true },

            // 9
            { text: "file." },

            {
                blank: true,
                answer: "close",
                explanation:
                    "close() closes the file after writing is completed."
            },

            { text: "()" },
            { newline: true },

            // 10
            {
                blank: true,
                answer: "study_time",
                explanation:
                    "study_time(\"Python\") calls the function and passes \"Python\" to its subject parameter."
            },

            { text: "(\"Python\")" }

        ]
    },


    // =================================================
    // CODE 4
    // GAME QUEST TRACKER
    // =================================================

    {
        title: "Game Quest Tracker",
        topic:
            "Lists, Dictionaries, Loops, Conditionals, Functions and File Handling",

        parts: [

            // 1
            { text: "quests = [\"Forest\", \"Cave\", \"Castle\"]" },
            { newline: true },

            { text: "quests." },

            {
                blank: true,
                answer: "append",
                explanation:
                    "append() adds another quest to the existing list."
            },

            { text: "(\"Harbor\")" },
            { newline: true },

            {
                text:
                    "rewards = {\"Forest\": 100, \"Cave\": 250, \"Castle\": 500, \"Harbor\": 150}"
            },
            { newline: true },

            // 2
            {
                blank: true,
                answer: "def",
                explanation:
                    "The def keyword defines a reusable function."
            },

            { text: " get_reward(quest):" },
            { newline: true },

            { text: "    " },

            // 3
            {
                blank: true,
                answer: "print",
                explanation:
                    "print() displays the reward information."
            },

            { text: "(\"Quest:\", quest)" },
            { newline: true },

            { text: "    " },

            // 4
            {
                blank: true,
                answer: "return",
                explanation:
                    "return sends the reward value back from the function."
            },

            { text: " rewards[quest]" },
            { newline: true },

            // 5
            {
                blank: true,
                answer: "for",
                explanation:
                    "The for loop processes every quest in the list."
            },

            { text: " quest in quests:" },
            { newline: true },

            { text: "    " },

            // 6
            {
                blank: true,
                answer: "if",
                explanation:
                    "The if statement checks whether a quest has a reward of at least 200."
            },

            { text: " rewards[quest] >= 200:" },
            { newline: true },

            { text: "        print(\"High reward quest\")" },
            { newline: true },

            // 7
            { text: "file = " },

            {
                blank: true,
                answer: "open",
                explanation:
                    "open() opens or creates the quest file in write mode."
            },

            { text: "(\"quest_rewards.txt\", \"w\")" },
            { newline: true },

            // 8
            { text: "file." },

            {
                blank: true,
                answer: "write",
                explanation:
                    "write() saves the quest name into the file."
            },

            { text: "(quest + \"\\n\")" },
            { newline: true },

            // 9
            { text: "file." },

            {
                blank: true,
                answer: "close",
                explanation:
                    "close() closes the file after writing."
            },

            { text: "()" },
            { newline: true },

            // 10
            {
                blank: true,
                answer: "get_reward",
                explanation:
                    "get_reward(\"Castle\") is a function call. \"Castle\" is passed to the quest parameter."
            },

            { text: "(\"Castle\")" }

        ]
    },


    // =================================================
    // CODE 5
    // TRAVEL CHECKLIST
    // =================================================

    {
        title: "Travel Checklist",
        topic:
            "Lists, Dictionaries, Loops, Conditionals, Functions and File Handling",

        parts: [

            // 1
            { text: "places = [\"Manila\", \"Cebu\", \"Davao\"]" },
            { newline: true },

            { text: "places." },

            {
                blank: true,
                answer: "append",
                explanation:
                    "append() adds a new destination to the list."
            },

            { text: "(\"Iloilo\")" },
            { newline: true },

            {
                text:
                    "days = {\"Manila\": 3, \"Cebu\": 2, \"Davao\": 4, \"Iloilo\": 3}"
            },
            { newline: true },

            // 2
            {
                blank: true,
                answer: "def",
                explanation:
                    "The def keyword begins the definition of a function."
            },

            { text: " trip_days(city):" },
            { newline: true },

            { text: "    " },

            // 3
            {
                blank: true,
                answer: "print",
                explanation:
                    "print() displays the destination being processed."
            },

            { text: "(\"Destination:\", city)" },
            { newline: true },

            { text: "    " },

            // 4
            {
                blank: true,
                answer: "return",
                explanation:
                    "return sends the number of travel days back to the calling code."
            },

            { text: " days[city]" },
            { newline: true },

            // 5
            {
                blank: true,
                answer: "for",
                explanation:
                    "The for loop processes each destination stored in the list."
            },

            { text: " city in places:" },
            { newline: true },

            { text: "    " },

            // 6
            {
                blank: true,
                answer: "if",
                explanation:
                    "The if statement checks whether the trip lasts at least three days."
            },

            { text: " days[city] >= 3:" },
            { newline: true },

            { text: "        print(\"Extended trip\")" },
            { newline: true },

            // 7
            { text: "file = " },

            {
                blank: true,
                answer: "open",
                explanation:
                    "open() creates or opens the travel checklist file."
            },

            { text: "(\"travel_plan.txt\", \"w\")" },
            { newline: true },

            // 8
            { text: "file." },

            {
                blank: true,
                answer: "write",
                explanation:
                    "write() stores each destination in the file."
            },

            { text: "(city + \"\\n\")" },
            { newline: true },

            // 9
            { text: "file." },

            {
                blank: true,
                answer: "close",
                explanation:
                    "close() closes the file after all information has been written."
            },

            { text: "()" },
            { newline: true },

            // 10
            {
                blank: true,
                answer: "trip_days",
                explanation:
                    "trip_days(\"Davao\") calls the function and passes Davao as the argument."
            },

            { text: "(\"Davao\")" }

        ]
    }

];


// =====================================================
// VARIABLES
// =====================================================

let selectedCode = null;
let studentAnswers = [];


// =====================================================
// SHUFFLE
// =====================================================

function shuffle(array) {

    for (let i = array.length - 1; i > 0; i--) {

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
// COUNT BLANKS
// =====================================================

function countBlanks(code) {

    return code.parts.filter(
        part => part.blank
    ).length;

}


// =====================================================
// START TEST II
// =====================================================

function startTest2() {

    // Randomly select ONE complete program
    selectedCode =
        shuffle([...codeBank])[0];


    console.log(
        "Selected program:",
        selectedCode.title
    );


    console.log(
        "Number of blanks:",
        countBlanks(selectedCode)
    );


    studentAnswers = [];


    displayQuestions();

}


// =====================================================
// DISPLAY QUESTION
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


    const card =
        document.createElement("div");

    card.className =
        "code-question-card";


    // ---------------------------------------------
    // TITLE
    // ---------------------------------------------

    const title =
        document.createElement("h3");

    title.textContent =
        selectedCode.title;

    card.appendChild(title);


    // ---------------------------------------------
    // TOPIC
    // ---------------------------------------------

    const topic =
        document.createElement("div");

    topic.className =
        "question-topic";

    topic.textContent =
        selectedCode.topic;

    card.appendChild(topic);


    // ---------------------------------------------
    // CODE BOX
    // ---------------------------------------------

    const codeBox =
        document.createElement("div");

    codeBox.className =
        "code-box";


    let blankIndex = 0;


    selectedCode.parts.forEach(
        part => {

            // NEW LINE
            if (part.newline) {

                codeBox.appendChild(
                    document.createElement("br")
                );

                return;
            }


            // NORMAL TEXT
            if (part.text) {

                codeBox.appendChild(
                    document.createTextNode(
                        part.text
                    )
                );

                return;
            }


            // BLANK
            if (part.blank) {

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
                    blankIndex;


                codeBox.appendChild(
                    input
                );


                blankIndex++;

            }

        }
    );


    card.appendChild(
        codeBox
    );


    container.appendChild(
        card
    );

}


// =====================================================
// SUBMIT TEST II
// =====================================================

function submitTest2() {

    console.log(
        "SUBMIT TEST II CLICKED"
    );


    // ---------------------------------------------
    // FIND ALL BLANKS
    // ---------------------------------------------

    const inputs =
        document.querySelectorAll(
            ".code-blank"
        );


    console.log(
        "Number of input boxes:",
        inputs.length
    );


    // ---------------------------------------------
    // CHECK FOR 10 BLANKS
    // ---------------------------------------------

    if (
        inputs.length !== 10
    ) {

        alert(
            "There is a problem with this Test II question. Please inform your teacher."
        );


        console.error(
            "Expected 10 blanks but found:",
            inputs.length
        );


        return;

    }


    // ---------------------------------------------
    // READ ANSWERS
    // ---------------------------------------------

    studentAnswers = [];


    inputs.forEach(
        input => {

            studentAnswers.push(
                input.value.trim()
            );

        }
    );


    // ---------------------------------------------
    // CHECK EMPTY ANSWERS
    // ---------------------------------------------

    const unanswered =
        studentAnswers.filter(
            answer => answer === ""
        ).length;


    if (
        unanswered > 0
    ) {

        alert(
            "Please complete all 10 blanks before submitting."
        );


        return;

    }


    // ---------------------------------------------
    // CONFIRM
    // ---------------------------------------------

    const confirmed =
        confirm(
            "Are you sure you want to submit Test II?"
        );


    if (!confirmed) {

        return;

    }


    // ---------------------------------------------
    // CALCULATE SCORE
    // ---------------------------------------------

    let score = 0;

    let blankIndex = 0;


    selectedCode.parts.forEach(
        part => {

            if (!part.blank) {

                return;

            }


            const studentAnswer =
                studentAnswers[
                    blankIndex
                ];


            const correctAnswer =
                part.answer;


            console.log(
                "Checking:",
                studentAnswer,
                "| Correct:",
                correctAnswer
            );


            if (
                normalize(studentAnswer) ===
                normalize(correctAnswer)
            ) {

                score++;

            }


            blankIndex++;

        }
    );


    console.log(
        "FINAL SCORE:",
        score,
        "/ 10"
    );


    // ---------------------------------------------
    // SHOW SCORE
    // ---------------------------------------------

    const scoreArea =
        document.getElementById(
            "scoreArea"
        );


    if (!scoreArea) {

        console.error(
            "scoreArea was not found."
        );

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
            score + " / 10";

    }


    const scoreMessage =
        document.getElementById(
            "scoreMessage"
        );


    if (scoreMessage) {

        scoreMessage.textContent =
            "Click the RED answers to review the concepts you missed.";

    }


    // ---------------------------------------------
    // DISPLAY RESULTS
    // ---------------------------------------------

    displayResults();


    // ---------------------------------------------
    // DISABLE SUBMIT BUTTON
    // ---------------------------------------------

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


    // ---------------------------------------------
    // SCROLL TO SCORE
    // ---------------------------------------------

    scoreArea.scrollIntoView({
        behavior: "smooth"
    });

}


// =====================================================
// NORMALIZE ANSWERS
// =====================================================

function normalize(value) {

    return String(value)
        .trim()
        .toLowerCase();

}


// =====================================================
// DISPLAY RESULTS
// =====================================================

function displayResults() {

    const container =
        document.getElementById(
            "codeQuestionsContainer"
        );


    container.innerHTML = "";


    // ---------------------------------------------
    // REVIEW INSTRUCTION
    // ---------------------------------------------

    const instruction =
        document.createElement(
            "div"
        );


    instruction.className =
        "review-instruction";


    instruction.textContent =
        "Click the RED answers to review the concepts you missed.";


    container.appendChild(
        instruction
    );


    // ---------------------------------------------
    // CREATE CARD
    // ---------------------------------------------

    const card =
        document.createElement(
            "div"
        );


    card.className =
        "code-question-card";


    // ---------------------------------------------
    // TITLE
    // ---------------------------------------------

    const title =
        document.createElement(
            "h3"
        );


    title.textContent =
        selectedCode.title;


    card.appendChild(
        title
    );


    // ---------------------------------------------
    // TOPIC
    // ---------------------------------------------

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


    // ---------------------------------------------
    // CODE
    // ---------------------------------------------

    const codeBox =
        document.createElement(
            "div"
        );


    codeBox.className =
        "code-box submitted-code";


    let blankIndex = 0;


    selectedCode.parts.forEach(
        part => {

            // NEW LINE
            if (part.newline) {

                codeBox.appendChild(
                    document.createElement("br")
                );

                return;

            }


            // NORMAL TEXT
            if (part.text) {

                codeBox.appendChild(
                    document.createTextNode(
                        part.text
                    )
                );

                return;

            }


            // ANSWER
            if (part.blank) {

                const studentAnswer =
                    studentAnswers[
                        blankIndex
                    ];


                const correctAnswer =
                    part.answer;


                const answerSpan =
                    document.createElement(
                        "span"
                    );


                answerSpan.className =
                    "submitted-answer";


                answerSpan.textContent =
                    studentAnswer;


                const correct =
                    normalize(
                        studentAnswer
                    ) ===
                    normalize(
                        correctAnswer
                    );


                // --------------------------------
                // CORRECT
                // --------------------------------

                if (correct) {

                    answerSpan.classList.add(
                        "answer-correct"
                    );

                }


                // --------------------------------
                // WRONG
                // --------------------------------

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
                                studentAnswer,
                                correctAnswer,
                                part.explanation
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


    card.appendChild(
        codeBox
    );


    container.appendChild(
        card
    );

}


// =====================================================
// REVIEW POPUP
// =====================================================

function showExplanation(
    studentAnswer,
    correctAnswer,
    explanation
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


    box.innerHTML = `

        <button
            class="close-explanation"
            onclick="closeExplanation()">

            ×

        </button>


        <h3>
            Quick Review
        </h3>


        <p>
            <strong>Your answer:</strong>
            ${escapeHTML(studentAnswer)}
        </p>


        <p>
            <strong>Correct answer:</strong>
            ${escapeHTML(correctAnswer)}
        </p>


        <div class="explanation-text">

            ${escapeHTML(explanation)}

        </div>

    `;


    document.body.appendChild(
        box
    );

}


// =====================================================
// CLOSE REVIEW POPUP
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

    return String(text)

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
