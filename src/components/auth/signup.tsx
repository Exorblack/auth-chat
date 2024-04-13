"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils/cn";
import {
  IconBrandGithub,
  IconBrandGoogle,
} from "@tabler/icons-react";
import Link from "next/link";
import {z} from "zod";
import {SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


const formschema = z.object({
  firstname:z.string()
  .min(2,"first name must be at least 2 characters")
  .max(45,"more than 45 characters")
  .regex(new RegExp("^[a-zA-Z]+$"),"no special charac"),

  lastname:z.string()
  .min(2,"last name must be at least 2 characters")
  .max(45,"more than 45 characters")
  .regex(new RegExp("^[a-zA-Z]+$"),"no special charac"),

  username:z.string()
  .min(4,"last name must be at least 4 characters")
  .max(45,"more than 45 characters")
  .regex(new RegExp("^[a-zA-Z]+$"),"no special charac"),

  email:z.string().email("enter valid email"),
  password:z.string().min(8,"at least 8 ").max(45,"more than 45 char"),
  Confirmpassword:z.string().min(8,"at least 8 ").max(45,"more than 45 char"),
}).refine(data=>data.password==data.Confirmpassword ,{
  message:"password doesnt match!!!",
  path:["Confirmpassword"]
})



export function SignupFormDemo() {

  
  const router = useRouter()
  type InputType = z.infer<typeof formschema>
  const saveuser:SubmitHandler<InputType> = async(data)=>{
  
    
    const res = await fetch("/api/user/register",{
      method: "POST",
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        username:data.username,
        email:data.email,
        password:data.password,
        first_name:data.firstname,
        last_name:data.lastname
      })
    })
  
    if (res.ok){
      router.push('/auth/login')
      toast.success("Created Successfully! Now sign In with your account",{
        duration: 5000,
      })
    }else{
      
      toast.error("faild",{
        duration: 2000,
      })
    }
  }

  const {register,handleSubmit,reset,formState:{errors}} = useForm<InputType>({
    resolver: zodResolver(formschema),
  });


  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 pb-1">
        Sign Up
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300 pb-2">
        register to Our system for our Business 
      </p>
      <span className="text-neutral-600 text-xs max-w-sm mt-2 dark:text-neutral-300">
        Already have an Account?
      </span> <Link href={"/auth/login"}><span className="text-sky-600 hover:underline">Login</span></Link>
      <form className="my-8" onSubmit={handleSubmit(saveuser)}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          
              <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input 
              {...register("firstname")} 
              id="firstname" 
              placeholder="Mohamed"
              type="text"
              />
              {errors.firstname && (<span className="text-red-500 text-xs">{errors.firstname.message}</span>)}
              </LabelInputContainer>

                <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input {...register("lastname")} id="lastname" placeholder="Hassan" type="text" />
                {errors.lastname && (<span className="text-red-500 text-xs">{errors.lastname.message}</span>)}

              </LabelInputContainer>

        </div>
        <LabelInputContainer className="mb-4">
            <Label htmlFor="username">Username</Label>
            <Input {...register("username")} id="username" placeholder="username" type="text" />
            {errors.username && (<span className="text-red-500 text-xs">{errors.username.message}</span>)}

        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input {...register("email")} id="email" placeholder="example@gmail.com" type="email" />
          {errors.email && (<span className="text-red-500 text-xs">{errors.email.message}</span>)}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input {...register("password")} id="password" placeholder="••••••••" type="password" />
          {errors.password && (<span className="text-red-500 text-xs">{errors.password.message}</span>)}
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="Confirmpassword">Confirm password</Label>
          <Input
            {...register("Confirmpassword")}
            id="Confirmpassword"
            placeholder="••••••••"
            type="password"
          />
         {errors.Confirmpassword && (<span className="text-red-500 text-xs">{errors.Confirmpassword.message}</span>)}
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
            
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              GitHub
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Google
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
