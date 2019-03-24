function draw() {
    // get the canvas element
    const canvas = document.getElementById('tutorial');


    if (canvas.getContext) {
        // rendering context for canvas
        const canvasContext = canvas.getContext('2d');
        drawRectangle(canvasContext, 'rgb(200, 0, 0)', {'x': 10, 'y': 10, 'w': 50, 'h': 50 }); 
        drawRectangle(canvasContext, 'rgba(0, 0, 200, 0.5)', {'x': 30, 'y': 30, 'w': 50, 'h': 50 }); 
    } else {
        console.log('does not support canvas');
    }
}

/**
 * @name drawRectangle
 * @description - big oof on a three parameter function 
 * @param {CanvasContext} context 
 * @param {string -> rgb|a(int, int, int)} color 
 * @param {Object} coordinates 
 */
function drawRectangle(context, color, coordinates) {
    context.fillStyle = color;
    context.fillRect(coordinates.x, coordinates.y, coordinates.w, coordinates.h); 
    return; 
}
// yolo
draw(); 