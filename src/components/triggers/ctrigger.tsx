import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import { LoginFormDemo } from '../auth/login'
import { Button } from '../ui/button'
import { SignupFormDemo } from '@/components/auth/signup'

function ctrigger() {


    
  return (
    <>
        <Dialog>
             <DialogTrigger>Create Account</DialogTrigger>
               <DialogContent>
                        <SignupFormDemo />
               </DialogContent>

        </Dialog>
    
    </>
  )
}

export default ctrigger