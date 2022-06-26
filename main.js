var canvas=new fabric.Canvas('myCanvas');
block_imgwidth=30;
block_imgheight=30;
player_x=10;
player_y=10;


function player_update()
{
fabric.Image.fromURL("player.png",function(Img)
{
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


function new_image(get_image)
{
fabric.Image.fromURL(get_image,function(Img)
{
block_img_object=Img;
block_img_object.scaleToWidth(block_imgwidth);
block_img_object.scaleToHeight(block_imgheight);
block_img_object.set({
top:player_y,
top:player_x
});
canvas.add(block_img_object);

}

);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
keyPressed=e.keyCode;
console.log(keyPressed);
if(e.shiftKey==true && keyPressed=='80')
{
console.log("P And Shift Pressed Together!");
block_imgwidth=block_imgwidth+10;
block_imgheight=block_imgheight+10;
document.getElementById("currentwidth").innerHTML=block_imgwidth;
document.getElementById("currentheight").innerHTML=block_imgheight;
}

if (e.shiftKey==true && keyPressed=='77')
{
console.log("M And Shift Pressed Together!");
block_imgwidth=block_imgwidth-10;
block_imgheight=block_imgheight-10;
document.getElementById("currentwidth").innerHTML=block_imgwidth;
document.getElementById("currentheight").innerHTML=block_imgheight;
}

if(keyPressed=='38')
{
up();
console.log("up");
}

if(keyPressed=='40')
{
down();
console.log("down");
}

if (keyPressed=='37')
{
left();
console.log("left");
}

if(keyPressed=='39')
{
right();
console.log("right");
}

if (keyPressed=='87')
{
console.log("W");
new_image('wall.jpg');
}

if (keyPressed=='84')
{
console.log("T");
new_image('trunk.jpg');
}

if (keyPressed=='89')
{
console.log("Y");
new_image('yellow_wall.png')
}


if (keyPressed=='67')
{
console.log("C");
new_image('cloud.jpg');
}

if (keyPressed=='68')
{
console.log("D");
new_image('dark_green.png');
}


if (keyPressed=='71')
{
console.log("G");
new_image('ground.png');
}

if (keyPressed=='76')
{
console.log("L");
new_image('light_green.png');
}

if (keyPressed=='82')
{
console.log("R");
new_image('roof.jpg');
}

if (keyPressed=='85')
{
console.log("U");
new_image('unique.png');
}


}



function up()
{
if (player_y>=0)
{
player_y=player_y-block_imgheight;
console.log("Block Image Height = "+block_imgheight);
console.log("When Up Arrow Is Pressed, X =" +player_x +"Y ="+ player_y);
canvas.remove(player_object);
player_update();
}
}

function down()
{
if (player_y<=500)
{
player_y=player_y+block_imgheight;
console.log("Block Image Height =" +block_imgheight);
console.log("When Down Arrow Is Pressed, X = " +player_x +"Y = " + player_y);
canvas.remove(player_object);
player_update();
}
}

function right()
{
if (player_x<=850)
{
player_x=player_x+block_imgwidth;
console.log("Block Image Width =" +block_imgwidth);
console.log("When Right Arrow Is Pressed, Y = " +player_y + "X = " + player_x);
canvas.remove(player_object);
player_update();
}
}


function left()
{
if (player_x>=0)
{
player_x=player_x+block_imgwidth;
console.log("Block Image Width =" +block_imgwidth);
console.log("When Left Arrow Pressed, Y = " +player_y + "X = " + player_x)
canvas.remover(player_object);
player_update();
}
}