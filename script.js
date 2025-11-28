document.addEventListener("DOMContentLoaded", function () {

    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create list item
        const li = document.createElement("li");

        // Required: set textContent using a text node
        const textNode = document.createTextNode(taskText);
        li.appendChild(textNode);

        // Create Remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        // Required: use addEventListener, NOT onclick
        removeButton.addEventListener("click", function () {
            taskList.removeChild(li);
        });

        // Append button to li
        li.appendChild(removeButton);

        // Append li to the task list
        taskList.appendChild(li);

        // Clear input
        taskInput.value = "";
    }

    // Add task on button click
    addButton.addEventListener("click", addTask);

    // Add task on Enter key
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

});