var car;
var position,database;
function setup(){
    createCanvas(500,500);
    database=firebase.database();
    car = createSprite(250,250,10,10);
    car.shapeColor = "red";
    var locOfChild=database.ref("car/position");
    locOfChild.on("value",readOp,showerr);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref("car/position").set({
        x:car.x+x,
        y:car.y+y
    })
}
function readOp(data){
    position=data.val();
    car.x=position.x;
    car.y=position.y;
}
function showerr(){
    console.log("errors");
}
