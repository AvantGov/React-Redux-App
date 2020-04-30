import { FETCHING_BS_START, FETCHING_BS_SUCCESS, FETCHING_BS_FAILURE } from '../actions/actionindex'

const initialState = {
    data: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_BS_START:
            console.log('getting some BS')
            return {
                ...state
            }
        case FETCHING_BS_SUCCESS:
            console.log('request successfully occurred')
            return {
                ...state
            }
        case FETCHING_BS_FAILURE:
            console.log('there was an error on the promise')
            return {
                ...state
            }
        default:
            return state
    }
}