import {Routes,Route} from 'react-router-dom';
import ListingPage from './components/ListingPage'
import './App.css';

function App() {
  return (
   <div>
       <Routes>
        <Route path={'/'} element={<ListingPage />} />
       </Routes>
   </div>
  )
}

export default App;
