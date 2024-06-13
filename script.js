// Canvas setup
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 450;
cnv.height = 550;

// Stoplight variables
let topLight = "red";
let midLight = "yellow";
let bottomLight = "green";
let lightFrame = 0;

// Block variables
let gVal = 0;
let bVal = 255;

// Stickman variables
let stickX = 10;
let stickFrame = 0;
let currentStickImage = "stick1";

function draw() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Background
    ctx.fillStyle = "darkgray";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    // Stoplight and outlines
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.strokeRect(50, 50, 75, 185);

    // Red light outline
    ctx.beginPath();
    ctx.arc(87.5, 80, 20, 0, 2 * Math.PI);
    ctx.stroke();

    // Yellow light outline
    ctx.beginPath();
    ctx.arc(87.5, 140, 20, 0, 2 * Math.PI);
    ctx.stroke();

    // Green light outline
    ctx.beginPath();
    ctx.arc(87.5, 200, 20, 0, 2 * Math.PI);
    ctx.stroke();

    // Red light
    ctx.fillStyle = topLight;
    ctx.beginPath();
    ctx.arc(87.5, 80, 20, 0, 2 * Math.PI);
    ctx.fill();

    // Yellow light
    ctx.fillStyle = midLight;
    ctx.beginPath();
    ctx.arc(87.5, 140, 20, 0, 2 * Math.PI);
    ctx.fill();

    // Green light
    ctx.fillStyle = bottomLight;
    ctx.beginPath();
    ctx.arc(87.5, 200, 20, 0, 2 * Math.PI);
    ctx.fill();


    // Stickman
    ctx.fillStyle = "#000"; // Black color for simplicity
    ctx.fillRect(stickX, 300, 20, 50); // Example rectangle for stickman

     // Text
     ctx.fillStyle = "black";
     ctx.font = "24px Arial";
     ctx.fillText("Elaans Animation", 140, 50);

    // Stoplight Animation
    lightFrame++;

    if (lightFrame > 0 && lightFrame <= 60) {
        topLight = "red";
        midLight = "gray";
        bottomLight = "gray";
    } else if (lightFrame > 60 && lightFrame <= 120) {
        topLight = "gray";
        midLight = "yellow";
        bottomLight = "gray";
    } else if (lightFrame > 120 && lightFrame <= 180) {
        topLight = "gray";
        midLight = "gray";
        bottomLight = "green";
    } else if (lightFrame > 180) {
        lightFrame = 0;
    }

    // Block color change
    gVal += 0.5; // 0 > 255
    if (gVal > 255) {
        gVal = 255;
    }

    bVal -= 0.5; // 255 > 0
    if (bVal < 0) {
        bVal = 0;
    }

    // Stickman animation
    stickX += 1;
    if (stickX >= cnv.width) {
        stickX = -100;
    }

    stickFrame++;
    if (stickFrame >= 0 && stickFrame < 30) {
        currentStickImage = "stick1";
    } else if (stickFrame >= 30 && stickFrame < 60) {
        currentStickImage = "stick2";
    } else if (stickFrame >= 60) {
        stickFrame = 0;
    }

    requestAnimationFrame(draw);
}


// Start animation
draw();