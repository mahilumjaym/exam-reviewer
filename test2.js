// =====================================================
// TEST II - PYTHON CODE COMPLETION REVIEWER
// =====================================================
// Five different Python programs are available.
//
// One program is randomly selected for each session.
//
// Each program contains EXACTLY 10 blanks.
//
// Each blank = 1 point
// Total = 10 points
//
// Skills reviewed:
// 1. Function definition
// 2. Function name
// 3. Function parameter
// 4. Conditional statement
// 5. Comparison operator
// 6. Return statement
// 7. For loop
// 8. range()
// 9. While loop
// 10. Function call
//
// IMPORTANT:
// Every line of sample code contains a comment
// explaining what the line is doing.
// =====================================================


// =====================================================
// QUESTION BANK
// =====================================================

const codeBank = [

    // =================================================
    // PROGRAM 1
    // MOVIE TICKET BOOTH
    // =================================================

    {
        title: "Movie Ticket Booth",

        topic:
            "Functions, Conditionals and Loops",

        parts: [

            // -------------------------------------------------
            // LINE 1
            // BLANK 1 = def
            // -------------------------------------------------

            {
                text: "# Define a function that determines a ticket price."
            },

            {
                newline: true
            },

            {
                blank: true,
                answer: "def",
                explanation:
                    "The def keyword tells Python that you are defining a function."
            },

            {
                text: " "
            },

            // -------------------------------------------------
            // BLANK 2 = FUNCTION NAME
            // -------------------------------------------------

            {
                blank: true,
                answer: "ticket_price",
                explanation:
                    "ticket_price is the name of the function. A good function name describes what the function does."
            },

            // -------------------------------------------------
            // BLANK 3 = PARAMETER
            // -------------------------------------------------

            {
                text: "("
            },

            {
                blank: true,
                answer: "age",
                explanation:
                    "age is the parameter. It is the variable that receives the value passed into the function."
            },

            {
                text:
                    "):    # The age parameter will receive the customer's age."
            },

            {
                newline: true
            },


            // -------------------------------------------------
            // LINE 2
            // BLANK 4 = IF
            // -------------------------------------------------

            {
                text:
                    "    # Check whether the customer is a child."
            },

            {
                newline: true
            },

            {
                text:
                    "    "
            },

            {
                blank: true,
                answer: "if",
                explanation:
                    "The if keyword begins a conditional statement that allows the program to make a decision."
            },

            {
                text:
                    " age < 13:    # Children younger than 13 receive the child price."
            },

            {
                newline: true
            },


            // -------------------------------------------------
            // BLANK 5 = COMPARISON OPERATOR
            // -------------------------------------------------

            {
                text:
                    "        # The comparison checks whether the age is below 13."
            },

            {
                newline: true
            },

            {
                text:
                    "        # The less-than operator is used in the condition above."
            },

            {
                newline: true
            },


            // -------------------------------------------------
            // BLANK 6 = RETURN
            // -------------------------------------------------

            {
                text:
                    "        # Send the child ticket price back to the caller."
            },

            {
                newline: true
            },

            {
                text:
                    "        "
            },

            {
                blank: true,
                answer: "return",
                explanation:
                    "The return statement sends a value from the function back to the code that called it."
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
                    "    return 180    # The regular ticket price is 180."
            },

            {
                newline: true
            },


            // -------------------------------------------------
            // BLANK 7 = FOR
            // -------------------------------------------------

            {
                text:
                    "# Display the numbers of three available shows."
            },

            {
                newline: true
            },

            {
                blank: true,
                answer: "for",
                explanation:
                    "The for keyword begins a loop that repeats for each value in a sequence."
            },

            {
                text:
                    " show in "
            },


            // -------------------------------------------------
            // BLANK 8 = RANGE
            // -------------------------------------------------

            {
                blank: true,
                answer: "range",
                explanation:
                    "range() creates a sequence of numbers for the for loop."
            },

            {
                text:
                    "(1, 4):    # This produces the numbers 1, 2 and 3."
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


            // -------------------------------------------------
            // BLANK 9 = WHILE
            // -------------------------------------------------

            {
                text:
                    "# Count down the remaining tickets."
            },

            {
                newline: true
            },

            {
                blank: true,
                answer: "while",
                explanation:
                    "The while keyword repeats code as long as its condition is true."
            },

            {
                text:
                    " tickets > 0:    # Continue while at least one ticket remains."
            },

            {
                newline: true
            },

            {
                text:
                    "    print(\"Ticket available\")    # Tell the customer that a ticket remains."
            },

            {
                newline: true
            },

            {
                text:
                    "    tickets = tickets - 1    # Reduce the number of remaining tickets."
            },

            {
                newline: true
            },


            // -------------------------------------------------
            // BLANK 10 = FUNCTION CALL
            // -------------------------------------------------

            {
                text:
                    "# Call the function to calculate the price for a 15-year-old."
            },

            {
                newline: true
            },

            {
                text:
                    "price = "
            },

            {
                blank: true,
                answer: "ticket_price",
                explanation:
                    "ticket_price(15) is a function call. The value 15 is passed to the age parameter."
            },

            {
                text:
                    "(15)    # The function receives 15 as the customer's age."
            },

            {
                newline: true
            },

            {
                text:
                    "print(\"Ticket price:\", price)    # Display the price returned by the function."
            }

        ]
    },


    // =================================================
    // PROGRAM 2
    // GARDEN WATERING
    // =================================================

    {
        title: "Garden Watering Scheduler",

        topic:
            "Functions, Conditionals and Loops",

        parts: [

            // BLANK 1 = DEF

            {
                text:
                    "# Define a function that determines how much water is needed."
            },

            {
                newline: true
            },

            {
                blank: true,
                answer: "def",
                explanation:
                    "def is used to define a function in Python."
            },

            {
                text: " "
            },


            // BLANK 2 = FUNCTION NAME

            {
                blank: true,
                answer: "water_needed",
                explanation:
                    "water_needed is the function name because the function determines the amount of water needed."
            },

            {
                text: "("
            },


            // BLANK 3 = PARAMETER

            {
                blank: true,
                answer: "moisture",
                explanation:
                    "moisture is the parameter. It receives the soil moisture value when the function is called."
            },

            {
                text:
                    "):    # The moisture parameter stores the soil moisture value."
            },

            {
                newline: true
            },


            // BLANK 4 = IF

            {
                text:
                    "    # Check whether the soil is dry."
            },

            {
                newline: true
            },

            {
                text:
                    "    "
            },

            {
                blank: true,
                answer: "if",
                explanation:
                    "The if keyword begins the condition that checks whether the soil needs water."
            },

            {
                text:
                    " moisture <= 30:    # Soil at 30 or below needs water."
            },

            {
                newline: true
            },


            // BLANK 5 = COMPARISON OPERATOR

            {
                text:
                    "        # The condition uses a comparison operator."
            },

            {
                newline: true
            },

            {
                text:
                    "        # The chosen operator means 'less than or equal to'."
            },

            {
                newline: true
            },


            // BLANK 6 = RETURN

            {
                text:
                    "        # Send the amount of water back to the caller."
            },

            {
                newline: true
            },

            {
                text:
                    "        "
            },

            {
                blank: true,
                answer: "return",
                explanation:
                    "return sends the result of the function back to the code that called it."
            },

            {
                text:
                    " 5    # Return 5 liters when the soil is dry."
            },

            {
                newline: true
            },

            {
                text:
                    "    return 0    # No extra water is needed when the soil is moist."
            },

            {
                newline: true
            },


            // BLANK 7 = FOR

            {
                text:
                    "# Check four garden zones."
            },

            {
                newline: true
            },

            {
                blank: true,
                answer: "for",
                explanation:
                    "for starts a loop that repeats for each value in a sequence."
            },

            {
                text:
                    " zone in "
            },


            // BLANK 8 = RANGE

            {
                blank: true,
                answer: "range",
                explanation:
                    "range() creates the sequence of zone numbers used by the for loop."
            },

            {
                text:
                    "(1, 5):    # The loop checks zones 1, 2, 3 and 4."
            },

            {
                newline: true
            },

            {
                text:
                    "    print(\"Checking zone\", zone)    # Display the current garden zone."
            },

            {
                newline: true
            },


            // BLANK 9 = WHILE

            {
                text:
                    "# Repeat watering while there are cycles remaining."
            },

            {
                newline: true
            },

            {
                blank: true,
                answer: "while",
                explanation:
                    "while repeats a block of code while its condition remains true."
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
                    "    print(\"Watering garden\")    # Tell the user that watering is happening."
            },

            {
                newline: true
            },

            {
                text:
                    "    cycles = cycles - 1    # Reduce the remaining watering cycles."
            },

            {
                newline: true
            },


            // BLANK 10 = FUNCTION CALL

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

            {
                blank: true,
                answer: "water_needed",
                explanation:
                    "water_needed(25) calls the function and passes 25 to the moisture parameter."
            },

            {
                text:
                    "(25)    # Check the amount of water needed when moisture is 25."
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
    // PROGRAM 3
    // ARCADE PRIZE
    // =================================================

    {
        title: "Arcade Prize Counter",

        topic:
            "Functions, Conditionals and Loops",

        parts: [

            // BLANK 1

            {
                text:
                    "# Define a function that determines the player's prize."
            },

            {
                newline: true
            },

            {
                blank: true,
                answer: "def",
                explanation:
                    "def begins the definition of a Python function."
            },

            {
                text: " "
            },


            // BLANK 2

            {
                blank: true,
                answer: "prize_level",
                explanation:
                    "prize_level is the name of the function."
            },

            {
                text: "("
            },


            // BLANK 3

            {
                blank: true,
                answer: "points",
                explanation:
                    "points is the parameter that receives the player's score."
            },

            {
                text:
                    "):    # The points parameter stores the player's score."
            },

            {
                newline: true
            },


            // BLANK 4

            {
                text:
                    "    # Check whether the player earned enough points for Gold."
            },

            {
                newline: true
            },

            {
                text:
                    "    "
            },

            {
                blank: true,
                answer: "if",
                explanation:
                    "if begins a conditional statement."
            },

            {
                text:
                    " points >= 100:    # Players with 100 or more points earn Gold."
            },

            {
                newline: true
            },


            // BLANK 5

            {
                text:
                    "        # The comparison checks whether the score reaches 100."
            },

            {
                newline: true
            },

            {
                text:
                    "        # The comparison operator means 'greater than or equal to'."
            },

            {
                newline: true
            },


            // BLANK 6

            {
                text:
                    "        # Send the Gold result back to the caller."
            },

            {
                newline: true
            },

            {
                text:
                    "        "
            },

            {
                blank: true,
                answer: "return",
                explanation:
                    "return sends the result of the function back to the code that called it."
            },

            {
                text:
                    " \"Gold\"    # Gold is returned when the player has enough points."
            },

            {
                newline: true
            },

            {
                text:
                    "    return \"Silver\"    # Players below 100 points receive Silver."
            },

            {
                newline: true
            },


            // BLANK 7

            {
                text:
                    "# Display three arcade rounds."
            },

            {
                newline: true
            },

            {
                blank: true,
                answer: "for",
                explanation:
                    "for starts a loop that repeats for every value in the sequence."
            },

            {
                text:
                    " round_number in "
            },


            // BLANK 8

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


            // BLANK 9

            {
                text:
                    "# Use three tokens in the arcade game."
            },

            {
                newline: true
            },

            {
                blank: true,
                answer: "while",
                explanation:
                    "while repeats the instructions while tokens remain."
            },

            {
                text:
                    " tokens > 0:    # Continue while there are tokens available."
            },

            {
                newline: true
            },

            {
                text:
                    "    print(\"Token used\")    # Tell the player that a token was used."
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


            // BLANK 10

            {
                text:
                    "# Call the function to determine the prize."
            },

            {
                newline: true
            },

            {
                text:
                    "prize = "
            },

            {
                blank: true,
                answer: "prize_level",
                explanation:
                    "prize_level(120) is a function call. The value 120 is passed to the points parameter."
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
    // PROGRAM 4
    // LIBRARY LATE FEE
    // =================================================

    {
        title: "Library Late Fee Calculator",

        topic:
            "Functions, Conditionals and Loops",

        parts: [

            // BLANK 1

            {
                text:
                    "# Define a function that calculates a library late fee."
            },

            {
                newline: true
            },

            {
                blank: true,
                answer: "def",
                explanation:
                    "def is used to define a function."
            },

            {
                text: " "
            },


            // BLANK 2

            {
                blank: true,
                answer: "late_fee",
                explanation:
                    "late_fee is the function name because the function calculates a late fee."
            },

            {
                text: "("
            },


            // BLANK 3

            {
                blank: true,
                answer: "days",
                explanation:
                    "days is the parameter that receives the number of overdue days."
            },

            {
                text:
                    "):    # The days parameter stores how late the book is."
            },

            {
                newline: true
            },


            // BLANK 4

            {
                text:
                    "    # Check whether the book is more than seven days late."
            },

            {
                newline: true
            },

            {
                text:
                    "    "
            },

            {
                blank: true,
                answer: "if",
                explanation:
                    "if begins the condition used to decide whether a fee should be charged."
            },

            {
                text:
                    " days > 7:    # A book more than seven days late receives a fee."
            },

            {
                newline: true
            },


            // BLANK 5

            {
                text:
                    "        # The comparison checks whether the number of days is greater than 7."
            },

            {
                newline: true
            },

            {
                text:
                    "        # The comparison operator is greater-than."
            },

            {
                newline: true
            },


            // BLANK 6

            {
                text:
                    "        # Return the late fee to the caller."
            },

            {
                newline: true
            },

            {
                text:
                    "        "
            },

            {
                blank: true,
                answer: "return",
                explanation:
                    "return sends the calculated result back to the calling code."
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
                    "    return 0    # No fee is charged when the book is not more than seven days late."
            },

            {
                newline: true
            },


            // BLANK 7

            {
                text:
                    "# Check three library shelves."
            },

            {
                newline: true
            },

            {
                blank: true,
                answer: "for",
                explanation:
                    "for starts a loop that goes through each value in a sequence."
            },

            {
                text:
                    " shelf in "
            },


            // BLANK 8

            {
                blank: true,
                answer: "range",
                explanation:
                    "range() creates the sequence of shelf numbers used by the loop."
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
                    "    print(\"Checking shelf\", shelf)    # Display the current shelf."
            },

            {
                newline: true
            },


            // BLANK 9

            {
                text:
                    "# Process the books while books remain."
            },

            {
                newline: true
            },

            {
                blank: true,
                answer: "while",
                explanation:
                    "while repeats the code while its condition remains true."
            },

            {
                text:
                    " books > 0:    # Continue while there are books to process."
            },

            {
                newline: true
            },

            {
                text:
                    "    print(\"Processing book\")    # Display a processing message."
            },

            {
                newline: true
            },

            {
                text:
                    "    books = books - 1    # Reduce the number of books remaining."
            },

            {
                newline: true
            },


            // BLANK 10

            {
                text:
                    "# Calculate the fee for a book that is ten days late."
            },

            {
                newline: true
            },

            {
                text:
                    "fee = "
            },

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
    // PROGRAM 5
    // HIKING GEAR CHECK
    // =================================================

    {
        title: "Hiking Gear Check",

        topic:
            "Functions, Conditionals and Loops",

        parts: [

            // BLANK 1

            {
                text:
                    "# Define a function that gives hiking gear advice."
            },

            {
                newline: true
            },

            {
                blank: true,
                answer: "def",
                explanation:
                    "def begins the definition of a function."
            },

            {
                text: " "
            },


            // BLANK 2

            {
                blank: true,
                answer: "gear_status",
                explanation:
                    "gear_status is the function name because the function determines the recommended gear."
            },

            {
                text: "("
            },


            // BLANK 3

            {
                blank: true,
                answer: "temperature",
                explanation:
                    "temperature is the parameter that receives the current temperature."
            },

            {
                text:
                    "):    # The temperature parameter stores the current temperature."
            },

            {
                newline: true
            },


            // BLANK 4

            {
                text:
                    "    # Check whether the weather is cold."
            },

            {
                newline: true
            },

            {
                text:
                    "    "
            },

            {
                blank: true,
                answer: "if",
                explanation:
                    "if begins a conditional statement."
            },

            {
                text:
                    " temperature <= 10:    # Ten degrees or lower requires a jacket."
            },

            {
                newline: true
            },


            // BLANK 5

            {
                text:
                    "        # The comparison checks whether the temperature is 10 or below."
            },

            {
                newline: true
            },

            {
                text:
                    "        # The comparison operator means 'less than or equal to'."
            },

            {
                newline: true
            },


            // BLANK 6

            {
                text:
                    "        # Return advice for cold weather."
            },

            {
                newline: true
            },

            {
                text:
                    "        "
            },

            {
                blank: true,
                answer: "return",
                explanation:
                    "return sends the advice back to the code that called the function."
            },

            {
                text:
                    " \"Bring a jacket\"    # Tell the hiker to bring a jacket."
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


            // BLANK 7

            {
                text:
                    "# Check five pieces of hiking gear."
            },

            {
                newline: true
            },

            {
                blank: true,
                answer: "for",
                explanation:
                    "for begins a loop that repeats for every value in a sequence."
            },

            {
                text:
                    " item in "
            },


            // BLANK 8

            {
                blank: true,
                answer: "range",
                explanation:
                    "range() creates the sequence of item numbers used by the for loop."
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


            // BLANK 9

            {
                text:
                    "# Count down the remaining hiking miles."
            },

            {
                newline: true
            },

            {
                blank: true,
                answer: "while",
                explanation:
                    "while repeats the code while its condition remains true."
            },

            {
                text:
                    " miles > 0:    # Continue while there are miles remaining."
            },

            {
                newline: true
            },

            {
                text:
                    "    print(\"Miles remaining:\", miles)    # Display the remaining distance."
            },

            {
                newline: true
            },

            {
                text:
                    "    miles = miles - 1    # Reduce the remaining distance by one mile."
            },

            {
                newline: true
            },


            // BLANK 10

            {
                text:
                    "# Ask the function for advice when the temperature is 8 degrees."
            },

            {
                newline: true
            },

            {
                text:
                    "advice = "
            },

            {
                blank: true,
                answer: "gear_status",
                explanation:
                    "gear_status(8) calls the function and passes 8 to the temperature parameter."
            },

            {
                text:
                    "(8)    # The function receives 8 as the temperature."
            },

            {
                newline: true
            },

            {
                text:
                    "print(\"Gear advice:\", advice)    # Display the advice returned by the function."
            }

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

    // Go through the array from the end toward the beginning.
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


    // Verify that exactly 10 blanks exist.
    console.log(
        "Number of blanks:",
        countBlanks(selectedCode)
    );


    // Clear previous student answers.
    studentAnswers = [];


    // Display the selected program.
    displayQuestions();

}


// =====================================================
// DISPLAY QUESTIONS
// =====================================================

function displayQuestions() {

    // Find the container in test2.html.
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


    // Create the main question card.
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


    // Keep track of the blank number.
    let blankIndex = 0;


    // Go through every part of the program.
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
            // BLANK INPUT
            // -----------------------------------------

            if (part.blank) {

                // Create an input box.
                const input =
                    document.createElement(
                        "input"
                    );


                // Make the input a text field.
                input.type =
                    "text";


                // Apply the CSS class.
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
                    (blankIndex + 1)
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

    // Find all answer boxes.
    const inputs =
        document.querySelectorAll(
            ".code-blank"
        );


    // Verify that there are exactly 10 blanks.
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


    // Clear the previous answers.
    studentAnswers = [];


    // Store each student's answer.
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


    // Do not allow submission with empty blanks.
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


    // Keep track of which blank is being checked.
    let blankIndex = 0;


    // Check every blank.
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

                // Add one point for a correct answer.
                score++;

            }


            // Move to the next blank.
            blankIndex++;

        }
    );


    // Save the result locally.
    saveTest2Result(
        score
    );


    // Display the score.
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


    // Make the score visible.
    scoreArea.style.display =
        "block";


    // Find the score display.
    const finalScore =
        document.getElementById(
            "finalScore"
        );


    // Display the score.
    if (finalScore) {

        finalScore.textContent =
            score + " / 10";

    }


    // Find the score message.
    const scoreMessage =
        document.getElementById(
            "scoreMessage"
        );


    // Display an appropriate message.
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
                "Good effort. Review the feedback for the items you missed.";

        }

        else {

            scoreMessage.textContent =
                "Keep practicing. Study the feedback for each incorrect blank.";

        }

    }


    // Replace the answer form with the review.
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


    // Scroll back to the score.
    scoreArea.scrollIntoView({
        behavior: "smooth"
    });

}


// =====================================================
// SAVE TEST II RESULT
// =====================================================

function saveTest2Result(score) {

    // Create the result object.
    const result = {

        // Record the date and time.
        date:
            new Date().toLocaleString(),

        // Record the score.
        score:
            score,

        // Test II always has 10 points.
        total:
            10,

        // Record which program was shown.
        program:
            selectedCode.title,

        // Store each blank and its feedback.
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


    // Save the result in the browser.
    localStorage.setItem(
        "test2Result",
        JSON.stringify(result)
    );

}


// =====================================================
// NORMALIZE ANSWERS
// =====================================================

function normalize(value) {

    // Remove unnecessary spaces and ignore capitalization.
    return String(value)
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


    // Clear the original input form.
    container.innerHTML = "";


    // Create the review instruction.
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


    // Rebuild the program with the student's answers.
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


                answerSpan.className =
                    "submitted-answer";


                answerSpan.textContent =
                    studentAnswer;


                // Check the answer.
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


                    // Show feedback when clicked.
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

    // Remove an existing explanation if one is open.
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


    // Add the feedback content.
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


    // Display the explanation.
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


    // Remove it if it exists.
    if (box) {

        box.remove();

    }

}


// =====================================================
// ESCAPE HTML
// =====================================================

function escapeHTML(text) {

    // Prevent user-entered text from being interpreted as HTML.
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
        // DISPLAY STUDENT NAME
        // -----------------------------------------

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


        // -----------------------------------------
        // DISPLAY STUDENT SECTION
        // -----------------------------------------

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


        // -----------------------------------------
        // START TEST II
        // -----------------------------------------

        startTest2();


        // -----------------------------------------
        // CONNECT SUBMIT BUTTON
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
