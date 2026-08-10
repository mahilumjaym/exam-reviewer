// =====================================================
// TEST II - PYTHON CODE COMPLETION REVIEWER
// =====================================================
// Five different Python programs are available.
//
// One program is randomly selected for each session.
//
// Every program contains EXACTLY 10 blanks.
//
// Each blank is worth 1 point.
// Total score = 10 points.
//
// The reviewer practices:
// • Functions
// • Function names
// • Parameters
// • Conditionals
// • Comparison operators
// • Return statements
// • for loops
// • range()
// • while loops
// • Function calls
// • File handling
//
// The Python code displayed to students uses comments
// on every line to explain what the line is doing.
// =====================================================


// =====================================================
// HELPER FUNCTIONS FOR BUILDING CODE
// =====================================================

// Create a normal text part of the Python code.
function text(value) {

    return {
        text: value
    };

}


// Create a new-line part of the Python code.
function newline() {

    return {
        newline: true
    };

}


// Create a blank that the student must answer.
function blank(answer, explanation) {

    return {

        blank: true,

        answer: answer,

        explanation: explanation

    };

}


// =====================================================
// QUESTION BANK
// =====================================================

const codeBank = [

    // =================================================
    // PROGRAM 1
    // ATTENDANCE STATUS
    // =================================================

    {
        title:
            "Attendance Status",

        topic:
            "Functions, Conditionals and Loops",

        parts: [

            // -------------------------------------------------
            // BLANK 1 - def
            // -------------------------------------------------

            text(
                "# Define a function that determines an attendance status."
            ),

            newline(),

            blank(
                "def",
                "The def keyword is used to define a function in Python."
            ),

            text(
                " attendance_status("
            ),


            // -------------------------------------------------
            // BLANK 3 - parameter
            // -------------------------------------------------

            blank(
                "score",
                "score is the parameter. It receives the attendance score when the function is called."
            ),

            text(
                "):    # The score parameter stores the student's attendance score."
            ),

            newline(),


            // -------------------------------------------------
            // BLANK 4 - if
            // -------------------------------------------------

            text(
                "    # Check whether the attendance score is high enough."
            ),

            newline(),

            text(
                "    "
            ),

            blank(
                "if",
                "The if keyword begins a conditional statement."
            ),

            text(
                " score "
            ),


            // -------------------------------------------------
            // BLANK 5 - comparison operator
            // -------------------------------------------------

            blank(
                ">=",
                "The >= operator means greater than or equal to."
            ),

            text(
                " 75:    # A score of 75 or higher meets the requirement."
            ),

            newline(),


            // -------------------------------------------------
            // BLANK 6 - return
            // -------------------------------------------------

            text(
                "        # Return the attendance result when the condition is true."
            ),

            newline(),

            text(
                "        "
            ),

            blank(
                "return",
                "The return statement sends a value back to the code that called the function."
            ),

            text(
                " \"Good Attendance\"    # Return the message for a passing attendance score."
            ),

            newline(),


            text(
                "    else:    # This block runs when the first condition is false."
            ),

            newline(),

            text(
                "        return \"Needs Improvement\"    # Return the message for a lower score."
            ),

            newline(),


            // -------------------------------------------------
            // BLANK 7 - for
            // -------------------------------------------------

            text(
                "# Check the attendance of three sample days."
            ),

            newline(),

            blank(
                "for",
                "The for keyword begins a loop that repeats for each value in a sequence."
            ),

            text(
                " day in "
            ),


            // -------------------------------------------------
            // BLANK 8 - range
            // -------------------------------------------------

            blank(
                "range",
                "range() creates a sequence of numbers for the for loop."
            ),

            text(
                "(1, 4):    # The loop checks days 1, 2 and 3."
            ),

            newline(),

            text(
                "    print(\"Checking day:\", day)    # Display the current day number."
            ),

            newline(),


            // -------------------------------------------------
            // BLANK 9 - while
            // -------------------------------------------------

            text(
                "attempts = 3    # Start with three available attendance checks."
            ),

            newline(),

            blank(
                "while",
                "The while keyword repeats code while its condition is true."
            ),

            text(
                " attempts > 0:    # Continue while there are attempts remaining."
            ),

            newline(),

            text(
                "    print(\"Attendance checked\")    # Display a message for the current check."
            ),

            newline(),

            text(
                "    attempts = attempts - 1    # Reduce the remaining attempts by one."
            ),

            newline(),


            // -------------------------------------------------
            // BLANK 10 - function call
            // -------------------------------------------------

            text(
                "# Call the function using an attendance score of 85."
            ),

            newline(),

            text(
                "status = "
            ),

            blank(
                "attendance_status",
                "attendance_status(85) calls the function and passes 85 to the score parameter."
            ),

            text(
                "(85)    # Pass 85 as the attendance score."
            ),

            newline(),

            text(
                "print(\"Status:\", status)    # Display the result returned by the function."
            )

        ]

    },


    // =================================================
    // PROGRAM 2
    // CANTEEN ORDER
    // =================================================

    {
        title:
            "Canteen Order Checker",

        topic:
            "Functions, Conditionals and Loops",

        parts: [

            // BLANK 1

            text(
                "# Define a function that determines the order message."
            ),

            newline(),

            blank(
                "def",
                "The def keyword is used to define a function."
            ),

            text(
                " order_status("
            ),


            // BLANK 3

            blank(
                "total",
                "total is the parameter that receives the customer's order amount."
            ),

            text(
                "):    # The total parameter stores the order amount."
            ),

            newline(),


            // BLANK 4

            text(
                "    # Check whether the order reaches the free-delivery amount."
            ),

            newline(),

            text(
                "    "
            ),

            blank(
                "if",
                "The if keyword begins the condition used to make the decision."
            ),

            text(
                " total "
            ),


            // BLANK 5

            blank(
                ">=",
                "The >= operator checks whether total is greater than or equal to 100."
            ),

            text(
                " 100:    # Orders of 100 or more qualify for free delivery."
            ),

            newline(),


            // BLANK 6

            text(
                "        # Return the message for qualifying orders."
            ),

            newline(),

            text(
                "        "
            ),

            blank(
                "return",
                "The return statement sends the result back to the code that called the function."
            ),

            text(
                " \"Free Delivery\"    # Return the free-delivery message."
            ),

            newline(),


            text(
                "    else:    # This block handles orders below 100."
            ),

            newline(),

            text(
                "        return \"Regular Delivery\"    # Return the regular delivery message."
            ),

            newline(),


            // BLANK 7

            text(
                "# Display three sample order numbers."
            ),

            newline(),

            blank(
                "for",
                "The for keyword begins a loop that goes through a sequence."
            ),

            text(
                " order_number in "
            ),


            // BLANK 8

            blank(
                "range",
                "range() creates the sequence of numbers used by the loop."
            ),

            text(
                "(1, 4):    # The loop displays order numbers 1, 2 and 3."
            ),

            newline(),

            text(
                "    print(\"Order:\", order_number)    # Display the current order number."
            ),

            newline(),


            // BLANK 9

            text(
                "orders_left = 2    # Start with two orders waiting to be processed."
            ),

            newline(),

            blank(
                "while",
                "The while keyword repeats the block while orders remain."
            ),

            text(
                " orders_left > 0:    # Continue while at least one order remains."
            ),

            newline(),

            text(
                "    print(\"Processing order\")    # Display a processing message."
            ),

            newline(),

            text(
                "    orders_left = orders_left - 1    # Reduce the number of waiting orders."
            ),

            newline(),


            // BLANK 10

            text(
                "# Call the function for an order worth 150."
            ),

            newline(),

            text(
                "message = "
            ),

            blank(
                "order_status",
                "order_status(150) calls the function and passes 150 to the total parameter."
            ),

            text(
                "(150)    # Pass 150 as the order total."
            ),

            newline(),

            text(
                "print(\"Order message:\", message)    # Display the returned message."
            )

        ]

    },


    // =================================================
    // PROGRAM 3
    // LIBRARY RETURN CHECKER
    // =================================================

    {
        title:
            "Library Return Checker",

        topic:
            "Functions, Conditionals and Loops",

        parts: [

            // BLANK 1

            text(
                "# Define a function that checks whether a book is overdue."
            ),

            newline(),

            blank(
                "def",
                "The def keyword begins a function definition."
            ),

            text(
                " library_status("
            ),


            // BLANK 3

            blank(
                "days",
                "days is the parameter that receives the number of overdue days."
            ),

            text(
                "):    # The days parameter stores the number of days borrowed."
            ),

            newline(),


            // BLANK 4

            text(
                "    # Check whether the book has been borrowed for more than 14 days."
            ),

            newline(),

            text(
                "    "
            ),

            blank(
                "if",
                "The if keyword begins the condition."
            ),

            text(
                " days "
            ),


            // BLANK 5

            blank(
                ">",
                "The > operator means greater than."
            ),

            text(
                " 14:    # More than 14 days means the book is overdue."
            ),

            newline(),


            // BLANK 6

            text(
                "        # Send the overdue message back to the caller."
            ),

            newline(),

            text(
                "        "
            ),

            blank(
                "return",
                "return sends a result from the function back to the calling code."
            ),

            text(
                " \"Overdue\"    # Return the overdue status."
            ),

            newline(),


            text(
                "    else:    # This block handles books that are not overdue."
            ),

            newline(),

            text(
                "        return \"On Time\"    # Return the on-time status."
            ),

            newline(),


            // BLANK 7

            text(
                "# Check three library shelves."
            ),

            newline(),

            blank(
                "for",
                "The for keyword begins a loop that repeats through a sequence."
            ),

            text(
                " shelf in "
            ),


            // BLANK 8

            blank(
                "range",
                "range() creates the sequence of shelf numbers."
            ),

            text(
                "(1, 4):    # The loop checks shelves 1, 2 and 3."
            ),

            newline(),

            text(
                "    print(\"Checking shelf:\", shelf)    # Display the current shelf number."
            ),

            newline(),


            // BLANK 9

            text(
                "books_left = 3    # Start with three books waiting to be processed."
            ),

            newline(),

            blank(
                "while",
                "The while keyword repeats the block while the condition is true."
            ),

            text(
                " books_left > 0:    # Continue while books remain."
            ),

            newline(),

            text(
                "    print(\"Processing book\")    # Display a processing message."
            ),

            newline(),

            text(
                "    books_left = books_left - 1    # Reduce the number of books left."
            ),

            newline(),


            // BLANK 10

            text(
                "# Call the function for a book borrowed for 18 days."
            ),

            newline(),

            text(
                "status = "
            ),

            blank(
                "library_status",
                "library_status(18) calls the function and passes 18 to the days parameter."
            ),

            text(
                "(18)    # Pass 18 as the number of days."
            ),

            newline(),

            text(
                "print(\"Book status:\", status)    # Display the result returned by the function."
            )

        ]

    },


    // =================================================
    // PROGRAM 4
    // STUDY PROGRESS
    // =================================================

    {
        title:
            "Study Progress Tracker",

        topic:
            "Functions, Conditionals and Loops",

        parts: [

            // BLANK 1

            text(
                "# Define a function that evaluates a student's study score."
            ),

            newline(),

            blank(
                "def",
                "The def keyword is used to define a function."
            ),

            text(
                " study_status("
            ),


            // BLANK 3

            blank(
                "score",
                "score is the parameter that receives the student's study score."
            ),

            text(
                "):    # The score parameter stores the study score."
            ),

            newline(),


            // BLANK 4

            text(
                "    # Check whether the study score reaches the target."
            ),

            newline(),

            text(
                "    "
            ),

            blank(
                "if",
                "The if keyword begins a conditional statement."
            ),

            text(
                " score "
            ),


            // BLANK 5

            blank(
                ">=",
                "The >= operator means greater than or equal to."
            ),

            text(
                " 80:    # A score of 80 or higher reaches the target."
            ),

            newline(),


            // BLANK 6

            text(
                "        # Return the message for students who reached the target."
            ),

            newline(),

            text(
                "        "
            ),

            blank(
                "return",
                "The return statement sends a value back to the code that called the function."
            ),

            text(
                " \"Target Reached\"    # Return the successful study status."
            ),

            newline(),


            text(
                "    else:    # This block handles scores below the target."
            ),

            newline(),

            text(
                "        return \"Keep Practicing\"    # Encourage more study practice."
            ),

            newline(),


            // BLANK 7

            text(
                "# Display four study-session numbers."
            ),

            newline(),

            blank(
                "for",
                "The for keyword starts a loop that repeats for each value in a sequence."
            ),

            text(
                " session in "
            ),


            // BLANK 8

            blank(
                "range",
                "range() creates the sequence used by the for loop."
            ),

            text(
                "(1, 5):    # The loop displays sessions 1, 2, 3 and 4."
            ),

            newline(),

            text(
                "    print(\"Study session:\", session)    # Display the current study session."
            ),

            newline(),


            // BLANK 9

            text(
                "minutes = 3    # Start with three minutes in this sample timer."
            ),

            newline(),

            blank(
                "while",
                "The while keyword repeats the instructions while the condition is true."
            ),

            text(
                " minutes > 0:    # Continue while study minutes remain."
            ),

            newline(),

            text(
                "    print(\"Keep studying\")    # Display a study reminder."
            ),

            newline(),

            text(
                "    minutes = minutes - 1    # Reduce the remaining minutes by one."
            ),

            newline(),


            // BLANK 10

            text(
                "# Call the function with a study score of 85."
            ),

            newline(),

            text(
                "result = "
            ),

            blank(
                "study_status",
                "study_status(85) calls the function and passes 85 to the score parameter."
            ),

            text(
                "(85)    # Pass 85 as the study score."
            ),

            newline(),

            text(
                "print(\"Study result:\", result)    # Display the returned study status."
            )

        ]

    },


    // =================================================
    // PROGRAM 5
    // ATTENDANCE FILE SAVER
    // =================================================

    {
        title:
            "Attendance File Saver",

        topic:
            "Functions, Conditionals, Loops and File Handling",

        parts: [

            // BLANK 1

            text(
                "# Define a function that saves an attendance record."
            ),

            newline(),

            blank(
                "def",
                "The def keyword is used to define a function."
            ),

            text(
                " save_attendance("
            ),


            // BLANK 3

            blank(
                "name",
                "name is the parameter that receives the student's name."
            ),

            text(
                "):    # The name parameter stores the student's name."
            ),

            newline(),


            // BLANK 4

            text(
                "    # Check whether a name was entered."
            ),

            newline(),

            text(
                "    "
            ),

            blank(
                "if",
                "The if keyword begins a conditional statement."
            ),

            text(
                " name "
            ),


            // BLANK 5

            blank(
                "==",
                "The == operator checks whether two values are equal."
            ),

            text(
                " \"\":    # An empty name means no student name was entered."
            ),

            newline(),


            // BLANK 6

            text(
                "        # Stop the function when no name was entered."
            ),

            newline(),

            text(
                "        "
            ),

            blank(
                "return",
                "return sends a result back to the code that called the function."
            ),

            text(
                " \"No name entered\"    # Tell the caller that the name is missing."
            ),

            newline(),


            // FILE HANDLING
            // These lines are visible so students can study
            // the opening, writing, and closing process.

            text(
                "    file = open(\"attendance.txt\", \"w\")    # Open or create a text file using write mode."
            ),

            newline(),

            text(
                "    file.write(\"Student: \" + name + \"\\n\")    # Write the student's name into the file."
            ),

            newline(),

            text(
                "    file.close()    # Close the file after writing."
            ),

            newline(),


            text(
                "    return \"Saved\"    # Tell the program that the record was saved."
            ),

            newline(),


            // BLANK 7

            text(
                "# Display three sample attendance-record numbers."
            ),

            newline(),

            blank(
                "for",
                "The for keyword begins a loop that repeats through a sequence."
            ),

            text(
                " record in "
            ),


            // BLANK 8

            blank(
                "range",
                "range() creates the sequence of record numbers."
            ),

            text(
                "(1, 4):    # The loop displays record numbers 1, 2 and 3."
            ),

            newline(),

            text(
                "    print(\"Record:\", record)    # Display the current record number."
            ),

            newline(),


            // BLANK 9

            text(
                "copies = 2    # Start with two sample file-processing cycles."
            ),

            newline(),

            blank(
                "while",
                "The while keyword repeats the code while the condition is true."
            ),

            text(
                " copies > 0:    # Continue while processing cycles remain."
            ),

            newline(),

            text(
                "    print(\"File ready\")    # Display a message that the file is ready."
            ),

            newline(),

            text(
                "    copies = copies - 1    # Reduce the number of remaining cycles."
            ),

            newline(),


            // BLANK 10

            text(
                "# Call the function and save the name Ana in the text file."
            ),

            newline(),

            text(
                "result = "
            ),

            blank(
                "save_attendance",
                "save_attendance(\"Ana\") calls the function and passes Ana to the name parameter."
            ),

            text(
                "(\"Ana\")    # Pass the student's name to the function."
            ),

            newline(),

            text(
                "print(\"File result:\", result)    # Display the message returned by the function."
            )

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
// SHUFFLE FUNCTION
// =====================================================

function shuffle(array) {

    // Move through the array from the last item.
    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {

        // Choose a random position.
        const j =
            Math.floor(
                Math.random() * (i + 1)
            );


        // Exchange the two items.
        [
            array[i],
            array[j]
        ] =
        [
            array[j],
            array[i]
        ];

    }


    // Return the shuffled array.
    return array;

}


// =====================================================
// COUNT BLANKS
// =====================================================

function countBlanks(code) {

    // Count every part marked as a blank.
    return code.parts.filter(
        part => part.blank
    ).length;

}


// =====================================================
// VALIDATE QUESTION BANK
// =====================================================

function validateQuestionBank() {

    // Check every program in the question bank.
    codeBank.forEach(
        code => {

            // Count the blanks in the program.
            const numberOfBlanks =
                countBlanks(code);


            // Report an error if the program does not
            // contain exactly 10 blanks.
            if (
                numberOfBlanks !== 10
            ) {

                console.error(
                    "QUESTION BANK ERROR:",
                    code.title,
                    "contains",
                    numberOfBlanks,
                    "blanks instead of 10."
                );

            }

        }
    );

}


// =====================================================
// START TEST II
// =====================================================

function startTest2() {

    // Randomly select one program.
    selectedCode =
        shuffle(
            [...codeBank]
        )[0];


    // Display the selected program in the console.
    console.log(
        "Selected program:",
        selectedCode.title
    );


    // Display the number of blanks.
    console.log(
        "Number of blanks:",
        countBlanks(
            selectedCode
        )
    );


    // Clear any previous answers.
    studentAnswers = [];


    // Reset submission status.
    testSubmitted = false;


    // Display the selected program.
    displayQuestions();

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


    // Stop if the container does not exist.
    if (!container) {

        console.error(
            "codeQuestionsContainer was not found."
        );

        return;

    }


    // Clear the container.
    container.innerHTML = "";


    // Create the question card.
    const card =
        document.createElement(
            "div"
        );


    card.className =
        "code-question-card";


    // Create the program title.
    const title =
        document.createElement(
            "h3"
        );


    title.textContent =
        selectedCode.title;


    card.appendChild(
        title
    );


    // Create the topic label.
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


    // Create the code display area.
    const codeBox =
        document.createElement(
            "div"
        );


    codeBox.className =
        "code-box";


    // Track the blank number.
    let blankIndex = 0;


    // Display every part of the program.
    selectedCode.parts.forEach(
        part => {


            // -----------------------------------------
            // NEW LINE
            // -----------------------------------------

            if (part.newline) {

                codeBox.appendChild(
                    document.createElement(
                        "br"
                    )
                );

                return;

            }


            // -----------------------------------------
            // NORMAL TEXT
            // -----------------------------------------

            if (part.text) {

                codeBox.appendChild(
                    document.createTextNode(
                        part.text
                    )
                );

                return;

            }


            // -----------------------------------------
            // BLANK
            // -----------------------------------------

            if (part.blank) {

                // Create the input field.
                const input =
                    document.createElement(
                        "input"
                    );


                // Make it a text input.
                input.type =
                    "text";


                // Apply the existing CSS class.
                input.className =
                    "code-blank";


                // Prevent browser autocomplete.
                input.autocomplete =
                    "off";


                // Store the blank number.
                input.dataset.blank =
                    blankIndex;


                // Add an accessible label.
                input.setAttribute(
                    "aria-label",
                    "Code blank " +
                    (
                        blankIndex + 1
                    )
                );


                // Add the input to the code.
                codeBox.appendChild(
                    input
                );


                // Move to the next blank.
                blankIndex++;

            }

        }
    );


    // Add the code area to the card.
    card.appendChild(
        codeBox
    );


    // Add the card to the page.
    container.appendChild(
        card
    );

}


// =====================================================
// SUBMIT TEST II
// =====================================================

function submitTest2() {

    // Find every blank input.
    const inputs =
        document.querySelectorAll(
            ".code-blank"
        );


    // Check that exactly 10 blanks exist.
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


    // Clear previous answers.
    studentAnswers = [];


    // Read every answer from the input fields.
    inputs.forEach(
        input => {

            studentAnswers.push(
                input.value.trim()
            );

        }
    );


    // Count unanswered blanks.
    const unanswered =
        studentAnswers.filter(
            answer =>
                answer === ""
        ).length;


    // Prevent submission when an answer is missing.
    if (
        unanswered > 0
    ) {

        alert(
            "Please complete all 10 blanks before submitting."
        );


        return;

    }


    // Ask the student to confirm submission.
    const confirmed =
        confirm(
            "Are you sure you want to submit Test II?"
        );


    // Stop if the student cancels.
    if (!confirmed) {

        return;

    }


    // Start the score at zero.
    let score = 0;


    // Keep track of the current blank.
    let blankIndex = 0;


    // Check every blank in the selected program.
    selectedCode.parts.forEach(
        part => {


            // Ignore normal text.
            if (!part.blank) {

                return;

            }


            // Get the student's answer.
            const studentAnswer =
                studentAnswers[
                    blankIndex
                ];


            // Get the correct answer.
            const correctAnswer =
                part.answer;


            // Compare the answers.
            if (
                normalize(
                    studentAnswer
                ) ===
                normalize(
                    correctAnswer
                )
            ) {

                // Give one point for a correct answer.
                score++;

            }


            // Move to the next blank.
            blankIndex++;

        }
    );


    // Mark Test II as submitted.
    testSubmitted = true;


    // Save the result.
    saveTest2Result(
        score
    );


    // Display the score.
    showScore(
        score
    );


    // Display the review.
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


    // Stop if the score area does not exist.
    if (!scoreArea) {

        console.error(
            "scoreArea was not found."
        );

        return;

    }


    // Make the score visible.
    scoreArea.style.display =
        "block";


    // Find the final score element.
    const finalScore =
        document.getElementById(
            "finalScore"
        );


    // Display the numerical score.
    if (finalScore) {

        finalScore.textContent =
            score +
            " / 10";

    }


    // Find the score message.
    const scoreMessage =
        document.getElementById(
            "scoreMessage"
        );


    // Display an appropriate message.
    if (scoreMessage) {

        if (
            score === 10
        ) {

            scoreMessage.textContent =
                "Excellent! You completed the code correctly.";

        }

        else if (
            score >= 8
        ) {

            scoreMessage.textContent =
                "Very good! Review the items you missed.";

        }

        else if (
            score >= 5
        ) {

            scoreMessage.textContent =
                "Good effort. Click the RED answers to review the concepts you missed.";

        }

        else {

            scoreMessage.textContent =
                "Keep practicing. Click the RED answers to study the explanations.";

        }

    }

}


// =====================================================
// SAVE TEST II RESULT
// =====================================================

function saveTest2Result(score) {

    // Get the student's name from the reviewer session.
    const studentName =
        localStorage.getItem(
            "studentName"
        ) || "";


    // Get the student's section.
    const studentSection =
        localStorage.getItem(
            "studentSection"
        ) || "";


    // Get the attempt ID created at login.
    const attemptId =
        localStorage.getItem(
            "attemptId"
        ) || "";


    // Create the result object.
    const result = {

        // Store the date and time.
        date:
            new Date().toLocaleString(),

        // Store the student name.
        studentName:
            studentName,

        // Store the section.
        studentSection:
            studentSection,

        // Store the attempt ID.
        attemptId:
            attemptId,

        // Store the score.
        score:
            score,

        // Test II has 10 points.
        total:
            10,

        // Store the selected program.
        program:
            selectedCode.title,

        // Store each answer and explanation.
        questions:
            selectedCode.parts
                .filter(
                    part =>
                        part.blank
                )
                .map(
                    (
                        part,
                        index
                    ) => {

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


    // Save the result in the browser.
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

    // Convert the answer to text.
    return String(
        value
    )

        // Remove spaces at the beginning and end.
        .trim()

        // Ignore capitalization.
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


    // Stop if the container does not exist.
    if (!container) {

        return;

    }


    // Clear the original input fields.
    container.innerHTML = "";


    // Create the review instruction.
    const instruction =
        document.createElement(
            "div"
        );


    instruction.className =
        "review-instruction";


    instruction.textContent =
        "Correct answers are shown in green. Click the RED answers to review the concepts you missed.";


    // Add the instruction to the page.
    container.appendChild(
        instruction
    );


    // Create the review card.
    const card =
        document.createElement(
            "div"
        );


    card.className =
        "code-question-card";


    // Display the program title.
    const title =
        document.createElement(
            "h3"
        );


    title.textContent =
        selectedCode.title;


    card.appendChild(
        title
    );


    // Display the topic.
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


    // Create the reviewed code area.
    const codeBox =
        document.createElement(
            "div"
        );


    codeBox.className =
        "code-box submitted-code";


    // Track the current blank.
    let blankIndex = 0;


    // Rebuild the code with the student's answers.
    selectedCode.parts.forEach(
        part => {


            // -----------------------------------------
            // NEW LINE
            // -----------------------------------------

            if (part.newline) {

                codeBox.appendChild(
                    document.createElement(
                        "br"
                    )
                );

                return;

            }


            // -----------------------------------------
            // NORMAL TEXT
            // -----------------------------------------

            if (part.text) {

                codeBox.appendChild(
                    document.createTextNode(
                        part.text
                    )
                );

                return;

            }


            // -----------------------------------------
            // STUDENT ANSWER
            // -----------------------------------------

            if (part.blank) {

                // Get the student's answer.
                const studentAnswer =
                    studentAnswers[
                        blankIndex
                    ];


                // Get the correct answer.
                const correctAnswer =
                    part.answer;


                // Create the answer display.
                const answerSpan =
                    document.createElement(
                        "span"
                    );


                // Apply the submitted-answer style.
                answerSpan.className =
                    "submitted-answer";


                // Display the student's answer.
                answerSpan.textContent =
                    studentAnswer;


                // Check whether the answer is correct.
                const correct =
                    normalize(
                        studentAnswer
                    ) ===
                    normalize(
                        correctAnswer
                    );


                // -------------------------------------
                // CORRECT ANSWER
                // -------------------------------------

                if (correct) {

                    answerSpan.classList.add(
                        "answer-correct"
                    );

                }


                // -------------------------------------
                // WRONG ANSWER
                // -------------------------------------

                else {

                    answerSpan.classList.add(
                        "answer-wrong"
                    );


                    answerSpan.title =
                        "Click to review";


                    // Make the wrong answer clickable.
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


                // Add the answer to the code.
                codeBox.appendChild(
                    answerSpan
                );


                // Move to the next blank.
                blankIndex++;

            }

        }
    );


    // Add the reviewed code to the card.
    card.appendChild(
        codeBox
    );


    // Add the card to the page.
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

    // Remove an existing explanation.
    const old =
        document.getElementById(
            "codeExplanation"
        );


    if (old) {

        old.remove();

    }


    // Create the explanation box.
    const box =
        document.createElement(
            "div"
        );


    box.id =
        "codeExplanation";


    box.className =
        "code-explanation";


    // Create the explanation content.
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


    // Add the explanation box to the page.
    document.body.appendChild(
        box
    );

}


// =====================================================
// CLOSE EXPLANATION
// =====================================================

function closeExplanation() {

    // Find the explanation box.
    const box =
        document.getElementById(
            "codeExplanation"
        );


    // Remove the box if it exists.
    if (box) {

        box.remove();

    }

}


// =====================================================
// ESCAPE HTML
// =====================================================

function escapeHTML(text) {

    // Convert the value to a string.
    return String(
        text
    )

        // Protect ampersands.
        .replaceAll(
            "&",
            "&amp;"
        )

        // Protect less-than symbols.
        .replaceAll(
            "<",
            "&lt;"
        )

        // Protect greater-than symbols.
        .replaceAll(
            ">",
            "&gt;"
        )

        // Protect quotation marks.
        .replaceAll(
            '"',
            "&quot;"
        )

        // Protect apostrophes.
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


        // ---------------------------------------------
        // VALIDATE QUESTION BANK
        // ---------------------------------------------

        validateQuestionBank();


        // ---------------------------------------------
        // GET STUDENT NAME
        // ---------------------------------------------

        const studentName =
            localStorage.getItem(
                "studentName"
            );


        // ---------------------------------------------
        // GET STUDENT SECTION
        // ---------------------------------------------

        const studentSection =
            localStorage.getItem(
                "studentSection"
            );


        // ---------------------------------------------
        // DISPLAY STUDENT NAME
        // ---------------------------------------------

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


        // ---------------------------------------------
        // DISPLAY STUDENT SECTION
        // ---------------------------------------------

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
        // START TEST II
        // ---------------------------------------------

        startTest2();


        // ---------------------------------------------
        // CONNECT SUBMIT BUTTON
        // ---------------------------------------------

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
