import { createContext, useReducer } from "react";

export const LocalContext = createContext();

const initialState = {
    loginWindow: null,
    signupWindow: null,
    addFolderModal: false,
    loader: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case "setLoginVisibility":
            return {
                ...state,
                loginWindow: action.payload
            }
            break;
        case "setSignupVisibility":
            return {
                ...state,
                signupWindow: action.payload
            }
            break;
        case "setFolderModalVisibility":
            return {
                ...state,
                addFolderModal: action.payload
            }
            break;
        case "setLoader":
            return {
                ...state,
                loader: action.payload
            }
        default:
            return state
    }

}


export default function LocalContextProvider(props) {

    const [state, dispatch] = useReducer(reducer, initialState);
    const value = {
        loginWindow: state.loginWindow,
        signupWindow: state.signupWindow,
        addFolderModal: state.addFolderModal,
        loader: state.loader,
        dispatch
    }

    return (
        <LocalContext.Provider value={value}>
            {props.children}
        </LocalContext.Provider>
    )
}