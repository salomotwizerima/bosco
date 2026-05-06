// REGISTER
function register() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user === "" || pass === ""){
        alert("Fill all fields");
        return;
    }

    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);

    alert("Account created!");
    window.location.href = "login.html";
}

// LOGIN
function login() {
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    let storedUser = localStorage.getItem("username");
    let storedPass = localStorage.getItem("password");

    if(user === storedUser && pass === storedPass){
        localStorage.setItem("loggedIn", "true");
        window.location.href = "index.html"; // your main page
    } else {
        alert("Wrong username or password");
    }
}

// LOGOUT
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}

// CHECK LOGIN (protect page)
function checkLogin(){
    let isLogged = localStorage.getItem("loggedIn");
    if(!isLogged){
        window.location.href = "login.html";
    }
}