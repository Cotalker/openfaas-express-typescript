import { promises as fs } from "fs";
import vm from "vm";
import path from "path";

/**
 * THIS IS A SAMPLE FILE
 */
const buildHTML = async (data) => {
    const html = await fs.readFile(path.join(__dirname, '..', 'static', 'gracias.html'), 'utf8');
    return vm.runInNewContext(`\`${html}\``, { data });
}

export async function process (req, res) {
    res.send(await buildHTML(req.body));
}