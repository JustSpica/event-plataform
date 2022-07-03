import { FormEvent, useState } from "react";
import { TailSpin } from 'react-loader-spinner';
import { gql, useMutation } from "@apollo/client";

import { Logo, Input } from "components";
import { useNavigate } from "react-router-dom";

const CREATE_SUBSCRIBE_MUTATION = gql`
  mutation CreateSubscribe($name: String!, $email: String!) {
    createSubscriber(data: {name: $name, email: $email}) {
      id
    }
  }
`

export function Subscribe() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const [createSubscriber, { loading }] = useMutation(CREATE_SUBSCRIBE_MUTATION);

  const navigate = useNavigate();

  async function handleOnSubmit(event: FormEvent) {
    event.preventDefault();
   
    await createSubscriber({
      variables: {
        name: name,
        email: email,
      }
    })
    
    navigate('/event');
  }

  return(
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>
        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

          <form onSubmit={handleOnSubmit} className="flex flex-col gap-2 w-full">
            <Input 
              type="text" 
              placeholder="Seu nome completo" 
              onChange={event => setName(event.target.value)}
            />
            <Input 
              type="email" 
              placeholder="Digite seu e-mail"
              onChange={event => setEmail(event.target.value)}
            />
            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm flex items-center justify-center hover:bg-green-700 transition-colors disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? (
                <TailSpin color="#81D8F7" width={20} height={20}/>
              ): 'Garantir minha vaga'}
            </button>
          </form>
        </div>
      </div>
      <img className="mt-10" src="src/assets/code-mockup.png" alt="code example" />
    </div>
  )
}