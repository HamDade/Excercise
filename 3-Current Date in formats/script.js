const date = new Date();
console.log(date);
const month = date.toLocaleString("en-GB", { month: "2-digit" });
const day = date.toLocaleString("en-GB", { day: "2-digit" });
const year = date.toLocaleString("en-GB", { year: "numeric" });
document
  .getElementById("thing")
  .after(
    `${month}-${day}-${year}, ${month}/${day}/${year} or ${day}-${month}-${year}, ${day}/${month}/${year}`
  );
