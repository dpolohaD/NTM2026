function setClock() {
  const hour = document.getElementById("hour");
  const minute = document.getElementById("minute");
  const second = document.getElementById("second"); // use consistent name

  const now = new Date();
  const secondDeg = now.getSeconds() * 6; // 360 / 60
  const minuteDeg = now.getMinutes() * 6 + secondDeg / 60;
  const hourDeg = (now.getHours() % 12) * 30 + minuteDeg / 12;

  hour.style.transform = `rotate(${hourDeg}deg)`;
  minute.style.transform = `rotate(${minuteDeg}deg)`;
  second.style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(setClock, 1000);
setClock();