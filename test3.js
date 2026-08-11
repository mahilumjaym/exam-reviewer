// TEST III: CODE TRACING (COMPLETE & SANITIZED)
let test3Answers = {};

// 1. TRACING PROGRAM CODE & QUESTIONS (20 SUB-QUESTIONS)
const test3Data = {
    programTitle: "Library Overdue Book & Fine Processor",
    programDescription: "Trace the execution of this Python script line-by-line to answer the 20 tracing questions below.",
    sourceCode: `
# Line 1: Define function to calculate library fines
def calculate_fine(days_overdue):
    if days_overdue <= 3:
        return days_overdue * 5.0
    else:
        return (3 * 5.0) + ((days_overdue - 3) * 10.0)

# Line 9: Dictionary storing borrowed books and days overdue
borrowed_books = {
    "B101": {"title": "Python Basics", "days": 2},
    "B102": {"title": "Data Structures", "days": 5},
    "B103": {"title": "Web Development", "days": 0},
    "B104": {"title": "Database Systems", "days": 4}
}

# Line 17: Initialize tracking structures
overdue_records = []
total_fines_collected = 0.0

# Line 21: Process books loop
for book_id, info in borrowed_books.items():
    days = info["days"]
    if days > 0:
        fine = calculate_fine(days)
        overdue_records.append(info["title"])
        total_fines_collected += fine

# Line 29: Open log file to record overdue book count
log_file = open("overdue_log.txt", "w")
log_file.write(f"Total Overdue: {len(overdue_records)}\\n")
log_file.close()
`.trim(),

    questions: [
        {
            id: 1,
            question: "What is the data type of the variable `borrowed_books` initialized on Line 9?",
            options: ["List", "Dictionary", "Tuple", "String"],
            answer: "Dictionary",
            explanation: "`borrowed_books` is enclosed in curly braces `{}` with key-value pairs, making it a Dictionary."
        },
        {
            id: 2,
            question: "What value does `calculate_fine(2)` return when evaluated for book 'B101'?",
            options: ["0.0", "5.0", "10.0", "15.0"],
            answer: "10.0",
            explanation: "Since 2 <= 3, the function evaluates `2 * 5.0`, returning `10.0`."
        },
        {
            id: 3,
            question: "When processing book 'B102' (`days = 5`), how many times does the `else` branch inside `calculate_fine` execute?",
            options: ["0 times", "1 time", "3 times", "5 times"],
            answer: "1 time",
            explanation: "The function is called once for 'B102'. Since 5 > 3, it enters the `else` branch exactly once."
        },
        {
            id: 4,
            question: "What fine amount is returned for book 'B102' (`calculate_fine(5)`)?",
            options: ["25.0", "35.0", "50.0", "15.0"],
            answer: "35.0",
            explanation: "Calculated as `(3 * 5.0) + ((5 - 3) * 10.0)` = `15.0 + (2 * 10.0)` = `15.0 + 20.0` = `35.0`."
        },
        {
            id: 5,
            question: "Is book 'B103' added to the `overdue_records` list during iteration?",
            options: ["Yes", "No", "Only if fines exceed 10.0", "Triggers an execution error"],
            answer: "No",
            explanation: "For 'B103', `days` is 0. The conditional `if days > 0:` evaluates to `False`, so appending is skipped."
        },
        {
            id: 6,
            question: "How many total items are stored in `overdue_records` after the loop on Line 21 completes?",
            options: ["1", "2", "3", "4"],
            answer: "3",
            explanation: "Books 'B101' (2 days), 'B102' (5 days), and 'B104' (4 days) all have `days > 0`, so 3 titles are appended."
        },
        {
            id: 7,
            question: "What fine amount is calculated for book 'B104' (`days = 4`)?",
            options: ["20.0", "25.0", "30.0", "40.0"],
            answer: "25.0",
            explanation: "`calculate_fine(4)` evaluates `(3 * 5.0) + ((4 - 3) * 10.0)` = `15.0 + 10.0` = `25.0`."
        },
        {
            id: 8,
            question: "What is the final accumulated value of `total_fines_collected` after processing all books?",
            options: ["60.0", "70.0", "35.0", "100.0"],
            answer: "70.0",
            explanation: "Sum of all fines: B101 (10.0) + B102 (35.0) + B103 (0.0) + B104 (25.0) = `70.0`."
        },
        {
            id: 9,
            question: "What list element is at index `overdue_records[0]` at the end of execution?",
            options: ["'Python Basics'", "'Data Structures'", "'Web Development'", "'B101'"],
            answer: "'Python Basics'",
            explanation: "'B101' is the first overdue book processed, so its title `'Python Basics'` is at index 0."
        },
        {
            id: 10,
            question: "What method is used on Line 21 to extract key-value pairs from `borrowed_books`?",
            options: [".keys()", ".values()", ".items()", ".get()"],
            answer: ".items()",
            explanation: "The `.items()` dictionary method yields key-value tuple pairs (`book_id, info`) during iteration."
        },
        {
            id: 11,
            question: "What file access mode parameter is passed to `open()` on Line 29?",
            options: ["'r'", "'w'", "'a'", "'x'"],
            answer: "'w'",
            explanation: "The second argument `'w'` opens the file in write mode."
        },
        {
            id: 12,
            question: "What string text is written into `overdue_log.txt` on Line 30?",
            options: ["Total Overdue: 3\\n", "Total Overdue: 4\\n", "Total Fines: 70.0\\n", "Overdue: Python Basics\\n"],
            answer: "Total Overdue: 3\\n",
            explanation: "`len(overdue_records)` evaluates to 3, formatting the output string as `'Total Overdue: 3\\n'`."
        },
        {
            id: 13,
            question: "What happens if `overdue_log.txt` already exists on disk when Line 29 runs?",
            options: [
                "It raises a FileExistsError.",
                "It overwrites the existing file contents.",
                "It appends new text to the end of the existing file.",
                "It prompts the user for permission."
            ],
            answer: "It overwrites the existing file contents.",
            explanation: "Opening a file in write mode (`'w'`) truncates/overwrites any existing file contents."
        },
        {
            id: 14,
            question: "What is the data type of the loop variable `info` during iteration?",
            options: ["String", "Integer", "Dictionary", "List"],
            answer: "Dictionary",
            explanation: "Each value inside `borrowed_books` is an inner dictionary containing `'title'` and `'days'` keys."
        },
        {
            id: 15,
            question: "What would `info[\"days\"]` return during the second iteration of the loop?",
            options: ["2", "5", "0", "4"],
            answer: "5",
            explanation: "The second item in `borrowed_books` is 'B102', whose `'days'` value is `5`."
        },
        {
            id: 16,
            question: "Why is Line 31 (`log_file.close()`) considered necessary practice in Python file handling?",
            options: [
                "To prevent memory leaks and ensure buffer content is flushed to disk.",
                "To delete the file after reading.",
                "To reboot the Python interpreter.",
                "To convert the file into a PDF document."
            ],
            answer: "To prevent memory leaks and ensure buffer content is flushed to disk.",
            explanation: "Closing file streams flushes output buffers and releases system lock handles."
        },
        {
            id: 17,
            question: "What is the return data type of the `calculate_fine` function?",
            options: ["int", "float", "str", "bool"],
            answer: "float",
            explanation: "The function multiplies integers by floating-point numbers (`5.0`, `10.0`), returning `float` values."
        },
        {
            id: 18,
            question: "How many times is the function `calculate_fine()` invoked during script execution?",
            options: ["2 times", "3 times", "4 times", "5 times"],
            answer: "3 times",
            explanation: "The function is called inside `if days > 0:`. Since 3 books have `days > 0`, it is called 3 times."
        },
        {
            id: 19,
            question: "What value does `len(borrowed_books)` yield?",
            options: ["2", "3", "4", "8"],
            answer: "4",
            explanation: "`borrowed_books` contains 4 top-level keys ('B101', 'B102', 'B103', 'B104')."
        },
        {
            id: 20,
            question: "Which list method is used on Line 25 to register new overdue book titles?",
            options: [".add()", ".insert()", ".append()", ".push()"],
            answer: ".append()",
            explanation: "The `.append()` method attaches new items to the end of a list."
        }
    ]
};

