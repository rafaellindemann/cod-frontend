import './App.css'
import Ganso from './components/Ganso'
import Jogo from './components/Jogo'
import Pousada from './components/Pousada'
import Recrutamento from './components/Recrutamento'

function App() {
  
  return (
    <div className="app">
      <h1>03 estados e componentes</h1>

      <h2>#0030</h2>
      <Ganso />
      <Recrutamento />

      <hr />

      <h2>#0027.sq05</h2>
      <Pousada />
      <Jogo />

    </div>
  )
}

export default App
