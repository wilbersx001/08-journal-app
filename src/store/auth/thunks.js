import { registerUserWithEmailPassword, singInWithGoogle, loginWithEmailPassword, logoutFirebase} from "../../firebase/providers";
import { checkingCrendentials, login, logout } from "./";

export const checkingAuthentication = () => {
    return async( dispatch ) => {

        dispatch( checkingCrendentials() );
        
    }
}


export const startGoogleSignIn  =(email, password) => {
    return async (dispatch) => {
        dispatch(checkingCrendentials());

        const result = await singInWithGoogle();
        if(!result.ok) return dispatch(logout(result.errorMessage));

        dispatch(login(result));

    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async( dispatch ) => {

        dispatch( checkingCrendentials() );

        const result = await registerUserWithEmailPassword({ email, password, displayName });
        if ( !result.ok ) return dispatch( logout( result.errorMessage ) );

        console.log(result)

    }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async( dispatch ) => {

        dispatch( checkingCrendentials() );

        const result = await loginWithEmailPassword({ email, password });
        console.log(result);

        if ( !result.ok ) return dispatch( logout( result ) );
        dispatch( login( result ));

    }
}

export const startLogout = () => {
    return async( dispatch ) => {
        
        await logoutFirebase();

        dispatch( logout() );

    }
}