"use strict";

const tasks = [
  {
    id: 1,
    title: "Finish JavaScript/React project",
    description: "Complete the current frontend development project.",
    dueDate: "2026-09-05",
    priority: "high",
    completed: false
  },
  {
    id: 2,
    title: "Update CV",
    description: "Update the CV with recent frontend development projects.",
    dueDate: "2026-09-02",
    priority: "medium",
    completed: true
  },
  {
    id: 3,
    title: "Pay bills",
    description: "Pay outstanding bills.",
    dueDate: "2026-09-03",
    priority: "high",
    completed: false
  }
];

const taskListContainer = document.querySelector("#task-list-container");

function renderTasks() {
  taskListContainer.replaceChildren();

  tasks.forEach(task => {
    const taskCard = document.createElement("article");
    taskCard.className = "task-card";

    const taskTitle = document.createElement("h3");
    taskTitle.textContent = task.title;

    const taskDescription = document.createElement("p");
    taskDescription.textContent = task.description;

    const taskDueDate = document.createElement("p");
    taskDueDate.textContent = `Due: ${task.dueDate}`;

    const taskPriority = document.createElement("span");
    taskPriority.className = `priority-badge priority-${task.priority}`;
    taskPriority.textContent = task.priority;

    const completionControl = document.createElement("div");
    completionControl.className = "completion-control";

    const completionCheckbox = document.createElement("input");
    completionCheckbox.type = "checkbox";
    completionCheckbox.id = `task-${task.id}`;
    completionCheckbox.checked = task.completed;

    const completionLabel = document.createElement("label");
    completionLabel.htmlFor = `task-${task.id}`;
    completionLabel.textContent = "Mark as complete";

    completionControl.append(completionCheckbox, completionLabel);

    taskCard.append(taskTitle, taskDescription, taskDueDate, taskPriority, completionControl);

    taskListContainer.appendChild(taskCard);
  });
}

renderTasks();