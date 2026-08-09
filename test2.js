alert("THIS IS THE NEW TEST2.JS");
console.log("NEW TEST2.JS LOADED");

function submitTest2() {
    console.log("NEW SUBMIT FUNCTION");
    alert("NEW SUBMIT FUNCTION IS WORKING");
}

document.addEventListener("DOMContentLoaded", function () {

    console.log("DOM LOADED");

    document
        .getElementById("submitBtn")
        .addEventListener("click", submitTest2);

});
