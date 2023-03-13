import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.use(cors());

app.get('/', (req, res) => {
    res.send('hello')
})


app.use('/posts', postRoutes)

const CONNECTION_URL = 'mongodb+srv://shakeeb:030856cpp@cluster0.z2vjua3.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`listening on port : ${PORT}`)))
    .catch((error) => console.log(error))

// mongoose.set('useFindAndModify', false)