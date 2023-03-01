export default class User {
    #id;
    #password;
    #email;
    #firstname;
    #lastname;
    #phone;
    constructor(userDto) {
        this.id = userDto.id
        this.password = userDto.password
        this.email = userDto.email
        this.firstname = userDto.firstname
        this.lastname = userDto.lastname
        this.phone = userDto.phone
    }
    set id(value) {
        this.#id = value
    }
    get password() {
        return this.#password
    }
    set password(value) {
        this.#password = value
    }
    get id() {
        return this.#id
    }
    set email(value) {
        this.#email = value
    }
    get email() {
        return this.#email
    }
    set firstname(value) {
        this.#firstname = value
    }
    get firstname() {
        return this.#firstname
    }
    set lastname(value) {
        this.#lastname = value
    }
    get lastname() {
        return this.#lastname
    }
    set phone(value) {
        this.#phone = value
    }
    get phone() {
        return this.#phone
    }
}