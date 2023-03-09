const mysql = require("mysql2");

// Create a connection to the database
const connection = mysql.createConnection({
    host: '127.0.0.1',//process.env.DB_HOST,
    user: 'annabelle',//process.env.DB_USER,
    password: 'Snowie8k!',//process.env.DB_PASSWORD,
    database: 'myFirstDatabase',// process.env.DB_NAME
    port: '3307'
});

// open the MySQL connection
connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});

module.exports = connection;