import './App.css'
import Header from './components/ui/Header'
import Footer from './components/ui/Footer'

function App() {

  return (
    <>
      <Header />
      <div className='wrapper'>
        <main className='main'></main>
        <div className='sidemenu'></div>
      </div>
      <Footer />
    </>
  )
}

export default App
