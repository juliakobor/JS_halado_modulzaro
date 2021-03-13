import {Post} from "./post.js"

export class Blog {
    #title;
    #author;
    #posts = [];

    constructor(title, author) {
        this.#title = title;
        this.#author = author;
        this.#fetchPosts();
    }

    #fetchPosts() {
        let fetchPromise = fetch("https://jsonplaceholder.typicode.com/posts");
        fetchPromise
            .then(response => {
                if (!response.ok) throw Error(response.statusText)
                else return response.json()
            })
            .then(data => {
                data.forEach(item => {
                    this.#posts.push(new Post(item.id, item.body, item.id))
                })
            })
            .catch(error => {
                console.log("error:", error)
            });
    }}












