import express from 'express'
import { productosRoutes, usersRoutes, registersRoutes, serivceRoutes } from './routes/index.js';
import path from 'path';
const app = express()
const port = process.env.PORT;

app.use(express.static('src'));


app.get('/', (req, res) => {
    res.sendFile(path.resolve('src/login.html'));
});

app.use('/productos', productosRoutes);
app.use('/users', usersRoutes);
app.use('/registers', registersRoutes);
app.use('/api', serivceRoutes);


app.listen(3000,()=> {
console.log("server", 3000)
});