import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img className="w-10 h-10 mr-2" src="/path/to/logo.png" alt="Logo" />
          <span className="text-white font-bold">Engineering Shala</span>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a className="text-white hover:text-gray-200" href="/books">Books</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-200" href="/tips">Tips</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-200" href="/viva-questions">Viva Questions</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-200" href="/about">About Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
