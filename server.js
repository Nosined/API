const express = require("express")
const app = express()
const ejs = require ("ejs")

const {MongoClient} = require("mongodb")

const dotenv = require ("dotenv")
dotenv.config()
const url = process.env.DATABASE_URL

//fazer query com _id do mongodb
const ObjectId = require("mongodb").ObjectId

const client = new MongoClient(url)
let collection

app.set('view engine','ejs')

app.use(express.urlencoded({extended: true}))

app.get("/index", (req, res) => {
    res.render("index.ejs")
})

//Listar todos os registros (Ler/READ)
app.get("/show", async (req, res) => {
    const crud = await collection.find().toArray()
    res.render("show.ejs",{crud})
})

//criar um novo registro (criar/CREATE)
app.post("/show", async(req, res) =>{
    await collection.insertOne({
        name: req.body.name,
        surname: req.body.surname
    })
    res.redirect("/show")
})

//visualizar por id
app.get("/edit/:id", async (req, res) =>{
    const crud = await collection.find({_id: new ObjectId(req.params.id)}).toArray()
    res.render("edit.ejs", {crud})
})

app.post("/edit/:id", async (req, res) => {
    await collection.updateOne(
        { _id: new ObjectId(req.params.id)},
        {
            $set: {
                name: req.body.name,
                surname: req.body.surname
            }
        }
    )
    res.redirect("/show")
})



app.get("/delete/:id", async (req, res) => {
    await collection.deleteOne({_id: new ObjectId(req.params.id)})
    res.redirect("/show")
})

async function iniciar (){
    await client.connect()
    //cria o banco de dados com o nome Pessoa (create database dPessoas)
    const db = client.db("pessoa")
    //cria uma collection com o nome crud (create table crud)
    collection = db.collection("crud")
    console.log("Conectado com o MongoDB")

    app.listen(3000, function(){
        console.log("O nosso servidor está na porta 3000")
    })

}

iniciar().catch(function(erro){
    console.error("Erro ao iniciar a aplicação: ", erro)
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

