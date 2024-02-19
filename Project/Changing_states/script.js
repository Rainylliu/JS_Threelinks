document.addEventListener('DOMContentLoaded', () => {

    let userInput = prompt("Please enter 'rainy' to start the rain animation:");

    if (userInput && userInput.toLowerCase() === 'rainy') {
        setInterval(rain, 50);
    } else {
        alert("You didn't enter 'rainy'. The rain animation will not be shown.");
    }
});

function randomText() {
    var text = ("rainy");
    letter =text[Math.floor(Math.random() * text.length)];
    return letter;
}
function rain(){
    let cloud  = document.querySelector('.cloud')
    let e = document.createElement('div');
    let left = Math.floor(Math.random() * 300)
    let size = Math.random() * 1.5;
    let duration = Math.random() * 1;
    e.classList.add('text');
    cloud.appendChild(e);
    e.innerText = randomText();
    e.style.left = left + 'px';
    e.style.fontSize = 0.5+size+'em';
    e.style.animationDuration = 1+duration+'s';

    setTimeout(function() {
        cloud.removeChild(e)
    },2000)
}
setInterval(rain, 50);


window.addEventListener('scroll', () => {
    const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    const startColor = { r: 34, g: 52, b: 78 }; 
    const endColor = { r: 184, g: 213, b: 255 }; 
    
    const newR = Math.floor(startColor.r + (endColor.r - startColor.r) * scrollPercentage);
    const newG = Math.floor(startColor.g + (endColor.g - startColor.g) * scrollPercentage);
    const newB = Math.floor(startColor.b + (endColor.b - startColor.b) * scrollPercentage);
    
    document.documentElement.style.setProperty('--background-start', `rgb(${newR}, ${newG}, ${newB})`);
});



document.addEventListener('DOMContentLoaded', () => {
    const center = document.querySelector('.center');

    center.addEventListener('mouseenter', () => {
        createBubble();
    });

    function createBubble() {
        if (document.querySelectorAll('.bubble').length >= 50) return; // 确保泡泡总数不超过50
        const bubble = document.createElement('span');
        bubble.classList.add('bubble');
        bubble.innerText = '🫧';
        center.appendChild(bubble);

        bubble.addEventListener('click', () => {
            bubble.remove();
        });

    }
});
