import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NotFound from './pages/not-found/NotFound';
import Footer from './shared/components/footer/Footer';
import Header from './shared/components/header/Header';
import "./App.css";
import Error from './pages/error/Error';
import Home from './pages/home/Home';

const TicTacToe = React.lazy(() => import('./pages/tic-tac-toe/TicTacToe'));
const FruitAndVegStore = React.lazy(() => import('./pages/fruit-and-veg-store/FruitAndVegStore'));

const App = () => {

  return (
    <>
      <div id="page-container">
          <Header />

          <Routes>
            <Route path="/home" element={
              <React.Suspense fallback={<p>Loading...</p>}>
                <Home />
              </React.Suspense>
            }/>
            <Route path="/tic-tac-toe" element={
              <React.Suspense fallback={<p>Loading...</p>}>
                <TicTacToe />
              </React.Suspense>
            }/>
            <Route path="/fruit-and-veg-store" element={
              <React.Suspense fallback={<p>Loading...</p>}>
                <FruitAndVegStore />
              </React.Suspense>
            }/>
            <Route path="error" element={
              <React.Suspense fallback={<p>Loading...</p>}>
                <Error />
              </React.Suspense>
            }/>
            <Route path='/' element={<Navigate to="/home" />}/>
            <Route path="*" element={<NotFound />} />
          </Routes>

          <div id="footer">
            <Footer />
          </div>
      </div>
    </>
  );
};

export default App;