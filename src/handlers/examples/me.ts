/**
 * THIS IS A SAMPLE FILE
 */
import express from 'express';
import requestpromise from 'request-promise';

type COTUser = { _id: string, email: string };

const getMe = async (): Promise<COTUser> => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjZhNDIwYmRkMzJkMWIzOWNmYTI5YTAiLCJyb2xlIjoidXNlciIsImNvbXBhbnkiOiI1ZjZhNDIwMTdlMGI5YTAwMDgyYzU5OGUiLCJkYXRlIjoxNjAxMzgwMzg4MjQzLCJpYXQiOjE2MDEzODAzODh9.gUjr4m3l3ZzTaJXa5cD1HuiGKxxhgwQtM68418mQi3s';
    const headers = { Authorization: `Bearer ${token}` };
    return await requestpromise('https://cotalker.com/api/v1/users/me', { headers, json: true });
}

export async function me (req: express.Request, res: express.Response) {
    const user = await getMe();
    res.json({ user });
}
