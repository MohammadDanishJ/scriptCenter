import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, NotFound} from './Pages';
import './Helpers/Spacing.scss'

function App() {
  return (
    <div className="App">
      <Router>
            <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route path='*' element={<NotFound />} />
            </Routes>
      </Router>
    </div>
  );
}

export default App;