import { NetworkError } from "./NetworkError";

export class NetworkError401 extends NetworkError {
    constructor(message?: string) {
        super(401, `Unauthorized${message ? ' : ' + message : ''}`);
    }
}