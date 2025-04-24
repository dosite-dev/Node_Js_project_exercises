import http from 'http'
const PORT = process.env.PORT
const server = http.createServer((req,res) =>{
    try {
        // Check if GET request 
        if(req.method === 'GET'){
            if(req.url === '/'){
                res.writeHead(200,{"Content-Type":"text/html"})
                res.end("<h1>Hello world</h1>")
            }
            else if(req.url === '/about'){
                res.writeHead(200,{"Content-Type":"text/html"})
                res.end("<h1>About</h1>")
            }
            res.writeHead(404,{ 'content-type':'text/plain'})
            res.end('<h1>Not Found</h1>')
        }
        else{
            throw new Error('Method not allowed')
        }
        
    } catch (error){
        res.writeHead(500,{'content-type':'text/plain'})
        res.end("Server error")
        
    }
 
})

server.listen(PORT,() =>{
    console.log(`server is running on port ${PORT}`)
})

