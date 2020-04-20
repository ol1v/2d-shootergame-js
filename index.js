
window.onload = function () {

    //canvas
    canvas = document.getElementById('my-canvas');
    ctx = canvas.getContext('2d');

    const GAME_WIDTH = 1080;
    const GAME_HEIGHT = 820;

    // player coordinates
    let playerX = 0;
    let playerY = 10;

    // draw method
    ctx.clearRect(0, 0, 1080, 820);
    ctx.fillRect(0, 10, 30, 30);

    document.addEventListener('keydown', function (key) {
        if (key.keyCode === 68) { // A-key pressed
            playerX += 20;
            movePlayer();
        } else if (key.keyCode === 65) { // D-key pressed
            playerX -= 20;
            movePlayer();
        } else if (key.keyCode === 87) { // W-key pressed
            playerY -= 20;
            movePlayer();
        } else if (key.keyCode === 83) { // S-key pressed
            playerY += 20;
            movePlayer();
        }
    });


    function movePlayer() {
        ctx.clearRect(0, 0, 1080, 820);

        ctx.fillStyle = 'black';
        ctx.fillRect(playerX, playerY, 50, 50);
    }
}

// make a mirror function that detects if the player hits the border of X or Y
// and make it teleport to the opposite side













