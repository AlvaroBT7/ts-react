import express from "express";
import mainRouter from "./routers/mainRouter";

const app = express();
app.use(express.json());
app.use(mainRouter);

const port = process.env.port || 3000;
app.listen(port, () => console.log(`Server running at ${port}...`));
