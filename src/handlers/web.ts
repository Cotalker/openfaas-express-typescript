/**
 * THIS IS A SAMPLE FILE
 */
import fs from "fs";

const getHTML = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        fs.readFile(__dirname + '/../static/index.html', 'utf8', (err, data) => {
            if (err) return reject(err);
            return resolve(data);
        });
    });
}

export async function web (req, res) {
    const html: string = await getHTML();
    res.send(html);
}