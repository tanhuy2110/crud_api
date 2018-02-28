import * as Types from './../constants/actionTypes';

export const actFetchCategories = (categories) => {
    return {
        type: Types.FETCH_CATEGORIES,
        categories,
    }
}