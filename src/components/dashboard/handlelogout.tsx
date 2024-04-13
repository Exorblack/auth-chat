"use client"
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import React from 'react';


const dashboard = () => {
    const router = useRouter()
    const handleLogout  =  async () => {
    const res = await fetch("/api/user/logout")
      if (res.ok){
        router.push("/")
      }else{
        console.error("something wrong while login")
      }
    }



  return (
    <>
    <div>
    <Button onClick={handleLogout} variant={"destructive"}> Logout</Button>
    </div>
   
    <div>
    </div>
    </>
  )
}

export default dashboard