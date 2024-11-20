class Task {
    #mName;
    #mDescription;
    #mDueDate;
    #mDone;

    constructor(name, description, dueDate) {
        this.#mName = name;
        this.#mDescription = description;
        this.#mDueDate = dueDate;
        this.#mDone = false;
    }

    GetName() {
        return this.#mName;
    }

    SetName(name) {
        this.#mName = name;
    }

    GetDescription() {
        return this.#mDescription;
    }

    SetDescription(description) {
        this.#mDescription = description;
    }

    GetDueDate() {
        return this.#mDueDate;
    }

    SetDueDate(dueDate) {
        this.#mDueDate = dueDate;
    }

    GetStatus() {
        return this.#mDone;
    }

    ToggleStatus() {
        this.#mDone = !this.#mDone;
    }
}