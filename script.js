const addText = document.querySelector("#input-box");
const listItems = document.querySelector("#list-items");
const button = document.getElementById("addButton");

console.log(addText.value);

button.addEventListener("click", function (event) {
  event.defaultPrevented;
  if (addText.value === "") {
    alert("You must write a task");
  } else {
    const li = document.createElement("li");
    const textNode = document.createTextNode(addText.value);
    li.appendChild(textNode);
    // li.innerHTML = addText.value;
    const span = document.createElement("span");
    // span.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    listItems.appendChild(li);
    addText.value = "";
    saveListItems();
  }
});

listItems.addEventListener(
  "click",
  (event) => {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
      saveListItems();
      console.log(event.target.classList);
    } else if (event.target.tagName === "SPAN") {
      //   console.log(event.target);
      event.target.parentNode.remove();
      saveListItems();
    }
  },
  false
);

function saveListItems() {
  localStorage.setItem("data", listItems.innerHTML);
}

(() => {
  listItems.innerHTML = localStorage.getItem("data");
})();
