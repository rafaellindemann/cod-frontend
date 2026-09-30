import { useState } from 'react'
import './App.css'

function App() {
  const [saida, setSaida] = useState(0)

  function calcularMedia(){
    let nota1 = Number(prompt("Nota 1:"))
    let nota2 = Number(prompt("Nota 2:"))
    let media = (nota1 + nota2) / 2
    setSaida(media)
  }

  function rolarD6(){
    let n = Math.ceil( Math.random()*6 )
    setSaida(n)
  }
  function rolarD8(){
    let n = Math.ceil( Math.random()*8 )
    setSaida(n)
  }
  function rolarD12(){
    let n = Math.ceil( Math.random()*12 )
    setSaida(n)
  }
  function rolarD20(){
    let n = Math.ceil( Math.random()*20 )
    setSaida(n)
  }
  function rolarD100(){
    let n = Math.ceil( Math.random()*100 )
    setSaida(n)
  }
  function validarSenha(){
    let senha = prompt("Digite a senha:")
    if(senha == '1234'){
      setSaida('Acesso permitido')
    }else{
      setSaida('Acesso negado')
    }

  }
  return (
    <div className="app">
      <h1>Estados!</h1>
      <button onClick={validarSenha}>Validar senha</button>
      <button onClick={calcularMedia}>Média</button>
      <button onClick={rolarD6}>D6</button>
      <button onClick={rolarD6}>D8</button>
      <button onClick={rolarD6}>D12</button>
      <button onClick={rolarD6}>D20</button>
      <button onClick={rolarD6}>D100</button>

      <p>
        Resultado: {saida}
      </p>
    </div>

  )
}

export default App
