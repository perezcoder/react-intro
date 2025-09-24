import { FormEvent, useEffect } from 'react';
import { useLogin } from './hooks/useLogin';
import { selectAuthError, selectAuthIsLogged, useAuth } from '@/services/auth';
import { ServerError } from '@/shared/index';
import { useNavigate } from 'react-router-dom';

export function LoginPage() {

  const {
    formData, isValid, changeHandler
  } = useLogin();

  const navigate = useNavigate();
  const error = useAuth(selectAuthError)
  const login = useAuth(state => state.login)
  const isLogged = useAuth(selectAuthIsLogged);

  console.log('is logged', isLogged)

  useEffect(() => {
    if (isLogged) {
      navigate('/cms')
    }
  }, [isLogged])

  async function doLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(formData)
    try {
      const resp = await login(formData.username, formData.password);  
      console.log('resp', resp);
    } catch (err) {
      console.error('login error', err);
    }
    // const resp = await login(formData.username, formData.password);  
    // console.log('resp', resp)
  }


  return (
    <div className="page-sm">
      <h1 className="title">LOGIN</h1>

      {error && <ServerError />}

      <form className="flex flex-col gap-3" onSubmit={doLogin}>
        <input
          type="text"
          placeholder="username"
          value={formData.username}
          onChange={changeHandler}
          name="username"
        />
        <input
          type="password"
          placeholder="password"
          value={formData.password}
          onChange={changeHandler}
          name="password"
        />
        <button disabled={!isValid} className="btn primary" type="submit">SIGN IN</button>
      </form>

      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  )
}
