const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

let offset = 0
// ctx.beginPath();
// ctx.rect(20, 40, 50, 50);
// ctx.fillStyle = "#FF0000";
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.arc(300, 160, 20, 0, Math.PI*2, false);
// ctx.fillStyle = "green";
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.arc(220, 180, 40, 0, Math.PI*2, false);
// // ctx.setLineDash([3, 2]);
// ctx.fillStyle = "blue";
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.rect(160, 10, 100, 40);
// ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
// ctx.stroke();
// ctx.closePath();

// draw()

// // window.AnimationEffect
let ballRadius = 10;
let x = canvas.width/2;
let y = canvas.height-30;
let dx = 2;
let dy = -2;
let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = (canvas.width-paddleWidth) / 2;
let rightPressed = false;
let leftPressed = false;
let interval = setInterval(draw, 10);
let brickRowCount = 3;
let brickColumnCount = 5;
let brickWidth = 75;
let brickHeight = 20;
let brickPadding = 10;
let brickOffsetTop = 30;
let brickOffsetLeft = 30;
let score = 0;

let bricks = [];
for (let c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (let r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}
function collisionDetection() {
    for(let c=0; c<brickColumnCount; c++) {
        for(let r=0; r<brickRowCount; r++) {
            let b = bricks[c][r];
            if(b.status == 1) {
            if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                dy = -dy;
                b.status = 0;
                score++;
                if(score == brickRowCount*brickColumnCount) {
                    alert("YOU WIN, CONGRATULATIONS!");
                    document.location.reload();
                    clearInterval(interval);
            }
        }
    }
}
}
}

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+score, 8, 20);
}


function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function drawBricks() {
    for(let c=0; c<brickColumnCount; c++) {
        for(let r=0; r<brickRowCount; r++) {
            if (bricks[c][r].status == 1) {
            let brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
            let brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
        }
    }
}
}
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    drawScore();
    collisionDetection();

    

    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    // if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
    //     dy = -dy;
    // }
    if(y + dy < ballRadius) {
        dy = -dy;
    } else if(y + dy > canvas.height-ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
        else {
            alert("GAME OVER");
            document.location.reload();
            clearInterval(interval);
        }
    }
    

    if(rightPressed) {
        paddleX += 7;
        if (paddleX + paddleWidth > canvas.width){
            paddleX = canvas.width - paddleWidth;
        }
    }
    else if(leftPressed) {
        paddleX -= 7;
        if (paddleX < 0){
            paddleX = 0;
        }
        
    }
    x += dx;
    y += dy;
}

// setInterval(draw, 10);

// Setting up Controller
window.addEventListener("gamepadconnected", gamepadHandler);
// (Variables to store contoroller buttion info)
let controller = {};
let buttonsPressed = [];
function gamepadHandler(e) {
  controller = e.gamepad;
  output.textContent = `Gamepad: ${controller.id}`;
}


function gamepadUpdateHandler() {
    buttonsPressed = [];
    if(controller.buttons) {
        for(let b=0; b<controller.buttons.length; b++) {
            if(controller.buttons[b].pressed) {
                buttonsPressed.push(b);
            }
        }
    }
}


function gamepadButtonPressedHandler(button) {
    var press = false;
    for(var i=0; i<buttonsPressed.length; i++) {
        if(buttonsPressed[i] == button) {
            press = true;
        }
    }
    return press;
}

function draw2() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // …

    gamepadUpdateHandler();
    if(gamepadButtonPressedHandler(0)) {
        playerY -= 5;
    }
    else if(gamepadButtonPressedHandler(1)) {
        playerY += 5;
    }
    if(gamepadButtonPressedHandler(2)) {
        playerX -= 5;
    }
    else if(gamepadButtonPressedHandler(3)) {
        playerX += 5;
    }
    if(gamepadButtonPressedHandler(11)) {
        alert('BOOM!');
    }

    // …

    ctx.drawImage(img, playerX, playerY);
    requestAnimationFrame(draw2);
}

let GamepadAPI = {
    active: false,
    controller: {},
    connect(event) {},
    disconnect(event) {},
    update() {},
    buttons: {
        layout: [],
        cache: [],
        status: [],
        pressed(button, state) {}
    },
    axes: {
        status: []
    }
};

window.addEventListener("gamepadconnected", GamepadAPI.connect);
window.addEventListener("gamepaddisconnected", GamepadAPI.disconnect);

connect(event) {
    GamepadAPI.controller = event.gamepad;
    GamepadAPI.active = true;
}

disconnect(event) {
    delete GamepadAPI.controller;
    GamepadAPI.active = false;
}

update() {
    GamepadAPI.buttons.cache = [];
    for(let k=0; k<GamepadAPI.buttons.status.length; k++) {
      GamepadAPI.buttons.cache[k] = GamepadAPI.buttons.status[k];
    }
    GamepadAPI.buttons.status = [];
    let c = GamepadAPI.controller || {};
    let pressed = [];
    if(c.buttons) {
      for(var b=0,t=c.buttons.length; b<t; b++) {
        if(c.buttons[b].pressed) {
          pressed.push(GamepadAPI.buttons.layout[b]);
        }
      }
    }
    if(GamepadAPI.active) {
        if(!this.textGamepad.visible) {
            this.textGamepad.visible = true;
        }
        GamepadAPI.update();
        if(GamepadAPI.buttons.pressed('Start')) {
            // start the game
        }
        if(GamepadAPI.buttons.pressed('X')) {
            // turn on/off the sounds
        }
        if(GamepadAPI.buttons.pressed('Y','hold')) {
            if(!this.screenGamepadHelp.visible) {
                this.screenGamepadHelp.visible = true;
            }
        }
        else {
            if(this.screenGamepadHelp.visible) {
                this.screenGamepadHelp.visible = false;
            }
        }
    }
    let axes = [];
    if(c.axes) {
      for(let a=0,x=c.axes.length; a<x; a++) {
        axes.push(c.axes[a].toFixed(2));
      }
    }
    GamepadAPI.axes.status = axes;
    GamepadAPI.buttons.status = pressed;
    return pressed;
  }


  pressed(button, hold) {
    var newPress = false;
    for(var i=0,s=GamepadAPI.buttons.status.length; i<s; i++) {
      if(GamepadAPI.buttons.status[i] == button) {
        newPress = true;
        if(!hold) {
          for(let j=0,p=GamepadAPI.buttons.cache.length; j<p; j++) {
            if(GamepadAPI.buttons.cache[j] == button) {
              newPress = false;
            }
          }
        }
      }
    }
    return newPress;
  }

  create() {
    // …
    let message = 'Gamepad connected! Press Y for controls';
    let textGamepad = this.add.text(0, 0, message);
    textGamepad.visible = false;
}

