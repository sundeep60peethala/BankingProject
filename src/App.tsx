
import './App.css';
import Header from './Components/Header';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from './Components/Home';
import AccountOpen from './Components/AccountOpen';
import AccountLogin from './Components/AccountLogin';
import NoMatch from './Components/NoMatch';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App container py-3">
      <Header/>
      <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          <Route path="accountOpen" element={<AccountOpen />} />
          <Route path="accountLogin" element={<AccountLogin />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
