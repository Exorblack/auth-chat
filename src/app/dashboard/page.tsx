"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const dashboard = () => {
    const router = useRouter()
    const handleLogout  =  async () => {
    const res = await fetch("/api/user/logout")
      if (res.ok){
        console.log("bye")
        router.push("/")
      }else{
        console.error("something wrong while login")
      }
    }
    const handleusername  =  async () => {
    const res = await fetch("/api/user/username")
      if (res.ok){
        console.log(res)
      }else{
        console.error("something wrong")
      }
    }



  return (
    <>
    <div className="">dashboard</div>
    <Button onClick={handleLogout} variant={"outline"}> logout</Button>
    <Button onClick={handleusername} variant={"outline"}> username</Button>
    </>
  )
}

export default dashboard