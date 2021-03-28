function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
      string = "0" + string;
    }
    return string;
  }

var date = new Date();
var hour = date.getHours();
var minutes = date.getMinutes();

var body = document.getElementsByTagName('body')[0];
var timeP = document.querySelector('p#time');
var greetP = document.querySelector('p#greet');
var timeImg = document.querySelector('img#photoTime');

var partDay, color;

if (hour < 0 || hour > 23) {
    alert('Invalid hour.');
} else if (hour >= 19 || hour < 5) {
    partDay = 'night';
    colorCode = '081b1f';
} else if (hour > 12) {
    partDay = 'afternoon';
    colorCode = 'df5946';
} else {
    partDay = 'morning';
    colorCode = '46b3d3';
}

timeP.innerHTML = `Now is <strong>${zeroPad(hour, 2)}:${zeroPad(minutes, 2)}</strong>.`;
greetP.innerHTML = `Good <strong>${partDay}</strong>!`;
timeImg.src = `images/${partDay}.png`;
body.style.background = `#${colorCode}`;
