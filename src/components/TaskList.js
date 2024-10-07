import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const TaskList = ({ tasks, onDragEnd }) => {
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="taskList">
                {(provided) => (
                    <table 
                        ref={provided.innerRef} 
                        {...provided.droppableProps} 
                        style={{ width: '100%', borderCollapse: 'collapse' }} // Table styles
                    >
                        <thead>
                            <tr>
                                <th style={{ padding: '10px', border: '1px solid #ccc' }}>Content</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task, index) => (
                                <Draggable key={task.id} draggableId={task.id} index={index}>
                                    {(provided) => (
                                        <tr 
                                            ref={provided.innerRef} 
                                            {...provided.draggableProps} 
                                            {...provided.dragHandleProps}
                                            style={{ 
                                                backgroundColor: '#b3e5fc', 
                                                border: '1px solid #ccc', 
                                                padding: '10px',
                                                transition: 'background-color 0.3s' 
                                            }}
                                        >
                                            <td style={{ padding: '10px' }}>{task.content}</td>
                                        </tr>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </tbody>
                    </table>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default TaskList;
