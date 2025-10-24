Zelda  Memory Game
A Zelda-inspired memory card game built with React
HTML CSS JavaScript React

screenshot of project page

🚀 Live Site
The live site can be viewed here.

📝 Project Description
The project specification describes the general instructions in doing the project. This project primarily served as practice for understanding state and effects in React.

Reference from https://github.com/arvingarciabtw/the-odin-project/blob/main/full-stack-javascript/fsj-04-react/22-memory-card/

## Structure

There are 3 main components under root

- main.jsx (In this they are defined inside file)
- Components
  - Card.jsx
  - Cards.jsx
  - Header.jsx
  - Instruction.jsx
- Styles
  - Cards.css
  - Headers.css
  - Instructions.css

- Shared Components
  - Textbox

All of the data/state is passed into the root `App` component and passed via reference to the other components.

## Build and Install

To run locally clone the repo and run

```bash
npm i
npm run dev
```

To build locally 

```bash
npm run build
```