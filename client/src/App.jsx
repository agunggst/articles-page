import { Routes } from './routes'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container">
          <Routes/>
        </div>
      </div>
    </Provider>
  )
}

export default App
