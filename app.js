document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('add-task-form');
    const taskList = document.getElementById('tasks');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        const title = document.getElementById('task-title').value;
        const description = document.getElementById('task-description').value;
        const dueDate = document.getElementById('task-due-date').value;
        const priority = document.getElementById('task-priority').value;

        // Create task object
        const task = {
            title: title,
            description: description,
            dueDate: dueDate,
            priority: priority
        };

        // Add task to the list
        addTaskToList(task);

        // Clear form fields
        form.reset();
    });

    function addTaskToList(task) {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${task.title}</strong>
            <p>Description: ${task.description}</p>
            <p>Due Date: ${task.dueDate}</p>
            <p>Priority: ${task.priority}</p>
        `;
        taskList.appendChild(li);
    }
});
