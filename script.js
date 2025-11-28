// Wait for the entire DOM to load before running the script
document.addEventListener("DOMContentLoaded", function () {

    // Select DOM elements
    const addButton = document.getElementById("addButton");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

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

       
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        
        taskInput.value = "";
    }

    
    addButton.addEventListener("click", addTask);

   
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

  
    addTask();
});