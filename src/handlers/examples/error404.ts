import { NetworkError404 } from "../../template/lib/errors/NetworkError404";
import express from "express";

export async function error (req: express.Request, res: express.Response) {
    throw new NetworkError404();
    // or  throw new NetworkError404('Some cool message');
}