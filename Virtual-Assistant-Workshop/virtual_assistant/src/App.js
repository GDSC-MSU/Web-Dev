import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UserMessage from './UserMessage';
import BotMessage from './BotMessage';

function App() {
  // Initialize a variable to store the send-button as a DOM element.
  /**
   * YOUR CODE HERE
  */

  // Initialize a state hook to keep track of the messages in the session.
  /**
   * YOUR CODE HERE
  */

  // Define a click event handler for the send-button.
  sendButton.onclick = () => {

    // Store the text input as a DOM element.
    /**
     * YOUR CODE HERE
    */

    // Return null if the user input is empty.
    /**
     * YOUR CODE HERE
    */

    // Create a <div> to store the user's input message and the LLM's response as a message.
    /**
     * YOUR CODE HERE
    */

    // Clear the user input area.
    /**
     * YOUR CODE HERE
    */

    // Ensure the chat area scrolls all the way down every time the user sends a message.
    document.getElementById("chatMessages").scrollTo({
      top: document.getElementById("chatMessages").scrollHeight,
      behavior: 'smooth'
    });

    // Concatenate the new pair of messages into the messages state array.
    /**
     * YOUR CODE HERE
    */
  };

  // Return the messages as HTML elements.
  /**
   * YOUR CODE HERE
  */
}

export default App;
