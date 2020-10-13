let i = 0;
const car = document.getElementById("car");
setInterval(function () {
  car.style.top = i % 2 === 0 ? "175px" : "174px";
  i++;
}, 100);

let x = 0;
let y = 0;
document.addEventListener("keydown", function (event) {

  if (event.code == "ArrowRight") {
    x += 10;
    //car.style.transform = 'translateX(' + x +'px)';
  } else if (event.code == "ArrowLeft") {
    x -= 10;
  } else if (event.code == "ArrowDown") {
    y += 10;
  } else if (event.code == "ArrowUp") {
    y -= 10;
  }
  car.style.transform = `translate(${x}px, ${y}px)`;

});
