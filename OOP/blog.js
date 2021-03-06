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
                    //this.#posts.push(new Post(item.id, item.body, item.id))
                })
            })
            .catch(error => {
                console.log("error:", error)
            });
    }
    addPost = function (post) {
        this.#posts.push(post);
    }

    deletePost = function (id) {
        for (let i = 0; i < this.#posts.length; i++) {
            if (id === this.#posts[i].id) {
                return this.#posts.splice(i, 1)
            }
        }
    }


    getPostById = function (id) {
        for (let i = 0; i < this.#posts.length; i++) {
            if (id === this.#posts[i].id) {
                console.log(this.#posts[i]);
            } else return null;
        }
    }
}





