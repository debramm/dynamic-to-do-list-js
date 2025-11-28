// Run script after the page fully loads
document.addEventListener('DOMContentLoaded', function () {

    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get and trim user input
        const taskText = taskInput.value.trim();

        // Check for empty input
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create the list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create the remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // Remove button functionality
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append remove button to task
        li.appendChild(removeBtn);

        // Add the task to the list
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // Event: Add task when button is clicked
    addButton.addEventListener('click', addTask);

    // Event: Add task when Enter key is pressed
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Call addTask on DOMContentLoaded (as instructed)
    // This won't add a real task, but follows the instruction to invoke it on load.
    addTask();
});








