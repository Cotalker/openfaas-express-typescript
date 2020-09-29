export async function process (req, res) {
    const data = req.body;

    res.send(`
<html lang="es">
    <body>
        <h1>Gracias Amigo!</h1>
        <pre style="background: #ddd">
${JSON.stringify(data, null, 2)}
        </pre>

    <iframe src="https://giphy.com/embed/Q8rftMxvR0FI6Yoch1" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    </body>
</html>
`);
}