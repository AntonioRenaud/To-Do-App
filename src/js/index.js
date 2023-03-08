import { newProject, newTask, editTasks } from "./creation.js";
import { updateProjects, updateSelection, updateTasks } from "./display.js";

const taskForm = document.getElementById("task-form");
const projectForm = document.getElementById("project-form");
let myProjects = JSON.parse(localStorage.getItem("Projects"));
let myTasks = JSON.parse(localStorage.getItem("Tasks"));

taskForm.addEventListener("submit", (e) => {
  myTasks = JSON.parse(localStorage.getItem("Tasks"));
  e.preventDefault();
  newTask(
    document.getElementById("task-title").value,
    document.getElementById("date").value,
    document.getElementById("projects-selection").value
  );
  updateTasks();
  taskForm.reset();
});

projectForm.addEventListener("submit", (e) => {
  myProjects = JSON.parse(localStorage.getItem("Projects"));
  e.preventDefault();
  newProject(document.getElementById("title").value);
  updateSelection();
  updateProjects();
  projectForm.reset();
});

updateSelection();
updateProjects();
updateTasks();
console.log(myProjects);
