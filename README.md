# Blitz JS Starter

This is a starter app [tutorial](!https://blitzjs.com/docs/tutorial) using blitz js.

## What does this app do?
This is a basic voting app.

## Functionality includes:
- Login, sign up, and password recovery (provided by blitz)
- Database support

## To Run
Open a terminal, run `npm install` to get your dependencies,
then `blitz dev` to run the dev environment.

## What's in Here?
```
│   .editorconfig
│   .env
│   .env.test
│   .eslintrc.js
│   .gitignore
│   .npmrc
│   .prettierignore
│   defaultREADME.md
│   jest.config.js
│   next-env.d.ts
│   next.config.js
│   notes.md
│   package-lock.json
│   package.json
│   README.md
│   tsconfig.json
│   types.ts
│
├───.husky
│       pre-commit
│       pre-push
│
├───app
│   │   blitz-client.ts
│   │   blitz-server.ts
│   │
│   ├───auth
│   │   │   validations.ts
│   │   │
│   │   ├───components
│   │   │       LoginForm.tsx
│   │   │       SignupForm.tsx
│   │   │
│   │   └───mutations
│   │           changePassword.ts
│   │           forgotPassword.test.ts
│   │           forgotPassword.ts
│   │           login.ts
│   │           logout.ts
│   │           resetPassword.test.ts
│   │           resetPassword.ts
│   │           signup.ts
│   │
│   ├───choices
│   │   ├───mutations
│   │   │       deleteChoice.ts
│   │   │       updateChoice.ts
│   │   │
│   │   └───queries
│   │           getChoice.ts
│   │           getChoices.ts
│   │
│   ├───core
│   │   ├───components
│   │   │       Form.tsx
│   │   │       LabeledTextField.tsx
│   │   │
│   │   └───layouts
│   │           Layout.tsx
│   │
│   ├───questions
│   │   │   validations.ts
│   │   │
│   │   ├───components
│   │   │       QuestionForm.tsx
│   │   │
│   │   ├───mutations
│   │   │       createQuestion.ts
│   │   │       deleteQuestion.ts
│   │   │       updateQuestion.ts
│   │   │
│   │   └───queries
│   │           getQuestion.ts
│   │           getQuestions.ts
│   │
│   └───users
│       ├───hooks
│       │       useCurrentUser.ts
│       │
│       └───queries
│               getCurrentUser.ts
│
├───db
│   │   index.ts
│   │   schema.prisma
│   │   seeds.ts
│   │
│   └───migrations
│       │   .keep
│       │   migration_lock.toml
│       │
│       ├───20221011183628_initial_migration
│       │       migration.sql
│       │
│       ├───20221011191623_add_question
│       │       migration.sql
│       │
│       └───20221011192432_add_choices
│               migration.sql
│
├───integrations
│       .keep
│
├───mailers
│       .keep
│       forgotPasswordMailer.ts
│
├───pages
│   │   404.tsx
│   │   index.tsx
│   │   _app.tsx
│   │   _document.tsx
│   │
│   ├───api
│   │   └───rpc
│   │           [[...blitz]].ts
│   │
│   ├───auth
│   │       forgot-password.tsx
│   │       login.tsx
│   │       reset-password.tsx
│   │       signup.tsx
│   │
│   └───questions
│       │   index.tsx
│       │   new.tsx
│       │   [questionId].tsx
│       │
│       └───[questionId]
│               edit.tsx
│
├───public
│       favicon.ico
│       logo.png
│
└───test
        index.test.tsx
        setup.ts
        utils.tsx
```
