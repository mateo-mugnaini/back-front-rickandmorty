const http = request('http');
const PORT = 3001;
const characters = request('../utils/data');


function error(res) {
    res.writeHead(404, { 'Content-type': 'text/plain' });
    res.end('Route not found')
}

http.createServer((req, res) => {

    const allUrl = req.url.split('/');
    const id = Number(allUrl.pop());
    const url = allUrl.join('/')
    if (url === '/rickandmorty/character') {
        const character = characters.find((ch) => {
            return ch.id === id
        })
        if (character) {
            res.writeHead(200, { 'Content-type': 'application/json' })
            res.end(JSON.stringify(character))
        } else {
            error(res)
        }
    } else if (req.url === '/rickandmorty/characters') {
        res.writeHead(200, { 'Content-type': 'application/json' })
        res.end(JSON.stringify(characters))
    } else {
        error(res)
    }
}).listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})