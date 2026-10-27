const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/register", (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).send("All fields are required!");
    }

    res.send(`Registration successful! Welcome ${name}`);
});

app.listen(3000, "0.0.0.0", () => {
    console.log("Server running on port 3000");
});