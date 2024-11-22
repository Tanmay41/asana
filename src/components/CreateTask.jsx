import React from "react";

const CreateTask = ({ onSubmit, formData, setFormData }) => {
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		onSubmit(formData);
	};

	return (
		<form
			className="w-1/2 mx-auto border border-black rounded flex flex-col gap-2 p-4"
			onSubmit={handleSubmit}
		>
			<input
				type="text"
				name="taskName"
				value={formData.taskName}
				onChange={handleInputChange}
				className="border border-gray-300 rounded-md p-2"
			/>
			<select
				name="taskPriority"
				value={formData.taskPriority}
				onChange={handleInputChange}
				className="border border-gray-300 rounded-md p-2"
			>
				<option value="low">Low</option>
				<option value="mid">Mid</option>
				<option value="high">High</option>
			</select>
			<button
				type="submit"
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			>
				Submit
			</button>
		</form>
	);
};

export default CreateTask;
