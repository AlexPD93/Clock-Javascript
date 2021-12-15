function getTime() {
  let now = new Date();
  let seconds = now.getSeconds();
  if (seconds < 10) seconds = "0" + now.getSeconds();
  let minutes = now.getMinutes();
  if (minutes < 10) minutes = "0" + now.getMinutes();
  let hours = now.getHours();
  if (hours < 10) hours = "0" + now.getHours();

  let time = document.querySelector("#time");
  time.innerHTML = `${hours}:${minutes}:${seconds}`;
}
setInterval(getTime, 1000);
