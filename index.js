import express from "express"
import cors from "cors"
import useRouters from "./routes/books.js"

const app = express()
const port = 3333

app.use(cors())
app.use(express.json())

app.use("/", useRouters)

app.listen(port,()=>{
    console.log(`Disponível em http://localhost${port}`);
})