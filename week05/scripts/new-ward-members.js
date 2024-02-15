
// Fetch the JSON file
fetch('new-ward-members.json')
  .then(response => response.json())
  .then(data => {
    // Convert the JSON object to a string with proper indentation
    const prettyJson = JSON.stringify(data, null, 2);
    
    // Display the JSON in the browser
    document.getElementById('json-display').innerText = prettyJson;
  })
  .catch(error => console.error('Error fetching JSON:', error));
