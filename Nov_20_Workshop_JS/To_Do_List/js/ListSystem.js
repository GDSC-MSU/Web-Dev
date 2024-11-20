class ListSystem {
    #mTasks;
    #mNextId;

    constructor() {
        this.#mTasks = {};
        this.#mNextId = 1;
    }

    AddTask(name, description, dueDate) {
        const taskId = "taskId" + this.#mNextId;
        const task = new Task(name, description, dueDate);

        this.#mTasks[taskId] = task;
        this.#mNextId++;

        return taskId;
    }

    ToggleTaskStatus(taskId) {
        this.#mTasks[taskId].ToggleStatus();
    }

    DeleteTask(taskId) {
        if (this.#mTasks.hasOwnProperty(taskId)) {
            delete this.#mTasks[taskId];
            return true;
        }

        return false;
    }

    GetTaskInfo(taskId) {
        const task = this.#mTasks[taskId];
        console.log(taskId);
        return {
            id: taskId,
            name: task.GetName(),
            description: task.GetDescription(),
            dueDate: task.GetDueDate(),
            status: (task.GetStatus()) ? "Completed" : "Pending"
        };
    }

    GetTasks(status) {
        let result = [];

        if (status === "all") {
            for (const taskId in this.#mTasks) {
                result.push(this.GetTaskInfo(taskId));
            }
        } else if (status === "completed") {
            for (const taskId in this.#mTasks) {
                if (this.#mTasks[taskId].GetStatus()) {
                    result.push(this.GetTaskInfo(taskId));
                }
            }
        } else if (status === "pending") {
            for (const taskId in this.#mTasks) {
                if (!this.#mTasks[taskId].GetStatus()) {
                    result.push(this.GetTaskInfo(taskId));
                }
            }
        } else {
            console.log("Invalid Status.")
            return "Invalid Status."
        }

        console.log(result);
        return result;
    }

    EditTaskInfo(taskId, infoJSON) {
        const task = this.#mTasks[taskId];
        task.SetName(infoJSON.name);
        task.SetDescription(infoJSON.description);
        task.SetDueDate(infoJSON.dueDate);
    }
}
