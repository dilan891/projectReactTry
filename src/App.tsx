import reactLogo from './assets/react.svg'
import viteLogo from '/electron-vite.animate.svg'
import './App.css'

function App() {

  const callJava = () => {
    console.log("Llamando a java")
    fetch('http://localhost:8180/api/test', {
      method: 'GET',
    })
      .then(response => response.text())
      .then(data => {
        console.log(data)
        alert(data)
      })
      .catch(error => {
        alert("Error al hacer la petición")
        console.error('Error:', error)
      })
  }

  return (
    <>
      <div>
        <a href="https://electron-vite.github.io" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={callJava}>LLamar a java Test</button>
      </div>
    </>
  )
}

export default App
