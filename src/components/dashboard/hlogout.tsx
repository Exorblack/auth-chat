// ./src/components/dashboard/HandleLogout.tsx
//import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import React from 'react';
import useLogout from '@/hooks/useLogout';

const HandleLogout = () => {
  // const router = useRouter();

  // const handleLogout = async () => {
  //   const res = await fetch("/api/user/logout");
  //   if (res.ok) {
  //     router.push('/');
  //   } else {
  //     console.error("Something went wrong while logging out");
  //   }
  // };

  const logout = useLogout();

  return (
    <div>
      <Button onClick={logout} variant={"destructive"}> Logout</Button>
    </div>
  );
};

export default HandleLogout;
