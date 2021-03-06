let fetchPromise = fetch("https://jsonplaceholder.typicode.com/users");

fetchPromise
    .then(response => {
        if(!response.ok) throw Error(response.statusText)
        else return response.json()
    })
    .then(data => {
        console.log(data)})
    .catch(error => {
        console.log("error:", error)
});


