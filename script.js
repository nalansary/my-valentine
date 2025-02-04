function clearScreen(elementID) {
    document.getElementById(elementID).innerHTML = "";
}
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
    const popup = document.getElementById('popup-overlay');
    popup.style.display = 'none';

}

function handleNo() {
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
        
    }
}
