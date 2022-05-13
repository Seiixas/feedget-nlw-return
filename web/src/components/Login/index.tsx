import { Lock, User } from "phosphor-react";
import { FormEvent, useState } from "react";

import { Dashboard } from '../Dashboard';

import nlwLogo from '../../assets/images/nlw.svg';
import { api } from "../../lib/api";

export function Login() {
  const tokenLocalStorage = localStorage.getItem('feedget@token');
  const [token, setToken] = useState(tokenLocalStorage ?? '');

  const [authenticationMail, setAuthenticationMail] = useState<string | null>(null);
  const [authenticationPassword, setAuthenticationPassword] = useState<string | null>(null);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function handleAuthentication(event: FormEvent) {
    event.preventDefault();

    try {
      const response = await api.post('/users/auth', {
        email: authenticationMail,
        password: authenticationPassword
      });

      console.log(response.data);
      
      const { data } = response;
      if ('token' in data) {
        setToken(data.token);
        setIsAuthenticated(true);
        localStorage.setItem('feedget@token', data.token);
      } 
    } catch (error: any) {
      alert('Usuário ou senha incorretos')
    }
    
  }

  return !token ? (
    <div
      className="w-[100vw] h-[100vh] flex justify-center items-center">
        <form onSubmit={handleAuthentication} className="flex flex-col bg-zinc-100 p-12 rounded-xl">
          <img src={nlwLogo} alt="Next Level Week logo" className="a" />
          <div className="bg-zinc-200 flex items-center justify-center rounded my-2">
            <User className="mx-2" size={20}/>
            <input 
              type="email"
              placeholder="E-mail"
              onChange={event => setAuthenticationMail(event.target.value)}
              className="bg-transparent border-none outline-none focus:outline-none focus:border-none" />
          </div>
          <div className="bg-zinc-200 flex items-center justify-center rounded my-2">
            <Lock className="mx-2" size={20} />
            <input 
              type="password"
              placeholder="Senha"
              onChange={event => setAuthenticationPassword(event.target.value)}
              className="bg-transparent border-none outline-none focus:outline-none focus:border-none" />
          </div>
          <button
            type="submit"
            className="bg-brand-500 w-[100%] h-10 rounded text-zinc-100 text-sm">Entrar</button>
        
          <span className="text-sm mt-2">Não é cadastrado? Crie sua conta <a href="#" className="text-brand-500">aqui</a>.</span>
        </form>
    </div>
  ) : (<Dashboard />)

}