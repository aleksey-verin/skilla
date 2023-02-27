import Sidebar from './components/Sidebar'
import Header from './components/Header'
import MainContent from './components/MainContent'
import './App.css'
import { useRef, useState } from 'react'

function App() {
  const [dataForHeader, setDataForHeader] = useState('')

  const getDataForHeader = (name) => {
    setDataForHeader(name)
  }

  return (
    <div className='App'>
      <Sidebar />
      <div className='container'>
        <Header dataForHeader={dataForHeader} />
        <MainContent getDataForHeader={getDataForHeader} />
      </div>
    </div>
  )
}

export default App
