var scrolltest = document.getElementById("box2");
function wtfsigma() {
scrolltest.scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", function() {
    var sillybutton = document.getElementById("who");
    sillybutton.addEventListener("click", wtfsigma);
});