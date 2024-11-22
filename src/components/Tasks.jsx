import React from "react";
import TaskCard from "./TaskCard";
import { getTasks } from "../api/task";

const Tasks = async ({ tasks }) => {
	const lowPriorityTasks = await getTasks("1208824801001092");
	const midPriorityTasks = getTasks("1208824662711037");
	const highPriorityTasks = getTasks("1208824654688718");

	console.log(lowPriorityTasks);

	return (
		<>
			<div className="flex flex-row justify-between flex-1 gap-4">
				<div className="w-1/3 border-2 border-dashed border-pink-200 bg-pink-50/10 rounded">
					<h2 className="text-lg font-semibold mb-4 text-center">
						Low Priority Tasks
					</h2>
					<div className={"w-full h-full overflow-y-auto"}>
						<TaskCard
							task={{
								name: "Dummy Task 1",
								dueDate: "2023-01-01",
								priority: "low",
							}}
						/>
						<TaskCard
							task={{
								name: "Dummy Task 2",
								dueDate: "2023-02-01",
								priority: "mid",
							}}
						/>
						<TaskCard
							task={{
								name: "Dummy Task 3",
								dueDate: "2023-03-01",
								priority: "high",
							}}
						/>
					</div>
				</div>
				<div className="w-1/3 border-2 border-dashed border-blue-200 bg-blue-50/10 rounded overflow-y-auto">
					<h2 className="text-lg font-semibold mb-4 text-center">
						Mid Priority Tasks
					</h2>
					Line 2
				</div>
				<div className="w-1/3 border-2 border-dashed border-yellow-200 bg-yellow-50/10 rounded overflow-y-auto">
					<h2 className="text-lg font-semibold mb-4 text-center">
						High Priority Tasks
					</h2>
					Line 3
				</div>
			</div>
		</>
	);
};

export default Tasks;
