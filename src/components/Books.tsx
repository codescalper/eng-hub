import React from 'react';
import './style.css';
import Sem1 from 'src/Semesters/Sem1';
import Sem2 from 'src/Semesters/Sem2';
import Sem3 from 'src/Semesters/Sem3';
import Sem4 from 'src/Semesters/Sem4';
import Sem5 from 'src/Semesters/Sem5';
import Sem6 from 'src/Semesters/Sem6';
import Sem7 from 'src/Semesters/Sem7';
import Sem8 from 'src/Semesters/Sem8';


  function Books() {
    return (
      <div className="mt-5 bg-custom-color">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 className="md:text-4xl text-2xl font-bold text-center mt-5 mb-5 text-white ">1st Year</h2>
            <div className="flex flex-col items-center">
              <div className="p-4 w-1/2 h-12 md:h-16 bg-blue-500 hover:bg-green-500 transition-colors duration-300 mt-5 rounded-lg shadow text-white text-xl md:text-2xl text-center flex justify-center items-center hover:shadow-green-lg">
                Sem 1
              </div>
              <div className="p-4 w-1/2 h-12 md:h-16 bg-blue-500 hover:bg-green-500 transition-colors duration-300 mt-10 rounded-lg shadow text-white text-xl md:text-2xl text-center flex justify-center items-center hover:shadow-green-lg">
                Sem 2
              </div>
            </div>
          </div>
          <div>
            <h2 className="md:text-4xl text-2xl font-bold text-center mt-5 mb-5 text-white">2nd Year</h2>
            <div className="flex flex-col items-center">
              <div className="p-4 w-1/2 h-12 md:h-16 bg-blue-500 hover:bg-green-500 transition-colors duration-300 mt-5 rounded-lg shadow text-white text-xl md:text-2xl text-center flex justify-center items-center hover:shadow-green-lg">
                Sem 3
              </div>
              <div className="p-4 w-1/2 h-12 md:h-16 bg-blue-500 hover:bg-green-500 transition-colors duration-300 mt-10 rounded-lg shadow text-white text-xl md:text-2xl text-center flex justify-center items-center hover:shadow-green-lg">
                Sem 4
              </div>
            </div>
          </div>
          <div>
            <h2 className="md:text-4xl text-2xl font-bold text-center mt-5 mb-5 text-white">3rd Year</h2>
            <div className="flex flex-col items-center">
            <div className="p-4 w-1/2 h-12 md:h-16 bg-blue-500 hover:bg-green-500 transition-colors duration-300 mt-5 rounded-lg shadow text-white text-xl md:text-2xl text-center flex justify-center items-center hover:shadow-green-lg">
              Sem 5
            </div>
            <div className="p-4 w-1/2 h-12 md:h-16 bg-blue-500 hover:bg-green-500 transition-colors duration-300 mt-10 rounded-lg shadow text-white text-xl md:text-2xl text-center flex justify-center items-center hover:shadow-green-lg">
              Sem 6
            </div>
            </div>
          </div>
          <div>
            <h2 className="md:text-4xl text-2xl font-bold text-center mt-5 mb-5 text-white">4th Year</h2>
            <div className="flex flex-col items-center">

            <div className="p-4 w-1/2 h-12 md:h-16 bg-blue-500 hover:bg-green-500 transition-colors duration-300 mt-5 rounded-lg shadow text-white text-xl md:text-2xl text-center flex justify-center items-center hover:shadow-green-lg">
              Sem 7
            </div>
            <div className="p-4 w-1/2 h-12 md:h-16 bg-blue-500 hover:bg-green-500 transition-colors duration-300 mt-10 rounded-lg shadow text-white text-xl md:text-2xl text-center flex justify-center flex justify-center items-center hover:shadow-green-lg">
              Sem 8
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Books;
