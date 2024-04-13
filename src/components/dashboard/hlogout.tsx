"use client"
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import React from 'react';


const hlogout = () => {
const router = useRouter()
    
    const HandleLogout  =  async () => {
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
    <Button onClick={HandleLogout} variant={"destructive"}> Logout</Button>
    </div>
    </>
  )
}

export default hlogout