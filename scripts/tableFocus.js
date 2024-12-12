"use strict";

function lineFocus(line) {
  const isFocused = line.classList.value.includes("table__line_focus");
  if (!isFocused) {
    line.classList.add("table__line_focus");
    return;
  }
  line.classList.remove("table__line_focus");
}
