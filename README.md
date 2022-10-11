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
```tree
│   .editorconfig --> for code formatting
│   .eslintrc.js --> for linting
│   .gitignore
│   .npmrc --> config for npm
│   .prettierignore --> prettier configuration
│   defaultREADME.md --> default readme that came with blitz
│   jest.config.js --> configuration for jest testing framework
│   next-env.d.ts --> next environment
│   next.config.js --> next configuration
│   notes.md --> my notes while doing the tutorial
│   package-lock.json --> dependencies
│   package.json --> dependencies
│   README.md --> what you're reading!
│   tsconfig.json --> typescript configurations
│   types.ts --> types for typescript
│
├───.husky --> runs checks before commits and pushes
│       pre-commit
│       pre-push
│
├───app --> houses application logic (model + controller layer in MVC)
│   │   blitz-client.ts --> boilerplate for routing
│   │   blitz-server.ts --> boilerplate for routing
│   │
│   ├───auth
│   │   │   validations.ts --> defines types for queries/mutations
│   │   │
│   │   ├───components --> reusable react components
│   │   │       LoginForm.tsx
│   │   │       SignupForm.tsx
│   │   │
│   │   └───mutations --> import into client to handle auth
│   │           changePassword.ts
│   │           forgotPassword.test.ts
│   │           forgotPassword.ts
│   │           login.ts
│   │           logout.ts
│   │           resetPassword.test.ts
│   │           resetPassword.ts
│   │           signup.ts
│   │
│   ├───choices --> queries/mutations for the choice model
│   │   ├───mutations
│   │   │       deleteChoice.ts
│   │   │       updateChoice.ts
│   │   │
│   │   └───queries
│   │           getChoice.ts
│   │           getChoices.ts
│   │
│   ├───core --> reusable react components and layouts
│   │   ├───components
│   │   │       Form.tsx
│   │   │       LabeledTextField.tsx
│   │   │
│   │   └───layouts
│   │           Layout.tsx
│   │
│   ├───questions --> queries/mutations for the question model
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
│   └───users --> queries/mutations/helpers for the user model
│       ├───hooks
│       │       useCurrentUser.ts
│       │
│       └───queries
│               getCurrentUser.ts
│
├───db --> where database stuff is kept
│   │   index.ts --> lets us use db throughout the app
│   │   schema.prisma --> interface between app and database
│   │   seeds.ts --> for pre-populating information
│   │
│   └───migrations --> these are all changes to the db schema
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
├───mailers --> handles emailing the user
│       .keep
│       forgotPasswordMailer.ts
│
├───pages --> displayed to the browser (view layer in MVC)
│   │   404.tsx --> not found page
│   │   index.tsx --> home "/" page
│   │   _app.tsx --> wrapper
│   │   _document.tsx --> wrapper
│   │
│   ├───api --> api route
│   │   └───rpc
│   │           [[...blitz]].ts
│   │
│   ├───auth --> authentication route provided by blitz
│   │       forgot-password.tsx
│   │       login.tsx
│   │       reset-password.tsx
│   │       signup.tsx
│   │
│   └───questions --> questions route
│       │   index.tsx
│       │   new.tsx
│       │   [questionId].tsx
│       │
│       └───[questionId]
│               edit.tsx
│
├───public --> images/videos/files publicly available
│       favicon.ico
│       logo.png
│
└───test --> testing suite
        index.test.tsx
        setup.ts
        utils.tsx
```
