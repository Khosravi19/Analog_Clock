let sec = document.querySelector(".sec");
let min = document.querySelector(".min");
let hour = document.querySelector(".hour");

setInterval(clockHandler, 1000);

function clockHandler() {
  let time = new Date();
  let s = time.getSeconds() * 6;
  let m = time.getMinutes() * 6;
  let h = time.getHours() * 30;
  sec.style.transform = `rotateZ(${s}deg)`;
  min.style.transform = `rotateZ(${m}deg)`;
  hour.style.transform = `rotateZ(${h + m / 12}deg)`;
}
