import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 w-full">
      <div className="container mx-auto px-4 text-center">
        {/* Links sociais */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/Caue-Garaude"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaGithub className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/caue-garaude-b20a8a242/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
        </div>

        {/* Texto de direitos autorais */}
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Caue Garaude - Portfólio. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
