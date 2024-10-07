'use client'
const logoimg = '/IMG/logo.png' ;
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { FaGithub } from 'react-icons/fa'; // Importa o ícone do GitHub

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <NavLink to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Caue Garaude</span>
            <img
              alt="Caue Garaude Logo"
              src={logoimg}
              className="h-24 w-auto"
            />
          </NavLink>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <NavLink to="/" className="text-sm font-semibold leading-6 text-gray-900">
            Projetos
          </NavLink>
          <NavLink to="/sobre" className="text-sm font-semibold leading-6 text-gray-900">
            Sobre mim
          </NavLink>
          <NavLink to="/curriculo" className="text-sm font-semibold leading-6 text-gray-900">
            Currículo
          </NavLink>
          <NavLink to="/contato" className="text-sm font-semibold leading-6 text-gray-900">
            Contato
          </NavLink>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="https://github.com/Caue-Garaude" 
            className="text-sm font-semibold leading-6 text-gray-900 flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="h-6 w-6" /> 
            GitHub
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <NavLink to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Caue Garaude</span>
              <img
                alt="Caue Garaude Logo"
                src={logoimg}
                className="h-24 w-auto"
              />
            </NavLink>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <NavLink
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Projetos
                </NavLink>
                <NavLink
                  to="/sobre"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Sobre mim
                </NavLink>
                <NavLink
                  to="/curriculo"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Currículo
                </NavLink>
                <NavLink
                  to="/contato"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contato
                </NavLink>
              </div>
              <div className="py-6">
                <a
                  href="https://github.com/Caue-Garaude" 
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="h-6 w-6" /> 
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
