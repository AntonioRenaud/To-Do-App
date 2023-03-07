const sidebar = document.querySelector(".projects-list");
const content = document.querySelector(".content");
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
  sidebar.textContent = " ";
  let myProjects = JSON.parse(localStorage.getItem("Projects"));
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
  content.textContent = " ";
  let myTasks = JSON.parse(localStorage.getItem("Tasks"));
  myTasks.forEach((task) => {
    const taskBox = document.createElement("p");
    taskBox.classList.add("task-box");
    taskBox.innerHTML = `${task.title}, ${task.date}, ${task.project}, ${task.status} `;
    taskBox.setAttribute("data-count", `${taskCount}`);
    taskCount++;
    content.append(taskBox);
  });
}

export { updateProjects, updateSelection, updateTasks };
