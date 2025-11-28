// Wait for the entire HTML document to load before running the script
document.addEventListener("DOMContentLoaded", function () {

    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add a new task
    // `save` determines if we should also save to Local Storage
    function addTask(taskText = taskInput.value.trim(), save = true) {
        // Prevent adding empty tasks
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
            removeTaskFromStorage(taskText);
        };

        // Append remove button to the list item
        li.appendChild(removeBtn);

        // Append the new task to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";

        // Save the task to Local Storage if required
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
            storedTasks.push(taskText);
            localStorage.setItem("tasks", JSON.stringify(storedTasks));
        }
    }

    // Function to remove a task from Local Storage
    function removeTaskFromStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        const updatedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }

    // Function to load tasks from Local Storage on page load
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        storedTasks.forEach(taskText => addTask(taskText, false)); // false prevents re-saving
    }

    // Event listener for the "Add Task" button
    addButton.addEventListener("click", addTask);

    // Allow adding tasks by pressing the Enter key
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Load tasks from Local Storage when page loads
    loadTasks();
});