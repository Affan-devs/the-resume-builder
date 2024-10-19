interface Task {
    id: number;
    title: string;
    completed: boolean;
}

class TaskManager {
    private tasks: Task[] = [];
    private taskId: number = 0;

    constructor(private taskListElement: HTMLElement) {}

    addTask(title: string): void {
        const newTask: Task = {
            id: this.taskId++,
            title,
            completed: false,
        };
        this.tasks.push(newTask);
        this.renderTasks();
    }

    toggleTaskCompletion(id: number): void {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.completed = !task.completed;
            this.renderTasks();
        }
    }

    removeTask(id: number): void {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.renderTasks();
    }

    private renderTasks(): void {
        this.taskListElement.innerHTML = '';
        this.tasks.forEach(task => {
            const taskElement = document.createElement('li');
            taskElement.textContent = task.title;
            if (task.completed) {
                taskElement.style.textDecoration = 'line-through';
            }

            const toggleButton = document.createElement('button');
            toggleButton.textContent = task.completed ? 'Undo' : 'Complete';
            toggleButton.addEventListener('click', () => this.toggleTaskCompletion(task.id));

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => this.removeTask(task.id));

            taskElement.appendChild(toggleButton);
            taskElement.appendChild(removeButton);
            this.taskListElement.appendChild(taskElement);
        });
    }
}

const taskList = document.getElementById('task-list') as HTMLElement;
const taskInput = document.getElementById('task-input') as HTMLInputElement;
const addButton = document.getElementById('add-task') as HTMLButtonElement;

if (taskList && taskInput && addButton) {
    const taskManager = new TaskManager(taskList);

    addButton.addEventListener('click', () => {
        const taskTitle = taskInput.value.trim();
        if (taskTitle) {
            taskManager.addTask(taskTitle);
            taskInput.value = '';
        }
    });
}

const clearButton = document.getElementById('clear-tasks') as HTMLButtonElement;
if (clearButton) {
    clearButton.addEventListener('click', () => {
        taskList.innerHTML = '';
    });
}
