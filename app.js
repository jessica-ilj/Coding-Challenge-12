// Get the canvas element
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Set up the initial drawing state
let drawing = false;
let startX, startY;
let shapeType = 'line'; // Default shape
let drawingColor = '#000000'; // Default color

// Event listener for shape selection
const shapeSelectors = document.querySelectorAll('input[name="shape"]');
shapeSelectors.forEach(selector => {
    selector.addEventListener('change', (event) => {
        shapeType = event.target.value; // Update shape type based on user selection
    });
});

// Event listener for color selection
const colorInput = document.getElementById('color-input');
colorInput.addEventListener('input', (event) => {
    drawingColor = event.target.value; // Update drawing color based on user selection
});

