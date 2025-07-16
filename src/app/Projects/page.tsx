import Image from 'next/image'

const projects = [
  {
    title: "E-commerce website",
    description: "A responsive e-commerce website using React, MongoDB, and Next.js.",
    image: "/ecomm.png",
    link: "https://e-comm-naveed.vercel.app/"
  },
  {
    title: "E-commerce website",
    description: "A responsive e-commerce website using React and Next.js.",
    image: "/ecom.png",
    link: "https://multi-page-website-tailwind-css-indol.vercel.app/"
  },
  {
    title: "E-commerce website UX/UI design Hackathon",
    description: "A responsive e-commerce website using React and Next.js.",
    image: "/ecom2.png",
    link: "https://ecommerce-naveed.vercel.app/"
  },
  {
    title: "Resume website",
    description: "A responsive resume website using HTML, CSS, and JavaScript.",
    image: "/resume.png",
    link: "https://resume-cv-builder-rouge.vercel.app/"
  }
]

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-24">
      <section>
        <h1 className="text-4xl font-bold text-center text-purple-600 mb-12">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 animate-fade-in-delay">
              <Image src={project.image} alt={project.title} width={300} height={200} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a href={project.link} className="inline-block bg-purple-600 text-white px-4 py-2 rounded font-semibold hover:bg-purple-700 transition-colors" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
