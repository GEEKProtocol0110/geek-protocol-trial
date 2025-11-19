import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Token from './pages/Token.jsx';
import Quiz from './pages/Quiz.jsx';
import Wallet from './pages/Wallet.jsx';
import About from './pages/About.jsx';

function App() {
  return (
    <div className="app">
      <header className="nav">
        <div className="nav-left">
          <div className="logo-mark">
            <span>G</span>
          </div>

          <div className="logo-text">
            <span className="logo-main">Geek Protocol</span>
            <span className="logo-tagline">All Hope. No Hype.</span>
          </div>

          <span className="kaspa-pill">Powered by Kaspa</span>
        </div>

        <div className="nav-right">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/token">Token</NavLink>
          <NavLink to="/quiz">Quiz</NavLink>
          <NavLink to="/wallet">Wallet</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </header>

      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/token" element={<Token />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
