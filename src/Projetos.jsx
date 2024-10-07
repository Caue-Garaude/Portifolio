'use client'

import { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'

// Importe as imagens locais
import project1Img from './img/projeto1.png' 
import project2Img from './img/projeto2.png'
import project3Img from './img/projeto3.png'
import project4Img from './IMG/projeto4.png'
import project5Img from './IMG/projeto5.png'
import project6Img from './IMG/projeto6.png'

export default function ProjectsSection() {
  const projects = [
    {
      name: 'Projeto Vite-React',
      description: 'Primeiro projeto realizado utilizando vite-react',
      image: project1Img, 
      link: 'https://projeto-vite-react-beta.vercel.app/',
    },
    {
      name: 'Meteora',
      description: 'Projeto de um site de comércio eletrônico chamado Meteora, utilizando bootstrap',
      image: project2Img, 
      link: 'https://meteora-two-omega.vercel.app/',
    },
    {
      name: 'Eco Shop',
      description: 'projeto de um e-commerce especializado em produtos sustentáveis e ecológicos, utilizando bootstrap',
      image: project3Img, 
      link: 'https://caue-garaude.github.io/EcoShop/',
    },
    {
      name: 'Ocean Guardian',
      description: 'Ocean Guardian é um projeto que visa conscientizar e informar sobre a saúde dos oceanos,',
      image: project4Img, 
      link: 'https://caue-garaude.github.io/OCEAN-GUARDIAN/',
    },
    {
      name: 'Optimus Tech',
      description: 'Este projeto foi desenvolvido como parte do desafio 7 Days of Code da Alura. O objetivo foi criar um site responsivo para a empresa fictícia OptimusTech, que se dedica a fornecer soluções tecnológicas inovadoras e serviços de alta qualidade.',
      image: project5Img, 
      link: 'https://7days-of-code-eight.vercel.app/',
    },
    {
      name: 'Alura Plus',
      description: 'Este é o repositório do site Alura Plus, que apresenta informações sobre os serviços oferecidos pela Alura, como cursos online, assinaturas e disponibilidade em diferentes dispositivos.',
      image: project6Img, 
      link: 'https://aluraplus-taupe-one.vercel.app/',
    },
  ]

  return (
    <>
      <Header/>
  
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">Meus Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                name={project.name}
                description={project.description}
                image={project.image}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </section>
      
      <Footer/>
    </>
  )
}

function ProjectCard({ name, description, image, link }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <a
      href={link}
      className={`relative block bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-700 ease-in-out hover:scale-105 hover:shadow-2xl ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ perspective: '1000px' }} // Parallax Perspective
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-110" // Parallax hover effect
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 transition-opacity duration-500 hover:opacity-70" />
    </a>
  )
}
