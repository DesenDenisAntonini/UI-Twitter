import { PaperPlaneRight } from "phosphor-react";
import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css';


export function Status() {
  const [newAnswers, setNewAnswers] = useState('')
  const [answers, setAnswers] = useState([
    'Concordo...',
    'Olha, faz sentido!',
    'Parabéns pelo progresso.'
  ])

  function createNewAnswer(event:FormEvent){
    event.preventDefault()

    setAnswers([newAnswers,...answers ])
    setNewAnswers('')
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
      setAnswers([newAnswers,...answers ])
      setNewAnswers('')
    }
  }

  return(
    <main className="status">
      <Header title="Tweet" />

      <Tweet
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Possimus quisquam maiores tenetur distinctio voluptatem error temporibus iure natus."
      />

      <Separator />

      <form onSubmit={createNewAnswer}className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/DesenDenisAntonini.png" alt="Denis Antonini"/>

          <textarea
          id="tweet"
          placeholder="Tweet your answer"
          value={newAnswers}
          onKeyDown={handleHotkeySubmit}
          onChange={(event) =>{
            setNewAnswers(event.target.value)
          }}
          />

        </label>

        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>


      {answers.map(answer => {
        return <Tweet key={answer} content={answer} />
    })}
  </main>
  )
}