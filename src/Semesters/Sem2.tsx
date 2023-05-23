import React from 'react';
import { Link } from 'react-router-dom';

function Sem2() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h2 className="md:text-4xl text-2xl font-bold text-center mt-5 mb-5">Semester 2</h2>
        <div className="flex flex-col items-center">
          <Link to="/books/sem2/c-programming" className="p-4 w-1/2 h-12 md:h-16 bg-yellow-500 hover:bg-red-500 transition-colors duration-300 mt-5 rounded-lg shadow text-white text-xl md:text-2xl text-center flex justify-center items-center hover:shadow-green-lg">
            C-Programming
          </Link>
          <Link to="/books/sem2/engineering-chemistry" className="p-4 w-1/2 h-12 md:h-16 bg-yellow-500 hover:bg-red-500 transition-colors duration-300 mt-5 rounded-lg shadow text-white text-xl md:text-2xl text-center flex justify-center items-center hover:shadow-green-lg">
            Engineering Chemistry (EC-2)
          </Link>
          <Link to="/books/sem2/engineering-graphics" className="p-4 w-1/2 h-12 md:h-16 bg-yellow-500 hover:bg-red-500 transition-colors duration-300 mt-5 rounded-lg shadow text-white text-xl md:text-2xl text-center flex justify-center items-center hover:shadow-green-lg">
            Engineering Graphics
          </Link>
          <Link to="/books/sem2/engineering-mathematics" className="p-4 w-1/2 h-12 md:h-16 bg-yellow-500 hover:bg-red-500 transition-colors duration-300 mt-5 rounded-lg shadow text-white text-xl md:text-2xl text-center flex justify-center items-center hover:shadow-green-lg">
            Engineering Mathematics (EM-2)
          </Link>
          <Link to="/books/sem2/engineering-physics" className="p-4 w-1/2 h-12 md:h-16 bg-yellow-500 hover:bg-red-500 transition-colors duration-300 mt-5 rounded-lg shadow text-white text-xl md:text-2xl text-center flex justify-center items-center hover:shadow-green-lg">
            Engineering Physics (EP-2)
          </Link>
          <Link to="/books/sem2/professional-communication" className="p-4 w-1/2 h-12 md:h-16 bg-yellow-500 hover:bg-red-500 transition-colors duration-300 mt-5 rounded-lg shadow text-white text-xl md:text-2xl text-center flex justify-center items-center hover:shadow-green-lg">
            Professional Communication Skills and Ethics (PCE)
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sem2;
