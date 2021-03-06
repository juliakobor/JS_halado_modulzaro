export class Blog {
    #title;
    #author;
    #posts = [];

    constructor(title, author) {
        this.#title = title;
        this.#author = author;
    }

    get Posts() {
        return this.#posts;
    }

    fetchPosts = function () {
        let fetchPromise = fetch("https://jsonplaceholder.typicode.com/posts");
        fetchPromise
            .then(response => {
                if (!response.ok) throw Error(response.statusText)
                else return response.json()
            })
            .then(data => {
                data.forEach(item => {
                    this.#posts.push(item)
                })
            })
            .catch(error => {
                console.log("error:", error)
            });
    }


}

