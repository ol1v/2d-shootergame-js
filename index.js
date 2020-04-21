// TODO

/* make a mirror function that detects if the player hits the border of X or Y
 and make it teleport to the opposite side */

// make enemyobjects

// handles collision

// create an attack to destroy enemies.

window.onload = function () {

    //canvas
    canvas = document.getElementById('my-canvas');
    ctx = canvas.getContext('2d');
    playerImage = document.getElementById('playerImage');

    const GAME_WIDTH = 1080;
    const GAME_HEIGHT = 820;

    // player coordinates
    let playerX = 0;
    let playerY = 10;

    // draw player startingpoint to canvas
    ctx.clearRect(0, 0, 1080, 820);
    //ctx.fillRect(0, 10, 30, 30);

    ctx.drawImage(playerImage, playerX, playerY, 80, 80);

    document.addEventListener('keydown', function (key) {
        if (key.keyCode === 68) { // A-key pressed
            playerX += 40;
            movePlayer();
        } else if (key.keyCode === 65) { // D-key pressed
            playerX -= 40;
            movePlayer();
        } else if (key.keyCode === 87) { // W-key pressed
            playerY -= 40;
            movePlayer();
        } else if (key.keyCode === 83) { // S-key pressed
            playerY += 40;
            movePlayer();
        }
    });

    function movePlayer() {
        // clear canvas
        ctx.clearRect(0, 0, 1080, 820);
        // draw at players updated coordinates - simulates moving around the canvas
        ctx.fillStyle = 'black';
        ctx.drawImage(playerImage, playerX, playerY, 80, 80);
    }
}














