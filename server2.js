import {createServer} from 'http'
const PORT = process.env.PORT

const users =[
    {id:1 ,name :'cyiza'},
    {id:2 ,name :'dosite'},
    {id:3 ,name :'iradukunda'},


]
const server = createServer((req,res) =>{
    if(req.url === '/api/users' && req.method === 'GET'){
        res.setHeader('content-type','application/json')
        res.write(JSON.stringify(users))
        res.end()
    }
    else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
        res.setHeader('content-type','application/json')
        res.write(JSON.stringify({message:{id:1, name:'cyiza'}}))
        res.end()

    }
    else{
        
        res.setHeader('content-type','application/json')
        res.statusCode = 404
        res.write(JSON.stringify({message:'Router not found'}))
        res.end()
    }

})

server.listen(PORT, () =>{
    console.log(`server is running on ${PORT}`);
    
})
