import { NetworkError } from "./NetworkError";

export class NetworkError400 extends NetworkError {
    constructor(message?: string) {
        super(400, `Bad Request${message ? ' : ' + message : ''}`);
    }
}