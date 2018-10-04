let number = [1, 20]; //Boundary Numbers
let skipCount = 1; //Number of skipCounting between each element of the sequence, used in FOR Loop
let difference = number[1] - number[0]; //Difference, mandatory expectation
let startingNumber = number[0]; //Hint: used in the FOR Loop
for (let i=0; i<=difference; i++){
  even = (startingNumber += skipCount) % 2;
  console.log("This number is", even, "; This iteration is number", i+skipCount); //Example of Concatenating
}


function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

console.log(startTime);
