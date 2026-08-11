// TEST II: CODE COMPLETION WITH PYTHON IDE REVIEW & INTERACTIVE FEEDBACK
let selectedProgram = null;
let userAnswers = {};

// 1. PROGRAM BANK (5 SANITIZED PROGRAM SCENARIOS)
const test2ProgramBank = [
    {
        id: 1,
        title: "Program 1: E-Commerce Shopping Cart Manager",
        description: "Manages items in an online shopping cart using list operations and indexing.",
        codeTemplate: `
# Initialize shopping cart with three items
[BLANK_1] = ["Laptop", "Mouse", "Keyboard"]

# Display all items in the cart
[BLANK_2](cart)

# Display the first item in the cart
print(cart[[BLANK_3]])

# Add a new product to the end of the cart
cart.[BLANK_4]("Headphones")

# Remove the item "Mouse" from the cart
cart.[BLANK_5]("Mouse")

# Check total number of items remaining
total_items = [BLANK_6](cart)

# Display updated count
print("Total items:", total_items)

# Display the last item added
print("Last item:", cart[[BLANK_7]])

# Clear all items from the cart
cart.[BLANK_8]()

# Check if cart is empty
if [BLANK_9](cart) == 0:
    [BLANK_10]("Cart is empty!")
`.trim(),
        blanks: {
            BLANK_1: { answer: "cart", type: "variable", hint: "Variable name for the cart list" },
            BLANK_2: { answer: "print", type: "fixed", hint: "Built-in function to display output" },
            BLANK_3: { answer: "0", type: "fixed", hint: "Index for the first item in Python" },
            BLANK_4: { answer: "append", type: "fixed", hint: "List method to add an item to the end" },
            BLANK_5: { answer: "remove", type: "fixed", hint: "List method to delete a specific item value" },
            BLANK_6: { answer: "len", type: "fixed", hint: "Function to calculate length of a sequence" },
            BLANK_7: { answer: "-1", type: "fixed", hint: "Negative index used to target the last item" },
            BLANK_8: { answer: "clear", type: "fixed", hint: "List method to remove all elements" },
            BLANK_9: { answer: "len", type: "fixed", hint: "Function to evaluate item quantity" },
            BLANK_10: { answer: "print", type: "fixed", hint: "Built-in function to display notice" }
        }
    },
    {
        id: 2,
        title: "Program 2: Academic Performance Evaluator",
        description: "Evaluates student grades from a dictionary using conditional statements and loops.",
        codeTemplate: `
# Dictionary storing student names and numerical grades
grades = {
    "Alex": 88,
    "Bella": 72,
    "Carlos": 95,
    "Diana": 68
}

# List to store honors students
[BLANK_1] = []

# Iterate over student names and grades
for student, mark in grades.[BLANK_2]():
    # Check if student qualifies for honors (85 or higher)
    [BLANK_3] mark >= 85:
        honors_list.[BLANK_4](student)

# Display honors students
print("Honors Students:")
for student [BLANK_5] honors_list:
    [BLANK_6](student)

# Check specific grade for Carlos
carlos_grade = grades[[BLANK_7]]
print("Carlos Grade:", carlos_grade)

# Update Diana's grade to passing (75)
grades["Diana"] = [BLANK_8]

# Calculate total number of recorded students
total_students = [BLANK_9](grades)
print("Total Students:", [BLANK_10])
`.trim(),
        blanks: {
            BLANK_1: { answer: "honors_list", type: "variable", hint: "Variable name for the honors list" },
            BLANK_2: { answer: "items", type: "fixed", hint: "Dictionary method returning key-value pairs" },
            BLANK_3: { answer: "if", type: "fixed", hint: "Keyword initiating conditional check" },
            BLANK_4: { answer: "append", type: "fixed", hint: "List method to insert qualifying student" },
            BLANK_5: { answer: "in", type: "fixed", hint: "Membership keyword used in loops" },
            BLANK_6: { answer: "print", type: "fixed", hint: "Function to output student name" },
            BLANK_7: { answer: '"Carlos"', type: "fixed", hint: "Dictionary key string for Carlos (with quotes)" },
            BLANK_8: { answer: "75", type: "fixed", hint: "Integer value assigned to Diana" },
            BLANK_9: { answer: "len", type: "fixed", hint: "Function returning total entries" },
            BLANK_10: { answer: "total_students", type: "fixed", hint: "Variable holding total student count" }
        }
    },
    {
        id: 3,
        title: "Program 3: Temperature Unit Converter",
        description: "Defines and calls a custom Python function to convert Celsius temperatures to Fahrenheit.",
        codeTemplate: `
# Function definition for unit conversion
[BLANK_1] convert_to_fahrenheit(celsius):
    # Conversion formula
    fahrenheit = (celsius * 9 / 5) + 32
    [BLANK_2] fahrenheit

# Initialize temperature in Celsius
temp_c = 30

# Call conversion function
temp_f = [BLANK_3](temp_c)

# Display converted result
[BLANK_4]("Temperature in Fahrenheit:", temp_f)

# Evaluate if temperature is hot
if temp_f [BLANK_5] 80:
    print("Weather condition: Warm/Hot")
[BLANK_6]:
    print("Weather condition: Cool/Moderate")

# Store weekly temperatures in a list
weekly_c = [25, 28, 30, 22, 27]

# Print total days recorded
print("Days recorded:", [BLANK_7](weekly_c))

# Loop through weekly readings
for temp [BLANK_8] weekly_c:
    f_val = convert_to_fahrenheit([BLANK_9])
    [BLANK_10](f_val)
`.trim(),
        blanks: {
            BLANK_1: { answer: "def", type: "fixed", hint: "Keyword used to declare a function" },
            BLANK_2: { answer: "return", type: "fixed", hint: "Keyword used to send back calculated value" },
            BLANK_3: { answer: "convert_to_fahrenheit", type: "fixed", hint: "Function name being executed" },
            BLANK_4: { answer: "print", type: "fixed", hint: "Function to output results" },
            BLANK_5: { answer: ">", type: "fixed", hint: "Greater-than comparison operator" },
            BLANK_6: { answer: "else", type: "fixed", hint: "Fallback conditional branch keyword" },
            BLANK_7: { answer: "len", type: "fixed", hint: "Function to count list items" },
            BLANK_8: { answer: "in", type: "fixed", hint: "Iteration keyword" },
            BLANK_9: { answer: "temp", type: "fixed", hint: "Loop variable passed into converter function" },
            BLANK_10: { answer: "print", type: "fixed", hint: "Function printing daily converted values" }
        }
    },
    {
        id: 4,
        title: "Program 4: System Inventory Logger",
        description: "Filters low stock items from an inventory dictionary and writes them to a text file.",
        codeTemplate: `
# Inventory tracking item stock levels
stock = {
    "Paper": 12,
    "Pens": 4,
    "Pencils": 25,
    "Folders": 2
}

# Open text file in write mode
log_file = [BLANK_1]("low_stock.txt", [BLANK_2])

# Iterate through items to find low stock (less than 10)
for item, count in stock.[BLANK_3]():
    if count [BLANK_4] 10:
        # Write item name to log file
        log_file.[BLANK_5](item + "\\n")

# Close file after operations complete
log_file.[BLANK_6]()

# Display confirmation message
[BLANK_7]("Inventory scan complete.")

# Re-open file in read mode
read_file = open("low_stock.txt", [BLANK_8])

# Read entire file contents
content = read_file.[BLANK_9]()

# Print contents to console
print(content)

# Close read file stream
read_file.[BLANK_10]()
`.trim(),
        blanks: {
            BLANK_1: { answer: "open", type: "fixed", hint: "Built-in function to open file stream" },
            BLANK_2: { answer: '"w"', type: "fixed", hint: "File mode string for writing" },
            BLANK_3: { answer: "items", type: "fixed", hint: "Dictionary method returning key and value" },
            BLANK_4: { answer: "<", type: "fixed", hint: "Less-than relational operator" },
            BLANK_5: { answer: "write", type: "fixed", hint: "File object method to save text string" },
            BLANK_6: { answer: "close", type: "fixed", hint: "Method to safely save and close file" },
            BLANK_7: { answer: "print", type: "fixed", hint: "Built-in display function" },
            BLANK_8: { answer: '"r"', type: "fixed", hint: "File mode string for reading" },
            BLANK_9: { answer: "read", type: "fixed", hint: "File method returning full file contents" },
            BLANK_10: { answer: "close", type: "fixed", hint: "Method closing read stream" }
        }
    },
    {
        id: 5,
        title: "Program 5: User Profile & Security Manager",
        description: "Validates user account statuses and updates security access levels dynamically.",
        codeTemplate: `
# Initialize default access clearance level
clearance_level = 1

# Define user details in dictionary
[BLANK_1] = {
    "username": "admin_user",
    "role": "Administrator",
    "active": True
}

# Check if user profile is active
if user_profile[[BLANK_2]] == [BLANK_3]:
    [BLANK_4]("Access Granted")
    clearance_level = 5
[BLANK_5]:
    print("Access Denied")

# Display updated clearance level
print("Clearance Level:", [BLANK_6])

# Function checking system permission
def check_permission(level):
    if level >= 3:
        [BLANK_7] "Full Access"
    else:
        return "Restricted Access"

# Call check_permission function
status_msg = [BLANK_8](clearance_level)

# Print final status
[BLANK_9](status_msg)

# Verify data type of user profile
profile_type = [BLANK_10](user_profile)
`.trim(),
        blanks: {
            BLANK_1: { answer: "user_profile", type: "variable", hint: "Variable name for dictionary" },
            BLANK_2: { answer: '"active"', type: "fixed", hint: "Dictionary key string for activity status" },
            BLANK_3: { answer: "True", type: "fixed", hint: "Boolean constant representing true" },
            BLANK_4: { answer: "print", type: "fixed", hint: "Display output function" },
            BLANK_5: { answer: "else", type: "fixed", hint: "Keyword for non-qualifying condition branch" },
            BLANK_6: { answer: "clearance_level", type: "fixed", hint: "Variable storing updated level integer" },
            BLANK_7: { answer: "return", type: "fixed", hint: "Keyword outputting result from function" },
            BLANK_8: { answer: "check_permission", type: "fixed", hint: "Function name being invoked" },
            BLANK_9: { answer: "print", type: "fixed", hint: "Function printing status message" },
            BLANK_10: { answer: "type", type: "fixed", hint: "Built-in function returning object data type" }
        }
    }
];

