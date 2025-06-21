// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    if (someValue>42){
		return someValue-42;
	}else{
		return 42-someValue
	}
  }

  distanceFromHqInBlocks(50)
  console.log(distanceFromHqInBlocks(50))



function distanceFromHqInFeet(someValue) {
	return distanceFromHqInBlocks(someValue)*264;
  
}

function distanceTravelledInFeet(start, destination) {
    if (start>destination){
		return ((start-destination)*264)
	}else{
		return((destination-start)*264)
	}
  }


function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start,destination)<400){
		return 0;
	}else if(distanceTravelledInFeet(start,destination)<=2000){
		return (2.56);
	}else if(distanceTravelledInFeet(start,destination)<=2500){
		return (25);
	}else{
		return 'cannot travel that far';
	}
  }
