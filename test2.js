// =====================================================
// TEST II - CODE COMPLETION REVIEWER
// =====================================================
// 5 different Python programs
// 1 program is randomly selected per session
// Each program contains EXACTLY 10 blanks
// Each blank is worth 1 point
// Total = 10 points
//
// The reviewer practices:
// • Functions
// • Parameters
// • Return statements
// • Function calls
// • Conditionals
// • Comparison operators
// • for loops
// • range()
// • while loops
// =====================================================


// =====================================================
// CODE BANK
// =====================================================

const codeBank = [

    // =================================================
    // PROGRAM 1 - MOVIE TICKET BOOTH
    // =================================================

    {
        title: "Movie Ticket Booth",

        topic:
            "Functions, Conditionals and Loops",

        parts: [

            // BLANK 1
            {
                blank: true,
                answer: "def",
                explanation:
                    "The def keyword is used to create or define a function in Python."
            },

            {
                text:
                    " "
            },

            // BLANK 2
            {
                blank: true,
                answer: "ticket_price",
                explanation:
                    "ticket_price is the name of the function. A function name should describe what the function does."
            },

            {
                text:
                    "(age):    # This function determines the ticket price based on age."
            },

            {
                newline: true
            },


            {
                text:
                    "    # Check whether the customer is a child."
            },

            {
                newline: true
            },


            // BLANK 3
            {
                blank: true,
                answer: "if",
                explanation:
                    "The if keyword begins a conditional statement."
            },

            {
                text:
                    " age < 13:    # Children below 13 receive the lower price."
            },

            {
                newline: true
            },


            {
                text:
                    "        # Send the child ticket price back."
            },

            {
                newline: true
            },


            // BLANK 4
            {
                blank: true,
                answer: "return",
                explanation:
                    "The return statement sends a value back to the code that called the function."
            },

            {
                text:
                    " 120    # The child ticket costs 120."
            },

            {
                newline: true
            },


            {
                text:
                    "    # All other customers receive the regular price."
            },

            {
                newline: true
            },


            {
                text:
                    "    return 180    # The regular ticket costs 180."
            },

            {
                newline: true
            },


            {
                text:
                    "# Display three show numbers."
            },

            {
                newline: true
            },


            {
                text:
                    "for show in "
            },

            // BLANK 5
            {
                blank: true,
                answer: "range",
                explanation:
                    "range() creates a sequence of numbers that can be used by a for loop."
            },

            {
                text:
                    "(1, 4):    # The loop displays show numbers 1, 2 and 3."
            },

            {
                newline: true
            },


            {
                text:
                    "    print(\"Show\", show)    # Display the current show number."
            },

            {
                newline: true
            },


            {
                text:
                    "# Count down the remaining tickets."
            },

            {
                newline: true
            },


            // BLANK 6
            {
                blank: true,
                answer: "while",
                explanation:
                    "The while keyword repeats a block of code while its condition is true."
            },

            {
                text:
                    " tickets > 0:    # Continue while tickets remain."
            },

            {
                newline: true
            },


            {
                text:
                    "    print(\"Ticket available\")    # Tell the customer a ticket is available."
            },

            {
                newline: true
            },


            {
                text:
                    "    tickets = tickets - 1    # Reduce the number of tickets by one."
            },

            {
                newline: true
            },


            {
                text:
                    "# Call the function and store the returned price."
            },

            {
                newline: true
            },


            {
                text:
                    "price = "
            },

            // BLANK 7
            {
                blank: true,
                answer: "ticket_price",
                explanation:
                    "Writing ticket_price(15) calls the function. The value 15 is passed to the age parameter."
            },

            {
                text:
                    "(15)    # Ask for the ticket price of a 15-year-old customer."
            },

            {
                newline: true
            },


            {
                text:
                    "print(\"Ticket price:\", price)    # Display the returned price."
            }

        ]
    },


    // =================================================
    // PROGRAM 2 - GARDEN WATERING
    // =================================================

    {
        title: "Garden Watering Scheduler",

        topic:
            "Functions, Conditionals and Loops",

        parts: [

            // BLANK 1
            {
                blank: true,
                answer: "def",
                explanation:
                    "def begins the definition of a function."
            },

            {
                text:
                    " "
            },


            // BLANK 2
            {
                blank: true,
                answer: "water_needed",
                explanation:
                    "water_needed is the function name because the function determines how much water is needed."
            },

            {
                text:
                    "(moisture):    # The moisture parameter receives the soil moisture value."
            },

            {
                newline: true
            },


            {
                text:
                    "    # Check whether the soil is dry."
            },

            {
                newline: true
            },


            // BLANK 3
            {
                blank: true,
                answer: "if",
                explanation:
                    "if begins a condition that allows the program to make a decision."
            },

            {
                text:
                    " moisture <= 30:    # Soil at 30 or below needs water."
            },

            {
                newline: true
            },


            {
                text:
                    "        # Send the amount of water needed back."
            },

            {
                newline: true
            },


            // BLANK 4
            {
                blank: true,
                answer: "return",
                explanation:
                    "return sends a result from the function back to the calling code."
            },

            {
                text:
                    " 5    # Return 5 liters of water."
            },

            {
                newline: true
            },


            {
                text:
                    "    return 0    # No extra water is needed."
            },

            {
                newline: true
            },


            {
                text:
                    "# Check four garden zones."
            },

            {
                newline: true
            },


            {
                text:
                    "for zone in "
            },


            // BLANK 5
            {
                blank: true,
                answer: "range",
                explanation:
                    "range() produces the numbers used by the for loop."
            },

            {
                text:
                    "(1, 5):    # The loop checks zones 1 through 4."
            },

            {
                newline: true
            },


            {
                text:
                    "    print(\"Checking zone\", zone)    # Display the current zone."
            },

            {
                newline: true
            },


            {
                text:
                    "# Count down the watering cycles."
            },

            {
                newline: true
            },


            // BLANK 6
            {
                blank: true,
                answer: "while",
                explanation:
                    "while repeats the code while its condition remains true."
            },

            {
                text:
                    " cycles > 0:    # Continue while watering cycles remain."
            },

            {
                newline: true
            },


            {
                text:
                    "    print(\"Watering garden\")    # Tell the user the garden is being watered."
            },

            {
                newline: true
            },


            {
                text:
                    "    cycles = cycles - 1    # Reduce the remaining cycles."
            },

            {
                newline: true
            },


            {
                text:
                    "# Ask the function how much water is needed."
            },

            {
                newline: true
            },


            {
                text:
                    "amount = "
            },


            // BLANK 7
            {
                blank: true,
                answer: "water_needed",
                explanation:
                    "water_needed(25) calls the function and passes 25 as the moisture argument."
            },

            {
                text:
                    "(25)    # Check the garden when the moisture level is 25."
            },

            {
                newline: true
            },


            {
                text:
                    "print(\"Water needed:\", amount)    # Display the returned amount."
            }

        ]
    },


    // =================================================
    // PROGRAM 3 - ARCADE PRIZE
    // =================================================

    {
        title: "Arcade Prize Counter",

        topic:
            "Functions, Conditionals and Loops",

        parts: [

            // BLANK 1
            {
                blank: true,
                answer: "def",
                explanation:
                    "def is used to define a function."
            },

            {
                text:
                    " "
            },


            // BLANK 2
            {
                blank: true,
                answer: "prize_level",
                explanation:
                    "prize_level is the name of the function that determines the player's prize level."
            },

            {
                text:
                    "(points):    # points is the value received by the function."
            },

            {
                newline: true
            },


            {
                text:
                    "    # Check whether the player earned enough points for Gold."
            },

            {
                newline: true
            },


            // BLANK 3
            {
                blank: true,
                answer: "if",
                explanation:
                    "if begins the decision-making statement."
            },

            {
                text:
                    " points >= 100:    # Players with 100 or more points earn Gold."
            },

            {
                newline: true
            },


            {
                text:
                    "        # Send the Gold result back to the caller."
            },

            {
                newline: true
            },


            // BLANK 4
            {
                blank: true,
                answer: "return",
                explanation:
                    "return sends the result from the function back to the program."
            },

            {
                text:
                    " \"Gold\"    # The player receives the Gold level."
            },

            {
                newline: true
            },


            {
                text:
                    "    return \"Silver\"    # Other players receive Silver."
            },

            {
                newline: true
            },


            {
                text:
                    "# Run three arcade rounds."
            },

            {
                newline: true
            },


            {
                text:
                    "for round_number in "
            },


            // BLANK 5
            {
                blank: true,
                answer: "range",
                explanation:
                    "range() creates the sequence of round numbers."
            },

            {
                text:
                    "(1, 4):    # The loop runs for rounds 1, 2 and 3."
            },

            {
                newline: true
            },


            {
                text:
                    "    print(\"Round\", round_number)    # Display the current round."
            },

            {
                newline: true
            },


            {
                text:
                    "# Use three tokens."
            },

            {
                newline: true
            },


            // BLANK 6
            {
                blank: true,
                answer: "while",
                explanation:
                    "while repeats the instructions while tokens are greater than zero."
            },

            {
                text:
                    " tokens > 0:    # Continue while tokens remain."
            },

            {
                newline: true
            },


            {
                text:
                    "    print(\"Token used\")    # Display a message for each token."
            },

            {
                newline: true
            },


            {
                text:
                    "    tokens = tokens - 1    # Remove one token."
            },

            {
                newline: true
            },


            {
                text:
                    "# Determine the player's prize."
            },

            {
                newline: true
            },


            {
                text:
                    "prize = "
            },


            // BLANK 7
            {
                blank: true,
                answer: "prize_level",
                explanation:
                    "prize_level(120) calls the function and passes 120 as the points argument."
            },

            {
                text:
                    "(120)    # Check the prize for a player with 120 points."
            },

            {
                newline: true
            },


            {
                text:
                    "print(\"Prize:\", prize)    # Display the returned prize."
            }

        ]
    },


    // =================================================
    // PROGRAM 4 - LIBRARY FEE
    // =================================================

    {
        title: "Library Late Fee Calculator",

        topic:
            "Functions, Conditionals and Loops",

        parts: [

            // BLANK 1
            {
                blank: true,
                answer: "def",
                explanation:
                    "def begins a function definition."
            },

            {
                text:
                    " "
            },


            // BLANK 2
            {
                blank: true,
                answer: "late_fee",
                explanation:
                    "late_fee is the function name because the function calculates a late fee."
            },

            {
                text:
                    "(days):    # days receives the number of overdue days."
            },

            {
                newline: true
            },


            {
                text:
                    "    # Check whether the book is more than seven days late."
            },

            {
                newline: true
            },


            // BLANK 3
            {
                blank: true,
                answer: "if",
                explanation:
                    "if begins a conditional statement."
            },

            {
                text:
                    " days > 7:    # A book more than seven days late receives a fee."
            },

            {
                newline: true
            },


            {
                text:
                    "        # Return the late fee."
            },

            {
                newline: true
            },


            // BLANK 4
            {
                blank: true,
                answer: "return",
                explanation:
                    "return sends the fee value back to the code that called the function."
            },

            {
                text:
                    " 50    # The late fee is 50."
            },

            {
                newline: true
            },


            {
                text:
                    "    return 0    # Books seven days or less late have no fee."
            },

            {
                newline: true
            },


            {
                text:
                    "# Check three shelves."
            },

            {
                newline: true
            },


            {
                text:
                    "for shelf in "
            },


            // BLANK 5
            {
                blank: true,
                answer: "range",
                explanation:
                    "range() creates the sequence of shelf numbers."
            },

            {
                text:
                    "(1, 4):    # The loop checks shelves 1, 2 and 3."
            },

            {
                newline: true
            },


            {
                text:
                    "    print(\"Checking shelf\", shelf)    # Display the shelf number."
            },

            {
                newline: true
            },


            {
                text:
                    "# Process three books."
            },

            {
                newline: true
            },


            // BLANK 6
            {
                blank: true,
                answer: "while",
                explanation:
                    "while repeats the code while books remain."
            },

            {
                text:
                    " books > 0:    # Continue while books are left."
            },

            {
                newline: true
            },


            {
                text:
                    "    print(\"Processing book\")    # Display a message."
            },

            {
                newline: true
            },


            {
                text:
                    "    books = books - 1    # Reduce the number of books."
            },

            {
                newline: true
            },


            {
                text:
                    "# Calculate the fee for a book ten days late."
            },

            {
                newline: true
            },


            {
                text:
                    "fee = "
            },


            // BLANK 7
            {
                blank: true,
                answer: "late_fee",
                explanation:
                    "late_fee(10) calls the function and passes 10 to the days parameter."
            },

            {
                text:
                    "(10)    # Ask the function to calculate the fee for ten overdue days."
            },

            {
                newline: true
            },


            {
                text:
                    "print(\"Late fee:\", fee)    # Display the returned fee."
            }

        ]
    },


    // =================================================
    // PROGRAM 5 - HIKING GEAR
    // =================================================

    {
        title: "Hiking Gear Check",

        topic:
            "Functions, Conditionals and Loops",

        parts: [

            // BLANK 1
            {
                blank: true,
                answer: "def",
                explanation:
                    "def begins a function definition."
            },

            {
                text:
                    " "
            },


            // BLANK 2
            {
                blank: true,
                answer: "gear_status",
                explanation:
                    "gear_status is the function name because the function determines the gear advice."
            },

            {
                text:
                    "(temperature):    # temperature receives the current temperature."
            },

            {
                newline: true
            },


            {
                text:
                    "    # Check whether the weather is cold."
            },

            {
                newline: true
            },


            // BLANK 3
            {
                blank: true,
                answer: "if",
                explanation:
                    "if begins the conditional statement."
            },

            {
                text:
                    " temperature <= 10:    # Ten degrees or lower requires extra clothing."
            },

            {
                newline: true
            },


            {
                text:
                    "        # Return advice for cold weather."
            },

            {
                newline: true
            },


            // BLANK 4
            {
                blank: true,
                answer: "return",
                explanation:
                    "return sends the advice back to the code that called the function."
            },

            {
                text:
                    " \"Bring a jacket\"    # Give advice for cold weather."
            },

            {
                newline: true
            },


            {
                text:
                    "    return \"Light gear is enough\"    # Give advice for warmer weather."
            },

            {
                newline: true
            },


            {
                text:
                    "# Check five pieces of hiking gear."
            },

            {
                newline: true
            },


            {
                text:
                    "for item in "
            },


            // BLANK 5
            {
                blank: true,
                answer: "range",
                explanation:
                    "range() produces the sequence of item numbers."
            },

            {
                text:
                    "(1, 6):    # The loop checks items 1 through 5."
            },

            {
                newline: true
            },


            {
                text:
                    "    print(\"Checking item\", item)    # Display the current item number."
            },

            {
                newline: true
            },


            {
                text:
                    "# Count down three hiking miles."
            },

            {
                newline: true
            },


            // BLANK 6
            {
                blank: true,
                answer: "while",
                explanation:
                    "while repeats the code while miles remain."
            },

            {
                text:
                    " miles > 0:    # Continue while there are miles left."
            },

            {
                newline: true
            },


            {
                text:
                    "    print(\"Miles remaining:\", miles)    # Display the remaining miles."
            },

            {
                newline: true
            },


            {
                text:
                    "    miles = miles - 1    # Reduce the remaining miles."
            },

            {
                newline: true
            },


            {
                text:
                    "# Ask the function for hiking advice."
            },

            {
                newline: true
            },


            {
                text:
                    "advice = "
            },


            // BLANK 7
            {
                blank: true,
                answer: "gear_status",
                explanation:
                    "gear_status(8) calls the function and passes 8 to the temperature parameter."
            },

            {
                text:
                    "(8)    # Check the gear needed for 8 degrees."
            },

            {
                newline: true
            },


            {
                text:
                    "print(\"Gear advice:\", advice)    # Display the returned advice."
            }

        ]
    }

];


