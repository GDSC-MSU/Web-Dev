import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { marked } from "marked";

export default function BotMessage(props) {
    // Initialize a state hook to keep track of the status of the response.
    // Set the initial state of the response hook to "Loading..." so as to display it 
    // until a result is received from Gemini.
    /**
     * YOUR CODE HERE
    */

    // Leverage GoogleGenerativeAI package to connect with Gemini's server.
    const genAI = new GoogleGenerativeAI("your-api-key-here");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Initialize an Effect Hook to set the value of the response variable to the text returned by Gemini's server.
    useEffect(() => {
        // Define an asynchronous function to request and set the response to the prompt.
        const GetResponse = async () => {
            try {
                // Make a request to Gemini's server using the user's prompt.
                /**
                 * YOUR CODE HERE
                */

                // Initialize an index variable to 1, as we will increment it gradually.
                /**
                 * YOUR CODE HERE
                */

                // Create an interval ID to give the user a real-time typing effect
                // as they're reading the response.
                // The interval's function will run every 5 milliseconds.
                const intervalId = setInterval(() => {
                    // Set the state of the response hook to the string from 0 to the value of index
                    // at every interval.
                    /**
                     * YOUR CODE HERE
                    */

                    // Increment the value of index at every interval.
                    /**
                     * YOUR CODE HERE
                    */

                    // If the value of index is greater than the length of the response text,
                    // we have reached the end of the response text, and so this interval ID must be cleared.
                    /**
                     * YOUR CODE HERE
                    */
                }, 5);
            } catch (err) {
                // If an error occurs, the reply must contain the error.
                /**
                 * YOUR CODE HERE
                */
            }
        };

        // Call the asynchronous function.
        GetResponse();
    }, []);

    // Return the message <div> with the value of the response state.
    /**
     * YOUR CODE HERE
    */
}