import * as Types from './../constants/actionTypes';

var initialState = [];

const categories = (state = initialState, action) => {
    switch(action.type){
        case Types.FETCH_CATEGORIES:
            state = action.categories;
            return [...state]
        default: return [...state];
    }
}

export default categories;

