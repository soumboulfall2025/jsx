
import React from 'react';
import Nom from './components/Nom.jsx';
import Price from './components/price.jsx';
import Description from './components/Description.jsx';
import Image from './components/Image.jsx';
import CarteProduit from './CarteProduit.jsx';
import Product from './components/product.jsx';

function App() {
  const prenom = "soumboul"
  
  return (
    <div>
      <Nom />
      <Price />
      <Description />
      <Image />
      
      <div className="container">
      <div className="d-flex flex-wrap justify-content-center">
      </div>
      <div className="text-center mt-4">
        <h2>
          {prenom ? `Hello, ${prenom} !` : 'Hello, there !'}
        </h2>
        {prenom && (
          <img
            src="https://w0.peakpx.com/wallpaper/303/488/HD-wallpaper-cristiano-ronaldo-cr7-cristiano-laliga-real-madrid-ronaldo-spain.jpg"
            alt="Profil"
            className="mt-2 rounded-circle"
          />
        )}
      </div>
    </div>


    </div>
  );
}

export default App;