// HELPER FUNCTIONS
function normalize(str) {
    if (!str) return "";
    let s = str.trim().toLowerCase();
    if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
        return s.slice(1, -1);
    }
    return s;
}

function isValidPythonIdentifier(name) {
    return /^[A-Za-z_][A-Za-z0-9_]*$/.test(name);
}

// INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("studentName")) {
        window.location.href = "index.html";
        return;
    }
    startTest2();
});

function startTest2() {
    const randIndex = Math.floor(Math.random() * test2ProgramBank.length);
    selectedProgram = test2ProgramBank[randIndex];

    const titleElem = document.getElementById("test2Title") || document.getElementById("test2ProgramTitle");
    const descElem = document.getElementById("test2Desc") || document.getElementById("test2ProgramDesc");

    if (titleElem) titleElem.innerText = selectedProgram.title;
    if (descElem) descElem.innerText = selectedProgram.description;

    renderCodeEditor();
}

function renderCodeEditor() {
    const container = document.getElementById("codeEditorContainer");
    if (!container) return;

    let code = selectedProgram.codeTemplate;

    for (let i = 1; i <= 10; i++) {
        const blankKey = `BLANK_${i}`;
        const inputHtml = `<input type="text" class="code-input" id="input_${blankKey}" data-blank="${blankKey}" placeholder="${i}" oninput="handleInputChange('${blankKey}')">`;
        code = code.replace(`[${blankKey}]`, inputHtml);
    }

    container.innerHTML = `
        <div class="ide-window">
            <div class="ide-header">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
                <span class="ide-filename">main.py</span>
            </div>
            <div class="ide-body">
                <pre class="python-code"><code>${code}</code></pre>
            </div>
        </div>
    `;
}

