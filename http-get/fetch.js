let fetchPromise = fetch("https://jsonplaceholder.typicode.com/users");

fetchPromise
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => error.message("Not working"));


