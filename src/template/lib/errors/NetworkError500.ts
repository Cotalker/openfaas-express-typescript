import { NetworkError } from "./NetworkError";

export class NetworkError500 extends NetworkError {
    constructor(message?: string) {
        super(500, `Internal Server Error${message ? ' : ' + message : ''}`);

    }
}