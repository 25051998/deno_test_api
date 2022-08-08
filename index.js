// import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

// serve((_req) => {
//   return new Response("Hello World!", {
//     headers: { "content-type": "text/plain" },
//   });
// });

// import { Application } from "https://deno.land/x/oak/mod.ts";

// const app = new Application();

// app.use((ctx) => {
//   ctx.response.body = "Hello World!";
// });
// addEventListener("fetch",app.fet)
// await app.listen({ port: 443 });

import { Application, Router } from "https://deno.land/x/oak/mod.ts";
// Application and Router
const books = new Map();
books.set("1", {
    id: "1",
    title: "The Hound of the Baskervilles",
    author: "Conan Doyle, Arthur",
});
// Map of string obj
const router = new Router();
router
    .get("/", (context) => {
        context.response.body = "Hello world!";
    })
    .get("/book", (context) => {
        context.response.body = Array.from(books.values());
    })
    .get("/book/:id", (context) => {
        if (books.has(context?.params?.id)) {
            context.response.body = books.get(context.params.id);
        }
    });

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 443 });