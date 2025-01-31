import { useCallback, useState } from "react";
import { User } from "../types";

export function useUsersIdApi() {
  const [user, setUser] = useState<User | null>(null)
  const fetchUser = useCallback(async (id: number) => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return {
    fetchUser,
    user,
  };
}
