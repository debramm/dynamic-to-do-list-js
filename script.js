// Wait for the entire HTML document to load before running the script
document.addEventListener("DOMContentLoaded", function () {
    
    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add a new task
    function addTask() {
        // Get the input value and trim whitespace
        const taskText = taskInput.value.trim();

        // Check if input is not empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create a new list item (li) for the task
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create a remove button for this task
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // Add click event to remove the task
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append remove button to the list item
        li.appendChild(removeBtn);

        // Append the new task to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Add event listener to the "Add Task" button
    addButton.addEventListener("click", addTask);

    // Allow adding task by pressing the Enter key
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});