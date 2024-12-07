import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import anecdotesReducer from './reducers/anecdoteReducer'
import App from './App'

const store = createStore(anecdotesReducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App/>
  </Provider>
)

