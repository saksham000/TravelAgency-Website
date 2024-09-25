import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home'
import Destinations from './Component/Destinations/Destinations'
import Portfolio from './Component/Portfolio/Portfolio'
import Reviews from './Component/Reviews/Reviews'
import Questions from './Component/Questions/Questions'
import Subscribe from './Component/Subscribe/Subscribe'
import Middle from './Component/Middle/Middle'
import Footer from './Component/Footer/Footer'
function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Middle/>
      <Destinations/>
      <Portfolio/>
      <Reviews/>
      <Questions/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default App
