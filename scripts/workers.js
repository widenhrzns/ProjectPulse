"use strict";

/* UTILS */
function rerenderCards(workers) {
  page.workersCards.innerHTML = "";
  for (const worker of workers) {
    cardMaker(worker);
  }
}

/* CREATE CARD */
function cardMaker(worker) {
  const newCard = document.createElement("div");
  const [
    workerPhoto,
    workerTitle,
    workerStatus,
    workerName,
    workerDescription,
    workerPrice,
  ] = [
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div"),
  ];
  workerPhoto.classList.add("card__photo");
  workerPhoto.innerHTML = `<img src="../images/photos/worker${worker.id}.jpg" alt="Фото работника" />`;
  workerStatus.classList.add("worker__status");
  workerStatus.innerText = worker.status == 1 ? "🟢" : "🔴";
  workerName.classList.add("worker__name");
  workerName.innerText = worker.name;
  workerTitle.classList.add("card__title");
  workerTitle.appendChild(workerStatus);
  workerTitle.appendChild(workerName);
  workerDescription.classList.add("worker__description");
  workerDescription.innerText = worker.description;
  workerPrice.classList.add("worker__price");
  workerPrice.innerText = worker.price;
  newCard.classList.add("worker__card");
  newCard.appendChild(workerPhoto);
  newCard.appendChild(workerTitle);
  newCard.appendChild(workerDescription);
  newCard.appendChild(workerPrice);
  page.workersCards.appendChild(newCard);
}

/* SORT CARDS */
function sortBy(type) {
  const newWorkers = [...workers];
  if (type.value == "price") {
    newWorkers.sort(
      (worker1, worker2) =>
        Number(worker1.price.replace("$", "")) -
        Number(worker2.price.replace("$", ""))
    );
    rerenderCards(newWorkers);
    return;
  }
  newWorkers.sort((worker1, worker2) => worker2.status - worker1.status);
  rerenderCards(newWorkers);
}

/* SEARCH CARDS */
function searchCard() {
  const search = page.workersSearch.value;
  const newWorkers = workers.filter(
    (worker) =>
      worker.name.toLowerCase().includes(search.toLowerCase()) ||
      worker.description.toLowerCase().includes(search.toLowerCase())
  );
  page.workersSearch.value = "";
  rerenderCards(newWorkers);
}

/* INIT */
(() => {
  rerenderCards(workers);
})();
