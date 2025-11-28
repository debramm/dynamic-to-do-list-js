// Wait for the entire HTML document to load before running the script
document.addEventListener("DOMContentLoaded", function () {
    
    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function for adding a new task to the list
    function addTask() {
        // Retrieve and trim the task input value
        const taskText = taskInput.value.trim();

        // Check if the input is empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new list item (li) for the task
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create a remove button for the task
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Assign onclick event to remove the task
        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        // Append remove button to list item, then add list item to task list
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear the input field after adding task
        taskInput.value = "";
    }

    // Event listener for "Add Task" button
    addButton.addEventListener("click", addTask);

    // Allow adding tasks by pressing Enter
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    
});