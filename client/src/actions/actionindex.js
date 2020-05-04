import axios from 'axios';

export const FETCHING_BS_START = 'FETCHING_BS_START';
export const FETCHING_BS_SUCCESS = 'FETCHING_BS_SUCCESS';
export const FETCHING_BS_FAILURE = 'FETCHING_BS_FAILURE';

export const getData = () => dispatch => {
    dispatch({type: FETCHING_BS_START});
    axios.get(`https://cors-anywhere.herokuapp.com/https://corporatebs-generator.sameerkumar.website/`)
    // axios.get(`https://hipsum.co/api/?type=hipster-centric&sentences=1`)
        .then((response) => {
            console.log('reponse:', response)
            dispatch({ type: FETCHING_BS_SUCCESS, payload: response })
        })
        .catch((error) => {
            console.log('error', error)
            dispatch({ type: FETCHING_BS_FAILURE, payload: error })
        })
}


