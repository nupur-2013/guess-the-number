// Create the login function here.
function Login() {
    player_name = document.getElementById("playername").value;
    localStorage.seItem("player_name", player_name);

    window.location = "gamepage.html";
}