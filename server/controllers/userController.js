// G:\Webdevelopment\User Management System\server\controllers\userController.js
const mysql = require("mysql2");
const userController = {};
const { v4: uuidv4 } = require('uuid');

// Connection pool
const pool = mysql.createPool({
    connectionLimit: 100,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

// View users
userController.view = (req, res) => {
    // Connect to DB
    pool.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }

        console.log("Connected id as " + connection.threadId);

        // User connection query
        connection.query('SELECT * FROM user WHERE status="active"', (err, result) => {
            // Release the connection
            connection.release();

            if (!err) {
                res.render("layout/main", { result });
            } else {
                console.error(err);
                res.status(500).send('Internal Server Error');
            }
        });
    });
};

// Find user
userController.find = (req, res) => {
    // Connect to DB
    pool.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }

        console.log("Connected id as " + connection.threadId);

        // User connection query
        let searchTerm = req.body.search;
        connection.query('SELECT * FROM user WHERE first_name LIKE ? OR last_name LIKE ?', ['%' + searchTerm + '%', '%' + searchTerm + '%'], (err, result) => {
            // Release the connection
            connection.release();

            if (!err) {
                res.render("layout/main", { result });
            } else {
                console.error(err);
                res.status(500).send('Internal Server Error');
            }
        });
    });
};

// Render adduser form
userController.form = (req, res) => {
    res.render("adduser");
};

// Create user
userController.create = (req, res) => {
    const { id,first_name, last_name, email, phone,status } = req.body;
    

    // Connect to DB
    pool.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }

        console.log("Connected id as " + connection.threadId);

        // User connection query
        connection.query('INSERT INTO user SET id= ?,first_name=?, last_name=?, email=?, phone=? , status= ?', [id,first_name, last_name, email, phone,status], (err, result) => {
            // Release the connection
            connection.release();
            

            if (!err) {
                res.render("layout/main",{result});
            } else {
                console.error(err);
                res.status(500).send('Internal Server Error');
            }
        });
    });
};

module.exports = userController;
