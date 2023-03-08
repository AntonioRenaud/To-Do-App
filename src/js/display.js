import { editTasks } from "./creation";

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
  tableHeaderCell3.textContent = "Completed";
  let myTasks = JSON.parse(localStorage.getItem("Tasks"));
  myTasks.forEach((task) => newTaskEntry(task));
}

function newTaskEntry(task) {
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");
  const completeButton = document.createElement("button");
  const tableRow = table.insertRow(-1);
  const tableRowCell1 = tableRow.insertCell(0);
  const tableRowCell2 = tableRow.insertCell(1);
  const tableRowCell3 = tableRow.insertCell(2);
  const tableRowCell4 = tableRow.insertCell(3);
  editButton.classList.add("edit-button");
  deleteButton.classList.add("delete-button");
  completeButton.classList.add("complete-button");
  completeButton.textContent = "Change Status";
  completeButton.setAttribute("data-count", `${taskCount}`);
  editButton.setAttribute("data-count", `${taskCount}`);
  deleteButton.setAttribute("data-count", `${taskCount}`);
  editButton.textContent = "Edit";
  deleteButton.textContent = "Delete";
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

export { updateProjects, updateSelection, updateTasks };