// 2. INITIALIZATION & UI RENDERING
document.addEventListener("DOMContentLoaded", () => {
    // Route guard check
    if (!localStorage.getItem("studentName")) {
        window.location.href = "index.html";
        return;
    }
    initTest3();
});

function initTest3() {
    document.getElementById("test3ProgramTitle").innerText = test3Data.programTitle;
    document.getElementById("test3ProgramDesc").innerText = test3Data.programDescription;

    // Render code panel
    const codeBlock = document.getElementById("tracingCodeBlock");
    if (codeBlock) {
        codeBlock.textContent = test3Data.sourceCode;
    }

    renderQuestions();
}

function renderQuestions() {
    const qContainer = document.getElementById("tracingQuestionsContainer");
    let html = "";

    test3Data.questions.forEach((q, idx) => {
        html += `
            <div class="tracing-card" id="q_card_${q.id}">
                <p class="question-text"><strong>Q${idx + 1}.</strong> ${q.question}</p>
                <div class="options-group">
        `;

        q.options.forEach((opt, optIdx) => {
            html += `
                <label class="option-label">
                    <input type="radio" name="t3_q_${q.id}" value="${opt}" onchange="selectAnswer(${q.id}, '${escapeQuote(opt)}')">
                    <span>${opt}</span>
                </label>
            `;
        });

        html += `
                </div>
            </div>
        `;
    });

    qContainer.innerHTML = html;
}

