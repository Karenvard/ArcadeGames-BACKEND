import * as dotenv from "dotenv";
dotenv.config({});
import * as express from "express";
import * as path from "path";
import * as cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: express.Response) => {
  res.json({ idiot: "idiot" });
});

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
