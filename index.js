let number = [1, 20];
let skipCount = 1;
let difference = number[1] - number[0];
let startingNumber = number[0];
for (let i=0; i<=difference; i++){
  even = (startingNumber += skipCount) % 2;
  console.log("This number is", even, "; This iteration is number", i+skipCount);
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
