

const addButton = document.getElementById('addButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
let tasks = [];

addButton.addEventListener('click', () => {
  const task = taskInput.value;
  if (task !== '') {
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    taskInput.value = '';
    displayTasks();
  }
});

function displayTasks() {
    taskList.innerHTML = '';
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks !== null) {
      tasks = JSON.parse(storedTasks);
    }
    tasks.forEach(task => {
      const li = document.createElement('li');
      li.textContent = task;
      taskList.appendChild(li);
    });
  }
  displayTasks();