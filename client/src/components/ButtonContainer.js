// * dependencies:
import React from 'react'



// * image:
import buttonImg from '../img/no-bullshit.png'

const ButtonContainer = (props) => {

    return (
        <div className='button-container'>
            <img 
                
                className='button-container__img' 
                src={buttonImg} 
                alt='generate-button' 
            />
            <h2 className='button-container__text'>SAVE THE COMPANY</h2>
        </div>
    )
}


export default ButtonContainer;