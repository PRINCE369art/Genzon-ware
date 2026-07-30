import express from 'express';

const app = express();

app.get("/", (req , res) => {
    res.send("Server is ready. This is the first commit, and we will build many more things.");
});

app.listen(5000, () => {
    console.log("server started at http://localhost:5000");
});
