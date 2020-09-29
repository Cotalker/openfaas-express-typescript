export async function process (req, res) {
    res.send(`
<html lang="es">
    <body>
        <h1>Gracias Amigo!</h1>
        <pre>
${JSON.stringify(req.body, null, 2)}
        </pre>

    <iframe src="https://giphy.com/embed/Q8rftMxvR0FI6Yoch1" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    </body>
</html>
`);
}