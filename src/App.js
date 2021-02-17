import logo from './birb.svg';
import './App.css';
import Main from './Components/Main/Main';
import Search from './Components/Search/Search';

function App() {
  return (
    <div className="container">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <h1 className="headline">birb searcher</h1>
      </header>
    <Search></Search>
    <Main></Main>
    </div>
  );
}

export default App;
