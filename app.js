// Selections
const close = document.querySelector(".close");
const notification = document.querySelector(".notification");
const currentUser = document.querySelector(".currentUser");
const notifyTab = document.querySelector(".notifyTab");
const myStore = document.querySelector(".myStore");
const selectPlan = document.querySelector(".select-plan");
const switchArrow = document.querySelector(".switch");
const score = document.querySelector(".score");
const switchArrow2 = document.querySelector(".switchDown");
const planItems = document.querySelector(".plan-items");
const item = document.querySelectorAll(".item");
const label = document.querySelectorAll("label");
const textContent = document.querySelector(".textContent");
const img = document.querySelector("img");
const checkInput = document.querySelectorAll(".check");
const range = document.querySelector("#range");

let arrayLenght = 0;
let count = 0;
range.value = 0;
// Functions
const toggleNotification = () => {
  notifyTab.classList.toggle("active");
  if (myStore.classList.contains("active")) myStore.classList.remove("active");
};
const toggleMyStore = () => {
  myStore.classList.toggle("active");
  if (notifyTab.classList.contains("active"))
    notifyTab.classList.remove("active");
};

const removePlan = () => {
  selectPlan.remove();
};

const removePlans = () => {
  planItems.classList.toggle("hidden");
  switchArrow.classList.toggle("hidden");
  switchArrow2.classList.toggle("hidden");
};

const checked = () => {
  checkInput.classList.toggle("clicked");
};

// Event Listener
notification.addEventListener("click", toggleNotification);
currentUser.addEventListener("click", toggleMyStore);
close.addEventListener("click", removePlan);
switchArrow.addEventListener("click", removePlans);
switchArrow2.addEventListener("click", removePlans);

item.forEach((l, i) => {
  l.addEventListener("click", () => {
    item.forEach((i) => {
      i.querySelector(".textContent").classList.remove("active");
      i.querySelector("img").classList.remove("active");
    });
    item[i].querySelector(".textContent").classList.add("active");
    item[i].querySelector("img").classList.add("active");
  });
});

checkInput.forEach((check) => {
  check.addEventListener("click", () => {
    check.classList.toggle("clicked");
    arrayLenght = Array.from(checkInput).filter((n) =>
      n.classList.contains("clicked")
    );
    count = arrayLenght.length;
    score.textContent = `${count} / 5 completed`;
    range.value = count;
  });
});
