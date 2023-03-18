import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from './components/navbar';
import LoginForm from './components/login';

import './App.css';

function App() {
  return (
    <div className="page">
      <header className="App-header">
        <Navigation />
        <LoginForm />
        
       
      </header>
    </div>
  );
}

export default App;
