import { opine, json  } from "./deps.ts";
import RouterPalabras from './router/palabras.ts'
import CnxMongo from './model/DB.ts'

const app = opine();
app.use(json());

/* ------------------------------------------------------------- */
/*             ZONA DE RUTAS MANEJADAS POR EL ROUTER             */
/* ------------------------------------------------------------- */
app.use('/palabras', new RouterPalabras().start())

/* ------------------------------------------------------------- */
/*                      Servidor LISTEN                          */
/* ------------------------------------------------------------- */
const PORT = 8080
await CnxMongo.conectar()
try {
  app.listen(PORT,  () => console.log(`Servidor express escuchando en el puerto ${PORT}`))
}
catch(error) {
  console.log('Servidor express en error:', error)
}
