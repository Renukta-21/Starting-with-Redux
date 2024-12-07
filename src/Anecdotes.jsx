import { useDispatch, useSelector } from "react-redux"
import { voteAnecdote } from "./reducers/anecdoteReducer"

function Anecdotes() {
    const anecdotes = useSelector(state=> state) 
    const dispatch = useDispatch()
    
    return (
    <div>
      <h3>Ancecdotes</h3>
      {anecdotes.map(a => (
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