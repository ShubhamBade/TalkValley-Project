import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import Header from './componants/Header';

function App() {
  return (
    <>
    <Header/>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Header/>} /> */}
        <Route path="/" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
