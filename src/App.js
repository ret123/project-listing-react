import { Routes, Route } from 'react-router-dom';

import './App.css';
import ListingPage from './pages/ListingPage';

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
