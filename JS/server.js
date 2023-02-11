import ws from "ws";
const {Server} = ws;
import {v4 as uuid} from "uuid"
const clients = {};




const ws1 = new Server({port: 8000})
ws1.on("conection", (ws) => {
    const id = uuid()
    clients[id] = ws;

    console.log(`hello ${id}`)

    ws.on('message', (rawMessage) => {

    })

    ws.on('closed', () => {
        delete clients[id];
        console.log(`клиент ушел ${id}`)
    })

})

