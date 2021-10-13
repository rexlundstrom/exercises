const checkSpeed = speed => {
    let speedLimit = 70;
    let points = Math.floor((speed - speedLimit) / 5);
    if (points <= 0) return 'OK';
    else if (points > 0 && points < 12) return points;
    else return 'License suspended';
}

console.log(checkSpeed(140));