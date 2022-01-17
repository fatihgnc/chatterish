export class UserModel {
    username: string;
    password: string;
    email: string;
    birthdate: string;
    nationality: string;

    constructor(
        username: string,
        password: string,
        email: string,
        birthdate: string,
        nationality: string
    ) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.birthdate = birthdate;
        this.nationality = nationality;
    }
}
