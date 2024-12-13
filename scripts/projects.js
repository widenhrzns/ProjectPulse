"use strict";

/* CREATE TABLE */
function addLines(projects) {
  for (const project of projects) {
    lineMaker(project);
  }
}

function lineMaker(project) {
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

/* FOCUS LINE */
function lineFocus(line) {
  const isFocused = line.classList.value.includes("table__line_focus");
  if (!isFocused) {
    document
      .querySelectorAll(".table__line")
      .forEach((line) => line.classList.remove("table__line_focus"));
    line.classList.add("table__line_focus");
    return;
  }
  line.classList.remove("table__line_focus");
}

/* INIT */
(() => {
  addLines(projects);
})();
