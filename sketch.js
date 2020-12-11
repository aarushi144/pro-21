var wall , weight , thickness;
var bullet , speed , deformation , damage ;


function setup() {
  createCanvas(1600,400);
  thickness = random (22 , 83)
 wall =  createSprite(1200,200 , thickness, height / 2);
 bullet = createSprite (50 , 200 , 25 , 25 );

 weight = random (30 , 52);
speed = random (223 , 321);

 wall.shapeColor = (80 , 80 , 80 );
 bullet.velocityX = speed ; 
// var deformation = 0.5 * weight * speed * speed / 22500 
//  console.log(deformation)
}

function draw() {
  background(0);

  if (hasCollided(bullet, wall )){
    bullet.velocityX = 0 ;
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

    if (damage > 10 ){
      wall.shapeColor = color (255 , 0 ,0)
    }

    if (damage < 10 ){
      wall.shapeColor = color (0 , 255  ,0)
    }
  }
// if (wall.x - car.x < (car.width + wall.width / 2 )){
//   car.velocityX = 0 ; 
//   var deformation = 0.5 * weight * speed * speed / 22500 ;
//   if (deformation > 180 )
//   {
//     car.shapeColor = color (255 , 0 ,0 )
//   }
//   if (deformation < 180 && deformation > 100 )
//   {
//     car.shapeColor = color (230 , 230 ,0 )
//   }

//   if (deformation < 100 )
//   {
//     car.shapeColor = color (0 , 255 , 0  )
//   }
// }
  drawSprites();
}

function  hasCollided (lbullet , lwall)
{
lbullet.isTouching (lwall)
  lbulletRightEdge = lbullet.x + lbullet.width
  lwallLeftEdge = lwall.x
  if(lbulletRightEdge >= lwallLeftEdge)
{
  return true 
}
return false
}