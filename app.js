import express from "express";


import web from "./routes/web.js"
const app = express();


const port = 7000;
app.set('view engine', 'ejs')
app.use('', web);
app.use(express.static('public'));

app.listen(port, (() => {
    console.log("Server is Listening");
}))


