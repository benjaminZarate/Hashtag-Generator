import './App.css';
import Footer from './Components/Footer';
import GenerateHashtags from './Components/GenerateHashtags';
import Header from './Components/Header';
import InputKeyword from './Components/Input';
import Intro from './Components/Intro';
import Results from './Components/Results';
import TopPostContainer from './Components/TopPostContainer';
import TopPostTitle from './Components/TopPostTitle';


function App() {
  return (
    <div>
      <div className='App'>
        <Header/>
        <Intro/>
        <InputKeyword/>
        <Results/>
        <GenerateHashtags/>
        <TopPostTitle/>
        <TopPostContainer/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
