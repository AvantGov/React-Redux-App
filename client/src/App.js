// * dependencies:
import React from 'react';

// * components:
import ButtonContainer from './components/ButtonContainer'
import Header from './components/Header'
import QuoteContainer from './components/QuoteContainer';



function App() {

  const showQuote = false 

  return (
    <div className="App">
      <Header />
      {showQuote ? <QuoteContainer /> : <ButtonContainer />}
    </div>
  );
}

export default App;
