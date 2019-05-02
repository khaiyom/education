let water = 0;
let electricity = false;
let temp = 15;
let boilingProcess = false;
let status = false;
let capOpen = false;
console.log(status);

showInformation();
showButtons();

function showInformation() {
  document.querySelector(
    "#information"
  ).innerHTML = `Количество воды: ${water} ml<br>
  Температура воды: ${temp} С<br>
  Электричество ${electricity ? "есть" : "нет"}<br>
  Лампочка: ${status ? "🔴" : "⚪️"}<br>
  кришка: ${capOpen ? "открит" : "закрит"}<br>`;
}

function showButtons() {
  document.querySelector(
    "#buttons"
  ).innerHTML = `<br><button onclick="addWater()">Добавить воды</button><br>
  <button onclick="power()">Вкл/Выкл питание</button><br>
  <button onclick="boiling()">Вкл/Выкл кипячение</button>
 <br> <button onclick="capp()">закрит/открит кршку</button>`;
}

// 1. Подключаеться электричество
function power() {
  electricity = !electricity;
  showInformation();
}
function capp() {
  capOpen = !capOpen;
  showInformation();
}

// 2. Налить воду
function addWater() {
  if (!capOpen)
    if (confirm("откройте кришку")) capOpen = true;
    else return;
  water += parseInt(prompt("Укажите количество воды", 1000));
  showInformation();
}

// 3. Включить нагрев чайника
function boiling() {
  if (!electricity) return alert("Не работает без электричества");
  if (!water) return alert("Не работает без воды");
  if (!capOpen) return alert("надо закрит кришку");
  status = true;
  console.log(status);
  boilingProcess = setInterval(() => {
    temp += (1.5 / water) * 1000;
    if (temp >= 100) {
      clearInterval(boilingProcess);
      status = false;
      console.log(status);
    }
    showInformation();
  }, 1000);
}
