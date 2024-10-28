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

// Implement Shape Drawing Logic

// Mouse events for drawing
canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    startX = e.offsetX; // Get mouse position
    startY = e.offsetY;
});

canvas.addEventListener('mousemove', (e) => {
    if (drawing) {
        ctx.strokeStyle = drawingColor; // Set the stroke color
        ctx.lineWidth = 2; // Set the stroke width
        ctx.beginPath(); // Start a new path

        if (shapeType === 'line') {
            ctx.moveTo(startX, startY); // Move to starting point
            ctx.lineTo(e.offsetX, e.offsetY); // Draw line to current mouse position
            ctx.stroke(); // Render the line
            startX = e.offsetX; // Update starting point
            startY = e.offsetY; // Update starting point
        } else if (shapeType === 'rectangle') {
            const width = e.offsetX - startX;
            const height = e.offsetY - startY;
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
            ctx.fillStyle = drawingColor; // Set fill color
            ctx.fillRect(startX, startY, width, height); // Draw rectangle
        } else if (shapeType === 'circle') {
            const radius = Math.sqrt(Math.pow(e.offsetX - startX, 2) + Math.pow(e.offsetY - startY, 2));
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
            ctx.fillStyle = drawingColor; // Set fill color
            ctx.beginPath(); // Start a new path
            ctx.arc(startX, startY, radius, 0, Math.PI * 2); // Draw circle
            ctx.fill(); // Fill the circle
        }
    }
});

canvas.addEventListener('mouseup', () => {
    drawing = false; // Stop drawing
});

