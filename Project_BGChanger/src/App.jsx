import { useState } from "react"

function App() {
  
  const [color, setColor] = useState("lightblue");

  return (
    <>
    <div className="w-full h-screen delay-500 duration-10"
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-5 shadow-lg bg-white px-3 py-3 rounded-3xl">
              <button onClick={() => setColor("blue")} className="bg-sky-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-3xl">Blue</button>
              <button onClick={() => setColor("orange")} className="bg-sky-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-3xl">Orange</button>
              <button onClick={() => setColor("green")} className="bg-sky-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-3xl">Green</button>
              <button onClick={() => setColor("violet")} className="bg-sky-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded-3xl">Violet</button>
              <button onClick={() => setColor("red")} className="bg-sky-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-3xl">Red</button>
              <button onClick={() => setColor("lime")} className="bg-sky-500 hover:bg-lime-600 text-white font-bold py-2 px-4 rounded-3xl">Lime</button>
              <button onClick={() => setColor("lightgreen")} className="bg-sky-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-3xl">Teal</button>
              <button onClick={() => setColor("cyan")} className="bg-sky-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-3xl">Cyan</button>
              <button onClick={() => setColor("indigo")} className="bg-sky-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-3xl">Indigo</button>
              <button onClick={() => setColor("pink")} className="bg-sky-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded-3xl">Rose</button>
              <button onClick={() => setColor("yellow")} className="bg-sky-500 hover:bg-amber-400  text-white font-bold py-2 px-4 rounded-3xl">Amber</button>
            </div>
      </div>
    </div>
    </>
  )
}

export default App
