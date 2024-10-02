const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');
const todoInput = document.querySelector('.todo-input');

addButton.addEventListener('click', () => {
    const taskText = todoInput.value.trim();

    if (taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
        <input type="checkbox" />
        <label style="font-family:iosevka">
        <p style="color:pink">${taskText}</p>
        </label>
        <button style="color:#dd7878" class="remove-button">Remove</button>
        `;

        // Add event listener to remove button
        const removeButton = li.querySelector('.remove-button');
        removeButton.addEventListener('click', () => {
            todoList.removeChild(li);
        });

        todoList.appendChild(li);
        todoInput.value = ''; // Clear input
    }
});

// Allow pressing "Enter" to add tasks
todoInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addButton.click();
    }
});
