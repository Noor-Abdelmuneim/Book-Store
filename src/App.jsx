import './App.css';
import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Card img={'https://i.ebayimg.com/images/g/p7QAAOSwafJknbB0/s-l400.jpg'} title={'Alice in wonderland'} name={'By Charles Lutwidge Dodgson'}/>
      <Card img={'https://m.media-amazon.com/images/I/51k+0tuX4BL._AC_UF1000,1000_QL80_.jpg'} title={'Coding with JavaScript For Dummies'} name={'By Chris Minnick, Eva Holland'}/>
      <Card img={'https://rukminim2.flixcart.com/image/850/1000/xif0q/book/f/s/1/pride-prejudice-original-imagy32ephewfga2.jpeg?q=20&crop=false'} title={'Pride and prejudice'} name={'By Austen Jane'}/>
    </div>
    
  );
}

export default App;
