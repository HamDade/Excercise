let date = new Date();
document.getElementsByTagName("div")[0].innerHTML = `Today is: ${date.toLocaleString('en-gb', {weekday: 'long'})}.`;
document.getElementsByTagName("div")[1].innerHTML = `Current time is: ${date.toLocaleString('en-gb', {hour: '2-digit', hourCycle: 'h12'}).toUpperCase()} : ${date.toLocaleString('en-gb', {minute: '2-digit', second: '2-digit'})}`;
/*let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let hour = date.getHours();
if (11 < hour) {
    var half = "PM";
} else {
    var half = "AM";
};
console.log(`Today is: ${days[date.getDay()]}.`);
console.log(`Current time is: ${date.getHours()} ${half} : ${date.getMinutes()} : ${date.getSeconds()}`);*/
//document.getElementsByTagName("div")[0].innerHTML = `Today is: ${days[date.getDay()]}.`;
//document.getElementsByTagName("div")[1].innerHTML = `Current time is: ${date.getHours()} ${half} : ${date.getMinutes()} : ${date.getSeconds()}`;
// how to make this more replicatable?  Generate divs?  Better solution than innerHTMLing?