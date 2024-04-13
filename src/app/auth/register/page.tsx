import { SignupFormDemo } from '@/components/auth/signup'
import Nav from '@/components/nav'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <>
    <div>
        <Nav/>
    </div>
    <div className="border p-0.4"></div>
    <div className='pt-10 pl-4 lg:pl-[23rem]'>
      <Button variant='link'>
      <Link href={'/'}>	&laquo; Back</Link>
      </Button>
    </div>
    <div className='pb-20'>
        <SignupFormDemo/>
    </div>
    <div className="border p-0.4"></div>
    <div className="h-[2.5rem] text-gray-400 pt-2 text-center">© 2024 EXOR Inc. All rights reserved.</div>
    </>
  )
}

export default Login