//experiment 12

const express = require('express');

const app = express();
const PORT = 3000;

// Read form data
app.use(express.urlencoded({ extended: true }));

// Display registration form
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Registration Form</title>
            <meta charset="UTF-8">
        </head>
        <body>
            <h2>Registration Form</h2>

            <form action="/register" method="POST">
                <label>Username:</label>
                <input type="text" id="username" name="username" required>
                <br><br>

                <label>Email:</label>
                <input type="email" id="email" name="email" required>
                <br><br>

                <label>Password:</label>
                <input type="password" id="password" name="password" required>
                <br><br>

                <button type="submit">Register</button>
            </form>
        </body>
        </html>
    `);
});

// Handle registration
app.post('/register', (req, res) => {
    const { username, email } = req.body;

    console.log('Username:', username);
    console.log('Email:', email);

    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Registration Successful</title>
        </head>
        <body>
            <h2>Registration successful!</h2>
        </body>
        </html>
    `);
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});