function handleInputChange(blankKey) {
    const inputElem = document.getElementById(`input_${blankKey}`);
    if (inputElem) userAnswers[blankKey] = inputElem.value;
}

// SUBMIT & REVIEW IN PYTHON IDE
function submitTest2() {
    let score = 0;
    const total = 10;
    const results = [];
    let detectedVariable = "";

    for (const [key, config] of Object.entries(selectedProgram.blanks)) {
        if (config.type === "variable" && userAnswers[key]) {
            if (isValidPythonIdentifier(userAnswers[key])) {
                detectedVariable = userAnswers[key];
                break;
            }
        }
    }

    for (let i = 1; i <= 10; i++) {
        const key = `BLANK_${i}`;
        const config = selectedProgram.blanks[key];
        const rawUserAns = userAnswers[key] || "";
        const normUserAns = normalize(rawUserAns);
        const normExpected = normalize(config.answer);

        let isCorrect = false;

        if (config.type === "fixed") {
            isCorrect = (normUserAns === normExpected);
        } else if (config.type === "variable") {
            if (detectedVariable) {
                isCorrect = (normUserAns === normalize(detectedVariable));
            } else {
                isCorrect = isValidPythonIdentifier(rawUserAns);
            }
        }

        if (isCorrect) score++;

        results.push({
            blank: key,
            blankIndex: i,
            userAnswer: rawUserAns,
            expectedAnswer: config.answer,
            isCorrect: isCorrect,
            hint: config.hint
        });
    }

    saveTest2Result(score, total, results);
}

