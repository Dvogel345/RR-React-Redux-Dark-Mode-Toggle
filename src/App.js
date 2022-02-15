import './App.css';
import Nav from './components/Nav'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'
import { Provider, useSelector, useDispatch } from 'react-redux'
import { darkMode, lightMode } from './features/modeSlice'
import {store} from './store'

function App() {
  const dispatch = useDispatch()
  const mode = useSelector((state) => state.mode)
  const toggleMode = () => {
    mode.darkMode ? dispatch(lightMode()) : dispatch(darkMode())
  }
  
  return (
    <div style={{ backgroundColor: mode.color1, color: 'white' }} className="App">
    <Provider store={store}>
      <Nav />
      <button onClick={toggleMode}>{ mode.darkMode ? 'Light Mode' : 'Dark Mode' }</button>
      <ContentWrapper />
      <Footer />
    </Provider>  
  </div>
  );
}

export default App;
