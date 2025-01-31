let styleButton = document.getElementById("changeStyles");
let state = true; // Represents the current state of the webpage.

styleButton.addEventListener("click", () => {
    if (state) {
        // If state is true, change the elements to their original state.
        const header1 = document.getElementById("top_header");
        header1.textContent = "Hello, GDG!";
        header1.style.color = "blue";

        const obj = document.createElement('h3'); // <h3></h3>
        obj.textContent = "JUST A DEMONSTRATION.";  // <h3>JUST A DEMONSTRATION</h3>

        document.getElementById("main_content").innerHTML = "";
        document.getElementById("main_content").appendChild(obj);
    } else {
        // Else, change elements to their new state.
        const header1 = document.getElementById("top_header");
        header1.textContent = "Hello, World!";
        header1.style.color = "black";

        const obj = document.createElement('p'); // <h3></h3>
        obj.textContent = "This is just a demonstration";  // <h3>JUST A DEMONSTRATION</h3>

        document.getElementById("main_content").innerHTML = "";
        document.getElementById("main_content").appendChild(obj);
    }

    // Toggle the value of state.
    state = !state;
});