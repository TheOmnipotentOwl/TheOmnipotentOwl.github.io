// Define a variable
const body = document.body;
let originalValue = "Hello";
let variableToChange = originalValue;

// Get reference to the button and output paragraph element
const testButton = document.getElementById('testButton');
const output = document.getElementById('output');

// Add a mousedown event listener to the button
testButton.addEventListener('mousedown', function() {
            // Open a new window with the same URL
            const newWindow = window.open(window.location.href);

            if (newWindow) {
                // Wait for the new window to load before adding the event listener
                newWindow.onload = function() {
                    const newDocument = newWindow.document;

                    // Get references to elements in the new window
                    const newButton = newDocument.getElementById('testButton');
                    const newOutput = newDocument.getElementById('output');

                    // Add a mousedown event listener to the button in the new window
                    newButton.addEventListener('mousedown', function() {
                        // Change the value of the variable when the button is clicked
                        variableToChange = "AHHHHH!!!!";
                        // Update the content and style of the output paragraph with the new value
                        newOutput.textContent = variableToChange;
                        newOutput.style.color = "#00FF00";
                        newOutput.style.fontSize = "24px";
                        newDocument.body.style.backgroundColor = "#FF0000";
                        newWindow.close();
                    });

                    // Copy other event listeners to the new window
                    newButton.addEventListener('mouseup', function() {
                        variableToChange = "Thank You for letting go.";
                        newOutput.textContent = variableToChange;
                        newOutput.style.color = "#00FF00";
                        newOutput.style.fontSize = "24px";
                        newDocument.body.style.backgroundColor = "#095050";
                    });

                    newButton.addEventListener('mouseover', function() {
                        variableToChange = "Don't you dare";
                        newOutput.textContent = variableToChange;
                        newOutput.style.color = "#FF0000";
                        newOutput.style.fontSize = "24px";
                        newDocument.body.style.backgroundColor = "#302020";
                    });

                    newButton.addEventListener('mouseout', function() {
                        variableToChange = "Don't go over there again.";
                        newOutput.textContent = variableToChange;
                        newOutput.style.color = "#0000FF";
                        newOutput.style.fontSize = "24px";
                        newDocument.body.style.backgroundColor = "#095050";
                    });
                };
            } else {
                alert("Popup blocked. Please allow popups for this site.");
            }
        });

        // Add a mouseup event listener to reset the message when the button is released
        testButton.addEventListener('mouseup', function() {
            variableToChange = "Thank You for letting go.";
            output.textContent = variableToChange;
            output.style.color = "#00FF00";
            output.style.fontSize = "24px";
            body.style.backgroundColor = "#095050";
        });

        // Add a mouseover event listener to change the message when hovered over
        testButton.addEventListener('mouseover', function() {
            variableToChange = "Don't you dare";
            output.textContent = variableToChange;
            output.style.color = "#FF0000";
            output.style.fontSize = "24px";
            body.style.backgroundColor = "#302020";
        });

// Add a mouseup event listener to reset the message when the button is released
testButton.addEventListener('mouseup', function()
{
  // Reset the value to the original value
  variableToChange = "Thank You for letting go.";
  // Update the content and style of the output paragraph with the original value
  output.textContent = variableToChange;
  output.style.color = "#00FF00"; // Set text color to blue when button is released
  output.style.fontSize = "24px"; // Set font size back to 24px
  body.style.backgroundColor = "#095050";
});

// Add a mouseover event listener to change the message when hovered over
testButton.addEventListener('mouseover', function()
{
  variableToChange = "Don't you dare";
  // Update the content and style of the output paragraph with the new value
  output.textContent = variableToChange;
  output.style.color = "#FF0000"; // Change text color to blue when hovered over
  output.style.fontSize = "24px"; // Increase font size when hovered over
  body.style.backgroundColor = "#302020";
});

// Add a mouseout event listener to reset message when mouse leaves
testButton.addEventListener('mouseout', function()
{
  variableToChange = "Don't go over there again.";
  // Update the content and style of the output paragraph with the original value
  output.textContent = variableToChange;
  output.style.color = "#0000FF"; // Set text color to blue when mouse leaves
  output.style.fontSize = "24px"; // Set font size back to 24px
  body.style.backgroundColor = "#095050";
});
