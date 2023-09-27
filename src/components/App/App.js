// Главный компонент приложения

import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Burger from '../Burger/Burger';
import Video from '../Video/Video';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import Popup from '../Popup/Popup';

import '../App/App.css';

function App() {
  // Стейты
  const [isPreloaderOpen, setIsPreloaderOpen] = useState(true)
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [popupCard, setPopupCard] = useState([]);

  // Открытие попапа
  const handleOpenPopup = (card) => {
    setPopupCard(card);
    setIsPopupOpen(true);
  };

  // Закрытие попапа
  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setTimeout(() => {
      setPopupCard([]);
    }, 600);
  };

  // Закрытие прелоудера
  const closePreloader = () => {
    setTimeout( () => {
      setIsPreloaderOpen(false)
    }, 4000)
  }

  // Эффект закрытия прелоудера
  useEffect(closePreloader, []);

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
            <Footer />
            <Preloader
              isOpen={isPreloaderOpen}
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
