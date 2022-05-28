import { userActions } from "./userActions";

const userReducer = (state, action) => {
	switch (action.type) {
		case userActions.GET_USER:
		case userActions.EDIT_USER:
			return { ...state, currentuser: action.payload };
		case userActions.GET_ADDRESS:
		case userActions.EDIT_ADDRESS:
		case userActions.DELETE_ADDRESS:
		case userActions.ADD_ADDRESS:
			return { ...state, address: action.payload };
		default:
			state;
	}
};

export { userReducer };
