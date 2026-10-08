const protocolo = require('express')
const app = protocolo()
const exibir = require ('ejs')
const executar = require ('nodemon')

const dotenv = require ('dotenv')
dotenv.config()
const url = process.env.DATABASE_URL
const {MongoClient} = require('mongodb')

app.set('view engine','ejs')

app.listen(3000, function(){
    console.log("O nosso servidor está na porta 3000")
})

app.get('/ler', (request, response)=> {
    response.send("Olá mundo")
})

