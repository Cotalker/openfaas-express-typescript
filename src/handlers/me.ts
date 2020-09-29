import * as api from "../lib/api";

const getMe = async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjZhNDIwYmRkMzJkMWIzOWNmYTI5YTAiLCJyb2xlIjoidXNlciIsImNvbXBhbnkiOiI1ZjZhNDIwMTdlMGI5YTAwMDgyYzU5OGUiLCJkYXRlIjoxNjAxMzgwMzg4MjQzLCJpYXQiOjE2MDEzODAzODh9.gUjr4m3l3ZzTaJXa5cD1HuiGKxxhgwQtM68418mQi3s';
    const auth = `Bearer ${token}`;
    return await api.requestPromise(auth, 'https://cotalker.com/api/v1/users/me');
}

export async function me (req, res) {
    const user = await getMe();
    res.json({
        message: 'Hello World!',
        body: req.body,
        query: req.query,
        headers: req.headers,
        user,
    });
}