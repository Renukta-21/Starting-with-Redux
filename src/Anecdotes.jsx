import { useSelector, useStore } from "react-redux"

function Anecdotes() {
    const anecdotes = useSelector(state=> state) 
  return (
    <div>
      <h3>Ancecdotes</h3>
      {anecdotes.map(a => (
        <div key={a.id}>
          <p>{a.description}</p>
          <small>Votes: {a.votes}</small><br />
          <button onClick={() => handleVote(a.id)}>Vote</button>
        </div>
      ))}
    </div>
  )
}

export default Anecdotes