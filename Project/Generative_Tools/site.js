let currentImageIndex = 0;
const images = document.querySelectorAll('.portrait-img');
const nextButton = document.getElementById('change');

nextButton.addEventListener('click', () => {
    images[currentImageIndex].style.display = 'none';
    
    currentImageIndex = (currentImageIndex + 1) % images.length;
    
    images[currentImageIndex].style.display = 'block';
});

document.getElementById('hueSlider').addEventListener('input', function() {
    const hueValue = this.value;
    document.querySelectorAll('.portrait .portrait-img').forEach(img => {
        img.style.filter = `hue-rotate(${hueValue}deg)`;
    });
});


document.getElementById('sticker-btn').addEventListener('click', function() {
    document.querySelectorAll('.sticker-img').forEach(function(img) {
        img.style.display = 'block';
    });
    document.getElementById('controls').style.display = 'block';
    document.getElementById('instruction').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', () => {
    const box1 = document.getElementById('box1');
    let draggedElement = null;
    let offsetX = 0;
    let offsetY = 0;

    document.querySelectorAll('.sticker-img').forEach(img => {
        img.addEventListener('dragstart', e => {
            draggedElement = e.target;
            const rect = draggedElement.getBoundingClientRect();
            offsetX = e.clientX - rect.left; 
            offsetY = e.clientY - rect.top;
        });
    });

    box1.addEventListener('dragover', e => {
        e.preventDefault();
    });
    box1.addEventListener('drop', e => {
        e.preventDefault();
        if (draggedElement) {
            const box1Rect = box1.getBoundingClientRect();
            const x = e.clientX - box1Rect.left - offsetX;
            const y = e.clientY - box1Rect.top - offsetY;
            const stickerWidthInPixels = parseFloat(window.getComputedStyle(draggedElement).width);
            draggedElement.style.width = `${stickerWidthInPixels}px`;

            draggedElement.style.position = 'absolute';
            draggedElement.style.left = `${x}px`;
            draggedElement.style.top = `${y}px`;
            box1.appendChild(draggedElement); 
            draggedElement.classList.add('in-box1'); 
            document.getElementById('flip-button').style.display = 'block';  // 显示翻转按钮

            draggedElement = null;
        }
    });

    document.getElementById('flip-button').addEventListener('click', function() {
        document.querySelectorAll('.sticker-img.in-box1').forEach(img => {
            if (img.style.transform.includes('scaleX(-1)')) {
                img.style.transform = 'scaleX(1)';
            } else {
                img.style.transform = 'scaleX(-1)';
            }
        });
    });

    document.getElementById('clear-stickers').addEventListener('click', function() {
        document.querySelectorAll('.sticker-img').forEach(function(img) {
            img.style.display = 'none';
            img.style.transform = 'none';
            img.classList.remove('in-box1');
        });
        document.querySelectorAll('.controls').forEach(function(img) {
            img.style.display = 'none';
            img.style.transform = 'none';
            img.classList.remove('in-box1');
        });
        document.getElementById('instruction').style.display = 'none'; 
        document.querySelectorAll('.locker').forEach(function(img) {
            img.style.display = 'none';
            img.style.transform = 'none';
            img.classList.remove('in-box1');
        });
    });
    document.getElementById('size-slider').addEventListener('input', function() {
        const scaleFactor = this.value;
        document.querySelectorAll('.sticker-img.in-box1').forEach(img => {
            img.dataset.scale = scaleFactor; 
            const flipValue = img.style.transform.includes('scaleX(-1)') ? 'scaleX(-1)' : 'scaleX(1)';
            img.style.transform = `${flipValue} scale(${scaleFactor})`;
        });
    });

    document.getElementById('sticker-btn').addEventListener('click', function() {
        document.querySelectorAll('.sticker-img').forEach(function(img) {
            img.style.display = 'block';
        });
    
        document.getElementById('locker').style.display = 'block';
    
        document.getElementById('controls').style.display = 'block';
        document.getElementById('instruction').style.display = 'block';
    });
    
});
