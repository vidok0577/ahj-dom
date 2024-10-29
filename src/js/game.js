import goblinImg from "../img/goblin.png";

function makeTable() {
  const table = document.createElement("table");
  table.classList.add("area");
  const html = "<tr><td></td><td></td><td></td><td></td></tr>";
  table.innerHTML = html.repeat(4);
  document.body.append(table);
}

function randomField() {
  let result = Math.floor(Math.random() * 15);
  if (area[result].firstChild) randomField();
  return result;
}

function shift() {
  area[randomField()].append(goblin);
  setTimeout(shift, 1000);
}

makeTable();

const area = document.querySelectorAll("td");

const goblin = document.createElement("img");
goblin.src = goblinImg;

shift();
