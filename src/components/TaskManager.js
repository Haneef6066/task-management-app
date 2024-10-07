// import React, { useEffect, useState } from 'react';
// import TaskList from './TaskList';

// const TaskManager = () => {
//     const [tasks, setTasks] = useState([]);

//     useEffect(() => {
//         const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
//         setTasks(storedTasks);
//     }, []);

//     useEffect(() => {
//         localStorage.setItem('tasks', JSON.stringify(tasks));
//     }, [tasks]);

//     const addTask = (content) => {
//         const newTask = { id: Date.now().toString(), content };
//         setTasks([...tasks, newTask]);
//     };

//     const deleteTask = (id) => {
//         setTasks(tasks.filter(task => task.id !== id));
//     };

//     const updateTask = (id, newContent) => {
//         setTasks(tasks.map(task => (task.id === id ? { ...task, content: newContent } : task)));
//     };

//     const onDragEnd = (result) => {
//         if (!result.destination) {
//             return; // Dropped outside the list
//         }

//         const reorderedTasks = Array.from(tasks);
//         const [removed] = reorderedTasks.splice(result.source.index, 1);
//         reorderedTasks.splice(result.destination.index, 0, removed);

//         setTasks(reorderedTasks);
//     };

//     return (
//         <div>
//             <button onClick={() => addTask("New Task")}>Add Task</button>
//             <TaskList tasks={tasks} onDragEnd={onDragEnd} />
//         </div>
//     );
// };

// export default TaskManager;
// import React, { useEffect, useState } from 'react';
// import TaskList from './TaskList';

// const TaskManager = () => {
//     const [tasks, setTasks] = useState([]);
//     const [taskInput, setTaskInput] = useState('');

//     useEffect(() => {
//         const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
//         setTasks(storedTasks);
//     }, []);

//     useEffect(() => {
//         localStorage.setItem('tasks', JSON.stringify(tasks));
//     }, [tasks]);

//     const addTask = () => {
//         if (!taskInput.trim()) return; // Prevent adding empty tasks
//         const newTask = { id: Date.now().toString(), content: taskInput };
//         setTasks([...tasks, newTask]);
//         setTaskInput(''); // Clear the input field
//     };

//     const onDragEnd = (result) => {
//         if (!result.destination) {
//             return; // Dropped outside the list
//         }

//         const reorderedTasks = Array.from(tasks);
//         const [removed] = reorderedTasks.splice(result.source.index, 1);
//         reorderedTasks.splice(result.destination.index, 0, removed);

//         setTasks(reorderedTasks);
//     };

//     return (
//         <div>
//             <h1>Task Management App</h1>
//             <input
//                 type="text"
//                 value={taskInput}
//                 onChange={(e) => setTaskInput(e.target.value)}
//                 placeholder="Enter a new task"
//             />
//             <button onClick={addTask}>Add Task</button>
//             <TaskList tasks={tasks} onDragEnd={onDragEnd} />
//         </div>
//     );
// };

// export default TaskManager;
import React, { useEffect, useState } from 'react';
import TaskList from './TaskList';

const TaskManager = () => {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(storedTasks);
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (!taskInput.trim()) return; // Prevent adding empty tasks
        const newTask = { id: Date.now().toString(), content: taskInput };
        setTasks([...tasks, newTask]);
        setTaskInput(''); // Clear the input field
    };

    const onDragEnd = (result) => {
        if (!result.destination) {
            return; // Dropped outside the list
        }

        const reorderedTasks = Array.from(tasks);
        const [removed] = reorderedTasks.splice(result.source.index, 1);
        reorderedTasks.splice(result.destination.index, 0, removed);

        setTasks(reorderedTasks);
    };

    return (
        <div>
            <h1>Task Management App</h1> {/* Ensure this is declared only once */}
            <input
                type="text"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                placeholder="Enter a new task"
            />
            <button onClick={addTask}>Add Task</button>
            <TaskList tasks={tasks} onDragEnd={onDragEnd} />
        </div>
    );
};

export default TaskManager;
