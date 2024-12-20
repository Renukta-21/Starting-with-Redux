const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
]
const createId = () => Math.floor(Math.random() * 1000)
const initialState = anecdotesAtStart.map((a) => {
  return {
    description: a,
    votes: 0,
    id: createId(),
  }
})

const anecdotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'VOTE_ANECDOTE': {
      const id = action.payload.id
      const anecdoteToUpdate = state.find((e) => e.id === id)
      const updatedAnecdote = {
        ...anecdoteToUpdate,
        votes: anecdoteToUpdate.votes + 1,
      }
      return state.map((a) => (a.id === id ? updatedAnecdote : a))
    }
    case 'ADD_ANECDOTE':
      return state.concat(action.payload)
    default:
      return state
  }
}

export const voteAnecdote = (id) => {
  return {
    type: 'VOTE_ANECDOTE',
    payload: {
      id,
    },
  }
}
export const addAnecdote = (content) => {
  return {
    type: 'ADD_ANECDOTE',
    payload: {
      description: content,
      votes: 0,
      id: createId(),
    },
  }
}
export default anecdotesReducer
