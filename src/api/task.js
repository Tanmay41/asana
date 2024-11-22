export async function createTask(data) {
	var { taskName, taskPriority } = data;
	taskPriority = taskPriority.toLowerCase();

	const dueDateMap = {
		low: 14,
		mid: 7,
		high: 2,
	};

	const today = new Date();
	today.setDate(today.getDate() + dueDateMap[taskPriority]);

	const yyyy = today.getFullYear();
	const mm = String(today.getMonth() + 1).padStart(2, "0");
	const dd = String(today.getDate()).padStart(2, "0");

	const formattedDueDate = `${yyyy}-${mm}-${dd}`;

	const options = {
		method: "POST",
		headers: {
			accept: "application/json",
			"content-type": "application/json",
			authorization:
				"Bearer 2/1208789055065208/1208817202876253:5077904dcd990c1d744c9527df29ccff",
		},
		body: JSON.stringify({
			data: {
				assignee_section: taskPriority,
				name: taskName,
				due_on: formattedDueDate,
				assignee: "me",
				workspace: "1208824681641786",
			},
		}),
	};

	try {
		const response = await fetch(
			"https://app.asana.com/api/1.0/tasks",
			options
		);
		const result = await response.json();
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}

export async function getTasks() {
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			authorization:
				"Bearer 2/1208789055065208/1208817202876253:5077904dcd990c1d744c9527df29ccff",
		},
	};

	try {
		const response = await fetch(
			"https://app.asana.com/api/1.0/tasks?assignee=me&workspace=1208824681641786&opt_fields=due_on,name",
			options
		);
		const result = await response.json();
		console.log(result);
		return result;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

// workspace=1208824681641786
