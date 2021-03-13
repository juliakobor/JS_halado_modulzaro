import {Post} from "./post.js"

export class Blog {
    #title;
    #author;
    #posts = [];

    constructor(title, author) {
        this.#title = title;
        this.#author = author;
    }

    fetchPosts() {
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
    }

    addPost(post) {
        if (post instanceof Post) {
            this.#posts.push(post);
        } else throw new Error("Post item is not an instance of Post class!")
    }


    deletePost(postId) {
        const indexToDelete = this.#posts.findIndex(item => item.id === postId)

        if (indexToDelete) {
            this.#posts.splice(indexToDelete, 1);
            return true;
        } else return false;
    }
}










