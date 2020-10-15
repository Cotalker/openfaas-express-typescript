import { promises as fs } from "fs";
import vm from "vm";
import path from "path";
import express from "express";

/**
 * THIS IS A SAMPLE FILE
 */
const buildHTML = async (data: object) => {
    const html = await fs.readFile(path.join(__dirname, '..', 'static', 'gracias.html'), 'utf8');
    return vm.runInNewContext(`\`${html}\``, { data });
}

export async function process (req: express.Request, res: express.Response) {
    res.send(await buildHTML(req.body));
}