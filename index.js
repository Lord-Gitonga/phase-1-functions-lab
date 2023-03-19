// Code your solution in this file!
let pickUpLocation =50;

function distanceFromHqInBlocks (pickUpLocation){
    let hqLocation = 42;
    let distanceInBlocks = pickUpLocation-hqLocation;
    return distanceInBlocks;
}
console.log(distanceFromHqInBlocks(pickUpLocation));


 function distanceFromHqInFeet(pickUpLocation){
      let blocks = distanceFromHqInBlocks(pickUpLocation);
     let feet = blocks*264;
      return feet;
  }
  console.log(distanceFromHqInFeet(pickUpLocation));


  
 let start = 34;
 let destination = 38;
  let distanceInBlocks = (destination-start);
  function distanceTravelledInFeet(distanceInBlocks){
      let distanceInFeet = distanceInBlocks*264;
      return distanceInFeet;
  }
  console.log(distanceFromHqInFeet(distanceInBlocks));

  function calculatesFarePrice(start,destination){
     distance = distanceTravelledInFeet(start,destination);
     if (distance<=400){
         return "free sample";;
     }
     else if(400<=2000){
         return "2 cents per foot";
     }
     else if(2000>=2500){
         return "charge 25 dollars";
     }
     else {
         return "cannot travel that far";
     }
  }
  console.log(calculatesFarePrice(start,destination));