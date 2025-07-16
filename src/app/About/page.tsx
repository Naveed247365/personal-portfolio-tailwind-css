import Image from 'next/image';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-24">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-purple-600 mb-12">About Me</h1>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Profile Image */}
          <div className="w-full md:w-1/3 animate-fade-in">
            <Image
              src="/profile.jpg"
              alt="Muhammad Naveed"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-2/3 animate-fade-in-delay">
            <p className="mb-4">
              Hi, I’m <strong>Muhammad Naveed</strong> — a passionate full stack web developer with over 2 years of experience building responsive, modern, and efficient web applications.
            </p>
            <p className="mb-4">
              My development journey began with curiosity and quickly turned into a lifelong passion. I specialize in both frontend and backend technologies including <strong>HTML, CSS, JavaScript, React, Node.js, and Next.js</strong>. I’m always exploring new tools and techniques to stay up-to-date with the latest trends in web development.
            </p>
            <p className="mb-4">
              I love turning ideas into reality through clean code, scalable solutions, and smooth user experiences. Whether it’s crafting elegant UI components or developing robust backend APIs, I strive to deliver high-quality work that makes an impact.
            </p>
            <p className="mb-8">
              When I'm not coding, you'll usually find me enjoying video games, watching tech videos, or learning new frameworks to sharpen my skills.
            </p>
            <a
              href="/Muhammad_Naveed.pdf"
              download
              className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors inline-block"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
