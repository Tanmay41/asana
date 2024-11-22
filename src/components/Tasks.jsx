import TaskCard from "./TaskCard";
import { getTasks } from "../api/task";
import { useEffect, useState } from "react";

const Tasks = () => {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		getTasks().then((response) => {
			setTasks(response.data);
		});
	}, []);

	return (
		<div className="grid grid-cols-3 gap-4">
			{tasks.map((task) => (
				<TaskCard key={task.id} task={task} />
			))}
		</div>
	);
};

export default Tasks;
