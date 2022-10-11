# Notes

- `app/` has setup files (`blitz-client.ts` and `blitz-server.ts`)
  - is also where queries, mutations, and components go
- `pages/`
  - primary pages folder for pages and api routes
- `app/core`
  - main place to put components, hooks, etc that are used it multiple places throughout the app
- `db/`
  - where the database configuration goes
- `public/`
  - for static assets (images, files, videos)
- `.npmrc`, `.env`
  - these are dotfiles
  - are configuration files for various bits of JavaScript tooling
- `next.config.js`
  - for advanced custom configuration of Blitz and NextJS
- `tsconfig.json`

  - recommended setup for TypeScript

- to start, run `blitz dev`

- you can use `generate` to scaffold out boilerplate code

```
blitz generate all question text:string
```

- this command ^ will generate all boilerplate code for a question object that contains a text attribute of type string
  - the boilerplate generated will include the id, creation timestamp, and last updated timestamp
- it will ask if you want to run `prisma migrate`, press `y` or enter to update the database schema with the new model, and type in a name for the update, like "add question"

```
blitz generate resource choice text votes:int:default=0 belongsTo:question
```

- breaking down this command;
  - `blitz generate` automatically generate a new model for the db
  - `resource` tells next that we don't need to generate pages for the Choice model to display to the user (because each choice belongs to a question, and we already have a question page)
  - `choice` the name of the model to generate
  - `text` a choice contains an attribute of text, which defaults to type of string
  - `votes:int:default=0` the vote attribute is an integer which defaults to 0
  - `belongsTo:question` create a relation where each choice has 1 question
- when running the command, don't run `prisma migrate dev` because we have to add the corresponding foreign key to the question model as well
- `upsert` means "if this item exists, update it. Else, create it"
