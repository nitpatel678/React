import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // Use Ref
  const passRef = useRef(null)

  

  const passGenerate = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*(){}[]:~<>";
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, charAllowed, numberAllowed]);

  const copyClipoard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(() => {
    passGenerate();
  }, [charAllowed, numberAllowed, length, passGenerate]);

  return (
    <>
      <div className="w-full max-w-md mx-auto rounded-lg px-4 py-3 shadow-md my-8 bg-slate-600">
        <h1 className="text-3xl text-center text-white font-semibold font-poppins mt-1 hover:text-gray-500">
          Password Generator
        </h1>
        <div className="flex items-center shadow rounded-lg overflow-hidden mb-3 mt-5">
          <input
            type="text"
            value={password}
            className="outline-none flex-1 py-2 px-3 text-black"
            placeholder="Password"
            readOnly
            ref = {passRef}
          />
          <button onClick={copyClipoard} className="font-poppins bg-sky-500 text-white px-4 py-2 shrink-0">
            Copy Password
          </button>
        </div>
        <div className="flex text-sm gap-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="cursor-pointer"
            />
            <label className="text-orange-500 font-poppins font-semibold">
              Length : {length}
            </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              onChange={() => setnumberAllowed((prev) => !prev)}
            />
            <label
              htmlFor="numberInput"
              className="text-orange-500 font-poppins font-semibold"
            >
              Numbers
            </label>
            <input
              type="checkbox"
              checked={charAllowed}
              id="charInput"
              onChange={() => setcharAllowed((prev) => !prev)}
            />
            <label
              htmlFor="charInput"
              className="text-orange-500 font-poppins font-semibold"
            >
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
