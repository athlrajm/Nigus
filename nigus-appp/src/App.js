
import './App.css';
import Carox from './components/Carox';
import Footer from './components/Footer';

import Header from './components/Header';
import Insight from './components/Insight';
import Product from './components/Product';
import Sec from './components/Sec';

function App() {
  return (
    <div className="App">
     <Header/> 
     <Sec/><br></br>
     <Insight/><br></br>
     <Product/><br></br>
     <Carox/><br></br>
     <Footer/>

     
    </div>
  );
}

export default App;
