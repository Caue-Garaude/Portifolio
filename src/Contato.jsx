import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Contato() {
  // Estados para armazenar os valores do formulário
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Função para manipular o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Exibe os dados no console
    console.log("Nome:", name);
    console.log("Email:", email);
    console.log("Mensagem:", message);
    
    // Limpa o formulário após o envio
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <Header />
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Entre em Contato
          </h1>

          {/* Formulário de contato */}
          <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Seu nome"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Seu e-mail"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Sua mensagem"
                  required
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors duration-300"
                >
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>

          {/* Links para redes sociais */}
          <div className="mt-12 text-center">
            <p className="text-lg font-medium text-gray-800">Siga-me nas redes sociais</p>
            <div className="flex justify-center space-x-8 mt-6">
              <a
                href="https://github.com/Caue-Garaude"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .5C5.373.5 0 5.873 0 12.5c0 5.302 3.438 9.8 8.207 11.387.6.113.82-.261.82-.58v-2.234c-3.338.724-4.033-1.613-4.033-1.613-.547-1.39-1.335-1.762-1.335-1.762-1.09-.745.083-.729.083-.729 1.204.084 1.837 1.252 1.837 1.252 1.07 1.832 2.808 1.303 3.493.996.107-.774.419-1.303.762-1.602-2.665-.303-5.467-1.333-5.467-5.933 0-1.312.468-2.384 1.236-3.223-.124-.304-.536-1.523.118-3.175 0 0 1.008-.322 3.302 1.23a11.497 11.497 0 013.006-.404c1.02.004 2.045.138 3.006.404 2.293-1.552 3.3-1.23 3.3-1.23.654 1.652.242 2.87.118 3.175.77.839 1.236 1.91 1.236 3.223 0 4.61-2.806 5.627-5.478 5.922.43.371.812 1.103.812 2.222v3.293c0 .322.217.699.825.579C20.565 22.296 24 17.799 24 12.5 24 5.873 18.627.5 12 .5z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/caue-garaude-b20a8a242/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452H16.73v-5.268c0-1.255-.024-2.87-1.747-2.87-1.748 0-2.016 1.367-2.016 2.777v5.36h-3.722V9h3.576v1.56h.05c.498-.945 1.713-1.946 3.527-1.946 3.77 0 4.465 2.482 4.465 5.707v6.13zM5.337 7.433a2.166 2.166 0 01-2.162-2.163A2.165 2.165 0 015.337 3.1a2.166 2.166 0 012.162 2.17 2.167 2.167 0 01-2.162 2.163zm-1.863 13.02h3.722V9H3.474v11.453zM22.225 0H1.771C.792 0 0 .775 0 1.74v20.521C0 23.225.792 24 1.771 24h20.451c.978 0 1.774-.775 1.774-1.74V1.74C24 .775 23.203 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* E-mail para contato direto */}
          <div className="mt-8 text-center">
            <p className="text-lg font-medium text-gray-800">
              Ou entre em contato diretamente via e-mail:
            </p>
            <p className="text-lg font-semibold text-blue-600">
              <a href="mailto:cauegezaledo@gmail.com">cauegezaledo@gmail.com</a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
