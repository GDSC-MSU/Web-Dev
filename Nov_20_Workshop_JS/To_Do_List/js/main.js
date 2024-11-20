// Create a new To-Do List.
const list = new ListSystem();

// Create a variable to keep track of the selected task at any given time.
let selectedTask = null;

let element = document.getElementById("all");
element.style.color = "white";
element.style.backgroundColor = "green";

// This function creates a <div> element for a task, given the task's information.
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

    // 1. Clear the <div> associated with the "tasks" ID.

    // 2. Get the tasks of the clicked status.
    
    // 3. Create a <div> element for each task and add it to the "tasks" <div>.
};

const OnAddTask = () => {
    // 1. Display the "task_dialog" <dialog> object.
};

const OnSubmit = (event) => {
    // Keep the page from reloading
    event.preventDefault();

    // 1. Close the "task_dialog" <dialog> object.

    // 2. Extract the name, description, and due date values.

    // 3. Add the task to the list using its information.

    // 3. Create a DOM <div> object for the task using CreateTaskBar().

    // 4. Append the <div> object to the "tasks" <div>.
};

const OnCancel = (event) => {
    // Keep the page from reloading.
    event.preventDefault();

    // 1. Close the "task_dialog" <dialog> object.

    // 2. Close the "edit_dialog" <dialog> object.
};

const OnTask = (event) => {
    // 1. Get the ID of the clicked task (taskId).
    let targetId = event.target.id;
    let parentId = event.target.parentElement.id;
    let taskId = targetId;

    if ((parentId != "tasks") && (parentId.length < targetId.length)) {
        taskId = parentId;
    }

    console.log("taskId: ", taskId);

    // 2. Get the JSON representation of the clicked task.

    // 3. Change the background color of the currently selected task to green.
    //    Note that there may be no task selected at the moment.

    // 4. Display each information of the task in its respective field in the display area.

    // 5. Set the selected task's global variable to the clicked task.

    // 6. Change the text contents of the "done_button" <button> to reflect the status of the task.
};

const OnDone = (event) => {
    // 1. Store the status of the task.
   
    // 2. Toggle the status of the task in the list.

    // 3. Change the status of the task in the UI appropriately.
};

const OnEdit = (event) => {
    // 1. Display the "edit_dialog" <dialog> object.

    // 2. Get the JSON representation of the selected task.

    // 3. Pre-fill the fields with the current information of the task.
};

const OnSaveChanges = (event) => {
    // Keep the page from reloading.
    event.preventDefault();

    // 1. Close the "edit_dialog" <dialog> object.

    // 2. Create a JSON of the new information of the task.

    // 3. Edit the task's information in the list.

    // 4. Create the preview name and description to be displayed in the selected tasks's <div>.

    // 5. Change the elements in the display area to reflect the new information.

    // 6. Change the elements in the task's <div> in the list area to reflect the new information.
};
