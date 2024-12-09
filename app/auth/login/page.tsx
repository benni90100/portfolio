import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function Login() {
  return (
    <>
    <div className= "lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2 border-slate-900 ">
    <div className=' border rounded-xl p-8 '>

  <h1 className="text-2xl font-semibold mb-4">Login</h1>
  <form action="#" method="POST">

    <div className="mb-4">
      <label htmlFor="username" className="block text-gray-600">Username</label>
      <input type="text" id="username" name="username" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off">
      </input>
    </div>

    <div className="mb-4">
      <label htmlFor="password" className="block text-gray-800">Password</label>
      <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off">
      </input>
    </div>

    <div className="mb-4 flex items-center">
      <input type="checkbox" id="remember" name="remember" className="text-red-500"></input>
      <label htmlFor="remember" className=" ml-2">ricordami</label>
    </div>

    <div className="mb-6 primary">
      <a href="#" className="hover:underline">Hai dimenticato la password?</a>
    </div>

    <Button type='submit' variant="destructive" className=' w-full'>login</Button>
   
  </form>
  <div className="mt-6 primary text-center">
    <Link href="/auth/signup">Registrati qui</Link>
  </div>
    </div>
</div>
</>
  )
}

export default Login