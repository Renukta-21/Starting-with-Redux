import Anecdotes from "./Anecdotes"
import Filter from "./Filter"
import NewAnecdote from "./NewAnecdote"

function App() {
  return (
    <div>
      <Filter/>
      <Anecdotes/>
      <NewAnecdote/>
    </div>
  )
}
export default App