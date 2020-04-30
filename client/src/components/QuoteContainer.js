// * dependencies:
import React from 'react';

const QuoteContainer = (props) => {

    return (
        <div className='quote-container'>
                <div className='quote-container__quote-div'>
                    <h1 className='quote-div__quote'> This will be the quote </h1>
                </div>
                <p className='quote-container__instruction-lede'>Got called on again?</p>
                <p className='quote-container__instruction'>Pretend your mic isn’t work and refresh this page.</p>
        </div>
    )
}

export default QuoteContainer;