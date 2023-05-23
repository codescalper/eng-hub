import React from 'react';
import { Link, Route, Routes,Outlet } from 'react-router-dom';
import Sem1 from '../Semesters/Sem1';
import Sem2 from '../Semesters/Sem2';
import Sem3 from '../Semesters/Sem3';
import Sem4 from '../Semesters/Sem4';
import Sem5 from '../Semesters/Sem5';
import Sem6 from '../Semesters/Sem6';
import Sem7 from '../Semesters/Sem7';
import Sem8 from '../Semesters/Sem8';
import './style.css';

function Books() {
  return (
    <div className="mt-5 bg-custom-color">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="md:text-4xl text-2xl font-bold text-center mt-5 mb-5 text-white ">1st Year</h2>
          <div className="flex flex-col items-center">
            <Link to="/books/sem1" className="p-4 w-1/2 h-12 md:h-16 bg-blue-500 hover:bg-green-500 transition-colors duration-300 mt-5 rounded-lg shadow text-white text-xl md:text-2xl text-center flex justify-center items-center hover:shadow-green-lg">
              Sem 1
            </Link>
            <Link to="/books/sem2" className="p-4 w-1/2 h-12 md:h-16 bg-blue-500 hover:bg-green-500 transition-colors duration-300 mt-10 rounded-lg shadow text-white text-xl md:text-2xl text-center flex justify-center items-center hover:shadow-green-lg">
              Sem 2
            </Link>
          </div>
        </div>
        <div>
          <h2 className="md:text-4xl text-2xl font-bold text-center mt-5 mb-5 text-white">2nd Year</h2>
          <div className="flex flex-col items-center">
            <Link to="/books/sem3" className="p-4 w-1/2 h-12 md:h-16 bg-blue-500 hover:bg-green-500 transition-colors duration-300 mt-5 rounded-lg shadow text-white text-xl md:text-2xl text-center flex justify-center items-center hover:shadow-green-lg">
              Sem 3
            </Link>
            <Link to="/books/sem4" className="p-4 w-1/2 h-12 md:h-16 bg-blue-500 hover:bg-green-500 transition-colors duration-300 mt-10 rounded-lg shadow text-white text-xl md:text-2xl text-center flex justify-center items-center hover:shadow-green-lg">
              Sem 4
            </Link>
          </div>
        </div>
        <div>
          <h2 className="md:text-4xl text-2xl font-bold text-center mt-5 mb-5 text-white">3rd Year</h2>
          <div className="flex flex-col items-center">
            <Link to="/books/sem5" className="p-4 w-1/2 h-12 md:h-16 bg-blue-500 hover:bg-green-500 transition-colors duration-300 mt-5 rounded-lg shadow text-white text-xl md:text-2xl text-center flex justify-center items-center hover:shadow-green-lg">
              Sem 5
            </Link>
            <Link to="/books/sem6" className="p-4 w-1/2 h-12 md:h-16 bg-blue-500 hover:bg-green-500 transition-colors duration-300 mt-10 rounded-lg shadow text-white text-xl md:text-2xl text-center flex justify-center items-center hover:shadow-green-lg">
              Sem 6
            </Link>
          </div>
        </div>
        <div>
          <h2 className="md:text-4xl text-2xl font-bold text-center mt-5 mb-5 text-white">4th Year</h2>
          <div className="flex flex-col items-center">
            <Link to="/books/sem7" className="p-4 w-1/2 h-12 md:h-16 bg-blue-500 hover:bg-green-500 transition-colors duration-300 mt-5 rounded-lg shadow text-white text-xl md:text-2xl text-center flex justify-center items-center hover:shadow-green-lg">
              Sem 7
            </Link>
            <Link to="/books/sem8" className="p-4 w-1/2 h-12 md:h-16 bg-blue-500 hover:bg-green-500 transition-colors duration-300 mt-10 rounded-lg shadow text-white text-xl md:text-2xl text-center flex justify-center flex justify-center items-center hover:shadow-green-lg">
              Sem 8
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
      <Routes>
        <Route path="/books/sem1" element={<Sem1 />} />
        <Route path="/books/sem2" element={<Sem2 />} />
        <Route path="/books/sem3" element={<Sem3 />} />
        <Route path="/books/sem4" element={<Sem4 />} />
        <Route path="/books/sem5" element={<Sem5 />} />
        <Route path="/books/sem6" element={<Sem6 />} />
        <Route path="/books/sem7" element={<Sem7 />} />
        <Route path="/books/sem8" element={<Sem8 />} />
      </Routes>
    </div>
  );
}

export default Books;
