// ./src/hooks/useLogout.tsx
import { useRouter } from 'next/router';
import { useCallback } from 'react';

const useLogout = () => {
  const router = useRouter();

  const logout = useCallback(async () => {
    try {
      const res = await fetch("/api/user/logout");
      if (res.ok) {
        router.push('/');
      } else {
        throw new Error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  }, [router]);

  return logout;
};

export default useLogout;
