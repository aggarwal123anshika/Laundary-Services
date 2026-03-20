function changeColor(color) {
    document.body.style.backgroundColor = color;
}

function greetUser() {
    let name = document.getElementById("nameInput").value;
    
    if (name.trim() === "") {
        alert("Please enter a name");
        return;
    }

    document.getElementById("greeting").innerText = "Hello, " + name;
}