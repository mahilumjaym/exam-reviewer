// =====================================================
// PYTHON REVIEWER - GOOGLE SHEETS CONNECTION
// =====================================================

const GOOGLE_SHEETS_URL =
    "https://script.google.com/macros/s/AKfycby-QlBUQfHu_HN1-sh5JRYhP8S8NnFwLCVc6JIjmWynLPc6G5_l8Gxmf8ffF212MiQw/exec";

function sendResultToGoogleSheets(data) {
    // 1. Fetch fallback student metadata from localStorage
    const localName = localStorage.getItem("studentName") || "";
    const localSection = localStorage.getItem("studentSection") || "";
    const localAttemptId = localStorage.getItem("attemptId") || Date.now().toString();

    // 2. Normalize payload properties (ensures consistency)
    const payload = {
        studentName: data.studentName || localName,
        studentSection: data.studentSection || data.section || localSection,
        attemptId: data.attemptId || localAttemptId,
        testType: data.testType || "Unknown Test",
        programTitle: data.programTitle || "N/A",
        score: data.score !== undefined ? data.score : 0,
        total: data.total !== undefined ? data.total : 0,
        percentage: data.percentage || "0%",
        details: data.details || [],
        timestamp: data.timestamp || new Date().toISOString()
    };

    console.log("Sending reviewer payload to Google Sheets:", payload);

    // 3. Dispatch POST request using text/plain to bypass CORS preflight
    fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify(payload)
    })
    .then(function() {
        console.log("✅ Reviewer data successfully dispatched to Google Sheets!");
    })
    .catch(function(error) {
        console.error("❌ Google Sheets network error:", error);
    });
}
