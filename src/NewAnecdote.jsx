import { useDispatch } from 'react-redux'
import { addAnecdote } from './reducers/anecdoteReducer'

function NewAnecdote() {
    const dispatch = useDispatch()

    const handleSubmit =(e)=>{
        e.preventDefault()
        const content = e.target.anecdoteField.value
        dispatch(addAnecdote(content))
    }
    
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name='anecdoteField'/>
                <button>Add</button>
            </form>
        </div>
    )
}

export default NewAnecdote