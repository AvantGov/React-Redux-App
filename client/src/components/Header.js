// * dependencies:
import React from 'react'

//* image:
// import headerImg from '../img/corporate-1038x350.jpg'

const Header = () => {

    return (
        <div className='header-container'>
            <React.Fragment>
                <div className='header-container__img-container'>
                    <h1 className='img-container__title'>CORPORATE NONSENSE GENERATOR</h1>
                </div>
                <div className="header-container__text-container">
                    <p className='text-container__body'>The whole world is made of energy, not 'synergy' despite what your boss may think. </p>
                    <p className='text-container__body'>Fight the corporate strangle hold on communication in your next zoom meeting, and still *wow* the boss with the Corporate Nonsense Generator! </p>
                    <p className='text-container__body'>Slap that ‘ol mute button after everyone kindly says ‘hello’ and keep on mindlessly swiping through Tinder Passport, hoping to match with some C-list celebrities in LA without fear of being called on! </p>
                    <p className='why text-container__body'>Why?</p>
                    <p className='because text-container__body'>Because you’re using Corporate Nonsense Generator! </p>
                    <p className='text-container__body'>Just smash the big “NO BS” button when your name is called, and politely read out your company’s next *new* hot buzz-y slogan. </p>
                    <p className='text-container__body'>Everyone will be shocked and awed that you just saved the marketing department thousands of dollars in outsourcing costs, all with the personal satisfaction of putting in little-to-no-effort.</p>
                </div>
            </React.Fragment>
        </div>
    )
}

export default Header;