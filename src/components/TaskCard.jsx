import React from "react";

const TaskCard = ({ task }) => {
	return (
		<div className="border-2 border-gray-200 rounded p-4">
			<h3 className="text-lg font-semibold">{task.name}</h3>
			<p>Due Date: {task.dueDate}</p>
			<p>Priority: {task.priority}</p>
		</div>
	);
};

export default TaskCard;
