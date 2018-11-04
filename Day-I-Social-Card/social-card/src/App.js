import React from 'react';
import './App.css';
import ImageThumbnail from '../src/components/HeaderComponents/ImageThumbnail';
import HeaderTitle from '../src/components/HeaderComponents/HeaderTitle';
import HeaderContent from '../src/components/HeaderComponents/HeaderContent';
// import HeaderContainer from '../src/components/HeaderComponents/HeaderContainer';
import CardBanner from '../src/components/CardComponents/CardBanner'
import CardContent from '../src/components/CardComponents/CardContent'



const App = () => {
  return (
    <div>
      
      <section className="head">
        <ImageThumbnail />
        <section>
          <HeaderTitle />
          <HeaderContent />

        </section>

      </section>
     
      <section onClick={() => window.open("https://www.reactjs.org/", "new window")} className="card">
        <CardBanner />
        <CardContent />
      </section>
    </div>
  );

};

export default App;
