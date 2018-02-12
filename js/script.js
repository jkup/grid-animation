const main = document.getElementById("main");
const table = document.createElement("table");
const tableBody = document.createElement("tbody");

let row = document.createElement("tr");

for (let i = 0; i < 2000; i++) {
  if (i % 100 === 0) {
    tableBody.appendChild(row);
    row = document.createElement("tr");
  }

  let cell = document.createElement("td");
  cell.classList.add(`gridItem`);
  cell.classList.add(`gridItem${i}`);
  row.appendChild(cell);
}

table.appendChild(tableBody);
main.appendChild(table);

setInterval(() => {
  let items = document.querySelectorAll(".gridItem");
  items.forEach(item => {
    item.classList.remove("pink");
    item.classList.remove("blue");
  });
  for (let i = 0; i < 2000; i++) {
    let number = Math.random();
    if (number > 0.8) {
      let item = document.querySelector(`.gridItem${i}`);
      item.classList.add("blue");
    } else if (number < 0.2) {
      let item = document.querySelector(`.gridItem${i}`);
      item.classList.add("pink");
    }
  }
}, 500);
