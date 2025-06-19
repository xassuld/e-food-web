import express from "express";
const app = express();
const port = 8000;
app.get("/", (_req, res) => {
    res.send("hello");
});
app.listen(port, () => {
    console.log("server aslaa");
});
