// Wait for the entire DOM to load before running the script
document.addEventListener("DOMContentLoaded", function () {

    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add a new task
    function addTask() {
        // Retrieve and trim the task text
        const taskText = taskInput.value.trim();

        // Check if input is empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create new list item
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create Remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // Add remove functionality
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append button to li, then li to task list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // Add click listener to the Add Task button
    addButton.addEventListener("click", addTask);

    // Add "Enter key" support
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Invoke addTask on DOMContentLoaded (as instructed)
    addTask();
});