const list = new ListSystem();
let selectedTask = null;

let element = document.getElementById("all");
element.style.color = "white";
element.style.backgroundColor = "green";

function CreateTaskBar(taskId, name, description, dueDate, status) {
    let nameResult = name;
    let descriptionResult = description;

    if (name.length >= 10) {
        nameResult = name.substring(0, 11) + "...";    
    }

    if (description.length >= 20) {
        descriptionResult = description.substring(0, 21) + "...";
    }

    const result = document.createElement('div');
    const nameTag = document.createElement('h3');
    const descriptionTag = document.createElement('p');
    const dueDateTag = document.createElement('p');
    const statusTag = document.createElement('p');

    nameTag.textContent = nameResult;
    descriptionTag.textContent = descriptionResult;
    dueDateTag.textContent = dueDate.toString();
    statusTag.textContent = status;

    nameTag.id = taskId + "_name";
    descriptionTag.id = taskId + "_description";
    dueDateTag.id = taskId + "_dueDate";
    statusTag.id = taskId + "_status";

    result.appendChild(nameTag);
    result.appendChild(descriptionTag);
    result.appendChild(dueDateTag);
    result.appendChild(statusTag);

    result.id = taskId;
    result.className = "task";
    result.addEventListener("click", OnTask);
    
    return result;
}

const NavClick = (event) => {
    event.preventDefault();

    element.style.color = "green";
    element.style.backgroundColor = "white";
    let clickedId = event.target.id;

    if (((clickedId.length >= 5) && (clickedId.substring(clickedId.length - 5, clickedId.length))) === "_text") {
        clickedId = clickedId.substring(0, clickedId.length - 5);
    }

    element = document.getElementById(clickedId);
    element.style.color = "white";
    element.style.backgroundColor = "green";

    document.getElementById("tasks").innerHTML = "";

    let tasks = list.GetTasks(clickedId);
    
    for (let i = 0; i < tasks.length; i++) {
        const taskBar = CreateTaskBar(tasks[i].id, tasks[i].name, tasks[i].description, tasks[i].dueDate, tasks[i].status);
        document.getElementById("tasks").appendChild(taskBar);
    }
};

const OnAddTask = () => {
    document.getElementById("task_dialog").showModal();
};

const OnSubmit = (event) => {
    event.preventDefault();
    document.getElementById("task_dialog").close();

    const taskName = document.getElementById("name").value;
    const taskDescription = document.getElementById("description").value;
    const taskDueDate = document.getElementById("dueDate").value;

    const taskId = list.AddTask(taskName, taskDescription, taskDueDate);
    const taskBar = CreateTaskBar(taskId, taskName, taskDescription, taskDueDate, "Pending");

    document.getElementById("tasks").appendChild(taskBar);
};

const OnCancel = (event) => {
    event.preventDefault();
    document.getElementById("task_dialog").close();
    document.getElementById("edit_dialog").close();
};

const OnTask = (event) => {
    let targetId = event.target.id;
    let parentId = event.target.parentElement.id;
    let taskId = targetId;

    if ((parentId != "tasks") && (parentId.length < targetId.length)) {
        taskId = parentId;
    }

    console.log("taskId: ", taskId);

    const taskInfo = list.GetTaskInfo(taskId);

    if ((selectedTask) && (document.getElementById(selectedTask))) {
        document.getElementById(selectedTask).style.backgroundColor = "green";
    }

    document.getElementById("task_name").textContent = taskInfo.name;
    document.getElementById("task_description").textContent = taskInfo.description;
    document.getElementById("task_due_date").textContent = taskInfo.dueDate.toString();
    document.getElementById("task_status").textContent = taskInfo.status;
    document.getElementById("display_area").style.display = "inline";
    document.getElementById(taskId).style.backgroundColor = "aqua";
    selectedTask = taskId;

    if (taskInfo.status === "Completed") {
        document.getElementById("done_button").textContent = "Mark as Undone";
    } else {
        document.getElementById("done_button").textContent = "Mark As Done";
    }
};

const OnDone = (event) => {
    const prevStatus = (list.GetTaskInfo(selectedTask).status === "Completed") ? true : false;
    list.ToggleTaskStatus(selectedTask);

    if (prevStatus) {
        document.getElementById("task_status").textContent = "Pending";
        document.getElementById(selectedTask + "_status").textContent = "Pending";
        document.getElementById("done_button").textContent = "Mark As Done";
    } else {
        document.getElementById("task_status").textContent = "Completed";
        document.getElementById(selectedTask + "_status").textContent = "Completed";
        document.getElementById("done_button").textContent = "Mark As Undone";
    }
};

const OnEdit = (event) => {
    document.getElementById("edit_dialog").showModal();

    const taskInfo = list.GetTaskInfo(selectedTask);

    document.getElementById("edit_name").value = taskInfo.name;
    document.getElementById("edit_description").value = taskInfo.description;
    document.getElementById("edit_dueDate").value = taskInfo.dueDate.toString();
};

const OnSaveChanges = (event) => {
    event.preventDefault();
    document.getElementById("edit_dialog").close();

    newInfo = {
        name: document.getElementById("edit_name").value,
        description: document.getElementById("edit_description").value,
        dueDate: document.getElementById("edit_dueDate").value
    };

    list.EditTaskInfo(selectedTask, newInfo);

    let previewName = newInfo.name;
    let previewDescription = newInfo.description;

    if (newInfo.name.length >= 10) {
        previewName = newInfo.name.substring(0, 11) + "...";
    }

    if (newInfo.description.length >= 20) {
        previewDescription = newInfo.description.substring(0, 21) + "...";
    }

    document.getElementById("task_name").textContent = newInfo.name;
    document.getElementById("task_description").textContent = newInfo.description;
    document.getElementById("task_due_date").textContent = newInfo.dueDate.toString();

    document.getElementById(selectedTask + "_name").textContent = previewName;
    document.getElementById(selectedTask + "_description").textContent = previewDescription;
    document.getElementById(selectedTask + "_dueDate").textContent = newInfo.dueDate;
};
