/**
 * THIS IS A SAMPLE FILE
 */
import { promises as fs } from "fs";
import path from "path";

const getHTML = async (): Promise<string> => {
    return await fs.readFile(path.join(__dirname, '..', 'static', 'index.html'), 'utf8');
}

export async function web (req, res) {
    res.send(await getHTML());
}