import React from 'react';

function Books() {
  return (
    <div className="mt-10 bg-custom-color">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="md:text-4xl text-2xl font-bold text-center mt-10 mb-10 text-white ">1st Year</h2>
          <div className="p-4 w-1/2 h-24 md:h-32 bg-blue-500 hover:bg-green-500 transition-colors duration-300 mt-5 rounded-lg shadow text-white text-2xl md:text-xl text-center flex justify-center items-center ">
            Sem 1
          </div>
          <div className="p-4 w-1/2 h-24 md:h-32 bg-blue-500 hover:bg-green-500 transition-colors duration-300 mt-10 rounded-lg shadow text-white text-2xl md:text-xl text-center flex justify-center items-center ">
            Sem 2
          </div>
        </div>
        <div>
          <h2 className="md:text-4xl text-2xl font-bold text-center mt-10 mb-10 text-white">2nd Year</h2>
          <div className="p-4 w-1/2 h-24 md:h-32 bg-blue-500 hover:bg-green-500 transition-colors duration-300 mt-5 rounded-lg shadow text-white text-2xl md:text-xl text-center flex justify-center items-center">
            Sem 3
          </div>
          <div className="p-4 w-1/2 h-24 md:h-32 bg-blue-500 hover:bg-green-500 transition-colors duration-300 mt-10 rounded-lg shadow text-white text-2xl md:text-xl text-center flex justify-center items-center">
            Sem 4
          </div>
        </div>
        <div>
          <h2 className="md:text-4xl text-2xl font-bold text-center mt-10 mb-10 text-white">3rd Year</h2>
          <div className="p-4 w-1/2 h-24 md:h-32 bg-blue-500 hover:bg-green-500 transition-colors duration-300 mt-5 rounded-lg shadow text-white text-2xl md:text-xl text-center flex justify-center items-center">
            Sem 5
          </div>
          <div className="p-4 w-1/2 h-24 md:h-32 bg-blue-500 hover:bg-green-500 transition-colors duration-300 mt-10 rounded-lg shadow text-white text-2xl md:text-xl text-center flex justify-center items-center">
            Sem 6
          </div>
        </div>
        <div>
          <h2 className="md:text-4xl text-2xl font-bold text-center mt-10 mb-10 text-white">4th Year</h2>
          <div className="p-4 w-1/2 h-24 md:h-32 bg-blue-500 hover:bg-green-500 transition-colors duration-300 mt-5 rounded-lg shadow text-white text-2xl md:text-xl text-center flex justify-center items-center">
            Sem 7
          </div>
          <div className="p-4 w-1/2 h-24 md:h-32 bg-blue-500 hover:bg-green-500 transition-colors duration-300 mt-10 rounded-lg shadow text-white text-2xl md:text-xl text-center flex justify-center flex justify-center items-center">
            Sem 8
          </div>
        </div>
      </div>
    </div>
  );
}

export default Books;
