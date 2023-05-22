import React, {useState} from 'react';

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  
    return (
        <nav className="bg-gradient-to-r from-teal-500 to-teal-200 p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img className="w-10 h-10 mr-2 rounded-full" src="/path/to/logo.png" alt="Logo" />
              <span className="text-white md:text-5xl text-2xl font-bold">Engineering Shala</span>
            </div>
            <div className="flex items-center">
              <ul className="hidden md:flex space-x-10">
                <li>
                  <a className="text-black text-3xl hover:text-gray-200" href="/books">Books</a>
                </li>
                <li>
                  <a className="text-black text-3xl hover:text-gray-200" href="/tips">Tips</a>
                </li>
                <li>
                  <a className="text-black text-3xl hover:text-gray-200" href="/viva-questions">Viva Questions</a>
                </li>
                <li>
                  <a className="text-black text-3xl hover:text-gray-200" href="/about">About Us</a>
                </li>
              </ul>
              <button
                className="md:hidden ml-4 text-white focus:outline-none"
                onClick={toggleMobileMenu}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <ul className="md:hidden">
              <li>
                <a className="text-black block py-2" href="/books">Books</a>
              </li>
              <li>
                <a className="text-black block py-2" href="/tips">Tips</a>
              </li>
              <li>
                <a className="text-black block py-2" href="/viva-questions">Viva Questions</a>
              </li>
              <li>
                <a className="text-black block py-2" href="/about">About Us</a>
              </li>
            </ul>
          )}
        </nav>
      );
};

export default Navbar;
