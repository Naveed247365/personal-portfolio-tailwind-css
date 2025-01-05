export default function Footer() {
  return (
    <footer className="bg-purple-600 text-white py-8">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <p>&copy; 2025 Your Name. All rights reserved.</p>
        <div className="space-x-4">
          <a href="https://github.com/Naveed247365" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-2xl hover:text-purple-300 transition-colors">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/muhammad-naveed247" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-2xl hover:text-purple-300 transition-colors">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}