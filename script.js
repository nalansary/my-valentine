const image = document.getElementById('health-bar');

let healthCount = 3;

//Press Start
function showHealth() {
    var health = document.getElementById("health-bar");
    var start = document.getElementById("start");
    var middle = document.getElementById("middle");
    var bottom = document.getElementById("bottom");

    // Set initial visibility of health
    health.style.visibility = "hidden";
    bottom.style.visibility = "hidden";


    // Check if middle div exists
    if (middle) {
        //middle.style.display = "none"; // Hide middle section
        health.style.visibility = "visible"; // Show health
        bottom.style.visibility = "visible"; // Show bottom
        if (start) {
            middle.style.animation = "none";
            start.remove(); // Remove start button


        }
    }
}

// Add event listener when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Set initial states
    document.getElementById("health-bar").style.visibility = "hidden";
    document.getElementById("middle").style.display = "block";
});

let music = document.getElementById("background-music");
music.volume = 0.1;

function showPopup() {
    document.getElementById('popup-overlay').style.display = 'flex';
}

function handleYes() {
    var screen = document.getElementById("container");
    const popup = document.getElementById('popup-overlay');
    popup.style.display = 'none';
    screen.innerHTML = "";
    

    const gameOverImage = document.createElement('img');
    gameOverImage.src = "images/pixel-trunks.png";
    gameOverImage.style.width = "50%";
    gameOverImage.style.height = "auto";
    screen.appendChild(gameOverImage);
    alert("YAAAAAAAAYYYYYYY!!! CAN'T WAIT TO SPEND TIME WITH YOUUUUU <33");

}

function handleNo() {
    var screen = document.getElementById("container");
    const healthBar = document.getElementById('health-bar').querySelector('img');
    const popup = document.getElementById('popup-overlay');
    healthCount--;

    if (healthCount > 0) {
        healthBar.src = `images/healthbar-${healthCount}.png`; // Fixed template literal syntax
        if (healthCount === 2) {
            healthBar.style.width = '30%';
        } else if (healthCount === 1) {
            healthBar.style.width = '20%';
        }
    } else {
        healthBar.style.display = 'none';
        popup.style.display = 'none';
        screen.innerHTML = "";
        

        const gameOverImage = document.createElement('img');
        gameOverImage.src = "images/pixel-yamcha.png";
        gameOverImage.style.width = "100%";
        gameOverImage.style.height = "100%";
        screen.appendChild(gameOverImage);
        alert("LOOK WHAT YOU DID TO ME. REFRESH AND MAKE BETTER CHOICES >:(");
    
        
    }


}
