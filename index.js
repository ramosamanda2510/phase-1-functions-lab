const hqLocation = 42
const blockInFeet = 264

function distanceFromHqInBlocks(pickup){
    if (pickup > hqLocation){
        return pickup - hqLocation;
    } else if (pickup < hqLocation){
        return hqLocation - pickup;
    }
}

function distanceFromHqInFeet(pickup){
    if (pickup > hqLocation){
        return ((pickup- hqLocation) * 264);
    } else if (pickup < hqLocation){
        return ((hqLocation - pickup) * 264);
    }
}

function distanceTravelledInFeet(sDestination, fDestination){
    let distance = Math.abs(sDestination - fDestination) * 264;
    return distance;
}    

function calculatesFarePrice(sDestination, fDestination){
    let blockDistance = Math.abs(fDestination - sDestination);
    let distanceTraveled = blockDistance * 264; 
    if (distanceTraveled <= 400){
        console.log ('give customers a free sample');
        return (0);
    }else if (distanceTraveled > 400 && distanceTraveled <= 2000){
        return ((distanceTraveled - 400) * .02); 
    }else if (distanceTraveled > 2000 && distanceTraveled < 2500){
        return (25);
    }else if (distanceTraveled >= 2500){
        return 'cannot travel that far';
    }
}