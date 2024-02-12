const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

//Define function to add a task

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;

    const removeBTN = document.createElement("button");
    removeBTN.textContent = "Remove";
    removeBTN.classList.add("remove-btn");
    removeBTN.addEventListener("click", function () {
      li.remove();
    });

    li.appendChild(removeBTN);
    taskList.appendChild(li);
    taskInput.value = "";
  } else {
    alert("Please enter a task!");
  }
}

//Event listener for adding a task

addTaskBtn.addEventListener("click", addTask);
