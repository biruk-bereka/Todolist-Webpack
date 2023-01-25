import { JSDOM } from 'jsdom';

const htmlDocument = new JSDOM(
  `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>To Do List</title>
      </head>
      <body>
        <main>
          <div class="header">
            <h3>Today's To Do</h3>
            <button class="referesh"><i class="fa-solid fa-arrows-rotate"></i></button>  
          </div>
          <form action="">
            <input class="listInput" type="text" placeholder="Add to your list..." />
            <button class="addList"><i class="fa-solid fa-check"></i></button>
          </form>
          <section class="todo-lists">
             <ul class="lists">
               <!-- Dynamically generated lists goes here.. -->
             </ul>
           <button type="button" class="clear">Clear all completed</button>
          </section>
        </main>
      </body>
    </html>
  `,
);

global.document = htmlDocument.window.document;
global.window = htmlDocument.window;