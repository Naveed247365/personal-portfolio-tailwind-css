import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="flex flex-col items-center justify-center min-h-screen text-center">
        {/* Profile Image */}
        <div className="mb-8 animate-fade-in">
          <Image
            src="/profile.jpg"
            alt="Muhammad Naveed"
            width={200}
            height={200}
            className="rounded-full border-4 border-purple-600 shadow-lg"
          />
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
          Hello, I'm Muhammad Naveed
        </h1>

        {/* Intro Paragraph */}
        <p className="text-xl mb-8 animate-fade-in-delay max-w-2xl">
          I’m a passionate full stack web developer focused on building fast, responsive, and scalable web applications using modern technologies. Welcome to my portfolio!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-delay">
          <Link
            href="/Projects"
            className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors"
          >
            View My Work
          </Link>

          <a
            href="/Muhammad_Naveed.pdf"
            download
            className="bg-purple-200 text-purple-800 px-6 py-3 rounded-full font-semibold hover:bg-purple-300 transition-colors"
          >
            Download CV
          </a>
        </div>
      </section>
    </div>
  );
}
