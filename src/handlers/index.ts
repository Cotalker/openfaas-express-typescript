import express from 'express';

export async function handler (req: express.Request, res: express.Response) {
    res.json({
        message: 'Hello World!',
        debug: {
            message: 'Hello World!',
            body: req.body,
            query: req.query,
            headers: req.headers,
        }
    });
}
