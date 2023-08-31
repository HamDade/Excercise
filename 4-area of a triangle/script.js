document.querySelectorAll("input").forEach((item) => {
  item.addEventListener("input", () => {
    item.value = item.value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");
    triangle.area = areaOfTriangle();
    document.getElementsByTagName("div")[1].innerHTML = `${triangle.area}`;
    triangle.base = Math.max(+side1.value, +side2.value, +side3.value);
    triangle.arm = Math.min(+side1.value, +side2.value, +side3.value);
    triangle.height = 2 * (triangle.area / triangle.base);
    triangle.heightAdjusted = 200 * (triangle.height / triangle.base);
    triangle.dist = Math.sqrt(
      Math.pow(triangle.arm, 2) - Math.pow(triangle.height, 2)
    );
    triangle.distAdjusted = 200 * (triangle.dist / triangle.base);
    if (triangle.area !== triangle.area) {
      console.log("shit");
      clearDraw();
    } else {
      clearDraw();
      draw();
    }
  });
});
function areaOfTriangle() {
  let s = (+side1.value + +side2.value + +side3.value) / 2;
  return Math.sqrt(
    s * (s - +side1.value) * (s - +side2.value) * (s - +side3.value)
  );
}
const triangle = {};
function draw() {
  let canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    let context = canvas.getContext("2d");

    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(200, 0);
    context.lineTo(triangle.distAdjusted, triangle.heightAdjusted);
    context.fill();
  }
}
function clearDraw() {
  let canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    let context = canvas.getContext("2d");

    context.beginPath();
    context.clearRect(0, 0, 200, 200);
  }
}
