import React from 'react';
import GridArea from './components/gridArea';
import Header from './components/header';
import Footer from './components/footer';
// import Popup from './components/popup';

import gods from './json/gods.json';
import creatures from './json/creatures.json';
import lore from './json/lore.json';

function App() {
  return (
    <React.StrictMode>
      <Header />
      <div className='w-11/12 mx-auto flex flex-col gap-2'>
        <GridArea data={gods.content} type='gods' />
        <GridArea data={creatures.content} type='creatures' />
        <GridArea data={lore.content} type='lore' />
      </div>
      <Footer />

      {/* {this.state.showPopup ?
            <Popup name={this.state.name} description={this.state.description} 
                closePopup={this.handleGodChange} /> 
            : null }   */}

    </React.StrictMode>

  );
}
export default App;