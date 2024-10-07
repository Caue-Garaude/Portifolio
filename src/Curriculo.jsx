import Footer from "./Footer";
import Header from "./Header";
import resumeImage from './IMG/curriculo.jpeg'; 
import resumePDF from './assets/curriculo.pdf'; 

export default function Curriculo() {
  return (
    <>
      <Header />
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Meu Currículo
          </h1>

          {/* Imagem do currículo */}
          <div className="flex justify-center mb-8">
            <img
              src={resumeImage}
              alt="Currículo de Caue Garaude"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Botão de download */}
          <div className="flex justify-center">
            <a
              href={resumePDF}
              download="Caue-Garaude-Curriculo.pdf"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors duration-300"
            >
              Baixar Currículo
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
