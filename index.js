import express from "express"
import userRoutes from "./routes/user.route.js"
const app = express();

app.get("/", (req, res) => {
    res.send("Hello yashansh !");
})

app.listen(3000, (req, res) => {
    console.log("server is running at 3000");
})


app.use("/api/user", userRoutes);
