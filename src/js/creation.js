import Project from "./projects";
import Task from "./tasks";

function newProject(title) {
  let myProjects = JSON.parse(localStorage.getItem("Projects"));
  if (myProjects == null) myProjects = [];
  myProjects.push(new Project(title));
  localStorage.setItem("Projects", JSON.stringify(myProjects));
}

function newTask(title, date, project) {
  let myTasks = JSON.parse(localStorage.getItem("Tasks"));
  if (myTasks == null) myTasks = [];
  myTasks.push(new Task(title, date, project));
  localStorage.setItem("Tasks", JSON.stringify(myTasks));
}

function editTasks(index, property, value) {
  let myTasks = JSON.parse(localStorage.getItem("Tasks"));
  if (property === "title") {
    myTasks[index].title = value;
  } else if (property === "date") {
    myTasks[index].date = value;
  } else if (property === "delete") {
    myTasks.splice(index, 1);
  } else if (property === "status") {
    if (myTasks[index].status === "Uncompleted") {
      myTasks[index].status = "Completed";
    } else {
      myTasks[index].status = "Uncompleted";
    }
  }
  localStorage.setItem("Tasks", JSON.stringify(myTasks));
}

export { newProject, newTask, editTasks };
