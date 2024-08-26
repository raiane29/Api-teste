import { db } from "../db.js"
//query - faz uma consulta no  banco de dados


export const getBooks = (resquest, response) =>{
    const query = "select * from books "
    db.query(query, (error, data)=>{
        if (error) {
            return response.json(error)
        }
        return response.status(200).json(data)
    })
}