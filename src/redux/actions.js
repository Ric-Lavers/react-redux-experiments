import * as types from './constants';

export const defaultAction = () => ({
	type: types.DEFAULT,
	data: null,
});

export const addPerson = payload => ({
	type: types.ADD_PERSON,
	payload: payload,
});