import { useDispatch, useSelector } from "react-redux"
import { voteAnecdote } from "./reducers/anecdoteReducer"

function Anecdotes() {
    const anecdotes = useSelector(state=> state) 
    const dispatch = useDispatch()
    const anecdotesByVotes = anecdotes.sort((a, b)=> b.votes-a.votes)

    return (
    <div>
      <h3>Ancecdotes</h3>
      {anecdotesByVotes.map(a => (
        <div key={a.id}>
          <p>{a.description}</p>
          <small>Votes: {a.votes}</small>
          <button onClick={()=> dispatch(voteAnecdote(a.id))}>Vote</button>
        </div>
      ))}
    </div>
  )
}

export default Anecdotes