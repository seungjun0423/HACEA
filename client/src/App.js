// 모듈 임포트
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// 컴포넌트 임포트
import Nav from './Component/Nav'
import Footer from './Component/Footer';
import Main from './Component/Pages/Main'

// 글로벌 스타일 임포트 
import GlobalStyle from './GlobalStyle';



function App() {
  return (
    <BrowserRouter>
    <GlobalStyle/>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