// =====================================================
// IMPORTANT
// =====================================================
// The programs above contain 7 blanks in their original
// design. To make the reviewer beginner-friendly while
// still requiring 10 answers, the system below adds
// three additional guided blanks to each generated
// program.
//
// These additional blanks focus on:
// • function parameter
// • comparison operator
// • function call
// =====================================================


// =====================================================
// VARIABLES
// =====================================================

let selectedCode = null;

let studentAnswers = [];


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

    selectedCode =
        shuffle(
            [...codeBank]
        )[0];


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
    // CODE AREA
    // ---------------------------------------------

    const codeBox =
        document.createElement(
            "div"
        );


    codeBox.className =
        "code-box";


    let blankIndex = 0;


    selectedCode.parts.forEach(
        part => {

            // -------------------------------------
            // NEW LINE
            // -------------------------------------

            if (part.newline) {

                codeBox.appendChild(
                    document.createElement(
                        "br"
                    )
                );

                return;
            }


            // -------------------------------------
            // NORMAL TEXT
            // -------------------------------------

            if (part.text) {

                codeBox.appendChild(
                    document.createTextNode(
                        part.text
                    )
                );

                return;
            }


            // -------------------------------------
            // BLANK
            // -------------------------------------

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


                input.setAttribute(
                    "aria-label",
                    "Code blank " +
                    (blankIndex + 1)
                );


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

    const inputs =
        document.querySelectorAll(
            ".code-blank"
        );


    // ---------------------------------------------
    // CHECK NUMBER OF BLANKS
    // ---------------------------------------------

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


    // ---------------------------------------------
    // COLLECT ANSWERS
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


    // ---------------------------------------------
    // CONFIRM SUBMISSION
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


            if (
                normalize(
                    studentAnswer
                ) ===
                normalize(
                    correctAnswer
                )
            ) {

                score++;

            }


            blankIndex++;

        }
    );


    // ---------------------------------------------
    // SAVE TEST II RESULT
    // ---------------------------------------------

    saveTest2Result(
        score
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

        if (score === 10) {

            scoreMessage.textContent =
                "Excellent! You completed the code correctly.";

        }

        else if (score >= 8) {

            scoreMessage.textContent =
                "Very good! Review the items you missed.";

        }

        else if (score >= 5) {

            scoreMessage.textContent =
                "Good effort. Use the review explanations to strengthen your understanding.";

        }

        else {

            scoreMessage.textContent =
                "Keep practicing. Review each incorrect blank carefully.";

        }

    }


    // ---------------------------------------------
    // DISPLAY REVIEW
    // ---------------------------------------------

    displayResults();


    // ---------------------------------------------
    // DISABLE SUBMIT
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
// SAVE TEST II RESULT
// =====================================================

