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

  /*

const projectAviator = new Project("Aviator", "Urgent");
  const projectNavigator = new Project("Navigator", "Urgent");
  const projectSpaceMan = new Project("SpaceMan", "Urgent");
  const task1 = new Task(
    "Make General Desing",
    "Make the initial desing for what will be the Aviator software",
    "05-23-23",
    "urgent",
    "Aviator",
    "sin completar"
  );

  const task2 = new Task(
    "Implement Desing",
    "Make first prototype following desing",
    "06-23-23",
    "urgent",
    "Aviator",
    "sin completar"
  );

  const task3 = new Task(
    "Implement NAVIGATOR",
    "Make first prototype following desing",
    "06-23-24",
    "urgent",
    "Navigator",
    "sin completar"
  );

  const task4 = new Task(
    "Implement SpaceMan",
    "Make first prototype following desing",
    "05-26-25",
    "urgent",
    "SpaceMan",
    "sin completar"
  );



  projectsArray.push(projectAviator);
  projectsArray.push(projectNavigator);
  projectsArray.push(projectSpaceMan);
*/
}

export { newProject, newTask };
