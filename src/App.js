import { useContext } from 'react';
import './App.css';
import { themeContext } from './context/theme/themeContext';

function App() {
    const  [{theme,toggleTheme}]=useContext(themeContext);
     console.log(theme);
  
  return (
    <div className="App" style={{'backgroundColor':theme.backgroundColor,'color':theme.color}}>
      <header className="App-header">
        <p>Salam Alikoum</p>

        <button onClick={toggleTheme}>toggle theme</button>
      </header>
    </div>
  );
}

export default App;
