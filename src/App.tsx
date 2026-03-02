import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Header Section */}
      <header className="w-full bg-white shadow-sm py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50">
        <div className="text-xl font-bold text-blue-600 tracking-tight">
          BrandLogo
        </div>
        <nav className="hidden md:flex space-x-6 text-gray-600 font-medium">
          <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </nav>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium transition-colors">
          Get Started
        </button>
      </header>

      {/* Main Content Section */}
      <main className="flex-grow flex flex-col items-center justify-center p-6 md:p-12 text-center">
        {/* Placeholder Hero Section */}
        <section className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Build Stunning Landing Pages <span className="text-blue-600">Faster</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Kickstart your next project with a perfectly configured React, Vite, TypeScript, and TailwindCSS boilerplate. Designed for modern web development.
          </p>
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
              Start Building Now
            </button>
            <button className="w-full sm:w-auto px-8 py-3 bg-white text-gray-700 hover:text-blue-600 border border-gray-200 hover:border-blue-100 rounded-full font-semibold shadow-sm hover:shadow-md transition-all">
              View Documentation
            </button>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="w-full bg-white border-t border-gray-200 py-6 text-center text-gray-500 text-sm mt-auto">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
