import { authActions } from "./authActionsConstant";

const authReducer = (state, action) => {
	switch (action.type) {
		case authActions.TOKEN:
			return {
				...state,
				token: action?.payload?.token,
				user: action?.payload?.user,
			};
		case authActions.ERROR:
			return { ...state, error: action.payload };
		default:
			return state;
	}
};

export { authReducer };
