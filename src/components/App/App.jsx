// @ts-nocheck
import Header from '../Header/Header';
import CurrentWeather from '../Main/Today/CurrentWeather';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <CurrentWeather />
      </main>
    </div>
  );
}

export default App;
