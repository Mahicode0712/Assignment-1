const express = require("express");

const studentRoutes = require("./routes/studentRoute");
const logger = require("./middleware/logger");

const app = express();


app.use(express.json());

app.use(logger);

app.use("/students", studentRoutes);


app.get("/", (req, res) => {
    res.status(200).json({
        message: "Student Management REST API is running"
    });
});


app.use((req, res) => {
    res.status(404).json({
        message: "Route not found"
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});