function saveTest2Result(score, total, results) {
    const studentName = localStorage.getItem("studentName") || "Unknown Student";
    const studentSection = localStorage.getItem("studentSection") || "N/A";
    const attemptId = localStorage.getItem("attemptId") || Date.now().toString();

    const payload = {
        attemptId: attemptId,
        studentName: studentName,
        studentSection: studentSection,
        testType: "Test II - Code Completion",
        programTitle: selectedProgram.title,
        score: score,
        total: total,
        percentage: ((score / total) * 100).toFixed(2) + "%",
        details: results,
        timestamp: new Date().toISOString()
    };

    localStorage.setItem("test2Result", JSON.stringify(payload));
    localStorage.setItem("test2Completed", "true");

    if (typeof sendResultToGoogleSheets === "function") {
        sendResultToGoogleSheets(payload);
    }

    renderIDEReviewUI(score, total, results);
}

// RENDER IDE REVIEW WITH CLICKABLE RED/GREEN BLANKS & POPOVERS
function renderIDEReviewUI(score, total, results) {
    const submitBtn = document.getElementById("submitTest2Btn");
    const nextBtn = document.getElementById("proceedTest3Btn");
    const container = document.getElementById("codeEditorContainer");

    if (submitBtn) submitBtn.style.display = "none";
    if (nextBtn) nextBtn.style.display = "inline-block";

    let code = selectedProgram.codeTemplate;

    // Replace blanks with color-coded inputs & click events
    results.forEach((r) => {
        const key = r.blank;
        const colorClass = r.isCorrect ? "ide-input-correct" : "ide-input-incorrect";
        const valText = r.userAnswer ? escapeHTML(r.userAnswer) : `Blank ${r.blankIndex}`;
        
        const reviewedInputHtml = `
            <span class="blank-wrapper">
                <input type="text" class="code-input ${colorClass}" value="${valText}" readonly onclick="toggleFeedbackTooltip('${key}', ${r.isCorrect})">
                <div class="ide-popover" id="popover_${key}" style="display: none;">
                    <div class="popover-header ${r.isCorrect ? 'pop-green' : 'pop-red'}">
                        ${r.isCorrect ? '✓ Correct Answer' : '✗ Incorrect Answer'}
                    </div>
                    <div class="popover-body">
                        <p><strong>Your Input:</strong> <code>${escapeHTML(r.userAnswer || "(empty)")}</code></p>
                        <p><strong>Expected Answer:</strong> <code>${escapeHTML(r.expectedAnswer)}</code></p>
                        <p class="pop-hint"><em>Hint:</em> ${escapeHTML(r.hint)}</p>
                    </div>
                </div>
            </span>
        `;
        code = code.replace(`[${key}]`, reviewedInputHtml);
    });

    container.innerHTML = `
        <div class="score-card-ide">
            <h2>Test II Complete!</h2>
            <p class="score-text">Score: <strong>${score} / ${total}</strong> (${((score / total) * 100).toFixed(0)}%)</p>
            <p class="instruction-text">💡 <em>Click on any <span style="color: #ef4444; font-weight: bold;">RED input box</span> to view the explanation and correct answer inside the IDE!</em></p>
        </div>
        <div class="ide-window">
            <div class="ide-header">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
                <span class="ide-filename">main_reviewed.py</span>
            </div>
            <div class="ide-body">
                <pre class="python-code"><code>${code}</code></pre>
            </div>
        </div>
    `;
}

function toggleFeedbackTooltip(key, isCorrect) {
    // Hide all popovers first
    document.querySelectorAll(".ide-popover").forEach(p => p.style.display = "none");

    const popover = document.getElementById(`popover_${key}`);
    if (popover) {
        popover.style.display = "block";
    }
}

function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
}
