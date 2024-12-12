"use strict";

function openMobileMenu() {
  const isOpened = page.mobileMenu.classList.value.includes(
    "menu__wrapper_opened"
  );
  if (!isOpened) {
    page.mobileMenu.classList.add("menu__wrapper_opened");
    return;
  }
  page.mobileMenu.classList.remove("menu__wrapper_opened");
  return;
}
