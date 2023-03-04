let connection = require("../dbConnect_mysql2");

class User {
    constructor({firstName, lastName, emailId, password}) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailId = emailId;
        this.password = password;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    static create(newUser) {
        let mergedUser = new User(newUser)
        console.log(mergedUser)
        return connection.promise().query("INSERT INTO users SET ?", mergedUser);
    };

    static update(updatedUser) {
        updatedUser.updatedAt = new Date();
        return connection.promise().query("UPDATE users SET ? WHERE id = ?", updatedUser, updatedUser.id);
    };  
    
    static destroy(deletedUserId) {
        return connection.promise().query("DELETE FROM users WHERE id = ?", deletedUserId);
    };     

    static findAll() {
        return connection.promise().query("SELECT * FROM users");
    };     
}

module.exports = User