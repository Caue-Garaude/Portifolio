import Footer from "./Footer";
import Header from "./Header";
import profileImage from './IMG/Fotoperfil.jpeg'; 

export default function Sobre() {
  return (
    <>
      <Header />
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          {/* Imagem do lado esquerdo */}
          <div className="lg:w-1/3 flex justify-center lg:justify-start mb-8 lg:mb-0">
            <img
              src={profileImage}
              alt="Foto de Caue Garaude"
              className="w-64 h-64 rounded-full shadow-lg"
            />
          </div>

          {/* Texto do lado direito */}
          <div className="lg:w-2/3 bg-white shadow-lg rounded-lg p-8 lg:ml-8">
            <h1 className="text-4xl font-bold text-gray-800 text-center lg:text-left mb-8">
              Sobre mim
            </h1>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Sou apaixonado por desenvolvimento front-end e especialista em
              criar experiências digitais impactantes. Com sólidos conhecimentos
              em <span className="font-semibold text-gray-900">React</span>,{" "}
              <span className="font-semibold text-gray-900">HTML5</span>,{" "}
              <span className="font-semibold text-gray-900">CSS3</span>,{" "}
              <span className="font-semibold text-gray-900">JavaScript</span>,{" "}
              <span className="font-semibold text-gray-900">TypeScript</span> e{" "}
              <span className="font-semibold text-gray-900">Bootstrap</span>,
              desenvolvo interfaces modernas e intuitivas, sempre focando na
              melhor experiência do usuário.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Atualmente, faço parte da equipe de célula de dados da área de{" "}
              <span className="font-semibold text-gray-900">
                Compliance & Prevenção à Lavagem de Dinheiro (PLD)
              </span>{" "}
              do <span className="font-semibold text-gray-900">Banco Rendimento</span>, 
              onde atuo como desenvolvedor Front-End e analista de dados, 
              combinando minha paixão por tecnologia com soluções voltadas à 
              segurança e conformidade.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Minha trajetória inclui projetos acadêmicos e pessoais, onde 
              aperfeiçoei minhas habilidades com ferramentas como{" "}
              <span className="font-semibold text-gray-900">Git/GitHub</span> 
              e também <span className="font-semibold text-gray-900">Python</span>.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Sempre em busca de novos desafios, estou comprometido em expandir 
              meu conhecimento e contribuir para a criação de soluções inovadoras 
              e funcionais.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
