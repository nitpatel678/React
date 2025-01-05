import React , {useState, useContext} from 'react'
import UserContext from '../context/UserContext'
function Login() {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)


    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }


  return (
    <div className="flex justify-center items-center mt-5">
    <div className='flex flex-col justify-center items-center gap-3 bg-slate-200 w-fit p-4 rounded-md'>
      <h2 className='font-poppins font-medium bg-violet-600 text-white px-2 py-1 rounded-sm'>User Login</h2>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type='text'
        placeholder='Username'
        className='border border-black px-2 py-1 rounded-md'
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type='password'
        placeholder='Password'
        className='border border-black px-2 py-1 rounded mt-2'
      />
      <button
        onClick={handleSubmit}
        className='bg-violet-600 hover:bg-orange-600 text-white px-2 py-1 rounded mt-3'
      >
        Submit
      </button>
    </div>
  </div>
  
  )
}

export default Login