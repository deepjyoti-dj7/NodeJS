const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    console.log("HomePage");
    res.send(200);
});

app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
});