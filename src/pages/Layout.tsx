import {
  Outlet,
  Link,
} from 'react-router-dom';
import {
  Button,
  Divider,
} from '@nextui-org/react';
import logoInline from '../assets/logoInline.svg';
import logo from '../assets/logo.svg';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex flex-col justify-center items-center">
        <div
          className="w-full bg-primary py-4"
        >
          <img src={logoInline} className="w-40 h-15 mx-auto" alt="logo" />
        </div>
        <div
          className="w-full flex bg-secondary justify-center items-center py-2"
        >
        <Button
          className="uppercase font-mono text-white text-lg font-medium tracking-widest"
          color="primary"
          size="md"
          variant="light"
        >
          <Link to={'/kit-list'}>
            Loja
          </Link>
        </Button>
        <Divider
          className="mx-2 bg-white w-[2px] h-6"
          orientation="vertical"
        />
        <Button
          className="uppercase font-mono text-white text-lg font-medium tracking-widest"
          color="primary"
          size="md"
          variant="light"
        >
          <Link to={'/user'}>
            Minha Conta
          </Link>
        </Button>
        {/* teste
        <Divider
          className="mx-2 bg-white w-[2px] h-6"
          orientation="vertical"
        />
        <Button
          className="uppercase font-mono text-white text-lg font-medium tracking-widest"
          color="primary"
          size="md"
          variant="light"
        >
          <Link to={'/welcome'}>
            Login
          </Link>
        </Button>
        <Divider
          className="mx-2 bg-white w-[2px] h-6"
          orientation="vertical"
        />
        <Button
          className="uppercase font-mono text-white text-lg font-medium tracking-widest"
          color="primary"
          size="md"
          variant="light"
        >
          Cadastre-se
        </Button>
        */}
        </div>
      </header>

      <main className="grow w-full bg-slate-100">
        <Outlet />
      </main>

      <footer className="bg-gray-200 p-8">
        <div className="container grid grid-cols-1 md:grid-cols-12 md:gap-8 items-start md:justify-right">
          <div className="col-span-12 md:col-span-6 flex justify-center mt-4">
            <img src={logo} alt="Logo" className="h-32 opacity-75" />
          </div>
          <div className="col-span-12 md:col-span-2 text-center md:text-left md:border-l md:pl-4 border-gray-300 mb-8">
            <h3 className="text-gray-500 font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700">Home</a></li>
              <li><a href="#" className="text-gray-700">Loja</a></li>
              <li><a href="#" className="text-gray-700">Perfil</a></li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-2 text-center md:text-left md:border-l md:pl-4 border-gray-300 mb-8">
            <h3 className="text-gray-500 font-semibold mb-4">Links úteis</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700">Embrapa</a></li>
              <li><a href="#" className="text-gray-700">Outros</a></li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-2 text-center md:text-left md:border-l md:pl-4 border-gray-300">
            <h3 className="text-gray-500 font-semibold mb-4">Contatos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700">email@usp.br</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
