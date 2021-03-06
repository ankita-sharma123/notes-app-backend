import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import {getNotes, createNote, getSingleNote, updateNote, deleteNote} from './routes.ts';

const router = new Router();

router
  .get('/', (ctx) => {
    ctx.response.body = 'Welcome to Notes App';
  })
  .get('/notes', getNotes)
  .get('/notes/:id', getSingleNote)
  .post('/notes', createNote)
  .put('/notes/:id', updateNote)
  .delete('/notes/:id', deleteNote)
  ;

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());
app.use(
    oakCors({
      origin: "http://localhost:3000"
    }),
);

app.listen({port: 4000});
console.log("Server is up and running on " + port);
