/**
 * document.getElementById(element_id): Returns the DOM object whose ID is element_id.
 * document.createElement(tag_identifier): Returns a newly-created DOM object with the selected identifier.
 * element.innerHTML: Gets/Sets the HTML within the tags of element.
 * parent.appendChild(child_element): Appends a DOM child element to a parent element.
 */

const header1 = document.getElementById("top_header");
header1.textContent = "Hello, GDG!";
header1.style.color = "blue";

const obj = document.createElement('h3'); // <h3></h3>
obj.textContent = "JUST A DEMONSTRATION.";  // <h3>JUST A DEMONSTRATION</h3>

document.getElementById("main_content").innerHTML = "";
document.getElementById("main_content").appendChild(obj);
