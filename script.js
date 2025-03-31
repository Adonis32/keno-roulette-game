// Funksioni i Kyçjes dhe Regjistrimit
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if(username && password) {
        // Këtu mund të bëni autentikimin në një backend
        alert("Mirësevini " + username + "!");
        
        // Fshijmë formularin dhe shfaqim lojërat
        document.querySelector(".auth-container").style.display = "none";
        document.querySelector(".game-container").style.display = "block";
    }
});

// Funksioni i lojës Keno
function playKeno() {
    alert("Po luhet Keno! Zgjedh numrat dhe prit rezultatet.");
}

// Funksioni i lojës Roulette
function playRoulette() {
    alert("Po luhet Roulette! Zgjedh numrin dhe prit rezultatin.");
}
