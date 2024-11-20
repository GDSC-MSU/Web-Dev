## ListSystem Docs
**This shows the documentation of the ListSystem class. The class allows the developer to add, store, edit, and delete tasks to and from the list.**
# Initial Code
**Create a ListSystem object:**
<code>const list = new ListSystem();</code>
# Public Member Functions
<ul>
	<li><code>ListSystem::AddTask(name, description, dueDate)</code>: Adds a task to the to-do list given the task's name, description, and due date. Then, the function returns the ID of the added task.</li>
	<li><code>ListSystem::ToggleTaskStatus(taskId)</code>: Given a task with ID <code>taskId</code>, this function marks the task as done if it is currently pending, or marks the task as pending if it is currently marked as done.</li>
	<li><code>ListSystem::DeleteTask(taskId)</code>: Given a task with ID <code>taskId</code>, this function attempts to delete that task and returns <code>true</code> if the deletion was successful, and <code>false</code> otherwise.
	<li><code>ListSystem::EditTaskInfo(taskId, infoJSON)</code>: Given a task ID and a JSON representation of a task's information, this function edits the associated task to reflect the given information. The JSON representation must be provided in the following format:
	<code>
		{
			name: "name of task here",
			description: "description of task here",
			dueDate: "due date of task here"
		}
	</code></li>
	<li><code>ListSystem::GetTaskInfo(taskId)</code>: Given a task ID, this function returns the information of that task in the following JSON representation:
	<code>
		{
			id: "task ID here",
			name: "name of task here",
			description: "description of task here",
			dueDate: "due date of task here",
			status: "status here"
		}
	</code></li>
	<li><code>ListSystem::GetTasks(status)</code>: Returns an array of the above JSON object of all tasks with a given <code>status</code>. If <code>status === "all"</code>, the function returns all tasks. If <code>status === "pending"</code>, only pending tasks are returned. Lastly, if <code>status === "completed"</code>, then only the completed tasks are returned.</li>
</ul>

