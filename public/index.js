class User{
    constructor(firstname, lastname, email, profilePicture){
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.profilePicture = profilePicture;
    }

    saveUser(){
        let person = {
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            profilePicture: this.profilePicture
        }
        let savedUser = JSON.stringify(person);
        localStorage.setItem("user", savedUser);
    }
}

export default User;