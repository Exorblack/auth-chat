// import { useRouter } from 'next/navigation';
// import { Button } from '@/components/ui/button';
// import React from 'react';

// const HandleLogout = () => {
//   const router = useRouter();

//   const handleLogout = async () => {
//     const res = await fetch("/api/user/logout");
//     if (res.ok) {
//       router.push('/');
//     } else {
//       console.error("Something went wrong while logging out");
//     }
//   };

//   return (
//     <div>
//       <Button onClick={handleLogout} variant={"destructive"}> Logout</Button>
//     </div>
//   );
// };

// export default HandleLogout;
