import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from '../Header/Header';
import Burger from '../Burger/Burger';
import Main from '../Main/Main';
import Video from '../Video/Video';
import Popup from '../Popup/Popup';

import '../App/App.css';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [popupCard, setPopupCard] = useState([]);

  const handleOpenPopup = (card) => {
    setPopupCard(card);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setTimeout(() => {
      setPopupCard([]);
    }, 600);
  };

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <>
            <Header
              onOpen={ () => setIsBurgerOpen(true) }
            />
            <Video />
            <Main
              onOpen={handleOpenPopup}
            />
            <Burger
              onClose={ () => setIsBurgerOpen(false) }
              isOpen={isBurgerOpen}
            />
            <Popup
              onClose={handleClosePopup}
              isOpen={isPopupOpen}
              popupCard={popupCard}
            />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
