"use strict";

/* UTILS */
function tableMaker(project) {
  const newLine = document.createElement("tr");
  newLine.classList.add("table__line");
  newLine.setAttribute("onclick", "lineFocus(this)");
  for (const key in project) {
    const newItem = document.createElement("td");
    newItem.classList.add("table__item");
    newItem.innerText =
      key != "status"
        ? project[key]
        : project[key] == "ready"
        ? "🟢"
        : project[key] == "inProgress"
        ? "🟡"
        : "🔴";
    newLine.appendChild(newItem);
  }
  page.table.appendChild(newLine);
}

/* INIT */
for (const project of projects) {
  tableMaker(project);
}
