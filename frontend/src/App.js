import React, { Component } from 'react';

import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';

class App extends Component{
  render(){
    return(
      <div>
        <Header/>
        <MainSection/>
        <Footer/>
      </div>
    );
  }
}

export default App;