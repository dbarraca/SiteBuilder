import { FETCH_SECTIONS, NEW_SECTION } from '../actions/types';

const initialState = {
    sections: [],
    item: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_SECTIONS:
            return {
                ...state,
                items: action.payload
            };
        case NEW_SECTION:
            return {
                ...state,
                item: action.payload
            };
        default :
            return state;
    } 
};