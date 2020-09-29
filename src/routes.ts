import * as api from "./api";
import fs from "fs";

const getMe = async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjZhNDIwYmRkMzJkMWIzOWNmYTI5YTAiLCJyb2xlIjoidXNlciIsImNvbXBhbnkiOiI1ZjZhNDIwMTdlMGI5YTAwMDgyYzU5OGUiLCJkYXRlIjoxNjAxMzgwMzg4MjQzLCJpYXQiOjE2MDEzODAzODh9.gUjr4m3l3ZzTaJXa5cD1HuiGKxxhgwQtM68418mQi3s';
    const auth = `Bearer ${token}`;
    return await api.requestPromise(auth, 'https://cotalker.com/api/v1/users/me');
}

const getHTML = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(__dirname + '/index.html', 'utf8', (err, data) => {
            if (err) return reject(err);
            return resolve(data);
        });
    });
}

export function init(app) {
    app.all('/web', async (req, res) => {
        const html = await getHTML();
        res.send(html);
    });

    app.post('/process', async (req, res) => {
        res.send(`<html lang="es"><body>Gracias Amigo! <pre>${JSON.stringify(req.body, null, 2)}</pre></body></html>`);
    })

    app.all('/me', async (req, res) => {
        const me = await getMe();
        res.json({
            message: 'Hello World!',
            body: req.body,
            query: req.query,
            headers: req.headers,
            me,
        });
    });
}