import React, { useState } from "react";
import CreateTask from "./CreateTask";
import { createTask, getTasks } from "../api/task";
import Tasks from "./Tasks";

const Home = () => {
	const [formData, setFormData] = useState({
		taskName: "",
		taskPriority: "low",
	});

	const [tasks, setTasks] = useState();

	const onSubmit = (data) => {
		console.log("Form submitted:", formData, formData == data);
		createTask(formData);
		setFormData({ taskName: "", taskPriority: "low" });
	};

	getTasks().then((items) => {
		setTasks(items);
		console.log(items);
	});
	return (
		<div className="flex flex-col h-[calc(100vh-5rem)] gap-4 m-10">
			<CreateTask
				onSubmit={onSubmit}
				formData={formData}
				setFormData={setFormData}
			/>
			<Tasks tasks={tasks} />
		</div>
	);
};

export default Home;
