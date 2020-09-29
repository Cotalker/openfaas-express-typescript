import fs from "fs";

const getHTML = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(__dirname + '/../index.html', 'utf8', (err, data) => {
            if (err) return reject(err);
            return resolve(data);
        });
    });
}

export async function web (req, res) {
    const html = await getHTML();
    res.send(html);
}