import { NetworkError } from "./NetworkError";

export class NetworkError404 extends NetworkError {
    constructor(message?: string) {
        super(404, `Not Found${message ? ' : ' + message : ''}`);
    }
}