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
