import { createStore } from "redux"

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
const createId = () => Math.floor(Math.random() * 1000)
const initialState = anecdotesAtStart.map(a => {
  return {
    description: a,
    votes: 0,
    id: createId()
  }
})

const anecdotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_VOTE':
      console.log(state)
      const id = action.payload.id
      const anecdoteToUpdate = state.find(e => e.id === id)
      const updatedAnecdote = {
        ...anecdoteToUpdate,
        votes: anecdoteToUpdate.votes + 1
      }
      return state.map(a=> a.id=== id ? updatedAnecdote : a)
    default:
      return state
  }
}
const store = createStore(anecdotesReducer)

function App() {
  const handleNewAnecdote = () => { }
  const handleVote = (id) => {
    store.dispatch({
      type: 'UPDATE_VOTE',
      payload: {
        id
      }
    })
  }
  return (
    <div>
      <h3>Ancecdotes</h3>
      {store.getState().map(a => (
        <div key={a.id}>
          <p>{a.description}</p>
          <small>Votes: {a.votes}</small><br />
          <button onClick={() => handleVote(a.id)}>Vote</button>
        </div>
      ))}
      <form action="" onSubmit={handleNewAnecdote}>
        <input type="text" />
        <button>Add</button>
      </form>
    </div>
  )
}
export default App