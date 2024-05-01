function randomText() {
    var text = ("rainy");
    letter =text[Math.floor(Math.random() * text.length)];
    return letter;
}
function rain() {
    let cloud = document.querySelector('.cloud');
    let e = document.createElement('div');
    let screenSize = window.innerWidth; 
    let left;
    let size;
    if (screenSize <= 767) {
        left = Math.floor(Math.random() * 100); 
        size = Math.random() * 0.3; 
    } else {
        left = Math.floor(Math.random() * 200);
        size = Math.random() * 0.8;
    }
    let duration = Math.random() * 1; 
    e.classList.add('text');
    cloud.appendChild(e);
    e.innerText = randomText();
    e.style.left = left + 'px';
    e.style.fontSize = 0.5 + size + 'em'; 
    e.style.animationDuration = 1 + duration + 's';

    setTimeout(function() {
        cloud.removeChild(e);
    }, 2000);
}
let rainInterval;

document.querySelector('.cloud').addEventListener('mouseover', () => {
    if (!rainInterval) {
        rainInterval = setInterval(rain, 50);
    }
});

document.querySelector('.cloud').addEventListener('mouseout', () => {
    clearInterval(rainInterval);
    rainInterval = null; 
});


window.addEventListener('scroll', () => {
    const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    const startColor = { r: 12, g: 21, b: 34 }; 
    const endColor = { r: 144, g: 150, b: 159 }; 
    
    const newR = Math.floor(startColor.r + (endColor.r - startColor.r) * scrollPercentage);
    const newG = Math.floor(startColor.g + (endColor.g - startColor.g) * scrollPercentage);
    const newB = Math.floor(startColor.b + (endColor.b - startColor.b) * scrollPercentage);
    
    document.documentElement.style.setProperty('--background-start', `rgb(${newR}, ${newG}, ${newB})`);
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollDowns = document.querySelector('.scroll-downs');
    setTimeout(() => {
        scrollDowns.style.display = 'none';
    }, 3000); 

    
});


document.addEventListener('scroll', () => {
    const vh = window.innerHeight;
    const scrollY = window.scrollY; 
    const scrollPercent = scrollY / vh;

    const c1 = document.querySelector('.c1');
    if (scrollPercent >= 0.35) {
        const transformAmount = Math.max((scrollPercent - 0.35) * 100, 0);
        c1.style.transform = `translateX(${transformAmount}vw)`;
        c1.style.opacity = 1 - transformAmount / 100;
    }

    const c2 = document.querySelector('.c2');
    if (scrollPercent >= 0.80) {
        const transformAmount = Math.max((scrollPercent - 0.80) * 100, 0);
        c2.style.transform = `translateX(-${transformAmount}vw)`;
        c2.style.opacity = 1 - transformAmount / 100;
    }

    const c3 = document.querySelector('.c3');
    if (scrollPercent >= 1.30) {
        const transformAmount = Math.max((scrollPercent - 1.40) * 100, 0);
        c3.style.transform = `translateX(${transformAmount}vw)`;
        c3.style.opacity = 1 - transformAmount / 100;
    }

    const c4 = document.querySelector('.c4');
    if (scrollPercent >= 1.80) {
        const transformAmount = Math.max((scrollPercent - 1.90) * 100, 0);
        c4.style.transform = `translateX(-${transformAmount}vw)`;
        c4.style.opacity = 1 - transformAmount / 100;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const center = document.querySelector('.center');

    function createBubble() {
        const bubbleCount = 3 + Math.floor(Math.random() * 4); 
        for (let i = 0; i < bubbleCount; i++) {
            if (document.querySelectorAll('.bubble').length >= 50) break;

            const bubble = document.createElement('span');
            bubble.classList.add('bubble');
            bubble.innerText = '🫧';
            center.appendChild(bubble);

            bubble.style.left = `${Math.random() * 100}%`;

            bubble.style.fontSize = `${30 + Math.random() * 50}px`;

            bubble.addEventListener('click', () => {
                bubble.remove();
            });
        }
    }
    setInterval(createBubble, 10000);
});
