const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const delBtn = document.getElementById("delBtn")
addBtn.addEventListener('click', () => {
    const task = taskInput.value.trim(); // Get current input value and remove extra spaces
    if (task === "") {
        alert("Please enter a task"); // Show alert if input is empty
    } else {
        const li = document.createElement('li'); // Create a new list item
        li.textContent = task; // Set the task text
        const delbtn = document.createElement("button");
        delbtn.textContent = "Delete";
        delbtn.addEventListener('click', () => {
            taskList.removeChild(li); // Remove the task when delete button is clicked
        });
        li.appendChild(delbtn);
        taskList.appendChild(li); // Add it to the list
        taskInput.value = ""; // Clear the input field
        
    
    }
});





