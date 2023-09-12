import Formulario from '../components/Formulario';
import Botao from '../components/Botao';
import Link from 'next/link';

export default function Home() {
  return (
  <div>
<nav className=" border-gray-200 dark:bg-gray-900">
<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
<Link href="/home">
  <p className="flex items-center">
      <img src="logo-porto.png" className="h-8 mr-3" alt="Logo Porto" />
  </p>
 </Link> 
  <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
      </svg>
  </button>
  <div className="hidden w-full md:block md:w-auto" id="navbar-default">
    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md: dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
      <Link href="/home">
        <p  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</p>
      </Link>
      </li>
      <li>
        <Link href="/sobre">
          <p className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sobre</p>
        </Link>
      </li>
      <li>
      <Link href="/nossaSolucao">
        <p  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Serviços</p>
      </Link>
      </li>
      <li>
        <Link href="/contato">
          <p  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contato</p>
        </Link>
      </li>
    </ul>
  </div>
</div>
</nav>
    <main className="h-auto">

    <div className="container mx-auto p-4">
    <div className="max-w-screen-md mx-auto p-6 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Nossa Solução: </h2>
      <p className="text-justify">
      A solução proposta visa aprimorar o atendimento da Porto Seguro, focando na redução de erros e na eficiência dos processos. Para isso, aborda dois pontos chave: o aprimoramento do atendimento telefônico através de uma interface intuitiva e a implementação de um chatbot para evitar erros no atendimento. Além disso, utiliza inteligência artificial na análise dos dados para garantir a seleção correta do modal, proporcionando um atendimento mais eficiente e personalizado. O uso do backlog facilitará o planejamento, priorização e acompanhamento do progresso do projeto, promovendo transparência e engajamento da equipe. Esta solução se alinha ao desafio da Porto Seguro e tem o potencial de transformar positivamente o atendimento, aumentando a satisfação do cliente.
      </p>
      <img className="mx-auto max-w-full h-auto mt-5" src="solucoes.png" alt="Hat"/>
      <p className="text-justify">
        Confira a dashboard clicando no botão.
      </p>
    <Link href="/dashboard">
      <Botao/>
    </Link>
    </div>
    </div>


    </main>
    <footer className="rounded-lg shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/home">
              <p  className="flex items-center mb-4 sm:mb-0">
                  <img src="logo-porto.png" className="h-8 mr-3" alt="Porto Logo" />
              </p>
          </Link>    
              <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                  <li>
                      <a  className="mr-4 hover:underline md:mr-6 ">Fale Conosco</a>
                  </li>
                  <li>
                      <a href="interface-atendimento" className="mr-4 hover:underline md:mr-6">Nossa Solução</a>
                  </li>

              </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a className="hover:underline">Siga Bem</a>. Todos direitor reservados.</span>
      </div>
    </footer>
  </div>
  )
}
