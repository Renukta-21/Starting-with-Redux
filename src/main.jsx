import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import anecdotesReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import App from './App'

const reducer = combineReducers({
  anecdotes: anecdotesReducer,
  filter:filterReducer
})

const store = createStore(reducer)

console.log(store.getState())

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App/>
  </Provider>
)

