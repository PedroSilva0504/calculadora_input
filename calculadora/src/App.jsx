import React, { useState } from 'react'


function App() {
  const [primeiroValor, setPrimeiroValor] = useState()
  const [segundoValor, setSegundoValor] = useState()
  const [resultado, setResultado] = useState()
  const capturandoPrimeiroValor = (e)=>{
        setPrimeiroValor(Number(e.target.value))
  }

  const capturandoSegundoValor = (e) => {
        setSegundoValor(Number(e.target.value))
  }
  
  const soma = () => {
    setResultado(primeiroValor + segundoValor)
  }

  const subtracao = () => {
    setResultado(primeiroValor - segundoValor)
  }

  const multiplicacao = () => {
    setResultado(primeiroValor * segundoValor)
  }

  const divisao = () => {
    setResultado(primeiroValor / segundoValor)
  }


  return (
    <main>
       <h1> Calculadora </h1>
       <input onChange={capturandoPrimeiroValor}  />
       <input onChange={capturandoSegundoValor}  />
       <button onClick={soma} >+</button>
       <button onClick={subtracao} >-</button>
       <button onClick={multiplicacao} >x</button>
       <button onClick={divisao} >/</button>
       <button onClick={capturandoPrimeiroValor} value={1}>1</button>
       <h2>{resultado}</h2>
    </main>
  )
}

export default App
