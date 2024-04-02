// Import the framework and instantiate it
import Fastify from 'fastify'
import cors from '@fastify/cors'
import { request } from 'http'
import { addArticle, deleteArticle, getArticle, getOneArticle, updat } from '../fonctions/fonction_storage.js'
import { errorFound } from '../fonctions/errorFound.js'



const fastify = Fastify({
  logger: true
})
await fastify.register(cors, { 
    // put your options here
  })
// Declare a route
fastify.get('/', async function handler (request, reply) {
  return { hello: 'world' }
})

fastify.get("/article",async (request,reply)=>{
   const articles = await getArticle()
    return articles
})
fastify.get("/article/:id",async (request,reply)=>{
    const {id } = request.params;
    const articles = await getOneArticle((id)*1)
     return articles
 })
fastify.delete("/article",async (request,reply)=>{
    const id = (request.query.id)*1
    await deleteArticle(id)
    reply.statusCode = 204
 })
 fastify.post('/article', async function handler (request, reply) {
    const add = await addArticle(request.body)
    return add
  })
  fastify.put('/article', async function handler (request, reply) {
    const id = (request.query.id)*1
    const edit = await updat(id,request.body)
    return edit
  })
// Run the server!
try {
  await fastify.listen({ port: 3000 })
} catch (err) {
    if (err instanceof errorFound) {
        reply.statusCode = 404
    }else{
         fastify.log.error(err)
    }
       
  process.exit(1)
}