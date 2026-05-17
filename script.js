// To-Do List Application with Local Storage
class TodoApp {
    constructor() {
        this.todos = [];
        this.currentFilter = 'all';
        this.storageKey = 'todoAppData';
        
        this.initElements();
        this.attachEventListeners();
        this.loadFromStorage();
        this.render();
    }

    initElements() {
        this.todoInput = document.getElementById('todoInput');
        this.addBtn = document.getElementById('addBtn');
        this.todoList = document.getElementById('todoList');
        this.clearBtn = document.getElementById('clearBtn');
        this.taskCount = document.getElementById('taskCount');
        this.filterBtns = document.querySelectorAll('.filter-btn');
    }

    attachEventListeners() {
        this.addBtn.addEventListener('click', () => this.addTodo());
        this.todoInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTodo();
        });
        this.clearBtn.addEventListener('click', () => this.clearCompleted());
        
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => this.setFilter(e.target.dataset.filter));
        });
    }

    addTodo() {
        const text = this.todoInput.value.trim();
        
        if (text === '') {
            alert('Please enter a task!');
            return;
        }

        if (text.length > 200) {
            alert('Task is too long! Maximum 200 characters.');
            return;
        }

        const todo = {
            id: Date.now(),
            text: text,
            completed: false,
            createdAt: new Date().toLocaleString()
        };

        this.todos.unshift(todo);
        this.todoInput.value = '';
        this.todoInput.focus();
        
        this.saveToStorage();
        this.render();
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.saveToStorage();
        this.render();
    }

    toggleTodo(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.saveToStorage();
            this.render();
        }
    }

    setFilter(filter) {
        this.currentFilter = filter;
        
        this.filterBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.filter === filter) {
                btn.classList.add('active');
            }
        });
        
        this.render();
    }

    clearCompleted() {
        if (this.todos.some(todo => todo.completed)) {
            if (confirm('Are you sure you want to delete all completed tasks?')) {
                this.todos = this.todos.filter(todo => !todo.completed);
                this.saveToStorage();
                this.render();
            }
        } else {
            alert('No completed tasks to clear!');
        }
    }

    getFilteredTodos() {
        switch (this.currentFilter) {
            case 'active':
                return this.todos.filter(todo => !todo.completed);
            case 'completed':
                return this.todos.filter(todo => todo.completed);
            default:
                return this.todos;
        }
    }

    saveToStorage() {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(this.todos));
        } catch (error) {
            console.error('Failed to save to localStorage:', error);
            alert('Failed to save data. Your storage might be full.');
        }
    }

    loadFromStorage() {
        try {
            const stored = localStorage.getItem(this.storageKey);
            if (stored) {
                this.todos = JSON.parse(stored);
            }
        } catch (error) {
            console.error('Failed to load from localStorage:', error);
            this.todos = [];
        }
    }

    updateTaskCount() {
        const activeTodos = this.todos.filter(todo => !todo.completed).length;
        this.taskCount.textContent = `${activeTodos} task${activeTodos !== 1 ? 's' : ''} remaining`;
    }

    render() {
        const filteredTodos = this.getFilteredTodos();
        
        // Clear the list
        this.todoList.innerHTML = '';

        if (filteredTodos.length === 0) {
            const emptyState = document.createElement('div');
            emptyState.className = 'empty-state';
            
            if (this.todos.length === 0) {
                emptyState.innerHTML = '<p>📝 No tasks yet. Add one to get started!</p>';
            } else if (this.currentFilter === 'active') {
                emptyState.innerHTML = '<p>✅ All tasks completed! Great job!</p>';
            } else if (this.currentFilter === 'completed') {
                emptyState.innerHTML = '<p>📋 No completed tasks yet.</p>';
            }
            
            this.todoList.appendChild(emptyState);
        } else {
            filteredTodos.forEach(todo => {
                const li = document.createElement('li');
                li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
                
                li.innerHTML = `
                    <input 
                        type="checkbox" 
                        class="checkbox" 
                        ${todo.completed ? 'checked' : ''}
                        data-id="${todo.id}"
                    >
                    <span class="todo-text">${this.escapeHtml(todo.text)}</span>
                    <button class="delete-btn" data-id="${todo.id}">Delete</button>
                `;

                // Add checkbox event listener
                li.querySelector('.checkbox').addEventListener('change', (e) => {
                    this.toggleTodo(parseInt(e.target.dataset.id));
                });

                // Add delete button event listener
                li.querySelector('.delete-btn').addEventListener('click', (e) => {
                    this.deleteTodo(parseInt(e.target.dataset.id));
                });

                this.todoList.appendChild(li);
            });
        }

        this.updateTaskCount();
    }

    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }
}

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new TodoApp();
});
