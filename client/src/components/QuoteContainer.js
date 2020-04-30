// * dependencies:
import React from 'react';

const QuoteContainer = (props) => {

    return (
        <div className='quote-container'>
            <React.Fragment>
                <h1 className='quote-container__quote'> This will be the quote </h1>
                <p className='quote-container__instruction'>Got called on again?</p>
                <p className='quote-container__instruction'>Pretend your mic isn’t work and refresh this page.</p>
            </React.Fragment>
        </div>
    )
}

export default QuoteContainer;