// * dependencies:
import React from 'react'
import { getData } from '../actions/actionindex'
import { connect } from 'react-redux'



// * image:
import buttonImg from '../img/no-bullshit.png'

const ButtonContainer = ({getData}) => {

    return (
        <div className='button-container'>
            <img 
                onClick={getData}
                className='button-container__img' 
                src={buttonImg} 
                alt='generate-button' 
            />
            <h2 className='button-container__text'>SAVE THE COMPANY</h2>
        </div>
    )
}


export default connect(null, { getData })(ButtonContainer);