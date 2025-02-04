function clearScreen(elementID) {
    document.getElementById(elementID).innerHTML = "";
}

//Press Start
function showHealth() {
    var health = document.getElementById("health");
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
document.addEventListener('DOMContentLoaded', function() {
    // Set initial states
    document.getElementById("health").style.visibility = "hidden";
    document.getElementById("middle").style.display = "block";
});

let music = document.getElementById("background-music");
music.volume = 0.5;
