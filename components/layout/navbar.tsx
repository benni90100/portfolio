import React from 'react'
import logo from '../icons/logo'
import Logo from '../icons/logo'
import { Button } from '../ui/button'
import Image from 'next/image'
import UserMenu from './UserMenu'
import Link from 'next/link'

interface NavabarProps{
    isLoggedIn:boolean
}

function Navbar({isLoggedIn}:NavabarProps) {
  return (
  <div className=' bg-slate-600'>

  <div className='flex max-w-7xl mx-auto p-8'>
        <div className="flex-1"><Logo/></div>
        {isLoggedIn ? <UserMenu/> : <div><Button variant="destructive" asChild><Link href="/auth/login">login</Link></Button></div>}
    </div>
  </div>
  )
}

export default Navbar