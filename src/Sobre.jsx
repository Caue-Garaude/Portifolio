import Footer from "./Footer";
import Header from "./Header";
const profileImage = '/IMG/Fotoperfil.jpeg'; 

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
              Sou apaixonado por desenvolvimento front-end e análise de dados, com experiência em criar experiências digitais impactantes e soluções analíticas. Possuo sólidos conhecimentos em <span className="font-semibold text-gray-900">React</span>,{" "}
              <span className="font-semibold text-gray-900">HTML5</span>,{" "}
              <span className="font-semibold text-gray-900">CSS3</span>,{" "}
              <span className="font-semibold text-gray-900">JavaScript</span>,{" "}
              <span className="font-semibold text-gray-900">TypeScript</span>,{" "}
              <span className="font-semibold text-gray-900">Bootstrap</span>, e{" "}
              <span className="font-semibold text-gray-900">Python</span>, desenvolvendo interfaces modernas e análises robustas.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Atualmente, sou estagiário de dados na área de{" "}
              <span className="font-semibold text-gray-900">
                Compliance Analytics
              </span>{" "}
              do <span className="font-semibold text-gray-900">Banco Rendimento</span>, 
              onde atuo como desenvolvedor Front-End e analista de dados. Minhas responsabilidades incluem o desenvolvimento de dashboards utilizando ferramentas como{" "}
              <span className="font-semibold text-gray-900">Looker Studio</span> e{" "}
              <span className="font-semibold text-gray-900">Power BI</span>, além de trabalhar com{" "}
              <span className="font-semibold text-gray-900">SQL</span> para análise de dados e integração de APIs.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Também possuo conhecimentos em <span className="font-semibold text-gray-900">Machine Learning</span>, aplicando técnicas de análise preditiva e modelagem de dados para auxiliar na tomada de decisões estratégicas. Minha trajetória inclui projetos acadêmicos e pessoais, onde aperfeiçoei minhas habilidades com ferramentas como{" "}
              <span className="font-semibold text-gray-900">Git/GitHub</span>,{" "}
              <span className="font-semibold text-gray-900">Visual Studio Code</span>, e{" "}
              <span className="font-semibold text-gray-900">Figma</span>.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Sempre em busca de novos desafios, estou comprometido em expandir meu conhecimento e contribuir para a criação de soluções inovadoras e funcionais, combinando minha paixão por tecnologia com soluções voltadas à segurança e conformidade.
            </p>
          </div>
        </div>
        <div className="container pt-20 mx-auto px-4 flex flex-col items-center">
          <h1 className="text-4xl font-bold text-gray-800 text-center lg:text-left mb-8">
            <span className="inline-block">Skills</span>
          </h1>

          {/* Ícones */}
          <div className="flex flex-wrap justify-center gap-3 lg:gap-5">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="javascript logo"
              className="h-8 lg:h-10"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              alt="typescript logo"
              className="h-8 lg:h-10"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="react logo"
              className="h-8 lg:h-10"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="html5 logo"
              className="h-8 lg:h-10"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="css3 logo"
              className="h-8 lg:h-10"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              alt="python logo"
              className="h-8 lg:h-10"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
              alt="bootstrap logo"
              className="h-8 lg:h-10"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"
              alt="visualstudio logo"
              className="h-8 lg:h-10"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              alt="git logo"
              className="h-8 lg:h-10"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="github logo"
              className="h-8 lg:h-10"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt="nodejs logo"
              className="h-8 lg:h-10"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg"
              alt="arduino logo"
              className="h-8 lg:h-10"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg"
              alt="canva logo"
              className="h-8 lg:h-10"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
              alt="figma logo"
              className="h-8 lg:h-10"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
              alt="mysql logo"
              className="h-8 lg:h-10"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
              alt="postgresql logo"
              className="h-8 lg:h-10"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
              alt="pandas logo"
              className="h-8 lg:h-10"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
              alt="numpy logo"
              className="h-8 lg:h-10"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
              alt="tensorflow logo"
              className="h-8 lg:h-10"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}