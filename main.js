canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

background_image = "racing.jpg";

car1_width = 120;
car1_height = 70;
car1_x = 10;
car1_y = 10;
car1_image = "car1.png";


function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;

    
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}
function uploadcar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        car1_up();
        console.log("up arrow key");
    }
    if (keyPressed == '40') {
        car1_down();
        console.log("down arrow key");
    }
    if (keyPressed == '37') {
        car1_left();
        console.log("left arrow key");
    }
    if (keyPressed == '39') {
        car1_right();
        console.log("right arrow key");
    }
    
    
    if (car1_x >= 700) {
        console.log("car1 won");
        document.getElementById("gameStatus").innerHTML = "Car 1 has won!!!";
    }
   
function car1_up() {
    if (car1_y >= 0) {
        car1_y = car1_y-10;
        console.log("When up arrow is pressed, x = " + car1_x + " and y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car1_down() {
    if (car1_y <= 500) {
        car1_y = car1_y+10;
        console.log("When down arrow is pressed, x = " + car1_x + " and y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car1_left() {
    if (car1_x >= 0) {
        car1_x = car1_x-10;
        console.log("When left arrow is pressed, x = " + car1_x + " and y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car1_right() {
    if (car1_x <= 700) {
        car1_x = car1_x+10;
        console.log("When right arrow is pressed, x = " + car1_x + " and y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

}




