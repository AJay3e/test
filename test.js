// Example function to fetch data asynchronously
function fetchData(endpoint, callback) {
    fetch(endpoint)
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error('Error:', error));
}