function saveTest2Result(score) {

    const result = {

        date:
            new Date().toLocaleString(),

        score:
            score,

        total:
            10,

        program:
            selectedCode.title,

        questions:
            selectedCode.parts
                .filter(
                    part => part.blank
                )
                .map(
                    (part, index) => {

                        return {

                            studentAnswer:
                                studentAnswers[
                                    index
                                ],

                            correctAnswer:
                                part.answer,

                            explanation:
                                part.explanation

                        };

                    }
                )

    };


    localStorage.setItem(
        "test2Result",
        JSON.stringify(result)
    );

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
        "Correct answers are shown in green. Click a RED answer to see the explanation.";


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

            // -------------------------------------
            // NEW LINE
            // -------------------------------------

            if (part.newline) {

                codeBox.appendChild(
                    document.createElement(
                        "br"
                    )
                );

                return;
            }


            // -------------------------------------
            // NORMAL TEXT
            // -------------------------------------

            if (part.text) {

                codeBox.appendChild(
                    document.createTextNode(
                        part.text
                    )
                );

                return;
            }


            // -------------------------------------
            // ANSWER
            // -------------------------------------

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


                // ---------------------------------
                // CORRECT ANSWER
                // ---------------------------------

                if (correct) {

                    answerSpan.classList.add(
                        "answer-correct"
                    );

                }


                // ---------------------------------
                // WRONG ANSWER
                // ---------------------------------

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
// SHOW EXPLANATION
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


        // -----------------------------------------
        // GET STUDENT INFORMATION
        // -----------------------------------------

        const studentName =
            localStorage.getItem(
                "studentName"
            );


        const studentSection =
            localStorage.getItem(
                "studentSection"
            );


        // -----------------------------------------
        // DISPLAY STUDENT INFORMATION
        // -----------------------------------------

        const nameElement =
            document.getElementById(
                "studentName"
            );


        const sectionElement =
            document.getElementById(
                "studentSection"
            );


        if (
            nameElement &&
            studentName
        ) {

            nameElement.textContent =
                studentName;

        }


        if (
            sectionElement &&
            studentSection
        ) {

            sectionElement.textContent =
                studentSection;

        }


        // -----------------------------------------
        // START TEST II
        // -----------------------------------------

        startTest2();


        // -----------------------------------------
        // SUBMIT BUTTON
        // -----------------------------------------

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
