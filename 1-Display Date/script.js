let date = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let hour = date.getHours();
if (11 < hour) {
    var half = "PM";
} else {
    var half = "AM";
};
console.log(`Today is: ${days[date.getDay()]}.`);
console.log(`Current time is: ${date.getHours()} ${half} : ${date.getMinutes()} : ${date.getSeconds()}`);
document.getElementsByTagName("div")[0].innerHTML = `Today is: ${days[date.getDay()]}.`;
document.getElementsByTagName("div")[1].innerHTML = `Current time is: ${date.getHours()} ${half} : ${date.getMinutes()} : ${date.getSeconds()}`;