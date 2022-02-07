const Express = require("express")
const api = Express()



api.get('/', (req, res) =>{
    res.console.log('teste here now!!!')
})








api.listen(3000)