import React from 'react'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'
import { LoginFormDemo } from '@/components/auth/login'

const logtrigger = () => {
  return (
    <Dialog>

        <DialogTrigger>Login</DialogTrigger>
    
        <DialogContent>
          <LoginFormDemo />
        </DialogContent>
    
  </Dialog>
  )
}

export default logtrigger