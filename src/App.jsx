import "./App.css"
import {useState} from "react"
import Home from './pages/Home';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { YifyAppContext } from './context';
import BrowseMovies from './pages/BrowseMovies';
import MovieDetails from './pages/MovieDetails';
import TrendingMovies from './pages/TrendingMovies';
import FormsModel from './components/forms/forms-modal';
import { BrowserRouter,Routes ,Route} from 'react-router-dom';


function App() {
  const [formsModalVisible,setFormsModalVisible] =useState(false);
  const [activeForm,setActiveForm] = useState("login")

  return (
   <BrowserRouter >
      <YifyAppContext.Provider value={{formsModalVisible,setFormsModalVisible,activeForm,setActiveForm}} >
          <div className='app'>
              <NavBar/>
              <FormsModel visible={formsModalVisible} activeForm={activeForm}/>
              <Routes >
                    <Route path='/'  element={<Home/>}  />
                    <Route path='/movies/:movie_id' element={<MovieDetails/>} />
                    <Route path='/trending'  element={<TrendingMovies/>}/>
                    <Route path='/browse' element={<BrowseMovies/>}/>
                    <Route path='*' element={<h1>Looks You Are Lost</h1>}/>
              </Routes>

              <Footer/>
        </div>
    </YifyAppContext.Provider>
   </BrowserRouter>
  )
}

export default App
