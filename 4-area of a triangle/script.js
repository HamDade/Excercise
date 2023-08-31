document.querySelectorAll("input").forEach((item) => {
  item.addEventListener("input", () => {
    item.value = item.value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");
    let area = areaOfTriangle();
    document.getElementsByTagName("div")[1].innerHTML = `${area}`;
  });
});
function areaOfTriangle() {
  let s = (+side1.value + +side2.value + +side3.value) / 2;
  return Math.sqrt(
    s * (s - +side1.value) * (s - +side2.value) * (s - +side3.value)
  );
}
