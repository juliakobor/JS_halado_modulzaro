export class User {
    #firstName;
    #lastName;
    #email;

    constructor(firstName, lastName, email) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#email = email;
    }

    get fullname() {
        return this.#firstName.concat(this.#lastName);
    }

    get stringEmail() {
        return this.#email;
    }
}

