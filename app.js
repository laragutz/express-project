import express from 'express'
import { engine } from 'express-handlebars'

import usersRouter from './src/routes/usersRouter'
// import users from './data/users.json'

// No borrar
const app = express()
app.use(express.json());

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './src/views')

// Entrada de peticiones de los enrutadores
app.get('/', (_, res) => {
  res.render('home')
})

app.use('/v1/users', usersRouter)
app.use('/v1/users/json', usersRouter)

app.listen(3000, () => {
  console.log('Aplicación corriendo en el puerto 3000')
})