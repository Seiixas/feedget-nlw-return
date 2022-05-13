import { Lock, User } from "phosphor-react";
import { FormEvent, useState } from "react";
import { api } from "../../lib/api";

export function SignUp() {
  const [authenticationMail, setAuthenticationMail] = useState<string | null>(null);
  const [authenticationPassword, setAuthenticationPassword] = useState<string | null>(null);

  async function handleSignup(event: FormEvent) {
    event.preventDefault();

    try {
      await api.post('/users', {
        email: authenticationMail,
        password: authenticationPassword
      });

      alert('Conta criada com sucesso!');
    } catch (err: any) { 
      console.log(err);
      alert(`Erro \n${err.response.data.message}`)
    }
  }

  return(
    <div
      className="w-[100vw] h-[100vh] flex justify-center items-center">
        <form onSubmit={handleSignup} className="flex flex-col bg-zinc-100 dark:bg-zinc-800 p-12 rounded-xl">
          <h1 className="text-center text-2xl mb-4">Crie sua conta!</h1>
          <div className="bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center rounded my-2">
            <User className="mx-2" size={20}/>
            <input 
              type="email"
              placeholder="E-mail"
              onChange={event => setAuthenticationMail(event.target.value)}
              className="bg-transparent border-none outline-none focus:outline-none focus:border-none" />
          </div>
          <div className="bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center rounded my-2">
            <Lock className="mx-2" size={20} />
            <input 
              type="password"
              placeholder="Senha"
              onChange={event => setAuthenticationPassword(event.target.value)}
              className="bg-transparent border-none outline-none focus:outline-none focus:border-none" />
          </div>
          <button
            type="submit"
            className="bg-brand-500 w-[100%] h-10 rounded text-zinc-100 text-sm">Cadastrar</button>
        </form>
    </div>
  )
}