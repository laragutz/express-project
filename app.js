import express from 'express'

import usersRouter from './src/routes/usersRouter'
// import users from './data/users.json'

// No borrar
const app = express()
app.use(express.json());

// Entrada de peticiones de los enrutadores
app.get('/home', (_, res) => {
  res.send({ message: 'Bienvenidos Koders!' })
})

app.use('/', usersRouter)

app.listen(3000, () => {
  console.log('Aplicación corriendo en el puerto 3001')
})