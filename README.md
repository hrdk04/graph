# Node and React Practicals

This repository contains four Node.js practicals and four React practicals.

## Requirements

- Node.js and npm
- Git
- MongoDB running locally for the Node chat practical

## Clone the repository

```powershell
git clone https://github.com/hrdk04/graph.git
cd graph
```

Each practical is an independent npm project. Run `npm install` inside the
practical folder before starting it.

## Node.js practicals

### 1. Student

Install and start the Express/EJS server:

```powershell
cd node\Student
npm install
node server.js
```

Open the URL shown by the server in your browser.

### 2. Babel

Install dependencies, transpile the source file, and run the generated file:

```powershell
cd node\babel
npm install
npm run build
node dist\app.js
```

### 3. Mocha test

Install dependencies and run the test suite:

```powershell
cd node\mocha-test
npm install
npm test
```

### 4. Chat application

The chat application needs MongoDB, the Node backend, and the React frontend.
Start MongoDB first.

In terminal 1, start the backend:

```powershell
cd node\chat\backend
npm install
node server.js
```

The backend runs at `http://localhost:5000`.

In terminal 2, start the frontend:

```powershell
cd node\chat\frontend
npm install
npm run dev
```

Open the Vite URL printed in terminal 2.

## React practicals

The React practicals use Vite. After `npm run dev`, open the local URL printed
in the terminal.

### 1. Form validation

```powershell
cd react\form-validation
npm install
npm run dev
```

### 2. Redux counter

```powershell
cd react\redux-counter
npm install
npm run dev
```

### 3. Router demo

```powershell
cd react\router-demo
npm install
npm run dev
```

### 4. GraphQL demo

The GraphQL demo needs its server and client running in separate terminals.

In terminal 1, start the GraphQL server:

```powershell
cd react\graphql-demo\server
npm install
node server.js
```

The GraphQL endpoint runs at `http://localhost:4000/graphql`.

In terminal 2, start the React client:

```powershell
cd react\graphql-demo\client
npm install
npm run dev
```

Open the Vite URL printed in terminal 2.

## Stop a running application

Press `Ctrl+C` in the terminal running the application.
