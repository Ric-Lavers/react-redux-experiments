import update from 'immutability-helper';
import * as types from './constants';

export const initialState = {
	data: {
		name: "Rachel",
		hairColor: "red",
	}
};

const personReducer = ( state = initialState, action ) => {
	switch (action.type) {
		case types.DEFAULT:
			return state;
		case types.ADD_PERSON:
			return update(state, {
				data: {
					$push: [action.payload]
				}
			});
		default:
			return state;
	}
}

export default personReducer;