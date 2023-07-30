import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Video from '../Video/Video';

import '../App/App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <>
            <Header />
            <Video />
            <Main />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
