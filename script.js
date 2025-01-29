function calculateArea() {
    let width = document.getElementById("width").value;
    let height = document.getElementById("height").value;
    let area = width * height;
    document.getElementById("result").innerText = "Area: " + area;
}

document.getElementById("animateButton").addEventListener("click", function() {
    let box = document.getElementById("animatedBox");
    box.classList.toggle("enlarged");
});