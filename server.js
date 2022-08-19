import app from './src/app.js';

const port = 8000;


app.listen(port, () =>{
    console.log(`Servidor rodando no endereco http://localhost:${port}`)
})