import { NetworkError404 } from "../../template/lib/errors/NetworkError404";

export async function error (req, res) {
    throw new NetworkError404();
    // or  throw new NetworkError404('Some cool message');
}