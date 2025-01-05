import React from 'react'

function Heading_Component() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
        <h1
          onClick={() => (window.location.href = "https://www.netflix.com/in/")}
          className="bg-orange-600 text-black hover:bg-violet-500  hover:text-white hove px-2 py-1 rounded-md font-semibold font-poppins mb-auto mt-5 text-2xl cursor-default"
        >
          React Router
        </h1>
      </div>
  )
}

export default Heading_Component