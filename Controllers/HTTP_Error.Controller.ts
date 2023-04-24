import {Error} from "mongoose";
import {ValidationError} from "express-validator";

export class HTTP_Error {
    private res;
    private readonly error;

    constructor (res: Response, type: string, message: string) {
        if (type && message) {
            this.error = {
                type,
                message
            };
        }
        this.res = res;
    }

    public BadRequest(): typeof this.res.status {
        return this.res.status(400).json({
            resultCode: 1,
            error: this.error,
        })
    }

    public Unauthorized(): typeof this.res.status {
        return this.res.status(401).json({
            resultCode: 1,
            error: this.error,
        })
    }

    public InternalServerError(): typeof this.res.status {
        return this.res.status(500).json({
            resultCode: 1,
            error: this.error,
        })
    }

    // public NotFound(): typeof this.res.status {
    //     return this.res.status(404).sendFile(path.resolve(__dirname, "..", "404.html"))
    // }
}