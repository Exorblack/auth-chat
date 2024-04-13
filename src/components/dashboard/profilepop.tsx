"use client"
import axios from 'axios';
import React, { Suspense, useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Label } from '../ui/label';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Dashboardlay from './handlelogout';
//import { Input } from '../ui/input';


export function Profilepop() {
  const [data, setData] = useState<string | null>(null);
  const [datafn, setDatafn] = useState<string | null>(null);
  const [dataln, setDataln] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsername = async () => {
        const res = await axios.get(`/api/user/username`);
        if (res.status ==  200) {
          setData(res.data.username);
        }
    };

    fetchUsername();
  }, []);

  useEffect(() => {
    const fetchfn = async () => {
        const res = await axios.get(`/api/user/fname`);
        if (res.status ==  200) {
          setDatafn(res.data.first_name);
        }
    };

    fetchfn();
  }, []);

  useEffect(() => {
    const fetchfn = async () => {
        const res = await axios.get(`/api/user/lname`);
        if (res.status ==  200) {
          setDataln(res.data.last_name);
        }
    };

    fetchfn();
  }, []);
  return (
    <>
 <Popover>
      <PopoverTrigger asChild className='text-xl'>
        <Button variant="link">{data ? data : ""}</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>EX</AvatarFallback>
            </Avatar>
            <h4 className="font-medium leading-none">Welcome {data}</h4>
            <p className="text-sm text-muted-foreground">
               Your Profile and ur Details.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4 text-center">
              <Label htmlFor="username">Username</Label>
              {data}
            </div>
            <div className="grid grid-cols-3 items-center gap-4 text-center">
              <Label htmlFor="fname">First Name</Label>
              {datafn}
            </div>
            <div className="grid grid-cols-3 items-center gap-4 text-center">
              <Label htmlFor="lname">Last Name</Label>
              {dataln}
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
            <Dashboardlay/>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>


    </>
  );
}