import React from 'react';
import GridArea from './components/gridArea';
// import Popup from './components/popup';

import gods from './json/gods.json';
import creatures from './json/creatures.json';
import lore from './json/lore.json';

const SubTitle = ({ name }) => {
      return (
        <div className="text-2xl text-yellow-600 ml-3">
          <h1><a>{name}</a></h1>
          {/* <img src={arrowRight} alt="arrowRight" /> */}
        </div>
      );
  }
  
  const Header = () => {
      return (
        <header className='flex w-full'>  
          <a href="Ragnarok.html">
            <img src={'/images/pattern.png'} alt="Logo" />
          </a>
          {/* <form id="searchbar_form" className=''>
            <input type="text" placeholder="Search..." name="search"></input>
            <button type="submit">Submit</button> 
          </form> */}
        </header>
      );
  }
  
  const Footer = () => {
      return (
        <footer className='border-solid border-t-2 border-[#946c28] bg-[#412d0b] mt-6'>
          <ul className='flex flex-col p-2 text-amber-200'>
            <li>Contact Us</li>
            <li>Site Info</li>
            <li>References</li>
          </ul>
        </footer>
      );
  }

function App() {
  return (
            <React.StrictMode>
            <Header />
            <SubTitle name="Gods" />
            <GridArea data={gods} type='gods'/>
            <SubTitle name="Creatures" />
            <GridArea data={creatures} type='creatures' />
            <SubTitle name="Lore" />
            <GridArea data={lore} type='lore' />
            <Footer />

            {/* {this.state.showPopup ?
            <Popup name={this.state.name} description={this.state.description} 
                closePopup={this.handleGodChange} /> 
            : null }   */}

            </React.StrictMode>

  );
}
export default App;