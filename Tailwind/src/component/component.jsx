import React from 'react'

function Card({username}) {
  console.log(username);

  // This props is used for passing the properties in the console log in the app jsx

  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black mb-4 mt-4">
        <img
          src="https://images.pexels.com/photos/745767/pexels-photo-745767.jpeg"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
           {username}
          </span>
          <h2 className="text-xl font-semibold tracking-wide"></h2>
        </div>
        <p className="text-gray-300">
          Beach Floral Bikni
        </p>
      </div>
  )
}

export default Card