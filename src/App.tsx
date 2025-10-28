import { useState } from 'react'
import './App.css'
import Instructions from './components/Instruction'
import Header from './components/Header'
import Cards from './components/Cards'

function App() {
  const [score, setScore] = useState<number>(0)
  const [bestScore, setBestScore] = useState<number>(0)
  return (
    <>
      <Header />
      <Instructions scores={{
        score: score,
        bestScore: bestScore
      }}/>
      <Cards scores={{
        score:score, 
        bestScore:bestScore,
        setScore:setScore,
        setBestScore:setBestScore
      }}
      />
    </>
  )
}

export default App

