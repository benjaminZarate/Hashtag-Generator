import './App.css';
import GenerateHashtags from './Components/GenerateHashtags';
import Header from './Components/Header';
import InputKeyword from './Components/Input';
import Intro from './Components/Intro';
import Results from './Components/Results';


function App() {
  return (
    <div className='App'>
      <Header/>
      <Intro/>
      <InputKeyword/>
      <Results/>
      <GenerateHashtags/>
    </div>
  );
}

export default App;
