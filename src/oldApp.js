import logo from './images/aimplslogo_l.png';
import MainModel from './models/test.glb';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          UNDER CONSTRUCTION <br/> COME BACK LATER
        </p>


       
             <model-viewer id="reveal" loading="eager" ar camera-controls touch-action="pan-y" src={MainModel} shadow-intensity="1" alt="LOVE Sculpture in Minneapolis Sculture Garden">
             <button id="ar-failure">
                AR is not tracking!
             </button>
             
             <button slot="ar-button" id="ar-button">
               View in your space
             </button>
             <div className="model-description">LOVE by Robert Indiana, Minneapolis Sculpture Garden</div>
              </model-viewer>   
   

      </header>

     

      
    </div>
  );
}

export default App;
