import { createContext, useState} from "react";
//import { useSetState } from 'react-use';

const AuthContext = createContext(null);

const initialState = {
    isLoggedIn: false,
    isLoginPending: false,
    loginError: null
}

export const ContextProvider = ({children}) => {

    const [state, setState] = useState(initialState);
  
    const setLoginPending = (isLoginPending) => setState({isLoginPending});
    const setLoginSuccess = (isLoggedIn) => setState({isLoggedIn});
    const setLoginError = (loginError) => setState({loginError});
  
    const login = (email, password) => {
      setLoginPending(true);
      setLoginSuccess(false);
      setLoginError(null);
  
      fetchLogin( email, password, error => {
        setLoginPending(false);
        
        /*
        if (!error) {
          setLoginSuccess(true);
        } else {
          setLoginError(error);
        }*/

        !error ? setLoginSuccess(true) : setLoginError(error);
      })
    }
  
    const logout = () => {
      setLoginPending(false);
      setLoginSuccess(false);
      setLoginError(null);
    }

    const data = {
      state,
      login,
      logout
    }
  
    return (
      <AuthContext.Provider
        value={data}
      >
        {children}
      </AuthContext.Provider>
    );
  };


// Usuario test
const fetchLogin = (email, password, callback) => 
  setTimeout(() => {
    if (email === 'admin' && password === 'admin') {
      return callback(null);
    } else {
      return callback(new Error('Invalid email and password'));
    }
  }, 1000);



export { AuthContext }