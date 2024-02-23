let taskInput = document.getElementById("taskInput");
let output = document.getElementById("output");
let addButton = document.getElementById("addButton");
let arrTask = [];

function forOutput() {
  if (
    taskInput.value.trim() &&
    !arrTask.includes(taskInput.value.trim().toLowerCase())
  ) {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "d-flex justify-content-around");
    newDiv.innerHTML = taskInput.value;
    newDiv.style.width = "70%";
    newDiv.style.margin = "auto";
    newDiv.style.textAlign = "center";
    newDiv.style.backgroundColor = "#fcc7f4";
    newDiv.style.color = "#290523";
    newDiv.style.padding = "10px";
    newDiv.style.marginBottom = "10px";
    newDiv.style.marginTop = "10px";
    newDiv.style.fontSize = "2rem";

    const divButton = document.createElement("button");
    const deleteText = document.createTextNode("Delete");
    divButton.appendChild(deleteText);
    divButton.setAttribute("class", "bg-danger text-white fs-4 p-2 rounded-2");
    divButton.style.border = "none";
    newDiv.appendChild(divButton);

    output.appendChild(newDiv);
    arrTask.push(taskInput.value.trim());

    divButton.addEventListener("click", () => {
      forDelete(newDiv);
    });
  }
  taskInput.value = "";
}

function forDelete(divElement) {
  const index = Array.from(output.children).indexOf(divElement);

  if (index !== -1) {
    output.removeChild(divElement);
    arrTask.splice(index, 1);
  }
}

addButton.addEventListener("click", () => {
  forOutput();
});

taskInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") forOutput();
});
