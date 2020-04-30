// * dependencies:
import React from 'react';
import { connect } from 'react-redux';


// * components:
import ButtonContainer from './components/ButtonContainer';
import Header from './components/Header';
import QuoteContainer from './components/QuoteContainer';
import Footer from './components/Footer';



function App(props) {

  const hasData = props.hasData 
  console.log('app props:', props)

  return (
    <div className="App">
      <Header />
      {hasData ? <QuoteContainer /> : <ButtonContainer />}
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    hasData: state.hasData
  }
}

export default connect(mapStateToProps, {})(App);
