const http = require('./src/app')

require('dotenv').config()

http.listen(process.env.SERVER_PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.SERVER_PORT}`)
})

