

const d = new Date();
let day = "";
day = d.getDay();
var message1 = "";
if (day >= 1 && day < 6) {
    message1 = "Hang in there!"
}
else {
    message1 = "This will be the best WEEKEND!"
}

var message2 = "";
switch (day) {
    case 0:
        message2 = "Sunday";
        break;
    case 1:
        message2 = "Moday";
        break;
    case 2:
        message2 = "Tuesday";
        break;
    case 3:
        message2 = "Wenesday";
        break;
    case 4:
        message2 = "Thursday";
        break;
    case 5:
        message2 = "Friday";
        break;
    case 6:
        message2 = "Saturday";
        break;
}
document.getElementById("message1").innerHTML = message1;

document.getElementById("message2").innerHTML = message2;
