import Image from 'next/image'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-24">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-purple-600 mb-12">About Me</h1>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <div className="w-full md:w-1/3 animate-fade-in">
            <Image src="/profile.jpg" alt="Muhammad Naveed" width={400} height={400} className="rounded-lg shadow-lg" />
          </div>
          <div className="w-full md:w-2/3 animate-fade-in-delay">
            <p className="mb-4">Hello! I'm Muhammad Naveed, a passionate web developer with 2 years of experience in creating responsive and user-friendly web applications.</p>
            <p className="mb-4">My journey in web development started when I discovered my love for coding. Over the years, I've honed my skills in various technologies, including HTML, CSS, JavaScript, React, and Node.js. Since then, I've been constantly learning and improving my skills to stay up-to-date with the latest technologies and best practices.</p>
            <p className="mb-4">I specialize in building back-end development, front-end development, React, Node.js, and Next.js. My goal is to create web applications that not only look great but also provide an excellent user experience.</p>
            <p className="mb-8">When I'm not coding, you can find me playing video games, watching movies, or learning new technologies.</p>
            <a href="/path-to-your-cv.pdf" download className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors inline-block">
              Download CV
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}