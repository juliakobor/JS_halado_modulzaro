export class Post {
    title;
    body;
    id;
    getPreview(length);
    constructor(title, body, id) {
        this.title = title;
        this.body = body;
        this.id = id;
        this.getPreview = function() {
            return this.body
        }
    }
}

