document.getElementById("q2").style.display = "none";
document.getElementById("q3").style.display = "none";

function q1(answer) {
    document.getElementById("q1").style.display = "none";
    if (answer === "a1") {
        document.getElementById("q2").style.display = "block";
    } else {
        document.getElementById("q3").style.display = "block";
    }
} function q2(answer) {
    document.getElementById("q2").style.display = "none";
    if (answer === "a1") {

    } else {

    }
} function q3(answer) {
    document.getElementById("q3").style.display = "none";
    if (answer === "a1") {
        document.getElementById("q4").style.display = "block";
    } else {
        document.getElementById("q5").style.display = "block";
    }
}