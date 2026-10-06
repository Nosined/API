const protocolo = require('express')
const app = protocolo()
const exibir = require ('ejs')
const executar = require ('nodemon')
const mongodb = require ('mongodb')
const dotenv = require ('dotenv')
const driveMD = 'mongodb+srv://<dqnascimento1987_db_user>:<TyVPt2oqc3Jtupq6>@cluster0.4vpml1t.mongodb.net/?appName=Cluster0'

app.listen(3000, function(){
    console.log("O nosso servidor está na porta 3000")
})

app.get('/ler', (request, response)=> {
    response.send("Olá mundo")
})