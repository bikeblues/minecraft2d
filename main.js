// Create the reference variable of the canvas using fabric.Canvas()
var canvas=new fabric.Canvas("myCanvas");

// Define the starting width and height of the block images
var block_width=30;
var block_height=30;

// Define the starting x and y coordinates for the player
var player_x=10;
var player_y=10;

// Define a variable named player_object to store object of the player image
var player_object="";
var block_object="";

// Add a function named player_update() to add the player image
function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y, 
            left:player_x
        });
        canvas.add(player_object);
    });
}

// Add a function named new_image() to add the different images as per the specific keys pressed

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_object=Img;

        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
    });
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);

    if(e.shiftKey && keyPressed=="80"){
        block_width= block_width+10;
        block_height= block_height+10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height; 
    }
       
    if(e.shiftKey && keyPressed=="77"){
        block_width=block_width-10;
        block_height=block_height-10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
  
    if(keyPressed=="37"){
        left();
    }

    if(keyPressed=="39"){
        right();
    }

    if(keyPressed=="38"){
        up();
    }

    if(keyPressed=="40"){
        down();
    }

    if(keyPressed=="87"){
        console.log("w");
        new_image("wall.jpg");
    }

    if(keyPressed=="71"){
        console.log("g");
        new_image("ground.png");
    }

    if(keyPressed=="76"){
        console.log("l")
        new_image("light_green.png")
    }

    if(keyPressed=="84"){
        console.log("t");
        new_image("trunk.jpg");
    }

    if(keyPressed=="82"){
        console.log("r");
        new_image("roof.jpg");
    }

    if(keyPressed=="89"){
        console.log("y");
        new_image("yellow_wall.png");
    }

    if(keyPressed=="68"){
        console.log("d");
        new_image("dark_green.png");
    }

    if(keyPressed=="85"){
        console.log("u");
        new_image("unique.png");
    }

    if(keyPressed=="67"){
        console.log("c");
        new_image("cloud.jpg");
    }

}
 function up(){
     if(player_y>=0){
         player_y-=block_height;
         console.log("block height- "+block_height);
         console.log("up is pressed- "+player_x+", "+player_y);
         canvas.remove(player_object);
         player_update();
     }
 }
function down(){
    if(player_y<=450){
        player_y+=block_height;
        console.log("block height- "+block_height);
         console.log("down is pressed- "+player_x+", "+player_y);
         canvas.remove(player_object);
         player_update();
    }
}
function left(){
    if(player_x>=0){
        player_x-=block_width;
        console.log("block width- "+block_width);
         console.log("left is pressed- "+player_x+", "+player_y);
         canvas.remove(player_object);
         player_update();
    }
}
function right(){
    if(player_x<=800){
        player_x+=block_width;
        console.log("block width- "+block_width);
         console.log("right is pressed- "+player_x+", "+player_y);
         canvas.remove(player_object);
         player_update();
    }
}