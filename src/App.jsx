import Sidebar from './components/Sidebar'
import Header from './components/Header'
import MainContent from './components/MainContent'
import './App.css'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="container">
        <Header />
        <MainContent />
      </div>
    </div>
  )
}

export default App
