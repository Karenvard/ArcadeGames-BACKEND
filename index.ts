import * as dotenv from "dotenv";
import * as express from "express";
import * as cors from "cors";
import * as expressWs from "express-ws";
import {IWs} from "./Interfaces/IWs";
dotenv.config({});
const app = expressWs(express()).app;
const aWss = expressWs(express()).getWss();
app.use(cors());
app.use(express.json());

app.ws("/", (ws, req) => {
    ws.on("message", function (msg: IWs) {

    })
})

function main() {
    try {
        app.listen(process.env.SERVER_PORT, () =>
            console.log(`Server started on port ${process.env.SERVER_PORT}`)
        );
    } catch (e) {
        console.log(e.message);
    }
}

main();
