import React, {useContext,  useState} from 'react';

import { AuthContext } from '../../context/LoginContext';

const initialState = {
  email: '',
  password: ''
}

const LoginForm = () => {
  const { state: ContextState, login } = useContext(AuthContext);
  const {
    isLoginPending,
    isLoggedIn,
    loginError
  } = ContextState;
  const [state, setState] = useState(initialState);

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = state;
    login(email, password);
    setState({
      email: '',
      password: ''
    });
  }
    
  return (
    <form onSubmit={onSubmit}>

      <div>

        <div>
          <label htmlFor="email">Username</label>
        </div>
        
        <div>
          <input 
            type="text" 
            name="email" 
            onChange={e => setState({email: e.target.value})} 
            value={state.email} 
            placeholder="admin" 
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
        </div>
        <div>
            <input 
              type="password" 
              name="password" 
              onChange={e => setState({password: e.target.value})} 
              value={state.password} 
              placeholder="admin" 
            />
        </div>

        <div>
        </div>
        <div>
          <input type="submit" value="Login" />
        </div>
        
      </div>

      { isLoginPending && <div>Please wait...</div> }
      { isLoggedIn && <div>Success.</div> }
      { loginError && <div>{loginError.message}</div> }
    </form>
  )
}


export default LoginForm;