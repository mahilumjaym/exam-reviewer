// =====================================================
// PYTHON REVIEWER
// GOOGLE SHEETS CONNECTION
// =====================================================

// =====================================================
// GOOGLE APPS SCRIPT WEB APP
// =====================================================

const GOOGLE_SHEETS_URL =
    "https://script.google.com/macros/s/AKfycby-QlBUQfHu_HN1-sh5JRYhP8S8NnFwLCVc6JIjmWynLPc6G5_l8Gxmf8ffF212MiQw/exec";


// =====================================================
// SEND RESULT TO GOOGLE SHEETS
// =====================================================

function sendResultToGoogleSheets(data) {

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


    const payload = {

        studentName:
            studentName,

        section:
            studentSection,

        attemptId:
            attemptId,

        ...data

    };


    console.log(
        "Sending reviewer data:",
        payload
    );


    fetch(
        GOOGLE_SHEETS_URL,
        {

            method:
                "POST",

            mode:
                "no-cors",

            headers: {

                "Content-Type":
                    "text/plain;charset=utf-8"

            },

            body:
                JSON.stringify(
                    payload
                )

        }
    )
    .then(
        function() {

            console.log(
                "Reviewer data sent to Google Sheets."
            );

        }
    )
    .catch(
        function(error) {

            console.error(
                "Google Sheets recording error:",
                error
            );

        }
    );

}
