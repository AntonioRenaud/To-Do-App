import Project from "./projects";
import Task from "./tasks";

/*Creates new Project, taking a title as a parameter
 and storing them to localstore object named Projects*/
function newProject(title) {
  let myProjects = JSON.parse(localStorage.getItem("Projects"));
  if (myProjects == null) myProjects = [];
  myProjects.push(new Project(title));
  localStorage.setItem("Projects", JSON.stringify(myProjects));
}

/*creates a new task, taking title, date and project name
 as parameter storing them to localstore object named Tasks*/
function newTask(title, date, project) {
  let myTasks = JSON.parse(localStorage.getItem("Tasks"));
  if (myTasks == null) myTasks = [];
  myTasks.push(new Task(title, date, project));
  localStorage.setItem("Tasks", JSON.stringify(myTasks));
}

/*Takes Tasks object out of localstorage, edits or deletes an entry
and stores the object back to localstorage*/
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

function checkCompleted(index) {
  let myTasks = JSON.parse(localStorage.getItem("Tasks"));
  if (myTasks[index].status === "Completed") {
    return true;
  }
}
export { newProject, newTask, editTasks, checkCompleted };
