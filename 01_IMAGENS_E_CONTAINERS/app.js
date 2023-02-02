const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res)=>{
    res.send('Testando outra coisa')
})

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})