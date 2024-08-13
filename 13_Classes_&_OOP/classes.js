class User{
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    ChangeUserName(){
        return `${this.username.toUpperCase()}`
    }
}



const User1 = new User("Shahzain","Shahzain@gmail.com",123)

console.log(`UserName: ${User1.ChangeUserName()}`);
console.log(`Password: ${User1.encryptPassword()}`);


// behind the scene

function Tea(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

Tea.prototype.encryptPassword = function(){
    return `${this.password.toUpperCase()}`
}

Tea.prototype.ChangeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new Tea("tea", "tea@example.com", "123")

console.log(tea.ChangeUserName());
console.log(tea.encryptPassword());































