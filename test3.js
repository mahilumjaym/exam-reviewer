// =====================================================
// TEST III - PYTHON CODE TRACING REVIEWER
// 5 PROGRAMS
// 1 RANDOM PROGRAM
// 10 QUESTIONS
// INTERNAL SCORE FOR RECORDING ONLY
// =====================================================


// =====================================================
// CODE BANK
// =====================================================

const codeBank = [

    // =================================================
    // PROGRAM 1
    // =================================================

    {
        title: "Library Borrowing Record",

        code: [
            "# Store the borrowed books",
            'books = ["Python", "History", "Science"]',
            "# Store the number of days",
            "days = [3, 5, 2]",
            "# Store book details",
            'book_info = {"Python": 3, "History": 5, "Science": 2}',
            "# Define a function",
            "def check_days(title):",
            "    return book_info[title]",
            "# Display the first book",
            'print("First book:", books[0])',
            "# Display the second number of days",
            'print("Second days:", days[1])',
            "# Check each book",
            "for book in books:",
            '    print("Book:", book)',
            "# Count the books",
            "count = len(books)",
            "# Start a counter",
            "remaining = count",
            "# Reduce the counter",
            "while remaining > 0:",
            '    print("Remaining:", remaining)',
            "    remaining = remaining - 1",
            "# Check one dictionary value",
            'result = check_days("Science")',
            "# Display the result",
            'print("Science days:", result)',
            "# Add a new book",
            'books.append("Art")',
            "# Add a new number",
            "days.append(4)",
            "# Display the updated list",
            'print("Updated books:", books)',
            "# Display the number of books",
            'print("Total books:", len(books))'
        ],

        questions: [
            {
                question: "What value is stored at index 0 of the books list?",
                answer: "Python",
                explanation: "Python is the first item in the list."
            },
            {
                question: "What value is stored at index 1 of the days list?",
                answer: "5",
                explanation: "The days list is [3, 5, 2]."
            },
            {
                question: 'What value is returned by check_days("Science")?',
                answer: "2",
                explanation: 'The dictionary stores "Science": 2.'
            },
            {
                question: "How many items are in books before Art is added?",
                answer: "3",
                explanation: "There are three original books."
            },
            {
                question: "What is the value of remaining immediately after count is assigned?",
                answer: "3",
                explanation: "count is the length of books, which is 3."
            },
            {
                question: "What is the final value of remaining after the while loop?",
                answer: "0",
                explanation: "The loop subtracts 1 until remaining reaches 0."
            },
            {
                question: "What function is called to obtain the Science borrowing days?",
                answer: "check_days",
                explanation: 'The program calls check_days("Science").'
            },
            {
                question: "What is added to the books list?",
                answer: "Art",
                explanation: 'books.append("Art") adds Art.'
            },
            {
                question: "What is the final number of items in books?",
                answer: "4",
                explanation: "Three original books plus Art makes four."
            },
            {
                question: "What is the final value of days at index 3?",
                answer: "4",
                explanation: "The value 4 is appended to days."
            }
        ]
    },


    // =================================================
    // PROGRAM 2
    // =================================================

    {
        title: "Cafeteria Order Record",

        code: [
            "# Store the food items",
            'items = ["Rice", "Chicken", "Juice"]',
            "# Store the prices",
            "prices = [25, 60, 20]",
            "# Store item prices by name",
            'menu = {"Rice": 25, "Chicken": 60, "Juice": 20}',
            "# Define a function",
            "def get_price(item):",
            "    return menu[item]",
            "# Display the first item",
            'print("First item:", items[0])',
            "# Display the last price",
            'print("Last price:", prices[2])',
            "# Visit every item",
            "for item in items:",
            '    print("Item:", item)',
            "# Count the items",
            "total_items = len(items)",
            "# Create a counter",
            "counter = total_items",
            "# Process the counter",
            "while counter > 0:",
            '    print("Items left:", counter)',
            "    counter = counter - 1",
            "# Get the Chicken price",
            'chicken_price = get_price("Chicken")',
            "# Display the price",
            'print("Chicken price:", chicken_price)',
            "# Add another item",
            'items.append("Water")',
            "# Add another price",
            "prices.append(15)",
            "# Add another menu entry",
            'menu["Water"] = 15',
            "# Display the updated count",
            'print("New total:", len(items))',
            "# Display the new item",
            'print("New item:", items[3])'
        ],

        questions: [
            {
                question: "What value is stored at index 0 of items?",
                answer: "Rice",
                explanation: "Rice is the first item."
            },
            {
                question: "What value is stored at index 2 of prices?",
                answer: "20",
                explanation: "The prices list is [25, 60, 20]."
            },
            {
                question: 'What value does get_price("Chicken") return?',
                answer: "60",
                explanation: 'The menu dictionary stores "Chicken": 60.'
            },
            {
                question: "What is the value of total_items before Water is added?",
                answer: "3",
                explanation: "There are three original items."
            },
            {
                question: "What is the final value of counter?",
                answer: "0",
                explanation: "The while loop decreases counter until it reaches 0."
            },
            {
                question: "What function is used to retrieve the Chicken price?",
                answer: "get_price",
                explanation: "get_price retrieves the dictionary value."
            },
            {
                question: "What item is appended to items?",
                answer: "Water",
                explanation: 'items.append("Water") adds Water.'
            },
            {
                question: "What price is appended to prices?",
                answer: "15",
                explanation: "The program appends 15."
            },
            {
                question: "What is the final length of items?",
                answer: "4",
                explanation: "Three original items plus Water makes four."
            },
            {
                question: "What value is found at items[3]?",
                answer: "Water",
                explanation: "Water becomes the fourth item."
            }
        ]
    },


    // =================================================
    // PROGRAM 3
    // =================================================

    {
        title: "Sports Equipment Checker",

        code: [
            "# Store equipment",
            'equipment = ["Ball", "Net", "Whistle"]',
            "# Store quantities",
            "quantities = [4, 2, 1]",
            "# Store equipment details",
            'stock = {"Ball": 4, "Net": 2, "Whistle": 1}',
            "# Define a function",
            "def get_stock(item):",
            "    return stock[item]",
            "# Display an item",
            'print("First:", equipment[0])',
            "# Display a quantity",
            'print("Quantity:", quantities[1])',
            "# Check each equipment item",
            "for item in equipment:",
            '    print("Equipment:", item)',
            "# Count equipment",
            "total = len(equipment)",
            "# Copy the count",
            "check = total",
            "# Process the count",
            "while check > 0:",
            '    print("Checking:", check)',
            "    check = check - 1",
            "# Get the stock of Ball",
            'ball_stock = get_stock("Ball")',
            "# Display the stock",
            'print("Ball stock:", ball_stock)',
            "# Add equipment",
            'equipment.append("Cone")',
            "# Add its quantity",
            "quantities.append(6)",
            "# Add it to the dictionary",
            'stock["Cone"] = 6',
            "# Display the new item",
            'print("Added:", equipment[3])',
            "# Display the total",
            'print("Equipment count:", len(equipment))'
        ],

        questions: [
            {
                question: "What is the first item in equipment?",
                answer: "Ball",
                explanation: "Ball is stored at index 0."
            },
            {
                question: "What value is stored at quantities[1]?",
                answer: "2",
                explanation: "The quantities list is [4, 2, 1]."
            },
            {
                question: 'What value does get_stock("Ball") return?',
                answer: "4",
                explanation: 'The stock dictionary stores "Ball": 4.'
            },
            {
                question: "What is the original value of total?",
                answer: "3",
                explanation: "There are three original equipment items."
            },
            {
                question: "What is the final value of check?",
                answer: "0",
                explanation: "The while loop decreases check until zero."
            },
            {
                question: "What function retrieves a stock value?",
                answer: "get_stock",
                explanation: "get_stock returns a dictionary value."
            },
            {
                question: "What item is added to equipment?",
                answer: "Cone",
                explanation: 'equipment.append("Cone") adds Cone.'
            },
            {
                question: "What quantity is added to quantities?",
                answer: "6",
                explanation: "The program appends 6."
            },
            {
                question: "What value is stored at equipment[3]?",
                answer: "Cone",
                explanation: "Cone becomes the fourth item."
            },
            {
                question: "What is the final length of equipment?",
                answer: "4",
                explanation: "Three original items plus Cone makes four."
            }
        ]
    },


    // =================================================
    // PROGRAM 4
    // =================================================

    {
        title: "School Club Members",

        code: [
            "# Store member names",
            'members = ["Ana", "Ben", "Cara"]',
            "# Store member roles",
            'roles = {"Ana": "Leader", "Ben": "Treasurer", "Cara": "Secretary"}',
            "# Store attendance",
            "attendance = [3, 2, 4]",
            "# Define a function",
            "def get_role(name):",
            "    return roles[name]",
            "# Display the first member",
            'print("First member:", members[0])',
            "# Display attendance",
            'print("Attendance:", attendance[2])',
            "# Visit every member",
            "for member in members:",
            '    print("Member:", member)',
            "# Count the members",
            "member_count = len(members)",
            "# Start checking",
            "check = member_count",
            "# Count down",
            "while check > 0:",
            '    print("Checking:", check)',
            "    check = check - 1",
            "# Get one member role",
            'role = get_role("Ben")',
            "# Display the role",
            'print("Ben role:", role)',
            "# Add a member",
            'members.append("Dan")',
            "# Add attendance",
            "attendance.append(1)",
            "# Add a role",
            'roles["Dan"] = "Member"',
            "# Display the new member",
            'print("New member:", members[3])',
            "# Display the new count",
            'print("Members:", len(members))'
        ],

        questions: [
            {
                question: "What name is stored at members[0]?",
                answer: "Ana",
                explanation: "Ana is the first member."
            },
            {
                question: "What value is stored at attendance[2]?",
                answer: "4",
                explanation: "The attendance list is [3, 2, 4]."
            },
            {
                question: 'What does get_role("Ben") return?',
                answer: "Treasurer",
                explanation: 'Ben is assigned the role Treasurer.'
            },
            {
                question: "What is the original value of member_count?",
                answer: "3",
                explanation: "There are three original members."
            },
            {
                question: "What is the final value of check?",
                answer: "0",
                explanation: "The while loop decreases check to zero."
            },
            {
                question: "What function retrieves a member's role?",
                answer: "get_role",
                explanation: "get_role returns the corresponding role."
            },
            {
                question: "What name is added to members?",
                answer: "Dan",
                explanation: "Dan is appended to members."
            },
            {
                question: "What attendance value is added?",
                answer: "1",
                explanation: "The program appends 1."
            },
            {
                question: "What role is assigned to Dan?",
                answer: "Member",
                explanation: 'roles["Dan"] is assigned Member.'
            },
            {
                question: "What is the final number of members?",
                answer: "4",
                explanation: "Three original members plus Dan makes four."
            }
        ]
    },


    // =================================================
    // PROGRAM 5
    // =================================================

    {
        title: "Art Supply Inventory",

        code: [
            "# Store supply names",
            'supplies = ["Paper", "Paint", "Brush"]',
            "# Store quantities",
            "quantities = [20, 8, 5]",
            "# Store prices",
            'prices = {"Paper": 3, "Paint": 25, "Brush": 15}',
            "# Define a function",
            "def get_price(item):",
            "    return prices[item]",
            "# Display a supply",
            'print("First supply:", supplies[0])',
            "# Display a quantity",
            'print("Paint quantity:", quantities[1])',
            "# Display each supply",
            "for supply in supplies:",
            '    print("Supply:", supply)',
            "# Count supplies",
            "supply_count = len(supplies)",
            "# Create a counter",
            "counter = supply_count",
            "# Process supplies",
            "while counter > 0:",
            '    print("Supplies left:", counter)',
            "    counter = counter - 1",
            "# Get the Paint price",
            'paint_price = get_price("Paint")',
            "# Display the price",
            'print("Paint price:", paint_price)',
            "# Add a supply",
            'supplies.append("Marker")',
            "# Add its quantity",
            "quantities.append(10)",
            "# Add its price",
            'prices["Marker"] = 12',
            "# Display the new supply",
            'print("New supply:", supplies[3])',
            "# Display the final count",
            'print("Total supplies:", len(supplies))'
        ],

        questions: [
            {
                question: "What value is stored at supplies[0]?",
                answer: "Paper",
                explanation: "Paper is the first supply."
            },
            {
                question: "What value is stored at quantities[1]?",
                answer: "8",
                explanation: "The quantities list is [20, 8, 5]."
            },
            {
                question: 'What value does get_price("Paint") return?',
                answer: "25",
                explanation: 'Paint has a price of 25.'
            },
            {
                question: "What is the original value of supply_count?",
                answer: "3",
                explanation: "There are three original supplies."
            },
            {
                question: "What is the final value of counter?",
                answer: "0",
                explanation: "The while loop decreases counter to zero."
            },
            {
                question: "What function obtains the Paint price?",
                answer: "get_price",
                explanation: "get_price retrieves the dictionary value."
            },
            {
                question: "What supply is added to the list?",
                answer: "Marker",
                explanation: "Marker is appended to supplies."
            },
            {
                question: "What quantity is assigned to Marker?",
                answer: "10",
                explanation: "10 is appended to quantities."
            },
            {
                question: "What price is assigned to Marker?",
                answer: "12",
                explanation: 'prices["Marker"] is assigned 12.'
            },
            {
                question: "What is the final number of supplies?",
                answer: "4",
                explanation: "Three original supplies plus Marker makes four."
            }
        ]
    }

];


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
        ] = [
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
// PYTHON CODE RENDERER
// =====================================================

function renderPythonText(value) {

    const fragment =
        document.createDocumentFragment();

    const pattern =
        /(#.*$)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|\b(def|if|elif|else|for|while|in|range|return|open|print|input|int|float|str|len|write|close|append)\b|\b(True|False|None)\b|\b(\d+(?:\.\d+)?)\b/g;

    let lastIndex = 0;
    let match;

    while (
        (
            match =
            pattern.exec(value)
        ) !== null
    ) {

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


        if (match[1]) {

            token.className =
                "py-comment";

        }
        else if (match[2]) {

            token.className =
                "py-string";

        }
        else if (match[3]) {

            token.className =
                "py-keyword";

        }
        else if (match[4]) {

            token.className =
                "py-constant";

        }
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
// CREATE PYTHON IDE
// =====================================================

function createPythonIDE(codeLines) {

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


    if (!container) {

        console.error(
            "codeTracingContainer was not found."
        );

        return;
    }


    container.innerHTML =
        "";


    const card =
        document.createElement(
            "div"
        );

    card.className =
        "tracing-card";


    const title =
        document.createElement(
            "h3"
        );

    title.textContent =
        selectedProgram.title;

    card.appendChild(
        title
    );


    const ide =
        createPythonIDE(
            selectedProgram.code
        );

    card.appendChild(
        ide
    );


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


            const number =
                document.createElement(
                    "div"
                );

            number.className =
                "tracing-number";

            number.textContent =
                "Question " +
                (index + 1);


            const questionText =
                document.createElement(
                    "p"
                );

            questionText.textContent =
                question.question;


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


    if (!confirmed) {

        return;
    }


    studentAnswers =
        Array.from(
            inputs
        ).map(
            input =>
                input.value.trim()
        );


    test3Score =
        calculateTraceScore();


    testSubmitted =
        true;


    saveTest3Result();


    displayReview();


    const button =
        document.getElementById(
            "submitBtn"
        );


    if (button) {

        button.disabled =
            true;

        button.textContent =
            "REVIEW COMPLETE";
    }
}


// =====================================================
// INTERNAL SCORE
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

function normalizeAnswer(value) {

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


    if (!container) {

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
    // PROGRAM
    // ---------------------------------------------

    const card =
        document.createElement(
            "div"
        );

    card.className =
        "tracing-card";


    const title =
        document.createElement(
            "h3"
        );

    title.textContent =
        selectedProgram.title;

    card.appendChild(
        title
    );


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
    // EXIT REVIEWER
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


    if (!confirmed) {

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

function escapeHTML(value) {

    return String(
        value
    )
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
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
    // SAVE LOCALLY
    // ---------------------------------------------

    localStorage.setItem(
        "test3Result",
        JSON.stringify(
            result
        )
    );


    localStorage.setItem(
        "test3Score",
        String(
            test3Score
        )
    );


    // ---------------------------------------------
    // SAVE TO GOOGLE SHEETS
    // ---------------------------------------------

    if (
        typeof sendResultToGoogleSheets ===
        "function"
    ) {

        sendResultToGoogleSheets({

            action:
                "update",

            test3Score:
                test3Score,

            test3Total:
                selectedProgram.questions.length,

            test3Program:
                selectedProgram.title
        });

    }
    else {

        console.warn(
            "Google Sheets function not found."
        );
    }


    console.log(
        "Test III result saved:",
        result
    );
}


// =====================================================
// TEST III STYLES
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

        .tracing-card {
            background: #ffffff;
            margin-top: 20px;
            padding: 28px;
            border-radius: 15px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.07);
            border-left: 5px solid #2856a3;
        }

        .tracing-card h3 {
            color: #183b70;
            margin-top: 0;
            margin-bottom: 20px;
        }

        .test3-code-box {
            background: #1e1e1e;
            color: #d4d4d4;
            font-family: Consolas, "Courier New", monospace;
            font-size: 16px;
            line-height: 1.9;
            white-space: pre;
            overflow-x: auto;
            padding: 24px;
            border-radius: 10px;
            text-align: left;
            margin: 0;
        }

        .python-line {
            display: block;
            min-height: 30px;
            white-space: pre;
        }

        .python-line:hover {
            background: #252526;
        }

        .py-normal {
            color: #d4d4d4;
        }

        .py-comment {
            color: #6a9955;
        }

        .py-keyword {
            color: #569cd6;
            font-weight: 600;
        }

        .py-string {
            color: #ce9178;
        }

        .py-number {
            color: #b5cea8;
        }

        .py-constant {
            color: #569cd6;
        }

        .tracing-question-title {
            margin-top: 30px !important;
        }

        .tracing-question {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 10px;
            padding: 18px;
            margin-top: 14px;
        }

        .tracing-number {
            color: #2856a3;
            font-weight: 700;
            margin-bottom: 6px;
        }

        .tracing-question p {
            margin: 6px 0 12px;
            line-height: 1.5;
        }

        .tracing-answer {
            width: 100%;
            box-sizing: border-box;
            padding: 11px 13px;
            border: 1px solid #cbd5e1;
            border-radius: 7px;
            font-size: 15px;
            outline: none;
        }

        .tracing-answer:focus {
            border-color: #2856a3;
            box-shadow: 0 0 0 2px rgba(40,86,163,0.12);
        }

        .tracing-review-message {
            background: #eef4ff;
            padding: 18px 22px;
            border-radius: 10px;
            margin-top: 20px;
            line-height: 1.6;
        }

        .tracing-review-question {
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 10px;
            padding: 18px;
            margin-top: 14px;
        }

        .tracing-review-question h4 {
            color: #183b70;
            margin: 0 0 10px;
        }

        .tracing-review-question p {
            margin: 8px 0;
        }

        .tracing-explanation {
            margin-top: 12px;
            padding: 12px 14px;
            background: #f1f5f9;
            border-radius: 8px;
            line-height: 1.5;
        }

        .test3-exit-area {
            text-align: center;
            margin-top: 35px;
            padding: 25px;
        }

        .test3-exit-button {
            background: #64748b;
            color: #ffffff;
            border: none;
            padding: 14px 35px;
            border-radius: 8px;
            font-size: 15px;
            font-weight: 700;
            cursor: pointer;
            letter-spacing: 0.5px;
        }

        .test3-exit-button:hover {
            background: #475569;
        }

        @media (max-width: 650px) {

            .tracing-card {
                padding: 18px;
            }

            .test3-code-box {
                font-size: 13px;
                padding: 16px;
            }

            .python-line {
                min-height: 25px;
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

        // Add Test III styles

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
        // START TEST III
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
