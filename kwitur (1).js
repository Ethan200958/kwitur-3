function addUser() {
    var username = document.getElementById("username").value;
    localStorage.setItem("username", username);
    window.location = "kwiturROOM (1).html";
}