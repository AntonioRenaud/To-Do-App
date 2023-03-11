import { editTasks, checkCompleted } from "./creation";

const sidebar = document.querySelector(".projects-list");
const content = document.querySelector(".content");
const table = document.querySelector(".task-table");
let myProjects = JSON.parse(localStorage.getItem("Projects"));
let myTasks = JSON.parse(localStorage.getItem("Tasks"));
let projectCount = 0;
let taskCount = 0;

const selection = document.getElementById("projects-selection");

function updateSelection() {
  selection.innerHTML = '<option value="null">No Selection</option>';
  myProjects = JSON.parse(localStorage.getItem("Projects"));
  myProjects.forEach((project) => {
    selection.innerHTML += `<option value="${project.title}">${project.title}</option>`;
  });
}

function updateProjects() {
  projectCount = 0;
  sidebar.textContent = " ";
  let myProjects = JSON.parse(localStorage.getItem("Projects"));
  if (myProjects == null) {
    myProjects = [];
  }
  myProjects.forEach((project) => {
    const projectBox = document.createElement("li");
    projectBox.classList.add("project-box");
    projectBox.innerText = `${project.title}`;
    projectBox.setAttribute("data-count", `${projectCount}`);
    projectCount++;
    sidebar.append(projectBox);
  });
}

function updateTasks() {
  table.innerHTML = " ";
  taskCount = 0;
  const tableHeader = table.insertRow(0);
  const tableHeaderCell1 = tableHeader.insertCell(0);
  const tableHeaderCell2 = tableHeader.insertCell(1);
  const tableHeaderCell3 = tableHeader.insertCell(2);
  tableHeaderCell1.textContent = "Task";
  tableHeaderCell2.textContent = "Due Date";
  tableHeaderCell3.textContent = "Status";
  let myTasks = JSON.parse(localStorage.getItem("Tasks"));
  myTasks.forEach((task) => newTaskEntry(task));
}

/*Creates table to display tasks, in which every row is a task
its properties and buttons to manipulate it*/
function newTaskEntry(task) {
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");
  const completeButton = document.createElement("button");
  const tableRow = table.insertRow(-1);
  const tableRowCell1 = tableRow.insertCell(0);
  const tableRowCell2 = tableRow.insertCell(1);
  const tableRowCell3 = tableRow.insertCell(2);
  const tableRowCell4 = tableRow.insertCell(3);
  if (checkCompleted(taskCount) === true) {
    completeButton.innerHTML = `<img src="/src/images/check-square.svg" alt="Change status" data-count="${taskCount}">`;
  } else {
    completeButton.innerHTML = `<img src="/src/images/square.svg" alt="Change status" data-count="${taskCount}">`;
    console.log(editTasks(taskCount, "check"));
  }

  editButton.innerHTML = `<img src="/src/images/edit.png" alt="edit entry" data-count="${taskCount}">`;
  deleteButton.innerHTML = `<img src="/src/images/x-square.svg" alt="delete entry" data-count="${taskCount}">`;
  editButton.classList.add("edit-button");
  deleteButton.classList.add("delete-button");
  completeButton.classList.add("complete-button");
  completeButton.setAttribute("data-count", `${taskCount}`);
  editButton.setAttribute("data-count", `${taskCount}`);
  deleteButton.setAttribute("data-count", `${taskCount}`);
  completeButton.classList.add("button");
  tableRow.classList = "table-body";
  tableRowCell1.textContent = task.title;
  tableRowCell2.textContent = task.date;
  tableRowCell3.textContent = task.status;
  tableRowCell4.append(completeButton);
  tableRowCell4.append(editButton);
  tableRowCell4.append(deleteButton);
  taskCount++;
  editButton.addEventListener("click", (e) => {
    let currentButton = e.target;
    let index = currentButton.dataset.count;
    editTasks(index, "title", "Again Edited title");
  });
  completeButton.addEventListener("click", (e) => {
    let currentButton = e.target;
    let index = currentButton.dataset.count;
    editTasks(index, "status");
    updateTasks();
  });

  deleteButton.addEventListener("click", (e) => {
    let currentButton = e.target;
    let index = currentButton.dataset.count;
    editTasks(index, "delete");
    updateTasks();
  });
}

function editTaskForm(index) {
  let rowPosition = index + 1;
  const table = document.querySelector(".task-table");
  const Row = table.insertRow(rowPosition);
  const RowCell1 = Row.insertCell(0);
  const RowCell2 = Row.insertCell(1);
  const RowCell3 = Row.insertCell(2);
  const RowCell4 = Row.insertCell(3);

  RowCell1.innerHTML = task.title;
  RowCell2.textContent = task.date;
  RowCell3.textContent = task.status;
  RowCell4.append(completeButton);
}

export { updateProjects, updateSelection, updateTasks };