function selectAnswer(questionId, value) {
    test3Answers[questionId] = value;
}

function escapeQuote(str) {
    return str.replace(/'/g, "\\'");
}

// 3. SUBMISSION, SCORING & GOOGLE SHEETS SYNC
function submitTest3() {
    let score = 0;
    const total = test3Data.questions.length;
    const detailedResults = [];

    test3Data.questions.forEach((q) => {
        const userAns = test3Answers[q.id] || "No Answer";
        const isCorrect = (userAns === q.answer);

        if (isCorrect) score++;

        detailedResults.push({
            questionId: q.id,
            questionText: q.question,
            userAnswer: userAns,
            correctAnswer: q.answer,
            isCorrect: isCorrect,
            explanation: q.explanation
        });
    });

    saveTest3Result(score, total, detailedResults);
}

function saveTest3Result(score, total, results) {
    const studentName = localStorage.getItem("studentName") || "Unknown Student";
    const studentSection = localStorage.getItem("studentSection") || "N/A";
    const attemptId = localStorage.getItem("attemptId") || Date.now().toString();

    const payload = {
        attemptId: attemptId,
        studentName: studentName,
        studentSection: studentSection,
        testType: "Test III - Code Tracing",
        programTitle: test3Data.programTitle,
        score: score,
        total: total,
        percentage: ((score / total) * 100).toFixed(2) + "%",
        details: results,
        timestamp: new Date().toISOString()
    };

    // Local storage persistence
    localStorage.setItem("test3Result", JSON.stringify(payload));
    localStorage.setItem("test3Completed", "true");

    // SYNC TO GOOGLE SHEETS API
    if (typeof sendResultToGoogleSheets === "function") {
        sendResultToGoogleSheets(payload);
    }

    renderTest3FeedbackUI(score, total, results);
}

function renderTest3FeedbackUI(score, total, results) {
    const mainContainer = document.getElementById("tracingQuestionsContainer");
    const submitBtn = document.getElementById("submitTest3Btn");

    if (submitBtn) submitBtn.style.display = "none";

    let feedbackHtml = `
        <div class="score-card">
            <h2>Test III Complete!</h2>
            <p class="score-text">Final Score: <strong>${score} / ${total}</strong> (${((score / total) * 100).toFixed(0)}%)</p>
            <button class="action-btn" onclick="window.location.href='summary.html'">View Full Exam Summary</button>
        </div>
        <div class="feedback-list">
    `;

    results.forEach((r, idx) => {
        const cardClass = r.isCorrect ? "card-correct" : "card-incorrect";
        const badgeText = r.isCorrect ? "✓ Correct" : "✗ Incorrect";

        feedbackHtml += `
            <div class="feedback-card ${cardClass}">
                <div class="feedback-header">
                    <span><strong>Q${idx + 1}:</strong> ${r.questionText}</span>
                    <span class="badge">${badgeText}</span>
                </div>
                <div class="feedback-body">
                    <p><strong>Your Answer:</strong> ${escapeHTML(r.userAnswer)}</p>
                    <p><strong>Correct Answer:</strong> ${escapeHTML(r.correctAnswer)}</p>
                    <p class="explanation-text"><em>Explanation:</em> ${r.explanation}</p>
                </div>
            </div>
        `;
    });

    feedbackHtml += `</div>`;
    mainContainer.innerHTML = feedbackHtml;
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
