const protocolo = require("express")
const app = protocolo()
const exibir = require ("ejs")
const executar = require ("nodemon")
const {MongoClient} = require("mongodb")

const dotenv = require ("dotenv")
dotenv.config()
const url = process.env.DATABASE_URL

//fazer query com _id do mongodb
const ObjectID = require("mongodb").ObjectId

const client = new MongoClient(url)
//cria o banco de dados com o nome dPessoas (create database dPessoas)
const db = client.db("pessoa")
//cria uma collection com o nome crud (create table crud)
const collection = db.collection("crud")

const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine','ejs')

app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.listen(3000, function(){
    console.log("O nosso servidor está na porta 3000")
})

app.get('/ler', (req, res)=> {
    res.send("Hello Word!")
})

app.post("/show", (req, res) => {
    db.collection("crud"),save(req.body, (err, result) => {
        if(err) return console.log(err)
        console.log("salvo no")
    })
})

