//Create variables here
var dog;
var database;

function preload()
{
	//load images here
  dogimg = loadImage("dogimg/bg.png");
  dogimg1 = loadImage("dogimg1/bg.png");
}

function setup() {
	createCanvas(800, 700);
  database = firebase.database();
  FoodStock=database.ref('Food');
  FoodStock.on("vallue",readStock);
}


function draw() {  
 background(46,139,87)

 if(keyWentDown(UP_ARROW)) { 
  writeStock(FoodS);
  dog.addImagge(doggHappy);

  drawSprites();
  //add styles here

  Note:PressUP_ARROW Key To Feed Drago Milk!
  // ask teacher to help add fill() and text size
  



 
  }
}

function readStock(data){ 
  FoodS=data.val();
}


function writeStock(x){ 

  if(x<=0) {  
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}



