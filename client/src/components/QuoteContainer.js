// * dependencies:
import React from 'react';
import { connect } from 'react-redux';

const QuoteContainer = (props) => {

    return (
        <div className='quote-container'>
                <div className='quote-container__quote-div'>
                <h1 className='quote-div__quote'> {props.data} </h1>
                </div>
                <p className='quote-container__instruction-lede'>Got called on again?</p>
                <p className='quote-container__instruction'>Pretend your mic isn’t work and refresh this page.</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps, {})(QuoteContainer);