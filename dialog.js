const texts = ["hey babe! :)",
    "you're wondering what's going on right now.",
    "well, let me tell you.",
    "these last few years have been amazing...",
    "because i had you!",
    "you make me feel soooooo happy.",
    "i love how you get me,",
    "i love how you make me laugh,",
    "and i love how you always take care of me.",
    "im always in awe",
    "with all your amazing skills,",
    "and your beautiful smile.",
    "which is why i want to know..."];
let index = 0;


function changeText() {    
    const div = document.getElementById('text');
    
    if (index < texts.length) {
        div.textContent = texts[index];
        index++;
    }

    if(index == texts.length) {
        showPopup();
    }
    
    

}