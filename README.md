<h1 align="center">
  Zelda Memory Game 
  <h4 align="center">A Zelda-inspired memory card game built with React</h4>
</h1>

<div align="center">

![HTML](https://img.shields.io/badge/HTML-%23E34F26.svg?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-%231572B6.svg?style=flat&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/React-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)

</div>

<img src="./public/screenshot.png" alt="screenshot of project page" align="center" style="width: 100%;">

## 🚀 Live Site

The live site can be viewed [here](https://memory-card-zelda.jaycenca-github.workers.dev/).

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