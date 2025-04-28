import { createServer } from 'http'
import { json } from 'stream/consumers'
const PORT = process.env.PORT

const notes = [
    { id: 1, name: 'programming', content: 'programming notes', createdAt: '' },
    { id: 2, name: 'web development', content: 'web development notes', createdAt: '' },
    { id: 3, name: 'algorthim', content: 'algorithm  notes', createdAt: '' },


]
const server = createServer((req, res) => {
    // Retrieving all notes
    if (req.url === '/api/notes' && req.method === 'GET') {
        res.setHeader('content-type', 'application/json')
        res.write(JSON.stringify(notes))
        res.end()
    }
    // Retrieving notes by id 
    else if (req.url.match(/\/api\/notes\/([0-9]+)/) && req.method === 'GET') {
        const foundId = req.url.split("/")[3]
        console.log(foundId)

        const foundingNoteById = notes.filter(note => note.id == parseInt(foundId))
        res.setHeader('content-type', 'application/json')
        res.write(JSON.stringify(foundingNoteById))
        res.end()
    }
    // Creating  new note 
    else if (req.url === '/api/notes/add' && req.method === 'POST') {

        let body = ''
        req.on('data', chunk => {
            body += chunk.toString()
        })
        req.on('end', () => {
            const { name, content } = JSON.parse(body)
            const newNote = {
                name,
                content
            }
            notes.push(newNote)
            res.writeHead(201, 'content-type', 'application/json')
            res.end(JSON.stringify({ message: 'Data added', newNote }))
        })
    }

    else {

        res.setHeader('content-type', 'application/json')
        res.statusCode = 404
        res.write(JSON.stringify({ message: 'Router not found' }))
        res.end()
    }


    //

})

server.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);

})
