# To-Do List Application

A modern, responsive to-do list application with local storage functionality. Organize your tasks efficiently with a clean and intuitive interface.

## Features

✨ **Core Features:**
- ✅ Add new tasks easily
- ✅ Mark tasks as completed
- ✅ Delete individual tasks
- ✅ Clear all completed tasks at once
- ✅ Filter tasks (All, Active, Completed)
- ✅ Task counter showing remaining tasks

💾 **Local Storage:**
- Automatically saves all tasks to browser's local storage
- Tasks persist even after closing the browser
- No server required - everything is stored locally

🎨 **Design:**
- Modern gradient UI with smooth animations
- Fully responsive design (works on mobile, tablet, desktop)
- Beautiful color scheme with purple gradients
- Smooth transitions and hover effects
- Empty state messages for better UX

🔒 **Security:**
- HTML escaping to prevent XSS attacks
- Input validation and length limits
- Confirmation dialogs for destructive actions

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies or installations needed

### Installation

1. Clone the repository:
```bash
git clone https://github.com/h0553231099-lab/hershel.git
cd hershel
```

2. Open `index.html` in your web browser:
   - Double-click the `index.html` file, or
   - Right-click and select "Open with" your browser, or
   - Use a local server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Python 2
     python -m SimpleHTTPServer 8000
     
     # Using Node.js http-server
     npx http-server
     ```
   - Then open `http://localhost:8000` in your browser

## Usage

### Adding a Task
1. Type your task in the input field
2. Press Enter or click the "Add Task" button
3. Task appears at the top of the list

### Managing Tasks
- **Complete a Task**: Click the checkbox next to the task
- **Delete a Task**: Click the "Delete" button on the task
- **Clear Completed**: Click "Clear Completed" to remove all completed tasks

### Filtering Tasks
- **All**: View all tasks (default)
- **Active**: View only incomplete tasks
- **Completed**: View only completed tasks

## File Structure

```
hershel/
├── index.html      # HTML structure
├── styles.css      # Styling and animations
├── script.js       # JavaScript functionality
└── README.md       # Documentation
```

## Technical Details

### HTML (`index.html`)
- Semantic HTML structure
- Accessibility-friendly markup
- Mobile viewport configuration

### CSS (`styles.css`)
- CSS Grid and Flexbox layouts
- Gradient backgrounds
- CSS animations and transitions
- Mobile-first responsive design
- Media queries for different screen sizes

### JavaScript (`script.js`)
- **TodoApp Class**: Main application class
- **Local Storage**: `localStorage` API for data persistence
- **DOM Manipulation**: Dynamic list rendering
- **Event Handling**: User interactions
- **Data Validation**: Input checking and sanitization
- **XSS Prevention**: HTML escaping

## Local Storage Details

Tasks are stored as JSON in the browser's local storage under the key `todoAppData`.

Each task object contains:
```javascript
{
  id: 1234567890,           // Unique timestamp-based ID
  text: "Task description",  // The task text
  completed: false,          // Completion status
  createdAt: "5/17/2026..."  // Creation timestamp
}
```

### Storage Limits
- Most browsers support 5-10MB of local storage
- Each task takes approximately 100-200 bytes

## Browser Compatibility

| Browser | Support |
|---------|---------|
| Chrome  | ✅ Full |
| Firefox | ✅ Full |
| Safari  | ✅ Full |
| Edge    | ✅ Full |
| IE 11   | ⚠️ Partial |

## Features in Detail

### Task Management
- Tasks are stored with unique IDs (timestamp-based)
- Maximum task length: 200 characters
- Tasks persist across browser sessions

### Filtering System
- Active state indicator on current filter
- Real-time list updates when filter changes
- Appropriate empty state messages for each filter

### User Experience
- Keyboard support (Enter key to add task)
- Smooth animations for add/delete actions
- Visual feedback on hover and click
- Confirmation dialogs for destructive actions
- Responsive design adapts to screen size

### Error Handling
- Empty task prevention
- Storage error handling
- Graceful degradation

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| Enter | Add task from input field |

## Future Enhancements

Potential features for future versions:
- 📅 Due dates for tasks
- 🏷️ Task categories/tags
- 🔍 Search functionality
- 📱 Mobile app (PWA)
- ☁️ Cloud sync option
- 🎨 Theme customization
- 📊 Task statistics
- ⏰ Task reminders

## Known Limitations

- No cloud synchronization (local storage only)
- No user accounts or multi-device sync
- Clearing browser data will delete tasks
- Maximum storage depends on browser (usually 5-10MB)

## Troubleshooting

### Tasks not saving?
- Check if local storage is enabled in your browser
- Make sure you're not in private/incognito mode
- Check browser storage quota

### Tasks disappearing?
- Clearing browser cache/data will delete stored tasks
- Tasks are only stored locally in your browser

### App not loading?
- Make sure all files (HTML, CSS, JS) are in the same directory
- Open browser console (F12) to check for errors
- Ensure JavaScript is enabled

## License

This project is open source and available for personal and educational use.

## Author

Created by h0553231099-lab

## Support

For issues, questions, or suggestions, please create an issue in the GitHub repository.

---

Enjoy organizing your tasks! 🚀
