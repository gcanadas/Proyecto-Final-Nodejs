export default class UsersDto {
    constructor(user) {
        this.id = user.id
        this.password = user.password
        this.email = user.email
        this.firstname = user.firstname
        this.lastname = user.lastname
        this.phone = user.phone
    }
}