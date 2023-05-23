import React from 'react';

function Sem1() {
  return (
    <div className="mt-5 bg-custom-color">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 w-full h-12 md:h-16 bg-blue-500 hover:bg-green-500 transition-colors duration-300 mt-5 rounded-lg shadow text-white text-xl md:text-2xl text-center">
          Basic Electrical Engineering (BEE)
        </div>
        <div className="p-4 w-full h-12 md:h-16 bg-blue-500 hover:bg-green-500 transition-colors duration-300 mt-5 rounded-lg shadow text-white text-xl md:text-2xl text-center">
          Engineering Chemistry (EC-1)
        </div>
        <div className="p-4 w-full h-12 md:h-16 bg-blue-500 hover:bg-green-500 transition-colors duration-300 mt-5 rounded-lg shadow text-white text-xl md:text-2xl text-center">
          Engineering Mathematics (EM-1)
        </div>
        <div className="p-4 w-full h-12 md:h-16 bg-blue-500 hover:bg-green-500 transition-colors duration-300 mt-5 rounded-lg shadow text-white text-xl md:text-2xl text-center">
          Engineering Physics (EP-1)
        </div>
        <div className="p-4 w-full h-12 md:h-16 bg-blue-500 hover:bg-green-500 transition-colors duration-300 mt-5 rounded-lg shadow text-white text-xl md:text-2xl text-center">
          Engineering Mechanics
        </div>
      </div>
    </div>
  );
}

export default Sem1;
