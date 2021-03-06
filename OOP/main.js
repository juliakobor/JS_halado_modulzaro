import {Post} from "./post.js"
import {User} from "./user.js"
import {Blog} from "./blog.js"


//Post teszt
let firstPost = new Post("Title", "lorem lorem lorem lorem lorem", 1221);
console.log(firstPost.title);
console.log(firstPost.body);
console.log(firstPost.id);
console.log(firstPost.getPreview(3));

//User teszt
let john = new User("John", "Doe", "johndoe@gmail.com");
console.log(john.firstName);
console.log(john.lastName);
console.log(john.email);
console.log(john.fullname);
console.log(john.stringEmail);

//Blog teszt
let firstBlog = new Blog("My first blog", john);
console.log(firstBlog);
firstBlog.fetchPosts();
console.log(firstBlog.Posts);
