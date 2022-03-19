import { authActions } from "./authActionsConstant";

const authReducer = (state, action) => {
	switch (action.type) {
		case authActions.FIRST_NAME:
			return { ...state, user: { ...state.user, firstName: action.payload } };
		case authActions.LAST_NAME:
			return { ...state, user: { ...state.user, lastName: action.payload } };
		case authActions.EMAIL:
			return { ...state, user: { ...state.user, email: action.payload } };
		case authActions.PASSWORD:
			return { ...state, user: { ...state.user, password: action.payload } };
		case authActions.CONFIRM_PASSWORD:
			return {
				...state,
				user: { ...state.user, confirmPassword: action.payload },
			};
		case authActions.TOKEN:
			return { ...state, token: action.payload };
		case authActions.ERROR:
			return { ...state, error: action.payload };
		default:
			return state;
	}
};

export { authReducer };
